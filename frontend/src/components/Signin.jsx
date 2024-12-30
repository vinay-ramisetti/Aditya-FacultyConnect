import React from 'react';

const Signin = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        width: '300px',
        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#fff',
        transition: 'transform 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.2)';
      }}
    >
      <h2
        style={{
          marginBottom: '20px',
          fontFamily: 'Arial, sans-serif',
          fontWeight: '600',
          color: '#333',
        }}
      >
        Sign In
      </h2>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          width: '100%',
        }}
      >
        <label
          style={{
            fontWeight: 'bold',
            color: '#555',
          }}
        >
          Email:
        </label>
        <input
          type="email"
          placeholder="Email"
          style={{
            padding: '12px',
            fontSize: '14px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            width: '100%',
            outline: 'none',
            transition: 'border-color 0.3s',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#007BFF')}
          onBlur={(e) => (e.target.style.borderColor = '#ccc')}
        />
        <label
          style={{
            fontWeight: 'bold',
            color: '#555',
          }}
        >
          Password:
        </label>
        <input
          type="password"
          placeholder="Password"
          style={{
            padding: '12px',
            fontSize: '14px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            width: '100%',
            outline: 'none',
            transition: 'border-color 0.3s',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#007BFF')}
          onBlur={(e) => (e.target.style.borderColor = '#ccc')}
        />
        <button
          type="submit"
          style={{
            padding: '12px',
            fontSize: '16px',
            fontWeight: 'bold',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background-color 0.3s, transform 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#0056b3';
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#007BFF';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;
