import React, {useEffect, useState} from 'react';
import Typewriter from "typewriter-effect";
import "../styles/welcome.css"
import starryNight from "../images/starry night.jpg"

function Welcome() {

    const [btnState, setBtnState] = useState("none");
    const styles = {
        // backgroundImage: "url('../images/starry night.jpg') !important",
        
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        textAllign: "center",
        minHeight:"100vh",
        color: "antiquewhite",
        fontWeight:"bold"
    }

    useEffect(() => {
        setTimeout(() => {
          setBtnState("block");
        }, 18000);
      },[]);

    return (
        <div className = "welcome">
            <div  style={styles}>
                <Typewriter 

                // typeSpeed={250}
                onInit={(typewriter)=> {
                typewriter
                    .typeString("Hi, I'm Wenxin, an undergradute major in Computer Engineering at NUS.<br>"
                    + "Click on the button below to check out more about me!"
                    )
                    .pauseFor(100)
                    // .deleteAll()
                    // .typeString("Welcomes You")
                    .start();
                    }}

                />
                <br></br>
                <br></br>
                <button className = "exploreBtn" style = {{display:btnState}}>MORE</button>

            </div>
        </div>


    );
}

export default Welcome;