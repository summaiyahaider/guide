import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>Guide Consultancy</h1>
            <p>"Education is the passport to the future, for tomorrow belongs to those who prepare for it today." — Malcolm X</p>

            
          </div>
          <div className='box last'>
            <h3>Have a Questions? Contact Us</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Shakuntala Tower, Nehru Place, New Delhi
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                9289344486
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@guideconsultancy.in
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 | All rights reserved by Guide Consultancy
        </p>
      </div>
    </>
  )
}

export default Footer
