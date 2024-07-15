import React from 'react';
import './Postgraduate.css';

const Msmanagement = () => {
  const courses = [
    { id: 1, title: 'MSc in International Corporate Finance', country: 'France', duration: '2 Years', university: 'Excelia Business School' },
    { id: 2, title: 'MS in Project Management', country: 'USA', duration: '18 months', university: 'Clark University' },
    { id: 3, title: 'MS in Project Management', country: 'USA', duration: '2 Years', university: 'Golden Gate University' },
    { id: 4, title: 'MSc International Business Management', country: 'Germany', duration: '2 Years', university: 'Gisma University of Applied Sciences' },
    { id: 5, title: 'MSc International Management', country: 'Germany', duration: '2 Years', university: 'International School of Management' },
    { id: 6, title: 'MSc International Business Management and Management', country: 'UK', duration: '2 Years', university: 'University of Suffolk' },
];

  const handleCardClick = () => {
    window.location.href = "https://www.upgradabroad.com/franchise/delhi-south";
  };

  return (
    <div className="undergraduate-page">
      <h1>MS in Management Courses</h1>
      <p>Are you aiming to propel your career with an MS in Management from a top-tier international university? Admissions for MS in Management programs abroad offer a unique opportunity to hone your leadership skills, gain advanced business knowledge, and experience a diverse cultural environment. Studying for an MS in Management abroad provides access to world-class faculty, innovative management practices, and a global network of professionals. With specialized courses, international internships, and exposure to global business challenges, an MS in Management abroad prepares you for dynamic leadership roles in today's competitive market. Don’t miss the chance to elevate your career and achieve your professional aspirations. Apply now for MS in Management admissions abroad and embark on a journey to success.</p>
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

export default Msmanagement;
