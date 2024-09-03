import React from "react";
import IntroLinks from "./IntroLinks";
import iqratrust from"../assets/IqraRauzatulAtfal.png"
const Mahadulhuffaz = () => {
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
            <h3>اقرأ معہد الحفاظ</h3>
            <br />
            <p>
              طلباء میں عصری تعلیم کے ساتھ ساتھ دینی علوم کے حصول کا رجحان اور
              شوق دیکھتے ہوئے اقرأ معہدالحفاظ کے شعبے کا آغازبھی کردیاگیا ہے۔ اس
              شعبہ میں تعلیم حاصل کرکے طلباء وفاق المدارس العربیہ پاکستان سے درس
              نظامی کی تکمیل کی سند اور متعلقہ یونیورسٹی سے(B.S)کی ڈگری حاصل
              کرسکیں گے۔ اس شعبہ میں طلبہ کو جماعت ہشتم میں کامیابی کے بعد داخلہ
              دیا جاتا ہے۔
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mahadulhuffaz;
