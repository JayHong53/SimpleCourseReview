import { useState } from "react";

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

  export default ReviewForm;