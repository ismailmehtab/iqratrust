import React from "react";
import "./IntroLinks.css";
import { DoubleRightOutlined } from "@ant-design/icons";
import mujallah from '../assets/thumb_majalla.jpg'

const IntroLinks = () => {
  return (
    <div className="sidebar-cat-list">
      <h4>تعارفی صفحات</h4>

      <ul>
        <li>
          <a href="">
            <div className="intro-list">
                <div><DoubleRightOutlined /></div>
                <div>اقرأ روضۃ الاطفال</div>
            </div>
          </a>
        </li>

        <li>
          <a href="">
            <div className="intro-list">
                <div><DoubleRightOutlined /></div>
                <div>(P-VI) Preparatory For VI Class</div>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="intro-list">
                <div><DoubleRightOutlined /></div>
                <div>اغراض و مقاصد</div>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="intro-list">
                <div><DoubleRightOutlined /></div>
                <div>نظامِ تعلیم</div>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="intro-list">
                <div><DoubleRightOutlined /></div>
                <div> داخلہ کے لیے مقرر کردہ شرائط وضوابط</div>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="intro-list">
                <div><DoubleRightOutlined /></div>
                <div> شعبہ ترقی مہارات کا قیام</div>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="intro-list">
                <div><DoubleRightOutlined /></div>
                <div> شعبہ روضہ</div>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="intro-list">
                <div><DoubleRightOutlined /></div>
                <div> شعبہ قاعدہ و ناظرہ</div>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="intro-list">
                <div><DoubleRightOutlined /></div>
                <div>نظامِ تعلیم</div>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="intro-list">
                <div><DoubleRightOutlined /></div>
                <div> شعبۂ حفظ قرآن کریم</div>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="intro-list">
                <div><DoubleRightOutlined /></div>
                <div> اقرأ حفاظ سیکنڈری اسکول</div>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="intro-list">
                <div><DoubleRightOutlined /></div>
                <div> اقرأحفاظ کالج</div>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="intro-list">
                <div><DoubleRightOutlined /></div>
                <div> اقرأ معہدالحافظات</div>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="intro-list">
                <div><DoubleRightOutlined /></div>
                <div> اقرأ معہد الحفاظ</div>
            </div>
          </a>
        </li>
      </ul>

      <div className="img-mujallah">
          <img src={mujallah} alt="" />
      </div>
    </div>
  );
};

export default IntroLinks;
