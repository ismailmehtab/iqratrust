import React from "react";
import "./Hero.css";
import right_arrow from '../../assets/right-arrow.png'

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>اقرأ روضۃ الاطفال</h1>
        <p>
          " اقرأ روضۃ الاطفال پاکستان" ایک غیر سرکاری، دینی اور علمی ادارہ ہے۔
          جو اپنے نصاب تعلیم، نظم و نسق اور تربیت کے اعتبار سے ایک امتیازی حیثیت
          رکھتا ہے۔ یہ دین و دنیا کی تعلیمی امتزاج کا پہلا ادارہ ہے جس کے نتائج
          دنیا میں مسلم ہیں، اس ادارے کو اس میں مرکزی حیثیت حاصل ہے جس کو دیکھ
          کر بعد میں بہت لوگوں نے اس طریقہ کار کو اپنے تعلیمی ادارے میں اختیار
          کیا۔
        </p>
        <button className="btn">مزید <img src={right_arrow}/></button>
      </div>
    </div>
  );
};

export default Hero;
