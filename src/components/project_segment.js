import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Popover } from 'antd';
import '../styles/project_segment.css'
import PMaster_profile from '../images/PMaster_profile.png'
import MBot_profile from '../images/MBot_profile.png'
import Alex_profile from '../images/Alex_profile.png'
import ESTaR_profile from '../images/ESTaR_profile.jpg'
import Ongoing from '../images/Ongoing.png'
import Wellnuspp from "../images/wellnuspp.png"
import Duke from "../images/duke.png"
import { Outlet, Link } from "react-router-dom";

const textGenus = <span>GENUS Tele Attendance Bot</span>;
const contentGenus = (
        <div>
            <p>Status: ongoing</p>
            <p>Date: 01/12/2022 -</p>
            <p>Description: The aim of the project is to create a Telegram Attendance bot to facilitate NUS Guitar Ensemble attendance taking for members. </p>
            <p>Tech set: 
                <ul>
                    <li>MySQL</li>
                    <li>JavaScript</li>
                    <li>NodeJS</li>
                    <li>Telegram API</li>
                    <li>Google Cloud</li>
                </ul>
            </p>
        </div>
);

const textDuke = <span>Duke</span>
const contentDuke = (
    <div>
        <p>Status: completed</p>
        <p>Date: 13/01/2023 - 03/03/2023</p>
        <p>Description: Duke is a Command Line Personal Assistant Chatbot that help users to 
        keep track of daily tasks. It enables users to add, update, delete and search for tasks.</p>
        <p>Tech set: Java</p>
        <p><a href = "https://wenxin-c.github.io/CS2113-Duke/">User Guide</a></p>
    </div>
);

const textWellnuspp = <span>WellNUS++</span>
const contentWellnuspp = (
    <div>
        <p>Status: completed</p>
        <p>Date: 01/03/2023 - 10/04/2023</p>
        <p>Description: WellNUS++ is a Command Line Interface(CLI) application for NUS Computing students 
        to keep track and improve their physical and mental wellness in various aspects such as atomic habit
        development and self reflection. The commands are designed to be concise and optimised for CLI.</p>
        <p>Tech set: Java</p>
        <p><a href = "https://ay2223s2-cs2113-t12-4.github.io/tp/">Document Link</a></p>
        <p><a href = "https://ay2223s2-cs2113-t12-4.github.io/tp/team/wenxin-c.html">My Contribution</a></p>
    </div>
);

const textOrbital = <span>NUS Obital Project - PMaster</span>
const contentOrbital = (
    <div>
        <p>Status: Completed</p>
        <p>Date: May 2022 - July 2022</p>
        <p>Description: PMaster is a web-app that helps users manage their projects easily and systematically. It has three main content sections, namely cost management, task management and human resource management.  
        PMaster organises and stores user input data systematically and allows efficient data update and retrieval.  
        </p>
        <p>Tech set: 
            <ul>
                <li>HTML && CSS</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>MySQL</li>
                <li>Heroku</li>
            </ul>
        </p>
        <p>Ashievement: Apollo 11</p>
        <p>Project Link: <a href='https://orbital-pmaster-backend.herokuapp.com/' target='_blank'>Link</a></p>
        <button><Link to='/Content/Projects/PMaster'>Learn More</Link></button>
    </div>
    
);

const textSsef = <span>Enrichment Science Training and Research Program(ESTaR) - ChemistryEscapeRoom</span>
const contentSsef = (
    <div>
        <p>Status: Completed</p>
        <p>Date: July 2019 - January 2020</p>
        <p>Description: The project is an Augmented Reality mobile application ChemistryEscapeRoom to allow students conduct virtual Chemistry experiments on their mobile devices outside school laboratories to enhance understanding of Chemistry concepts. </p>
        <p>Tech set: 
            <ul>
                <li>Unity</li>
                <li>IOS</li>
            </ul>
        </p>
        <p>Achievement: Merit award in the Singapore Science and Engineering Fair in 2020</p>
    </div>
);

