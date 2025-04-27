import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    rating: '',
    comments: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  

  return (
    <form>
      <h2>Feedback Form</h2>
      <label>Rating (1-5):</label>
      <input type="number" name="rating" required />

      <label>Comments:</label>
      <textarea name="comments" required />

      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
