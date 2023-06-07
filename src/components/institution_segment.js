import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/skill_segment.css'
import '../styles/institution_segment.css'
import { Button, Popover } from 'antd';
import NUS_logo from '../images/nus_logo.jpg'
import NJC_logo from '../images/njc_logo.png'
import CGS_logo from '../images/cgs_logo.png'
import NUS_pic from "../images/nus.png"
import NJC_pic from "../images/njc.png"

const textUni = <span>National University of Singapore</span>;
const contentUni = (
    <div>
        <p>Status: Undergraduate</p>
        <p>Degree: Bachelor of Engineering</p>
        <p>Major: Computer Engineering</p>
        <p>Course: 
                <ul>
                    <li>CS1231: Discrete Structures</li>
                    <li>CS2040C: Data Structure and Algorithm</li>
                    <li>CS2102: Database Systems</li>
                    <li>CS2113: Software Engineering & Object Oriented Programming</li>
                    <li>CG1111A: Engineering Principles and Practice I</li>
                    <li>CG2111A: Engineering Principles and Practice II</li>
                </ul>
        </p>
    </div>
);

const textJc = <span>National Junior College</span>
const contentJc = (
    <div>
        <p>Degree: A Level
            <ul>
                <li>Rank points: 87.5</li>
                <li>H3 Physics: Merit</li>
            </ul>
        </p>
        <p>Stream: Science Stream</p>
        <p>Course: 
            <ul>
                <li>Mathematics</li>
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Economics</li>
                <li>General Paper</li>
                <li>H3 Physics</li>
            </ul>
        </p>
    </div>
    
);

const textSec = <span>Crescent Girls' School</span>
const contentSec = (
    <div>
        <p>Degree: O Level
            <ul>
                <li>L1R5: 6</li>
            </ul>
        </p>
        <p>Course: 
            <ul>
                <li>English</li>
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Biology</li>
                <li>Higher Chinese</li>
                <li>Elementary Mathematics</li>
                <li>Additional Mathemetics</li>
                <li>Geography (full)</li>
                <li>History (elective)</li>
                <li>Social Studies (elective)</li>
            </ul>
        </p>
    </div>
);
const buttonWidth = 90;
const InstitutionSegment = () => (
  <div className = "education-segment">
    <h1 className = "education-title">Institutions</h1>
    <div className = "education-content">
        <div className = "education-button"
        style={{
            width: buttonWidth * 4,
        }}
        >

            <Popover 
                placement="rightTop"
                title={textUni} content={contentUni} trigger="click">
                <Button className = "NUS"><div className='school'><img src={NUS_logo} width='50px'/><span className='schoolName'>National University of Singapore</span></div> </Button>
            </Popover>

            <Popover 
                placement="right"
                title={textJc} content={contentJc} trigger="click">
                <Button className = "NJC"><div className='school'><img src={NJC_logo} width='50px'/><span className='schoolName'>National Junior College</span></div> </Button>
            </Popover>

            <Popover 
                placement="rightBottom"
                title={textSec} content={contentSec} trigger="click">
                <Button className = "CGS"><div className='school'><img src={CGS_logo} width='40px' height='40px'/><span className='schoolName'>Crescent Girls' School</span></div> </Button>
            </Popover>

        </div>
        <div className = "education-picture">
            <img className = "nus-pic" src = {NUS_pic} alt = "NUS picture"/>
            <img className = "njc-pic" src = {NJC_pic} alt = "NJC picture"/>
        </div>
    </div>
    

  </div>
);

export default InstitutionSegment;