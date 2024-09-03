import React from 'react'
import '../pages/Purposes.css'
import IntroLinks from "./IntroLinks";
import iqratrust from"../assets/IqraRauzatulAtfal.png"
const Purposes = () => {
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
          <h3> اغراض و مقاصد</h3>
          <br />
          <p>
          د ینی تعلیم و تربیت کے ذریعے مسلمانوں اور ان کے بچوں کو سچا مسلمان بنانا ۔

          <br/>

د  ینی و عصری تعلیم سے آراستہ کر کے مسلمان بچوں کو پاکستان کا وفادار اور مفید شہری بنانا۔
<br/>
 

کتاب و سنت کی راہنمائی میں اسلام کی اصل روح کے ساتھ تبلیغ و اشاعت کافریضہ      انجام دینا ۔

<br/>

مسلمان بچوں کے لیے نرسری اورکے جی سے کالج و یونیورسٹی تک تعلیم کا بندوست کرنا ۔

<br/>

حفظ قرآن کریم کو اپنی تعلیم کی بنیاد بناتے ہوئے جدید خطوط پر حفظ قرآن کریم کی تعلیم کا اہتمام کرنا ۔

<br/>

حفظ قرآن کریم کے بعد حافظ بچوں  بچیوں کے لئے عصری تعلیم کا معیار ی انتظام کرنا ۔  

<br/>

عربی ،ارد و او ر انگریزی زبانوں کی اہمیت کو مد نظررکھتے ہوئیتینوں زبانوں سے متعلمین کو مانوس کرنا ۔

<br/>

ہر طالب علم کو مذہبی ،اخلاقی اور معاشرتی قدروں سے مانوس ومتعارف کراتے ہوئے ایک سچا مسلمان بنانا ۔

<br/>

بچوں کی بہتر تعلیم و تربیت کے  لیےمعلمین ومعلمات کی تربیت کا اہتمام کرنا ۔

<br/>

مسلک و فرقہ سے بالاتر ہوکر طلباء وطالبات  کو تعلیم کے ایسے مربوط نظام سے وابستہ کرنا جس سے اخوت و بھائیچارہ کا ماحول پیدا ہو-
          </p>
        </div>
      </div>
    </div>
  </>
  )
}

export default Purposes