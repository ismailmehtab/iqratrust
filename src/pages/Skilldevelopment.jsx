import React from "react";
import IntroLinks from "./IntroLinks";
import iqratrust from"../assets/IqraRauzatulAtfal.png"
const Skilldevelopment = () => {
  return (
    <>
      <div className="intro-container">
        <header className="header">
          <h3 className="heading"><img src={iqratrust} alt=""  className="iqratrust"/></h3>
        </header>
        <div className="intro-content">
          {/* <aside className="links-list">
            <IntroLinks />
          </aside> */}
          <div className="intro-detail">
            <h3> شعبہ ترقی مہارات کا قیام</h3>
            <br />
            <p>
              الحمدللہ! اقرأ روضۃالاطفال نے جدید تدریسی تقاضوں کے پیشِ نظر ایک
              باقاعدہ شعبہ ‘‘شعبہ ترقی مہارات’’ قائم کیا ہے ۔اس شعبہ میں نامور
              ماہرین تعلیم ،اساتذہ کی جدید پیشہ ورانہ خطوط پر تربیت کرتے ہیں ۔اس
              تربیت میں انسانی نفسیات ورویہ کی سوجھ بوجھ اور تدریسی مضامین کے
              جدید اسلوب پر خصوصیت سے توجہ دی جاتی ہے ۔ اس شعبہ میں تربیت دینے
              کے لیے ایسے ماہرین کو مدعو کیا جاتا ہے جن کی مہارت اپنے شعبہ میں
              مسلّم ہے ۔اس شعبہ میں دوسرے اسلامی اسکولوں کے اساتذہ کو بھی تربیت
              فراہم کی جاتی ہے ۔
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skilldevelopment;
