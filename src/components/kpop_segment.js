import React from 'react';
import ReactDOM from 'react-dom';
import "../styles/kpop_segment.css"
import Seventeen from "../images/seventeen.jpg"
import EXO from "../images/exo.jpg"

const KpopSegment = () => (
    <div className = "kpop-segment">
        <div className = "kpop-title">
            KPOP
        </div>
        <div className = "kpop-content">

            <ul id="frame-container" className = "svt">
                <h1 className = "svt-title">Seventeen</h1>
                <li class="frame">
                    <a href="https://en.wikipedia.org/wiki/Seventeen_(South_Korean_band)" target = "_blank">
                        <img src={Seventeen} alt="Seventeen photo" />
                    </a>
                </li>
                <li>
                    
                </li>
            </ul>

            <ul id="frame-container" className = "exo">
                <h1 className = "svt-title">EXO</h1>
                <li class="frame">
                    <a href="https://en.wikipedia.org/wiki/Exo" target = "_blank">
                        <img src={EXO} alt="EXO photo" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
);

export default KpopSegment;