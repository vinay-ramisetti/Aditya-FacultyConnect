import React from 'react';
import Signin from './Signin';
import Signup from './Signup';

const Login = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '120px', 
        padding: '20px',
      }}
    >
      <div
        style={{
          
          borderRadius: '5px',
          padding: '20px',
          width: '300px',
          
        }}
      >
        <Signup />
      </div>
      <div
        style={{
          
          borderRadius: '5px',
          padding: '20px',
          width: '300px',
          
        }}
      >
        <Signin />
      </div>
    </div>
  );
};

export default Login;

