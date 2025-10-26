import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setShowError(true);
      setSubmittedData(null);
    } else {
      setShowError(false);
      setSubmittedData({ username, password });
      console.log('Username:', username);
      console.log('Password:', password);
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '30px', fontSize: '2.1em', fontWeight: 'bold' }}>Login</h2>
      <form
        style={{
          border: '1px solid #ddd',
          borderRadius: '12px',
          padding: '32px',
          width: '370px',
          margin: '20px auto',
          boxSizing: 'border-box',
          background: '#fff'
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          style={{ width: '100%', margin: '8px 0', padding: '10px' }}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          style={{ width: '100%', margin: '8px 0', padding: '10px' }}
          onChange={(e) => setPassword(e.target.value)}
        />
        {showError && (
          <div style={{ color: 'red', margin: '12px 0', textAlign: 'center' }}>
            Please enter both username and password.
          </div>
        )}
        <button
          type="submit"
          style={{
            width: '100%',
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '8px',
            marginTop: '12px',
            fontSize: '1em',
          }}
        >
          Login
        </button>
      </form>
      {submittedData && (
        <div style={{
          margin: '20px auto',
          width: '370px',
          background: 'black',
          color: 'white',
          padding: '16px',
          fontFamily: 'monospace',
          borderRadius: '8px',
          boxSizing: 'border-box',
        }}>
          <span>Username: <span style={{ color: '#e9b35d' }}>{submittedData.username}</span></span>
          <br />
          <span>Password: <span style={{ color: '#e9b35d' }}>{submittedData.password}</span></span>
        </div>
      )}
    </div>
  );
}

export default App;
