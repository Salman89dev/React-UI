import React from "react";

let SecondCard=(props)=>
{
    return (
        <>
            <div className="singleSecond">
                <img src={props.img} alt="" />
                <h4>{props.title}</h4>
                <p>{props.para}</p>
            </div>
        </>
    )
}

export default SecondCard