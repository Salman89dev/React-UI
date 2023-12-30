import React from "react";
import responsiveImg from "./../../images/bg-showcase-1.jpg"
import "./ThirdSection.css"
import ThirdSectionArray from "./ThirdSectionArray";
import ThirdSectionStructure from "./ThirdSectionStructure";

let ThirdSection=()=>
{
    return (
        <div className="ThirdSection">
            {
                ThirdSectionArray.map((element,index)=>
                {
                    return <ThirdSectionStructure title={element.title} content={element.content} img={element.img}/>
                })
            }
        </div>
    )
}

export default ThirdSection;