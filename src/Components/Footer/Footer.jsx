import React from "react";
import "./Footer.css";
import {Link,NavLink ,Outlet} from 'react-router-dom'
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
            <Link to="">
              <p className="footer-text"> بلاک بی نارتھ ناظم آبادکراچی G-36</p>
            </Link >
            <Link to="">
              <p className="footer-text">iqratrustkhi@gmail.com</p>
            </Link >
            <Link to="">
              <p className="footer-text">021-36677321</p>
            </Link >
            <Link to="">
              <p className="footer-text">021-36677322</p>
            </Link >
          </div>
          <div className="sb-footer-links-div">
            <h4>تعلیمی لنکس</h4>
            <Link to="purposes">
              <p className="footer-text">بنیادی مقاصد</p>
            </Link >
            <Link to="educationsystem">
              <p className="footer-text">نظام تعلیم</p>
            </Link >
            <Link to="termsconditions">
              <p className="footer-text">داخلہ کے کیلئےمقررکردہ شرائط و ضوابط</p>
            </Link >
            <Link to="">
              <p className="footer-text">Iqra Preparatory For VI Class</p>
            </Link >
            <Link to="">
              <p className="footer-text">اقرأ حفاظ سیکنڈری اسکول</p>
            </Link >
          </div>
        <div className="sb-footer-links-div">
            <h4>شعبہ جات</h4>
            <Link to="">
              <p className="footer-text">شعبہ حفظ</p>
            </Link> 
           <Link to="">
              <p className="footer-text">شعبہ قاعدہ</p>
            </Link >
            <Link to="">
              <p className="footer-text">شعبہ روضہ</p>
            </Link >
            <Link to="">
              <p className="footer-text">اقرأ حفاظ اسکول</p>
            </Link >
            <Link to="">
              <p className="footer-text">  اقرأ حفاظ کالج</p>
            </Link >
       </div>
          <div className="sb-footer-links-div">
            <h4>اقرأ</h4>
            
              <p className="footer-para">
                اقراء دنیا کی تعلیمی امتزاج کا پہلا ادارہ ہے جس کے نتائج دنیا
                میں مسلم ہیں، اس ادارے کو اس میں مرکزی حیثیت حاصل ہے جس کو دیکھ
                کر بعد میں بہت لوگوں نے اس طریقہ کار کو اپنے تعلمی ادارے میں
                اختیار کیا۔
              </p>
            
            
          </div>
        </div>
        <hr></hr>
        <div className="sb-footer-below">
          <div className="sb-footer-copyright">
            <p>@{new Date().getFullYear()} All right recerved.</p>
          </div>
          <div className="sb-footer-below-link">
          <Link to="">
              <div>
                <p className="footer-text">Terms & Conditions</p>
              </div>
            </Link >
            <Link to="">
              <div>
                <p className="footer-text">Privacy</p>
              </div>
            </Link >
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
