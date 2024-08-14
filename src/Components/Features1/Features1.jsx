import React from 'react';
import { Image } from 'antd';
import './Features1.css'
import Image1 from "../../assets/letterpgn.png"

 
const Features1 = () => (

    <div className="main">
  <Image.PreviewGroup  preview={{onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),}} >
   <div className="image-container">
    <Image width={500} src={Image1}  className='img1'/>
    <Image width={500} src={Image1}  className='img1'/>
    <Image width={500} src={Image1}  className='img1'/>
    </div>
    <div className="image-container container2">
    <Image width={500} src={Image1}  className='img1'/>
    <Image width={500} src={Image1}  className='img1'/>
    <Image width={500} src={Image1}  className='img1'/>
    </div>
  </Image.PreviewGroup>
  </div>
);


export default Features1