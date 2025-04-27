import React from 'react';

const FeedbackForm = () => {
  return (
    <form>
      <h2>Feedback Form</h2>
      <label>Rating (1-5):</label>
      <input type="number" name="rating" min="1" max="5" required />
      
      <label>Comments:</label>
      <textarea name="comments" required />

      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
