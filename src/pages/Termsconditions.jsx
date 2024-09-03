import React from "react";
import IntroLinks from "./IntroLinks";
import iqratrust from"../assets/IqraRauzatulAtfal.png"
const Termsconditions = () => {
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
            <h3>داخلہ کے لیے مقرر کردہ شرائط وضوابط</h3>
            <br />
            <p>
              اقرأ کا نظام تعلیم و نصاب تعلیم ماہرین تعلیم و بزرگان دین کی
              مشاورت و راہنمائی مین مرتب کیا گیا ہے ،جس میں تجربات کی روشنی میں
              حسب ضرورت وقتا فوقتا ترمیم بھی کی جاتی ہے۔<br/> :لہذا<br/> داخلہ بچے /بچی کی
              صلاحیتوں اور مستقبل میں ضبط قرآن کریم کے امکانات کو مدنظر رکھ کر
              کیا جاتا ہے ۔<br/> اقرأ روضۃ الاطفال میں صرف وہی بچے اور بچیاں داخلہ پا
              سکتے ہیں جو حفظ قرآن کریم کا ارادہ رکھتے ہوں اور اقرأ کے نظام
              تعلیم اصول وضوابط سے متفق ہوں اور بوقت داخلہ بچے /بچی کی عمر چار
              سال سے پانچ سال ہو۔<br/> براہ راست داخلہ صرف شعبہ روضہ یا شعبہ قاعدہ
              میں دیا جاتا ہے ۔<br/> ہر سال داخلے نہیں ہوتے ،گنجائش اور ضرورت کو
              دیکھتے ہوئے ہر سال دسمبر میں آئندہ سال کے لئے داخلہ پالیسی کا
              اعلان کیا جاتا ہے اور اس میں داخلہ کے طریقہ کار کی تفصیلات بھی
              بتادی جاتی ہیں ۔<br/> داخلہ سے قبل بچے /بچی کی صلاحیت اور استعداد کا
              اندازہ لگانے کے لئے ایک معمولی امتحان (ٹیسٹ)لیا جاتا ہے۔<br/> داخلہ کے
              لیے بچے /بچی کا اس ٹیسٹ میں کامیاب ہونا ضروری ہے ۔<br/> انٹرویو کے بعد
              جب تک فیس جمع کرادی جائے ،داخلہ حتمی تصور نہیں ہوتا۔یاد رہے کہ
              داخلہ کی منظوری کے فورا بعد فیس جمع کرانی ہوتی ہے۔
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Termsconditions;
