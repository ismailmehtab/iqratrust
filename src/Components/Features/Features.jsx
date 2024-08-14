import React from "react";
import "./Features.css";
import icon1 from "../../assets/08.png";

import { Col, Divider, Row } from "antd";
import bgimage from "../../assets/bg-image.jpg";
const style = {
  background: "#0092ff",
  padding: "8px 0",
};

const Features = () => {
  return (
    <>
      <div className="main">
        <div className="header">
          <h2>نمایاں خصوصیات</h2>
          <p className="para1">
            ادارہ ھذا کی وہ نمایاں خصوصیات جس نے اس ادارے کو پاکستان کا سب بڑا
            ادارہ بنایا
          </p>
        </div>
        <Row>
          
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          col1
          
          </Col>
          <Col xs={{span: 11,offset: 1,}}lg={{span: 6,offset: 2,}}>
          <div className="add-features-content">
          <h4 class="title">قرآنی تعلیم</h4>
          <p>قاعدہ ناظرہ اسکول کی تعلیم کے ساتھ مکمل قرآن پاک حفظ کرانے کی ترتیب</p>
          </div>
          
          </Col>
          <Col
            className="features-container"
            xs={{ span: 5, offset: 1 }}
            lg={{ span: 6, offset: 2 }}
          >
            <div className="img-container">
              <img src={bgimage} alt="" className="features-bg" />
              <img src={icon1} alt="" className="features-icon" />
            </div>

            <div className="features-content">
              <h4 className="features-heading1">تربیت</h4>
              <p>صرف تعلیم نہیں، بچے کی شخصیت دینی و ادبی شخصیت سازی</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{
              span: 5,
              offset: 1,
            }}
            lg={{
              span: 6,
              offset: 2,
            }}
          >
            col3
          </Col>
          <Col
            xs={{
              span: 11,
              offset: 1,
            }}
            lg={{
              span: 6,
              offset: 2,
            }}
          >
            Col5
          </Col>
          <Col
            xs={{
              span: 5,
              offset: 1,
            }}
            lg={{
              span: 6,
              offset: 2,
            }}
          >
            <div className="img-container">
              <img src={bgimage} alt="" className="features-bg" />
              <img src={icon1} alt="" className="features-icon" />
            </div>

            <div className="features-content">
              <h4 className="features-heading1"></h4>
              <p>صرف تعلیم نہیں، بچے کی شخصیت دینی و ادبی شخصیت سازی</p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Features;
