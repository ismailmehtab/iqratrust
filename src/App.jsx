import React from 'react'

import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Slider from './Components/Slider/Slider'
import Counter from './Components/Counter/Counter'
import SubSlider from './Components/SubSlider/SubSlider'
import Features1 from './Components/Features1/Features1'






const App = () => {
  return (
    <div >
      
      
       
      <Slider/>
      <Hero/>
      <Programs/>
      <Counter/>
      {/* <Features/> */}
      <Features1/>
      <SubSlider/>
      {/* <IntroLinks/> */}
  
     
 </div>
  )
}

export default App