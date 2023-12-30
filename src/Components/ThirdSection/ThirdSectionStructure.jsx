let ThirdSectionStructure=(props)=>
{
    return (
        <div className="ThirdSectionMain">
        <div className="ThirdSectionContent">
            <div className="content">
                <h4>{props.title}</h4>
                <p>{props.content} </p>
            </div>
        </div>
        <div className="ThirdSectionImg">
            <img src={props.img} alt="" />
        </div>
    </div>
    )
}

export default ThirdSectionStructure;