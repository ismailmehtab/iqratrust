import React from "react";
import IntroLinks from "./IntroLinks";
import iqratrust from"../assets/IqraRauzatulAtfal.png"
const Educationsystem = () => {
  return (
    <>
      <div className="intro-container">
        <header className="header">
          <h3 className="heading"><img src={iqratrust} alt="" className="iqratrust" /></h3>
        </header>
        <div className="intro-content">
          {/* <aside className="links-list">
            <IntroLinks />
          </aside> */}
          <div className="intro-detail">
            <h3> نظامِ تعلیم</h3>
            <br />
            <p>
              <h4>پہلا مرحلہ</h4> 
              <br/>
              شعبہ روضہ،شعبہ قاعدہ ،شعبہ ناظرہ و حفظ ابتداء
              <br/>
              اوقات تعلیم:یومیہ پانچ گھنٹے/چھ گھنٹے (ایک سال روضہ ،دوسرا سال قاعدہ /ناظرہ ،تیسرا سال ناظرہ مع حفظ) 
              <br/>
              کل مدت: تین سال 
           
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Educationsystem;
