import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Slider from './Components/Slider/Slider'
import Counter from './Components/Counter/Counter'
import SubSlider from './Components/SubSlider/SubSlider'
import Features from './Components/Features/Features'
import Features1 from './Components/Features1/Features1'





const App = () => {
  return (
    <div>
      
      <Navbar/>
      <Slider/>
      <Hero/>
      <Programs/>
      <Counter/>
      {/* <Features/> */}
      <Features1/>
      <SubSlider/>
     
 </div>
  )
}

export default App