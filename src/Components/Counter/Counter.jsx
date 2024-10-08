import React, { useState } from "react";
import "./Counter.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [counter, setCounter] = useState(false);
  let bildings = 175
  return (
    <>
      <ScrollTrigger onEnter={()=> setCounter(true)} onExit={()=> setCounter(false)}>
      <div className="px-20">
       
       <div className="header">
       <h3>اعداد و شمار</h3>
       <h3 className="counter-sub-heading">اقراء مدرسہ و اسکولنگ سسٹم، آئینہ اعداد وشمار</h3>
       </div>
       
       
        <div className="count">
        <div>
          <p>طلباء</p>
          <h2 className="value">
            {counter && <CountUp start={0} end={95000} duration={2} delay={0} />}
         </h2>
        </div>
        <div>
          <p>اساتذہ</p>
          <h2 className="value">
            {counter && <CountUp start={0} end={8300} duration={2} delay={0} />}
         </h2>
        </div>
        <div>
          <p>شاخیں</p>
          <h2 className="value">
            {counter && <CountUp start={0} end={200} duration={2} delay={0} />}
         </h2>
        </div>
        <div>
          <p>بلڈنگز</p>
          <h2 className="value">
            {counter && <CountUp start={0} end={bildings} duration={2} delay={0} />}
         </h2>
        </div>
      </div>
      </div>
   
      </ScrollTrigger>

     
    </>
  );
};

export default Counter;
