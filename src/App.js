import React, { useState } from 'react';
import './App.css';

// **************************************************************
// Header 
// **************************************************************
const Header = () => {
  return (
    <>
      <div className='header'>COMP308 Lab1 - Jiwoong Hong (301153138)</div>
    </>
  )
}

// **************************************************************
// LoginForm
// **************************************************************
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

// **************************************************************
// Review Form 
// **************************************************************
const ReviewForm = ({ userEmail, onSubmit }) => {
  const [courseCode, setCourseCode] = useState('');
  const [courseName, setCourseName] = useState('');
  const [starRating, setStarRating] = useState('');
  const [review, setReviewContent] = useState('');
  const [recommend, setRecommend] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (review === '' || courseCode === '' || courseName === '' ||
      starRating === '' || recommend === '') {
      setErrorMessage('Please fill out the form');
    }
    else {
      setErrorMessage('');
      onSubmit(courseName, courseCode, starRating, review, recommend);
    }
  };

  return (
    <div className='form-container'>
      <div className='form-box-review'>
        <div className='form-title'>Review Course</div>
        <form onSubmit={handleSubmit} noValidate>
          <input type='text' value={'Email: ' + userEmail} ></input>
          <input
            placeholder='Course Code - ex) COMP308'
            type='text'
            value={courseCode}
            onChange={event => setCourseCode(event.target.value)}
            required></input>
          <input
            placeholder='Course Name - ex) Emerging Technologies'
            type='text'
            value={courseName}
            onChange={event => setCourseName(event.target.value)}
            required></input>
          <select
            value={starRating}
            onChange={event => setStarRating(event.target.value)}
          >
            <option value=''>How would you rate this course?</option>
            <option>★★★★★</option>
            <option>★★★★</option>
            <option>★★★</option>
            <option>★★</option>
            <option>★</option>
          </select>
          <textarea
            id='review-textarea'
            placeholder='Please leave a review of the course'
            value={review}
            onChange={event => setReviewContent(event.target.value)}
            required></textarea>
          <select
            value={recommend}
            onChange={event => setRecommend(event.target.value)}
          >
            <option value=''>Would you recommend this course to others?</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <button type="submit" value="Submit" >Submit Review</button>
          <div className='errorMessage'>{errorMessage}</div>
        </form>
      </div>
    </div>
  );
}

// **************************************************************
// Result Page (Thank you Page)
// **************************************************************
const ResultPage = ({ resetStatus, courseName, courseCode, starRating, review, email, isRecommended }) => {
  return (
    <div className='form-container'>
      <div className='form-box-result'>
        <div className='result-message'>Thank you for your review!</div>
        <div className='result-course'>{courseName.trim() + ' (' + courseCode.trim() + ')'}</div>
        <div className='result-review-card'>
          {/* Review Card Part */}
          <div className='result-rating'>{'" ' + starRating + ' "'}</div>
          <div className='result-review'>{review.trim()}</div>
          <div className='result-user'>{email}<br></br>{isRecommended ? 'recommended this course' : 'not recommended this course'}</div>
        </div>
        <button onClick={resetStatus}>Back to main</button>
      </div>
    </div>
  )
}

// **************************************************************
// Main App 
// **************************************************************
const App = () => {
  const [userId, setUserId] = useState('');
  const [review, setReview] = useState('');
  const [starRating, setStarRating] = useState('');
  const [courseName, setCourseName] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [isRecommended, setIsRecommended] = useState();

  const handleLogin = (userId) => {
    setUserId(userId);
  };

  const handleReview = (courseName, courseCode, starRating, review, isRecommended) => {
    setCourseName(courseName);
    setCourseCode(courseCode);
    setStarRating(starRating);
    setReview(review);
    isRecommended === 'Yes' ? setIsRecommended(true) : setIsRecommended(false);
  };

  const resetStatus = () => {
    setUserId('');
    setReview('');
  };

  // Review Submitted => Display Thank you Page 
  if (userId !== '' && review !== '') {
    return (
      <>
        <Header />
        <div>
          <h6 className="tempStatus">{userId ? "Logged in as: " + userId : "You're not logged In"}</h6>
          <ResultPage
            resetStatus={resetStatus}
            courseName={courseName}
            courseCode={courseCode}
            starRating={starRating}
            review={review}
            email={userId}
            isRecommended={isRecommended}
          />
        </div>
      </>
    );
  }

  // Not Logged-in => Display Login Page
  else if (userId === '') {
    return (
      <>
        <Header />
        <div>
          <h6 className="tempStatus">{userId ? "Logged in as: " + userId : "You're not logged In"}</h6>
          <LoginForm onLogin={handleLogin} />
        </div>
      </>
    )
  }

  // Logged-in => Display Review Page
  else {
    return (
      <>
        <Header />
        <div>
          <h6 className="tempStatus">{userId ? "Logged in as: " + userId : "You're not logged In"}</h6>
          <ReviewForm userEmail={userId} onSubmit={handleReview} />
        </div>
      </>
    )
  }
}

export default App;
