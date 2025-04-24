import React from 'react';
import Login from './LoginForm/login';
import Register from './LoginForm/Register';

function App() {
  const [showRegister] = React.useState(false);

  return (
    <div className="container">
      <div className="button-group">
      </div>

      {!showRegister && <Login/>}
      {showRegister && <Register/>}
    </div>
  );
}

export default App;
