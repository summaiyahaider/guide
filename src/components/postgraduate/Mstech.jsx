import React from 'react';
import './Postgraduate.css';

const Mstech = () => {
  const courses = [
    { id: 1, title: 'MS in Artificial Intelligence', country: 'USA', duration: '18 Months', university: 'Yeshiva University' },
    { id: 2, title: 'MS in Machine Learning Engineering', country: 'USA', duration: '18 months', university: 'Drexel University' },
    { id: 3, title: 'MSc Artificial Intelligence Engineering', country: 'France', duration: '2 Years', university: 'Aivancity School for Technology' },
    { id: 4, title: 'MPS in Informatics', country: 'Canada', duration: '2 Years', university: 'Northeastern University, Canada' },
    { id: 5, title: 'MS in Information Technology', country: 'USA', duration: '2 Years', university: 'Clark University' },
    { id: 6, title: 'MS in Robotics and Autonomous Systems', country: 'USA', duration: '2 Years', university: 'Drexel University' },
];

  const handleCardClick = () => {
    window.location.href = "https://www.upgradabroad.com/franchise/delhi-south";
  };

  return (
    <div className="undergraduate-page">
      <h1>Masters in Technology Courses</h1>
      <p>Are you aspiring to advance your career with an MS in Technology from a prestigious international university? Admissions for MS-Technology programs abroad provide an exceptional platform to deepen your technical expertise, engage in innovative research, and collaborate with global leaders in technology. Studying for an MS in Technology abroad offers access to cutting-edge laboratories, state-of-the-art resources, and a curriculum designed to meet the demands of the rapidly evolving tech industry. Enhance your skills, gain a global perspective, and prepare for leadership roles in technology. Apply now for MS-Technology admissions abroad and take the next step towards a successful and impactful career.</p>
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

export default Mstech;
