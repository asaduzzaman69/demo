import React from 'react'
import './homepage.styles.css'
import Slider from '../../component/slider/slider.component'
import Footer from '../../component/footer/footer.component'
import FixedTeam from '../../component/fixed-team/fixed.component'
import UpProjectPrev from '../../component/upProjextPreview/upProjectPreview.component'
import Mission from '../../component/mission/mission.component'
import WhatUDo from '../../component/whatUDo/whatUDo.component'
import Cause from '../../component/cause/cause.component' 


const HomePage = () => (
  <div>
    <Slider />
    <FixedTeam />
    <Mission />
    <WhatUDo/>
    <Cause  />
    <UpProjectPrev />
    <Footer />
    
  
  </div>
  



)

export default HomePage;