import React from 'react';
import './Undergraduate.css';

const Btech = () => {
  const courses = [
    { id: 1, title: 'Bachelors of Science Computer Science (180 ECTS)', country: 'Germany', duration: '3 Years', university: 'IU Germany' },
    { id: 2, title: 'BS Computer Science', country: 'USA', duration: '4 Years', university: 'Colorado State University' },
    { id: 3, title: 'BS Software Engineering', country: 'USA', duration: '4 Years', university: 'Northern Arizona University' },
    { id: 4, title: 'BS Aerospace Engineering', country: 'USA', duration: '4 Years', university: 'Illinois Institute of Technology' },
    { id: 5, title: 'Bachelor of Computer Science', country: 'Canada', duration: '4 Years', university: 'Algoma University' },
    { id: 6, title: 'BS Cybersecurity', country: 'USA', duration: '4 Years', university: 'Clark University' },
  ];

  const handleCardClick = () => {
    window.location.href = "https://www.upgradabroad.com/franchise/delhi-south";
  };

  return (
    <div className="undergraduate-page">
      <h1>B.Tech Undergraduate Course</h1>
      <p>Are you looking to pursue a B.Tech degree abroad? Unlock your potential and expand your horizons by studying at some of the world's top universities. Admissions for B.Tech programs abroad offer unparalleled opportunities to gain cutting-edge knowledge, hands-on experience, and a global perspective. From state-of-the-art facilities and innovative curriculum to international internships and research projects, a B.Tech abroad equips you with the skills and networks necessary for a successful engineering career. Don't miss out on the chance to enhance your education and open doors to endless career possibilities. Apply now for B.Tech admissions abroad and take the first step towards a bright future.</p>
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

export default Btech;
