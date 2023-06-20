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
            <img className = "project-pic" src={Ongoing} width='100%' height="80%"/>
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
        <img className = "project-pic" src={Duke} width='100%' height="80%"/>
        <p>Status: completed</p>
        <p>Date: 13/01/2023 - 03/03/2023</p>
        <p>Description: Duke is a Command Line Personal Assistant Chatbot that help users to 
        keep track of daily tasks. It allows users to add, update, delete and search for tasks.</p>
        <p>Tech set: Java</p>
        <p><a href = "https://wenxin-c.github.io/CS2113-Duke/">User Guide</a></p>
    </div>
);

const textWellnuspp = <span>WellNUS++</span>
const contentWellnuspp = (
    <div>
        <img className = "project-pic" src={Wellnuspp} width='100%' height="80%"/>
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
        <img className = "project-pic" src={PMaster_profile} width='100%' height="80%"/>
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
        <img className = "project-pic" src={ESTaR_profile} width='100%' height="80%"/>
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
        <img className = "project-pic" src={MBot_profile} width='100%' height="80%"/>
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
        <img className = "project-pic" src={Alex_profile} width='100%' height="80%"/>
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


<div class="container">

  <div class="card-columns">
  {/* <div class=""> */}

    {/* First Card */}

    <Popover 
        placement="rightTop"
        title={textGenus} 
        content={contentGenus} 
        trigger="click"
    >
        <Button className = "project-btn">
            {/* <div className='project'>
                <img className = "project-pic" src={Ongoing} width='100%' height="80%"/>
                <span className="project-name">GENUS Telegram Attendance Bot</span>
            </div>  */}
            <div class="card text-white border-0">
            <div class="card-img-overlay --card-img-overlay-purple d-flex flex-column justify-content-between align-items-start p-5">
              <div class="mb-4">
                <div class="d-flex justify-content-between w-100 mb-3">
                  <div><span class="badge badge-warning3 project">GENUS Telegram <br/> Attendance Bot</span></div>
                </div>
              </div>
            </div>
            </div>
        </Button>
    </Popover>

    {/* Second Card */}

    <Popover 
        placement="rightTop"
        title={textDuke} 
        content={contentDuke} 
        trigger="click"
    >
        <Button className = "project-btn">
        <div class="card border-0">
          <div class="position-relative text-white">
            <div class="card-img-overlay three"></div>
            <div class="card-smooth-caption">
            </div>
          </div>
          <div class="card-footer">
            <div class="media align-items-center">
              <div class="media-body">
              <div className= "project card-title text-white">
                      {/* <img className = "project-pic" src={Duke} width='100%' height="80%"/> */}
                      <span className="project-name">Duke</span>
                  </div> 
              </div>
              <div class="footerright">
                <div class="tnlink3"><i class="fas fa-heart" aria-hidden="true"></i></div>
                <div class="tnlink3"><i class="fas fa-share-nodes" aria-hidden="true"></i></div>
              </div>
            </div>
          </div>
        </div>
        </Button>
    </Popover>

    {/* Third Card */}

    <Popover 
        placement="rightTop"
        title={textWellnuspp} 
        content={contentWellnuspp} 
        trigger="click"
    >
        <Button className = "project-btn">
          <div class="card text-white border-0">
            <div class="card-img-overlay --card-img-overlay-purple d-flex flex-column justify-content-between align-items-start p-5 four"></div>
            <div class="card-img-overlay card-overlay-black hover-light d-flex flex-column justify-content-between align-items-start">
              <div class="mb-4 wellnus-name">
                <div class="d-flex justify-content-between w-100 mb-3">
                  <div><span class="badge badge-info project">WellNUS++</span></div>
                </div>
              </div>
            </div>
          </div>
        </Button>
    </Popover>

    {/* Fourth Card */}
    <Popover 
        placement="right"
        title={textOrbital} 
        content={contentOrbital} 
        trigger="click"
    >
        <Button className = "project-btn">
          <div class="card border-0 three">
            <div class="position-relative">
              <div class="card-img-overlay two"><span class="badge badge-light text-uppercase">PMaster</span></div>
            </div>
            <div class="card-body two project">
              <h5 class="card-title">NUS Obital Project <br/> - PMaster</h5>
            </div>
          </div>
        </Button>
    </Popover>


    {/* Fifth Card */}

    <Popover 
        placement="rightTop"
        title={textSsef} 
        content={contentSsef} 
        trigger="click"
    >
        <Button className = "project-btn">
            <div className='project'>
                {/* <img className = "project-pic" src={ESTaR_profile} width='100%' height="80%"/>
                <span className="project-name">ESTaR - ChemistryEscapeRoom</span> */}
                <div class="card bg-primary text-white text-center p-4 border-0 two">
                  <blockquote class="blockquote mb-0">
                    <p class="mb-0 project-name">ESTaR - ChemistryEscapeRoom</p>
                  </blockquote>
                </div>
            </div> 
        </Button>
    </Popover>


    {/* Six Card */}

    <Popover 
        placement="right"
        title={textEpp1} 
        content={contentEpp1} 
        trigger="click"
    >
        <Button className = "project-btn">
            <div className='project'>
                {/* <img className = "project-pic" src={MBot_profile} width='100%' height="80%"/>
                <span className="project-name">CG1111A Project - MBot</span> */}
                <div class="card text-center border-0 mb-4">
                  <div class="card-cup bg-primary"></div>
                  <div class="card-body proavatar">
                    <div class="text-muted project-name">CG1111A Project - MBot</div>
                  </div>
                </div>
            </div> 
        </Button>
    </Popover>


    {/* Seventeen Card */}

    <Popover 
        placement="rightBottom"
        title={textEpp2} 
        content={contentEpp2} 
        trigger="click"
    >
        <Button className = "project-btn">
            <div className='project'>
                {/* <img className = "project-pic" src={Alex_profile} width='100%' height="80%"/>
                <span className="project-name">CG2111A Project - Alex</span> */}
                <div class="card text-white border-0">
                  <div class="card-img-overlay --card-img-overlay-purple d-flex flex-column justify-content-between align-items-start p-5 three"></div>
                  <div class="card-img-overlay card-overlay-black hover-light d-flex flex-column justify-content-between align-items-start">
                    <div class="d-flex justify-content-between w-100 mb-3">
                      <div><span class="badge badge-warning">CG2111A Project - Alex</span>
                      {/* <span class="badge badge-lightblue mr-2"> TRENDS</span> */}
                      </div>
                    </div>
                  </div>
                </div>
            </div> 
        </Button>
    </Popover>



    {/* Eighth Card */}
    
    {/* <div class="card bg-primary text-white text-center p-4 border-0">
      <blockquote class="blockquote mb-0">
        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
        <footer class="blockquote-footer text-white"><small>Someone famous in
            <cite title="Source Title"> Source Title</cite></small></footer>
      </blockquote>
    </div> */}



    {/* Ninth Card */}

    {/* <div class="card border-0 wtab">
      <div class="card-body three"><small class="text-muted">This is my tag</small>
        <h5>Lorem ipsum dolor sit amet consectetur adipisi</h5>
        <div class="footer">
          <div class="d-flex justify-content-between w-100">
            <div>
              <a class="dateit"><i class="fa fa-calendar pr-1"></i> Jan 2023</a>
              <a class="locit"><i class="fa fa-twitter pr-1"></i> Australia</a>
            </div>
            <a>
              <i class="fa fa-twitter pr-1"> </i>
            </a>
          </div>
        </div>
      </div>
    </div> */}


     {/* Tenth Card */}

     {/* <div class="card text-center border-0">
      <div class="card-body">
        <div class="card-card-avatar mb-4">
          <div class="card-avatar avatar-border two">
          </div>
        </div>
        <div class="mb-5">
          <h5 class="card-title mb-1">Hannah Luebbering</h5>
          <div class="text-muted">Applied Mathematics</div>
        </div>
        <div class="d-flex justify-content-around align-items-center"><a class="card-link text-uppercase" href="javascript://">Accept</a><a class="card-link text-uppercase text-dark" href="javascript://">Denied</a></div>
      </div>
    </div> */}

    {/* Eleventh Card */}

    {/* <div class="card bg-secondary two text-white p-4 border-0">
      <div class="container incard">
        <h2 class="indent">Inset Heading</h2>
        <p class="indent"> Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod proident sed excepteur excepteur magna. </p>
      </div>
    </div> */}

    {/* Twelfth Card */}

    {/* <div class="card bg-primary text-white text-center p-4 border-0 four">

    </div> */}

  </div>
</div>







            {/* 

            

            







 */}

        </div>
    </div>

  </div>
);

export default ProjectSegment;