const textEpp1 = <span>CG1111A Project - MBot</span>
const contentEpp1 = (
    <div>
        <p>Status: Completed</p>
        <p>Date: Aug 2021 - Nov 2021</p>
        <p>Description: Collaborated with teammates to develop a robotic vehicle, MBot, that can detect different colors using color sensors and navigate through a maze automatically with the help of ultrasonic and infrared sensors.</p>
        <p>Tech set: 
            <ul>
                <li>Hardware: Ultrasonic sensor, Infrared emitter and receiver, light dependent resistor, Arduino Uno</li>
                <li>Software: C++, Arduino IDE</li>
            </ul>
        </p>
    </div>
);

const textEpp2 = <span>CG2111A Project - Alex</span>
const contentEpp2 = (
    <div>
        <p>Status: Completed</p>
        <p>Date: Jan 2022 - Apr 2022</p>
        <p>Description: Collaborated with teammates to develop a robotic vehicle, Alex, that is equipped with Simultaneous Localization and Mapping. It is remotely controlled by a local laptop through a secure Transport Layer Security connection and can send the real time map of the environment back to the control station.</p>
        <p>Tech set: 
            <ul>
                <li>Hardware: RPLiDAR sensor, Arduino Uno, Raspberry Pi</li>
                <li>Software: Baremetal Programming, Serial Communication Protocol, SLAM algorithm, TLS connection, ROS</li>
            </ul>
        </p>
    </div>
);



const buttonWidth = 90;
const ProjectSegment = () => (
  <div className = "project-segment">
    <div className = "project-content">
        <div className = "project-button"
        style={{
            width: buttonWidth * 4,
        }}
        >

            <Popover 
                placement="rightTop"
                title={textGenus} 
                content={contentGenus} 
                trigger="click"
            >
                <Button className = "project-btn">
                    <div className='project'>
                        <img className = "project-pic" src={Ongoing} width='100%' height="80%"/>
                        <span className="project-name">GENUS Telegram Attendance Bot</span>
                    </div> 
                </Button>
            </Popover>

            <Popover 
                placement="rightTop"
                title={textDuke} 
                content={contentDuke} 
                trigger="click"
            >
                <Button className = "project-btn">
                    <div className='project'>
                        <img className = "project-pic" src={Duke} width='100%' height="80%"/>
                        <span className="project-name">Duke</span>
                    </div> 
                </Button>
            </Popover>

            <Popover 
                placement="rightTop"
                title={textWellnuspp} 
                content={contentWellnuspp} 
                trigger="click"
            >
                <Button className = "project-btn">
                    <div className='project'>
                        <img className = "project-pic" src={Wellnuspp} width='100%' height="80%"/>
                        <span className="project-name">WellNUS++</span>
                    </div> 
                </Button>
            </Popover>

            <Popover 
                placement="rightTop"
                title={textOrbital} 
                content={contentOrbital} 
                trigger="click"
            >
                <Button className = "project-btn">
                    <div className='project'>
                        <img className = "project-pic" src={PMaster_profile} width='100%' height="80%"/>
                        <span className="project-name">NUS Obital Project - PMaster</span>
                    </div> 
                </Button>
            </Popover>

            <Popover 
                placement="rightTop"
                title={textSsef} 
                content={contentSsef} 
                trigger="click"
            >
                <Button className = "project-btn">
                    <div className='project'>
                        <img className = "project-pic" src={ESTaR_profile} width='100%' height="80%"/>
                        <span className="project-name">ESTaR - ChemistryEscapeRoom</span>
                    </div> 
                </Button>
            </Popover>

            <Popover 
                placement="rightTop"
                title={textEpp1} 
                content={contentEpp1} 
                trigger="click"
            >
                <Button className = "project-btn">
                    <div className='project'>
                        <img className = "project-pic" src={MBot_profile} width='100%' height="80%"/>
                        <span className="project-name">CG1111A Project - MBot</span>
                    </div> 
                </Button>
            </Popover>

            <Popover 
                placement="rightTop"
                title={textEpp2} 
                content={contentEpp2} 
                trigger="click"
            >
                <Button className = "project-btn">
                    <div className='project'>
                        <img className = "project-pic" src={Alex_profile} width='100%' height="80%"/>
                        <span className="project-name">CG2111A Project - Alex</span>
                    </div> 
                </Button>
            </Popover>

        </div>
    </div>

  </div>
);

export default ProjectSegment;