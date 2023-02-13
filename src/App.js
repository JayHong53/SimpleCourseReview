import React, { useState } from 'react';
import LoginForm from './LoginForm';
import ReviewForm from './ReviewForm';
import ResultPage from './ResultPage';
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

  // Thank You Page
  // LoggedIn = o  Review = d 
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

  // Login Page 
  // LoggedIn = x  Review = x 
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

  // Review Page 
  // LoggedIn = o  Review = x 
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