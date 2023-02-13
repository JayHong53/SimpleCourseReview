import { useState } from "react";

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleSubmit = event => {
      event.preventDefault();
  
      if (email === '' || password === '') {
        setErrorMessage('Please provide user email and password');
      }
      else {
        setErrorMessage('');
        onLogin(email);
      }
    };
  
    return (
      <div className='form-container'>
        <div className='form-box-login'>
          <div className='form-title'>Log In</div>
          <form className='login-form' onSubmit={handleSubmit}>
            <input type='email'
              placeholder='email'
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <input
              type="password"
              placeholder='password'
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
          <div className='errorMessage'>{errorMessage}</div>
        </div>
      </div>
    );
  }

  export default LoginForm;