import "./Navbar.css";
import  web from "./../../images/HeaderLogo.png";

let Navbars=()=>
{
    return(
        <nav>
             <img style={{width:"200px"}} src={web} className="img-fluid" alt="header" />
            <button style={{background:"blue",fontSize:"16px",color:"white",border:"none",height:"40px",padding:"0 10px",borderRadius:"5px"}}>Sign Up</button>
        </nav>
    )
}

export default Navbars;