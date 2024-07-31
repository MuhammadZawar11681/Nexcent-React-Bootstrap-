import React, { useEffect, useRef } from "react";
import member from "../../assets/member.png";
import club from "../../assets/groups.svg";
import event_booking from "../../assets/event-booking.svg";
import payments from "../../assets/payments.svg";
//import './Achievements.css'; // Import custom CSS

const Achievements = () => {
  const memberRef = useRef(null);
  const clubRef = useRef(null);
  const bookingRef = useRef(null);
  const paymentRef = useRef(null);

  useEffect(() => {
    const animateNumbers = (element, target) => {
      let start = 0;
      const duration = 5000;
      const stepTime = Math.abs(Math.floor(duration / target));
      const increment = target > 0 ? 1 : -1;
      const timer = setInterval(() => {
        start += increment;
        element.innerHTML = start;
        if (start === target) clearInterval(timer);
      }, stepTime);
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === memberRef.current)
            animateNumbers(entry.target, 1034);
          if (entry.target === clubRef.current)
            animateNumbers(entry.target, 961);
          if (entry.target === bookingRef.current)
            animateNumbers(entry.target, 2178);
          if (entry.target === paymentRef.current)
            animateNumbers(entry.target, 2813);
        }
      });
    };

    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (memberRef.current) observer.observe(memberRef.current);
    if (clubRef.current) observer.observe(clubRef.current);
    if (bookingRef.current) observer.observe(bookingRef.current);
    if (paymentRef.current) observer.observe(paymentRef.current);

    return () => {
      if (memberRef.current) observer.unobserve(memberRef.current);
      if (clubRef.current) observer.unobserve(clubRef.current);
      if (bookingRef.current) observer.unobserve(bookingRef.current);
      if (paymentRef.current) observer.unobserve(paymentRef.current);
    };
  }, []);

  return (
    <div id="features" className="background-light achievements-section">
      <div className="d-flex flex-column flex-md-row container py-5 ">
        <div className="flex-grow-1 flex-shrink-0 w-full gap-3 d-flex flex-column justify-content-center ">
          <h1 className="text-dark-grey text-center text-md-start">
            Helping a local
            <br />
            <span className="text-green">business reinvent itself</span>
          </h1>
          <p
            className="fw-semibold text-grey text-center text-md-start"
            style={{ fontSize: "16px" }}
          >
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="flex-grow-1 flex-shrink-0 my-3 ">
          <div className="d-flex flex-wrap gap-2 align-items-center align-items-md-start justify-content-around ">
            <div className="d-flex align-items-center h-fit gap-2 my-2 achievement-item">
              <img
                className="achievement-icon"
                src={member}
                alt="member icon"
              />
              <div>
                <h2 ref={memberRef} className="fw-semibold text-dark-grey m-0">
                  0
                </h2>
                <p className="text-grey">members</p>
              </div>
            </div>
            <div className="d-flex align-items-center h-fit gap-2 my-2 achievement-item">
              <img className="achievement-icon" src={club} alt="club icon" />
              <div>
                <h2 ref={clubRef} className="fw-semibold text-dark-grey m-0">
                  0
                </h2>
                <p className="text-grey">clubs</p>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center flex-wrap gap-2 justify-content-around ">
            <div className="d-flex align-items-center h-fit gap-2 my-2 achievement-item">
              <img
                className="achievement-icon"
                src={event_booking}
                alt="booking icon"
              />
              <div>
                <h2 ref={bookingRef} className="fw-semibold text-dark-grey m-0">
                  0
                </h2>
                <p className="text-grey">event bookings</p>
              </div>
            </div>
            <div className="d-flex align-items-center h-fit gap-2 my-2 achievement-item">
              <img
                className="achievement-icon"
                src={payments}
                alt="payment icon"
              />
              <div>
                <h2 ref={paymentRef} className="fw-semibold text-dark-grey m-0">
                  0
                </h2>
                <p className="text-grey">payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
