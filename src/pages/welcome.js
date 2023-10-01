import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "../styles/welcome.css"

function Welcome() {
    const [btnState, setBtnState] = useState("none");
    const [textState, setTextState] = useState("none");

    const styles = {
        // backgroundImage: "url('../images/starry night.jpg') !important",
        
        /*
        flex-direction: decides on arranging items vertically or horizontally(i.e. main axis)
        flex - wrap: decides how items should be wrapped around
        justify-content: decides how to arrange items on main-axis
        align-items: decides how to lay out items on cross-axis(i.e. perpendicular to main axis)(single row)
        align-content: decides how to arrange items on cross-axis(i.e. perpendicular to main axis)(mutiple rows similar to justify-content)
        Website to learn felxbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
        */

        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        textAllign: "center",
        minHeight:"100vh",
        color: "antiquewhite",
        fontWeight:"bold"
    }

    // Render button some time after the typewriter starts
    // Render only once after timeout
    useEffect(() => {
        setTimeout(() => {
          setTextState("block");
        }, 250);
      },[]);

    useEffect(() => {
        setTimeout(() => {
          setBtnState("block");
        }, 1000);
      },[]);

    return (
        <div className = "welcome">
            <div  style={styles}>

                {/* Import Typewriter to implememnt typing effect.
                Specifiy what to type in typeString method */}
                {/* <Typewriter 
                   

                onInit={(typewriter)=> {
                typewriter
                    .typeString("Hi, I'm Wenxin, an undergraduate major in Computer Engineering at NUS.<br>"
                    + "Click on the button below to check out more about me!"
                    )
                    .pauseFor(0)
                    // .deleteAll()
                    .start();
                    }}

                /> */}
                <div className = "exploreText" style={{display:textState, textAlign:'center'}}>
                    Hi, I'm Wenxin, an undergraduate major in Computer Engineering at NUS.<br/>
                    Click on the button below to check out more about me!
                </div>
                <br></br>
                <br></br>

                {/* Link that directs to introduction page */}
                <button className = "exploreBtn" role="button" style = {{display:btnState}}><Link to='/Content' style = {{color:"black", lineDecoration:"none"}}>MORE</Link></button>

            </div>
        </div>


    );
}

export default Welcome;
