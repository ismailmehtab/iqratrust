import React from "react";
import "./PreparatoryForVIClass.css";
import IntroLinks from "./IntroLinks";
import iqratrust from "../assets/IqraRauzatulAtfal.png";



const PreparatoryForVIClass = () => {
 
  return (
    <>
      <div className="intro-container">
        <header className="header">
          <h3 className="heading">
            <img src={iqratrust} alt="" className="iqratrust" />
          </h3>
        </header>
        <div className="intro-content">
          {/* <aside className="links-list">
            <IntroLinks />
          </aside> */}
          <div className="intro-detail">
            <h3> Preparatory For VI Class(P-VI)</h3>
         
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem harum nam qui iure maxime asperiores molestias
              corrupti deserunt at eius. Natus, consectetur recusandae
              voluptatum ullam sint temporibus beatae similique, dignissimos, ut
              modi doloribus labore molestias! Nulla consectetur perspiciatis
              assumenda non quibusdam, alias quos velit fuga magni architecto
              eum eveniet quas?
             
            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default PreparatoryForVIClass;
