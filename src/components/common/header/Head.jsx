import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
        <div className="logo">
        <a href="/">
              <img src="/logo.png" alt="Company Logo" className="logo" />
            </a>
            <h1>Guide Consultancy</h1>
          </div>

          <div className="social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f icon"></i>
            </a>
            <a href="https://www.instagram.com/guideconsultancy.in?igsh=d3p0YnFqbWtrZWZp" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram icon"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin icon"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
