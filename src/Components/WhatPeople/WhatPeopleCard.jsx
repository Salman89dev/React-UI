import React from "react";

let WhatPeopleCard=(props)=>
{
    return(
        <div className="WhatPeopleSingle">
            <img src={props.img} alt="" />
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </div>
    )
}
export default WhatPeopleCard;