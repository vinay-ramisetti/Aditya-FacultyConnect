const express = require('express');
const router = express.Router();
const User = require('../models/user-model');
const ResearchData = require('../models/research');
const isloggedin = require('../middlewares/isloggedin');
const mongoose = require('mongoose');

router.post("/add", isloggedin, async (req, res) => {
  try {
    const email = req.user.email;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const newResearch = new ResearchData({
      title: req.body.title,
      description: req.body.description,
      publishedDate: req.body.date,
      userId: user._id,
    });

    await newResearch.save();
    res.status(201).json({ message: "Research added successfully" });
  } catch (error) {
    console.error("Error adding research:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/data", isloggedin, async (req, res) => {
  try {
    const userId = req.user._id;
    // console.log("LecturereId at backend1", userId);
    const researchData = await ResearchData.find({ userId: userId });
    // console.log("LecturereId at backend2", userId);
    // console.log(researchData);
    res.status(200).json(researchData);
  }
  catch (error) {
    console.log("Unable to fetch the data:", error);
    res.status(500).json({ message: "Unable to fetch the data" });
  }
})

router.get("/otherResearch/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const researches = await ResearchData.find({ userId: id });
    if (researches.length === 0) {
      return res.status(404).json({ message: "No researches found for this user" });
    }
    res.status(200).json(researches);
  } catch (error) {
    console.log("Failed to fetch the resources!!", error);
    res.status(500).json({ message: "Unable to fetch the data" });
  }
})

router.delete("/delete/:id", isloggedin, async (req, res) => {
  try {
    const { id } = req.params;
    await ResearchData.findByIdAndDelete(id);
    res.status(200).json({ message: "Research Deleted" });
  } catch (error) {
    console.log("Error occurred while deleting:", error);
    res.status(500).json({ message: 'Failed to delete research.' });
  }
});

router.put("/update/:id", isloggedin, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedResearch = await ResearchData.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    res.status(200).json(updatedResearch);
  } catch (error) {
    console.error('Error occurred while updating research:', error);
    res.status(500).json({ message: 'Failed to update research.' });
  }
});

router.get("/process", isloggedin, async (req, res) => {
  try {
    const userbranch = req.user.department;

    const unapprovedResearches = await ResearchData.aggregate([
        { 
            $match: { 
                status: false, 
                rejected: false 
            } 
        },
        {
            $lookup: {
                from: 'users', // Replace 'users' with your actual user collection name
                localField: 'userId',
                foreignField: '_id',
                as: 'userDetails'
            }
        },
        { 
            $unwind: '$userDetails' 
        },
        {
            $match: {
                'userDetails.department': userbranch
            }
        }
    ]);

    res.status(200).json(unapprovedResearches);

} catch (error) {
    console.log("Error occured while getting data in HOD", error);
    res.status(500).json({ message: 'Failed to get research.' });
  }
})

router.put('/approve/:id', async (req, res) => {
  try {
    const research = await ResearchData.findByIdAndUpdate(
      req.params.id,
      { status: true },
      { new: true }
    );
    if (!research) {
      return res.status(404).send('Research not found');
    }
    res.send(research);
  } catch (error) {
    res.status(500).send('Server error');
  }
});
router.put('/reject/:id', async (req, res) => {
  try {
    const research = await ResearchData.findByIdAndUpdate(
      req.params.id,
      { rejected: true },
      { new: true }
    );
    if (!research) {
      return res.status(404).send('Research not found');
    }
    res.send(research);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

router.get('/researchtext/:id', isloggedin,async (req, res) => {
  try {
    console.log('Endpoint hit!');
    const Id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(Id)) {
      console.error('Invalid ObjectId:', Id);
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    console.log('Valid ObjectId:', Id);

    const objectId = new mongoose.Types.ObjectId(Id);

    const researchText = await ResearchData.aggregate([
      {
        $match: { _id: objectId },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'userId',
          foreignField: '_id',
          as: 'userDetails',
        },
      },
      {
        $unwind: '$userDetails',
      },
    ]);

    if (researchText.length === 0) {
      console.error('No research found for ID:', Id);
      return res.status(404).json({ message: 'Research not found' });
    }

    res.status(200).json(researchText[0]);
  } catch (error) {
    console.error('Error fetching research text:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;