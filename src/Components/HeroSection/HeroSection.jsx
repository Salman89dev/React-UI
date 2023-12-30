import "./HeroSec.css"
let HeroSection=(props)=>
{
    return(
        <div className="heroSec">
         <h1>{props.title}</h1>
         <form action="" method="get">
            <input type="text" name="" id="" placeholder="Email Address" />
            <button type="submit">Submit</button>
         </form>
        </div>
    )
}

export default HeroSection;