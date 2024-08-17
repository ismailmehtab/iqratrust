import React from "react";
import "./Footer.css";

import fb from "../../assets/facebook-1.webp";
import youtube from "../../assets/youtube.png";
import instta from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb-footer section-padding">
        <div className="sb-footer-links">
          <div className="sb-footer-links-div">
            <h4>سوشل میڈیا</h4>
            <div className="socialmedia">
              <p>
                <img src={fb} alt="" />
              </p>
              <p>
                <img src={youtube} alt="" />
              </p>
              <p>
                <img src={instta} alt="" />
              </p>
              <p>
                <img src={twitter} alt="" />
              </p>
            </div>
          </div>

          <div className="sb-footer-links-div">
            <h4>رابطہ</h4>
            <a href="/employer">
              <p> بلاک بی نارتھ ناظم آبادکراچی G-36</p>
            </a>
            <a href="/heatlhplan">
              <p>iqratrustkhi@gmail.com</p>
            </a>
            <a href="/individual">
              <p>021-36677321</p>
            </a>
            <a href="/individual">
              <p>021-36677322</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>تعلیمی لنکس</h4>
            <a href="/resources">
              <p>بنیادی مقاصد</p>
            </a>
            <a href="/resources">
              <p>نصاب تعلیم</p>
            </a>
            <a href="/resources">
              <p>داخلہ کے کیلئےمقررکردہ شرائط و ضوابط</p>
            </a>
            <a href="/resources">
              <p className="">Iqra Preparatory For VI Class</p>
            </a>
            <a href="/resources">
              <p className="">اقرأ حفاظ سیکنڈری اسکول</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>شعبہ جات</h4>
            <a href="/resources">
              <p>شعبہ حفظ</p>
            </a> <a href="/resources">
              <p>شعبہ قاعدہ</p>
            </a>
            <a href="/resources">
              <p>شعبہ روضہ</p>
            </a>
            <a href="/resources">
              <p>اقرأ حفاظ اسکول</p>
            </a>
            <a href="/resources">
              <p> اقرأ حفاظ کالج</p>
            </a>

          </div>
          <div className="sb-footer-links-div">
            <h4>اقرأ</h4>
            <a href="/about">
              <p className="footer-para">
                اقراء دنیا کی تعلیمی امتزاج کا پہلا ادارہ ہے جس کے نتائج دنیا
                میں مسلم ہیں، اس ادارے کو اس میں مرکزی حیثیت حاصل ہے جس کو دیکھ
                کر بعد میں بہت لوگوں نے اس طریقہ کار کو اپنے تعلمی ادارے میں
                اختیار کیا۔
              </p>
            </a>
            
          </div>
        </div>
        <hr></hr>
        <div className="sb-footer-below">
          <div className="sb-footer-copyright">
            <p>@{new Date().getFullYear()} All right recerved.</p>
          </div>
          <div className="sb-footer-below-link">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
