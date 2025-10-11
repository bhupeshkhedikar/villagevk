import React from "react";
import "./WelcomeSection.css";
import { FaUsers, FaTint, FaVenusMars } from "react-icons/fa";

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <h2 className="welcome-title">
        ग्रामपंचायत वाकल आपले सहर्ष स्वागत करीत आहे.
      </h2>
      <div className="welcome-container">
        <div className="welcome-left">
          <img
            src="https://gpgosebujruk.in/public/uploads/why-choose-main-photo.jpg" // 🔁 replace with your actual image path
            alt="ग्रामपंचायत वाकल"
            className="welcome-image"
          />
        </div>

        <div className="welcome-right">
          <div className="overlay">
            <div className="info-card">
              <FaUsers className="info-icon" />
              <div>
                <h3>एकूण लोकसंख्या</h3>
                <p>
                  आपल्या गावाची/शहराची एकूण लोकसंख्या १९५६ आहे. ही लोकसंख्या
                  विविध वयोगट, लिंग आणि समुदायांमध्ये विभागली गेलेली आहे.
                </p>
              </div>
            </div>

            <div className="info-card">
              <FaTint className="info-icon" />
              <div>
                <h3>प्रति व्यक्ती पाणी पुरवठा ५५ लिटर / दिवस</h3>
                <p>
                  पाणी हा मानवी जीवनाचा मूलभूत हक्क आहे. शुद्ध आणि सुरक्षित पिण्याचे
                  पाणी प्रत्येक नागरिकाला मिळाले पाहिजे ५५ लिटर / दिवस.
                </p>
              </div>
            </div>

            <div className="info-card">
              <FaVenusMars className="info-icon" />
              <div>
                <h3>पुरुष / महिला</h3>
                <p>
                  गावाची एकूण लोकसंख्या १९५६ आहे. त्यात ९७१ पुरुष आणि ९८५ महिला
                  आहेत.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
