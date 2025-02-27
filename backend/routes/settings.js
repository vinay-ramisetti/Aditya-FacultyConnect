const express = require("express");
const router = express.Router();
const GlobalSettings = require("../models/GlobalSettings");

// Get the current state of the button
router.get("/get-button-state", async (req, res) => {
  try {
    let settings = await GlobalSettings.findOne();
    if (!settings) {
      settings = await GlobalSettings.create({ updateButtonDisabled: false });
    }
    res.json({ updateButtonDisabled: settings.updateButtonDisabled });
  } catch (error) {
    console.error("Error fetching button state:", error);
    res.status(500).json({ error: "Failed to retrieve button state" });
  }
});

// Update the button state
router.post("/set-button-state", async (req, res) => {
  try {
    const { updateButtonDisabled } = req.body;

    // Validate request body
    if (typeof updateButtonDisabled !== "boolean") {
      return res.status(400).json({ error: "Invalid data type. Expected boolean." });
    }

    const settings = await GlobalSettings.findOneAndUpdate(
      {},
      { updateButtonDisabled },
      { new: true, upsert: true } // Create if not exists
    );

    res.json({ message: "Button state updated", updateButtonDisabled: settings.updateButtonDisabled });
  } catch (error) {
    console.error("Error updating button state:", error);
    res.status(500).json({ error: "Failed to update button state" });
  }
});

module.exports = router;
