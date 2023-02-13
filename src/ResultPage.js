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

export default ResultPage;