import React, { useState } from 'react';
import Alert from './Alert';


const EventForm = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    eventType: '',
    description: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Show the alert
    setShowAlert(true);
    // Optionally, you can reset the form after submission
    setFormData({
      eventName: '',
      eventDate: '',
      eventType: '',
      description: ''
    });
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      {showAlert && <Alert message="Form submitted successfully!" onClose={handleCloseAlert} />}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="eventName">Event Name:</label>
          <input
            type="text"
            className="form-control"
            id="eventName"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventDate">Event Date:</label>
          <input
            type="date"
            className="form-control"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventType">Event Type:</label>
          <select
            className="form-control"
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
          >
            <option value="">Select Type</option>
            <option value="Technical">Technical</option>
            <option value="Non-Technical">Non-Technical</option>
            <option value="Advitya">Advitya</option>
            {/* <option value="">Webinar</option> */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default EventForm;
