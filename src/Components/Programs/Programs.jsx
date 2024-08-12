import React from "react";
import "./Programs.css";
import hifz from "../../assets/hifz.png";
import school from "../../assets/school.png";
import college from "../../assets/college.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={college} alt="" className="img1" />
        <h1>کالج و درس نظامی</h1>
        <p>
          میٹرک کے بعد اقرأانٹرمیڈیٹ کالج کے دو سالہ پروگرام میں بھی داخلہ لیا
          جا سکتا ہے،اس میں اعلیٰ ثانوی تعلیمی بورڈ کے منظور شدہ نصاب کے مطابق
          تعلیم دی جاتی ہے۔
        </p>
      </div>

      <div className="program">
        <img src={school} alt="" className="img2" />
        <h1>شعبہ اسکول</h1>
        <p>
          اقرأنظام تعلیم کے چو تھے مرحلے (حفظ قر آن کریم اور پریپ۔سکس) کی کامیاب
          تکمیل کے بعد طلباء و طالبات ا قرأ حفاظ سیکنڈری اسکول میں داخلے کے اہل
          ہو جاتے ہیں۔
        </p>
      </div>
      <div className="program">
        <img src={hifz} alt="" className="img3" />
        <h1>شعبہ حفظ</h1>
        <p>
          حفظ قرآن کی تکمیل اوسطاّّ ۴ سال میں ہوتی ہے،تاہم یہ مدت حتمی نہیں، اس
          سے کم مدت میں بھی قرآن مجید حفظ کیا جاسکتا ہے اوربعض اوقات زیادہ وقت
          بھی لگ جاتا ہے۔
        </p>
      </div>
    </div>
  );
};

export default Programs;
