import React from 'react';
import ReactDOM from 'react-dom';
import "../styles/kpop_segment.css"
import Seventeen from "../images/seventeen.jpg"
import EXO from "../images/exo.jpg"
import SongList from "../components/song_list.js"

function KpopSegment() {

    const svtSongList = [{title:<a href = "https://www.youtube.com/watch?v=-GQg25oP0S4" target = "_blank">Super</a>, color:"red"}, 
                        {title:<a href = "https://www.youtube.com/watch?v=9kpuOoIh3wU" target = "_blank">FML</a>, color:"green"},
                        {title:<a href = "https://www.youtube.com/watch?v=gRnuFC4Ualw" target = "_blank">Hot</a>, color:"volcano"}, 
                        {title:<a href = "https://www.youtube.com/watch?v=bTtNV6hgDno" target = "_blank">Darling</a>, color:"orange"},
                        {title:<a href = "https://www.youtube.com/watch?v=J-wFp43XOrA" target = "_blank">Very Nice</a>, color:"gold"},
                        {title:<a href = "https://www.youtube.com/watch?v=HdZdxocqzq4" target = "_blank">Left & Right</a>, color:"lime"},
                        {title:<a href = "https://www.youtube.com/watch?v=CyzEtbG-sxY" target = "_blank">Clap</a>, color:"cyan"},
                        {title:<a href = "https://www.youtube.com/watch?v=VCDWg0ljbFQ" target = "_blank">World</a>, color:"blue"},
                        {title:<a href = "https://www.youtube.com/watch?v=UB4FzllQCyc" target = "_blank">Home Run</a>, color:"geekblue"},
                        {title:<a href = "https://www.youtube.com/watch?v=WpuatuzSDK4" target = "_blank">Rock With You</a>, color:"purple"}];

    const exoSongList = [{title:<a href = "https://www.youtube.com/watch?v=KSH-FVVtTf0" target = "_blank">Monster</a>, color:"green"},
                        {title:<a href = "https://www.youtube.com/watch?v=I3dezFzsNss" target = "_blank">Growl</a>, color:"red"},
                        {title:<a href = "https://www.youtube.com/watch?v=RuqaVryDRd0" target = "_blank">Love Me Right</a>, color:"orange"},
                        {title:<a href = "https://www.youtube.com/watch?v=pSudEWBAYRE" target = "_blank">Love Shot</a>, color:"volcano"}, 
                        {title:<a href = "https://www.youtube.com/watch?v=yWfsla_Uh80" target = "_blank">Call Me Baby</a>, color:"cyan"},
                        {title:<a href = "https://www.youtube.com/watch?v=iwd8N6K-sLk" target = "_blank">Tempo</a>, color:"blue"},
                        {title:<a href = "https://www.youtube.com/watch?v=gAal8xHfV0c" target = "_blank">Wolf</a>, color:"geekblue"},
                        {title:<a href = "https://www.youtube.com/watch?v=uxmP4b2a0uY" target = "_blank">Obsession</a>, color:"purple"},
                        {title:<a href = "https://www.youtube.com/watch?v=KH6ZwnqZ7Wo" target = "_blank">MAMA</a>, color:"AntiqueWhite"},
                        {title:<a href = "https://www.youtube.com/watch?v=TI0DGvqKZTI" target = "_blank">Overdose</a>, color:"#c7c2e7"},
                        {title:<a href = "https://www.youtube.com/watch?v=IdssuxDdqKk" target = "_blank">Ko Ko Pop</a>, color:"#efd593"}];
                        
    return (
        <div className = "kpop-segment">
            <div className = "kpop-title">
                KPOP
            </div>
            <div className = "kpop-content">

                <ul id="frame-container" className = "svt">
                    <h1 className = "title">Seventeen</h1>
                    <li class="frame">
                        <a href="https://en.wikipedia.org/wiki/Seventeen_(South_Korean_band)" target = "_blank">
                            <img src={Seventeen} alt="Seventeen photo" />
                        </a>
                    </li>
                    
                    <li className = "song-list">
                        <SongList list={svtSongList}/>
                    </li>
                </ul>

                <ul id="frame-container" className = "exo">
                    <h1 className = "title">EXO</h1>
                    <li class="frame">
                        <a href="https://en.wikipedia.org/wiki/Exo" target = "_blank">
                            <img src={EXO} alt="EXO photo" />
                        </a>
                    </li>
                    <li className = "song-list">
                        <SongList list={exoSongList}/>
                    </li>
                </ul>
            </div>
        </div>
    );
    
};

export default KpopSegment;