import React from 'react';
import './Undergraduate.css';

const Nursing = () => {
  const courses = [
    { id: 1, title: 'BS Nursing', country: 'USA', duration: '4 Years', university: 'Washington State University' },
    { id: 2, title: 'BS Neuroscience', country: 'USA', duration: '4 Years', university: 'Washington State University' },
    { id: 3, title: 'Doctor of Pharmacy', country: 'USA', duration: '4 Years', university: 'Washington State University' },
    { id: 4, title: 'BS Pharmaceutical and Medical Sciences', country: 'USA', duration: '4 Years', university: 'Washington State University' },
    { id: 5, title: 'BS Food Science', country: 'USA', duration: '4 Years', university: 'Colorado State University' },
    { id: 6, title: 'BS Biotechnology', country: 'USA', duration: '4 Years', university: 'Clark University' },
  ];

  const handleCardClick = () => {
    window.location.href = "https://www.upgradabroad.com/franchise/delhi-south";
  };

  return (
    <div className="undergraduate-page">
      <h1>Medical Undergraduate Course</h1>
      <p>Are you considering a career in Nursing, Pharmacy, or Neuroscience? Pursuing your degree abroad can provide you with unparalleled educational experiences and career opportunities. Admissions for Nursing, Pharmacy, and Neuroscience programs at top international universities offer access to advanced research facilities, diverse patient care settings, and innovative teaching methods. Studying abroad in these fields allows you to gain a global perspective, engage in groundbreaking research, and connect with leading professionals. Whether you aspire to be a compassionate nurse, a skilled pharmacist, or a pioneering neuroscientist, earning your degree abroad will equip you with the knowledge and skills to excel. Apply now for Nursing, Pharmacy, or Neuroscience admissions abroad and take the first step towards a rewarding and impactful career.</p>
      <div className="course-cards">
        {courses.map(course => (
          <div key={course.id} className="course-card" onClick={handleCardClick}>
            <h3>{course.university}</h3>
            <h4>{course.title}</h4>
            <div className="course-details">
              <p><strong>Country:</strong> {course.country}</p>
              <p><strong>Duration:</strong> {course.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nursing;
