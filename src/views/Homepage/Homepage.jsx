import React from 'react';
import './Homepage.scss';
import satisfiedImage from '../../assets/images/satisfied.png';
import cashImage from '../../assets/images/cash.png';
import loginImage from '../../assets/images/login.png';
import ladyImage from '../../assets/images/lady.jpg';
import QuickEstimate from './QuickEstimate.jsx';

const Homepage = () => (
    <>
      <section id="hero">
        <div className="container">
          <h2>Need a Loan?</h2>
          <h2>You are not Alone.</h2>
          <p>Smarter, Simple loans right when you need it.</p>
          <p className="hero-btn">
            <a className="btn btn-green" href="./html/login.html">GET STARTED</a>
          </p>
        </div>
      </section>

      <section id="how-it-works">
        <div className="container">
          <p className="how-it-works__title"><span className="bold">How does</span> it Work</p>
          <div className="box-display">
            <div className="box">
              <div className="img-wrap">
                <img src={loginImage} alt="form" />
              </div>
              <div className="box-content">
                <p className="box-content__title">Apply for a Loan</p>
              <p>All it takes is a few minutes.
                  Just fill out an easy form and you are good to go.</p>
              </div>
            </div>
            <div className="box">
              <div className="img-wrap">
                <img src={satisfiedImage} alt="form"/>
              </div>
              <div className="box-content">
                <p className="box-content__title">Get an Instant Decision</p>
                <p>We will go through your application to ensure you meet the requirements</p>
              </div>
            </div>
            <div className="box">
              <div className="img-wrap">
                <img src={cashImage} alt="form"/>
              </div>
              <div className="box-content">
                <p className="box-content__title">Get Funding Fast</p>
                <p>After approval your loan amount is sent to your account</p>
              </div>
            </div>
          </div>
        </div>
    </section>

      <section id="right-for-you">
        <div className="rfy-display">
          <div className="rfy-img">
            <img src={ladyImage} alt="lady" />
          </div>
          <div className="rfy-content">
              <p className="rfy__title">Is a <span className="bold">Quick Credit</span> Loan right for you?</p>
            <p>We offer Personal loans to fill your short-term funding gaps.
                Our loans are for short term use only and our repayment plan
                covers a period of 1 to 12 monthly installments.</p>
              <p><span className="tick">&#10003;</span> You must be 18 years of old</p>
              <p><span className="tick">&#10003;</span> You must legally live and work in Nigeria</p>
              <p><span className="tick">&#10003;</span> You must be employed with the same employer for a minimum of 90 days</p>
              <p><span className="tick">&#10003;</span> You must have a bank account that is not currently overdrawn</p>
              <p><span className="tick">&#10003;</span> You must have a valid email address and working telephone number</p>
          </div>
        </div>
      </section>

      <QuickEstimate />
    </>
);

export default Homepage;
