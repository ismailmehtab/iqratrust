import React, { useState } from "react";
import "./Counter.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [counter, setCounter] = useState(false);
  return (
    <>
      <ScrollTrigger onEnter={()=> setCounter(true)} onExit={()=> setCounter(false)}>
      <div className="px-20">
       
       <div className="header">
       <h3>اعداد و شمار</h3>
       <p>اقراء مدرسہ و اسکولنگ سسٹم، آئینہ اعداد وشمار</p>
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
            {counter && <CountUp start={0} end={175} duration={2} delay={0} />}
         </h2>
        </div>
      </div>
      </div>
   
      </ScrollTrigger>

     
    </>
  );
};

export default Counter;
