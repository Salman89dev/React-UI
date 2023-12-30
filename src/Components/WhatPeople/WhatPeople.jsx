import React from "react"
import WhatPeopleArray from "./WhatPeopleArray";
import WhatPeopleCard from "./WhatPeopleCard";
import "./WhatPeople.css"
let WhatPeople=()=>
{
    return(
        <div className="WhatPeople">
            <h1>WhatPeople</h1>
            <div className="WhatPeopleRepeater">
            {
                WhatPeopleArray.map((element,index)=>
                {
                    const{img,title,content}=element
                    return <WhatPeopleCard img={img} title={title} content={content}/>
                })
            }
            </div>
        </div>
    )
}

export default WhatPeople;