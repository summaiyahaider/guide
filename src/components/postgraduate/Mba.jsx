import React from 'react';
import './Postgraduate.css';

const Mba = () => {
  const courses = [
    { id: 1, title: 'Master of Business Administration', country: 'Canada', duration: '2 Years', university: 'University Canada West' },
    { id: 2, title: 'Master of Business Administration (60 ECTS)', country: 'UAE', duration: '12 months', university: 'University of Europe for Applied Sciences-Dubai' },
    { id: 3, title: 'MBA with Specialization', country: 'France', duration: '2 Years', university: 'The American Business School' },
    { id: 4, title: 'MBA General Management', country: 'Germany', duration: '2 Years', university: 'International School of Management' },
    { id: 5, title: 'MBA in Strategic Data Driven Management', country: 'Hungary', duration: '2 Years', university: 'IBS-International Business School' },
    { id: 6, title: 'Master of Business Administration', country: 'USA', duration: '2 Years', university: 'Touro University' },
    { id: 7, title: 'Master of Business Administration', country: 'USA', duration: '2 Years', university: 'Clarkson University' },
    { id: 8, title: 'Master of Business Administration', country: 'USA', duration: '2 Years', university: 'Golden Gate University' },
    { id: 9, title: 'Master of Business Administration', country: 'USA', duration: '2 Years', university: 'Utica University' },
];

  const handleCardClick = () => {
    window.location.href = "https://www.upgradabroad.com/franchise/delhi-south";
  };

  return (
    <div className="undergraduate-page">
      <h1>MBA Courses</h1>
      <p>Are you looking to advance your career with an MBA degree from a top international university? Admissions for MBA programs abroad offer a unique opportunity to gain a global business perspective, develop strategic leadership skills, and expand your professional network. Studying for an MBA abroad provides access to world-renowned faculty, cutting-edge business practices, and diverse cultural experiences. With options for specializations, international internships, and exposure to global markets, an MBA abroad prepares you for leadership roles in a competitive global economy. Don't miss out on the chance to elevate your career and achieve your professional goals. Apply now for MBA admissions abroad and transform your future.</p>
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

export default Mba;
