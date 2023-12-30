import React from "react"
import "./SecondSecton.css"
import SecondSectionArray from "./SecondSectionArray"
import SecondCard from "./SecondCard"

let SecondSection=()=>
{
    return(
        <div className="mainSecond">
            
            {
                SecondSectionArray.map((val,index)=>
                {
                   return <SecondCard img={val.imgSrc} title={val.title} para={val.paragraph}  />
                })
            }
        </div>
    )
}

export default SecondSection;