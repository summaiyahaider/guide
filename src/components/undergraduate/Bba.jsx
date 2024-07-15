import React from 'react';
import './Undergraduate.css';

const Bba = () => {
  const courses = [
    { id: 1, title: 'Bachelor of Business Administration', country: 'Canada', duration: '4 Years', university: 'Algoma University' },
    { id: 2, title: 'BS Business', country: 'USA', duration: '4 Years', university: 'Colorado State University' },
    { id: 3, title: 'BS Business', country: 'USA', duration: '4 Years', university: 'Golden Gate University' },
    { id: 4, title: 'Bachelor of Business Administration', country: 'France', duration: '4 Years', university: 'The American Business School' },
    { id: 5, title: 'BS Management', country: 'USA', duration: '4 Years', university: 'NorthEastern University' },
    { id: 6, title: 'BS Digital Communication and Media', country: 'USA', duration: '4 Years', university: 'NorthEastern University' },
  ];

  const handleCardClick = () => {
    window.location.href = "https://www.upgradabroad.com/franchise/delhi-south";
  };

  return (
    <div className="undergraduate-page">
      <h1>BBA Undergraduate Course</h1>
      <p>Are you aiming to pursue a BBA degree abroad? Elevate your business acumen and global perspective by enrolling in BBA programs at some of the world's leading universities. Admissions for BBA programs abroad provide an exceptional platform to learn from esteemed faculty, engage in international business practices, and develop critical leadership skills. With access to diverse cultures, global internships, and cutting-edge business strategies, a BBA abroad prepares you for a dynamic and successful career in the global market. Seize this opportunity to broaden your horizons and pave the way for a thriving future in business. Apply now for BBA admissions abroad and embark on your journey to success.</p>
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

export default Bba;
