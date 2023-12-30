import React from "react"
import HeroSection from "../HeroSection/HeroSection"
import SecondSection from "../SecondSection/SecondSection"
import ThirdSection from "../ThirdSection/ThirdSection"
import "bootstrap"
import WhatPeople from "../WhatPeople/WhatPeople"
import Footer from "../Footer/Footer"


let Home=()=>
{
    return(
        <>
          <HeroSection title="Generate more leads with a professional landing page!"/>
          <SecondSection/>
          <ThirdSection/>
          <WhatPeople/>
          <HeroSection title="Ready to get started? Sign up now!" classStyle="padClass"/>
          <Footer/>
        </>
    )
}

export default Home