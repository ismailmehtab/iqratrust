import React, { useEffect, useState } from "react";
import "./Slider.css";
import img1 from "../../assets/ziauddin.jpg";
import img2 from "../../assets/tblock.jpg";
import img3 from "../../assets/pb3.jpg";
import arrow from "../../assets/arrow.jpg";

import { Button } from 'antd';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const Slider = () => {
  const [slider, SetSlider] = useState(0);

  const data = [img1, img2, img3];

  const HandlePlus = () => {
    SetSlider(slider === data.length - 1 ? 0 : slider + 1);
  };

  const HandleMinus = () => {
    SetSlider(slider === 0 ? data.length - 1 : slider - 1);
  };
  useEffect(() => {
    const sliderClear = setInterval(() => {
      HandlePlus();
    }, 4000);

    return () => clearInterval(sliderClear);
  }, [slider]);

  return (
    <div className="slider">
      {data.map((img, i) => (
        <div
          className={`slider-img ${slider === i ? "block" : "hidden"}`}
          key={i}
        >
          <img
            src={img}
            alt=""
            style={{ width: "100%", height: "80vh" }}
            className=""
          />
      <div className="btn-antd">
      <Button type="primary" icon={<ArrowLeftOutlined />} onClick={HandleMinus} className="left-arrow">
        
      </Button>
      <Button type="primary" icon={<ArrowRightOutlined />} style={{ marginLeft: 8 }} onClick={HandlePlus} className="right-arrow">
        
      </Button>
    </div>
          
        </div>
      ))}
    </div>
  );
};

export default Slider;
