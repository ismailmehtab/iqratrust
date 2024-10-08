import React from "react";
import "./IntroLinks.css";

import { DoubleRightOutlined } from "@ant-design/icons";
import mujallah from "../assets/thumb_majalla.jpg";
import { Link, NavLink, Outlet } from "react-router-dom";

const IntroLinks = () => {
  return (
    <div className="main-content">
      <div className="sidebar-cat-list">
      <h4 className="sidebar-list-heading">تعارفی صفحات</h4>

      <ul>
        <li>
          <NavLink to="introduction" >
            <div className="intro-list">
              <div>
                <DoubleRightOutlined />
              </div>
              <div>اقرأ روضۃ الاطفال</div>
            </div>
          </NavLink>
        </li>

        <li>
          <NavLink to="foundertrustee">
            <div className="intro-list">
              <div>
                <DoubleRightOutlined />
              </div>
              <div>اقرأ روضۃ الاطفال کے بانیان ،عہدیداران ٹرسٹیز</div>
            </div>
          </NavLink>
        </li>

        <li>
          <NavLink to="preparatoryForVIClass">
            <div className="intro-list">
              <div>
                <DoubleRightOutlined />
              </div>
              <div>(P-VI) Preparatory For VI Class</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="purposes">
            <div className="intro-list">
              <div>
                <DoubleRightOutlined />
              </div>
              <div>اغراض و مقاصد</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="educationsystem">
            <div className="intro-list">
              <div>
                <DoubleRightOutlined />
              </div>
              <div>نظامِ تعلیم</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="termsconditions">
            <div className="intro-list">
              <div>
                <DoubleRightOutlined />
              </div>
              <div> داخلہ کے لیے مقرر کردہ شرائط وضوابط</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="skilldevelopment">
            <div className="intro-list">
              <div>
                <DoubleRightOutlined />
              </div>
              <div> شعبہ ترقی مہارات کا قیام</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="rauza">
            <div className="intro-list">
              <div>
                <DoubleRightOutlined />
              </div>
              <div> شعبہ روضہ</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="qaidanazra">
            <div className="intro-list">
              <div>
                <DoubleRightOutlined />
              </div>
              <div> شعبہ قاعدہ و ناظرہ</div>
            </div>
          </NavLink>
        </li>

        <li>
          <NavLink to="hifz">
            <div className="intro-list">
              <div>
                <DoubleRightOutlined />
              </div>
              <div> شعبۂ حفظ قرآن کریم</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="secondaryschool">
            <div className="intro-list">
              <div>
                <DoubleRightOutlined />
              </div>
              <div> اقرأ حفاظ سیکنڈری اسکول</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="college">
            <div className="intro-list">
              <div>
                <DoubleRightOutlined />
              </div>
              <div> اقرأحفاظ کالج</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="mahadulhafizat">
            <div className="intro-list">
              <div>
                <DoubleRightOutlined />
              </div>
              <div> اقرأ معہدالحافظات</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="mahadulhuffaz">
            <div className="intro-list">
              <div>
                <DoubleRightOutlined />
              </div>
              <div> اقرأ معہد الحفاظ</div>
            </div>
          </NavLink>
        </li>
      </ul>

      <div className="img-mujallah">
        <img src={mujallah} alt="" />
      </div>
      </div>
      <div className="outlet-con">
        <Outlet />
        </div>
  
    </div>
  );
};

export default IntroLinks;