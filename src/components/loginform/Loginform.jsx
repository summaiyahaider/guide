import React, { useState, useEffect } from 'react';
import './Loginform.css';

const LoginForm = () => {
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    course: '',
    degree: 'Undergraduate Degree',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (!formData.name || !formData.mobile || !formData.email || !formData.course || !formData.degree) {
        setShowForm(true);
      }
    }, 30000); // Show form every 30 seconds if not filled

    return () => clearInterval(interval);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Form submitted successfully');
        setShowForm(false);
      } else {
        alert('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (!showForm) return null;

  return (
    <div className="login-form-popup">
      <button className="close-btn" onClick={() => setShowForm(false)}>×</button>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Mobile Number:
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email ID:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Looking for:
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Degree:
          <select
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            required
          >
            <option value="Undergraduate Degree">Undergraduate Degree</option>
            <option value="Postgraduate Degree">Postgraduate Degree</option>
            <option value="Doctorate">Doctorate</option>
            <option value="Certifications">Certifications</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
