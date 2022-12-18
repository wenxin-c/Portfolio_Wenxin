import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, theme, Card } from 'antd';
import '../styles/skill_segment.css'

const { Header, Content, Sider } = Layout;

function ProjectSegment(){
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return (
        <div>
            <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >

            {/* The part of the code is to update projects
                Having one more Card element to insert in one more project*/}
            <div className="site-card-border-less-wrapper" >
                <Card
                title="GENUS Tele Attendance Bot"
                bordered={false}
                style={{
                    width: 310,
                    marginRight:'10px',
                    marginBottom:'10px',
                }}
                >
                <p>Status: ongoing</p>
                <p>Date: 01/12/2022 -</p>
                <p>Description: The aim of the project is to create a Telegram Attendance bot to facilitate NUS Guitar Ensemble attendance taking for members. </p>
                <p>Tech sets: 
                    <ul>
                        <li>MySQL</li>
                        <li>JavaScript</li>
                        <li>NodeJS</li>
                        <li>Telegram API</li>
                        <li>Google Cloud</li>
                    </ul>
                </p>
               
                </Card>

                <Card
                title="NUS Obital Project - PMaster"
                bordered={false}
                style={{
                    width: 310,
                    marginRight:'10px',
                    marginBottom:'10px',
                }}
                >
                <p>Status: Completed</p>
                <p>Date: May 2022 - July 2022</p>
                <p>Description: PMaster is a web-app that helps users manage their projects easily and systematically. It has three main content sections, namely cost management, task management and human resource management.  
                PMaster organises and stores user input data systematically and allows efficient data update and retrieval.  
                </p>
                <p>Tech sets: 
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
                <p>Project Link: <a href='https://orbital-pmaster-backend.herokuapp.com/'>Link</a></p>
                <button>Learn More</button>
                </Card>

                <Card
                title="Enrichment Science Training and Research Program(ESTaR) - ChemistryEscapeRoom"
                bordered={false}
                style={{
                    width: 310,
                    marginRight:'10px',
                    marginBottom:'10px',
                }}
                >
                <p>Status: Completed</p>
                <p>Date: July 2019 - January 2020</p>
                <p>Description: The project is an Augmented Reality mobile application ChemistryEscapeRoom to allow students conduct virtual Chemistry experiments on their mobile devices outside school laboratories to enhance understanding of Chemistry concepts. </p>
                <p>Tech sets: 
                    <ul>
                        <li>Unity</li>
                        <li>IOS</li>
                    </ul>
                </p>
                <p>Achievement: Merit award in the Singapore Science and Engineering Fair in 2020</p>
                </Card>

                <Card
                title="CG1111A Project - MBot"
                bordered={false}
                style={{
                    width: 310,
                    marginRight:'10px',
                    marginBottom:'10px',
                }}
                >
                <p>Status: Completed</p>
                <p>Date: Aug 2021 - Nov 2021</p>
                <p>Description: Collaborated with teammates to develop a robotic vehicle, MBot, that can detect different colors using color sensors and navigate through a maze automatically with the help of ultrasonic and infrared sensors.</p>
                <p>Tech sets: 
                    <ul>
                        <li>Hardware: Ultrasonic sensor, Infrared emitter and receiver, light dependent resistor, Arduino Uno</li>
                        <li>Software: C++, Arduino IDE</li>
                    </ul>
                </p>

                </Card>

                <Card
                title="CG2111A Project - Alex"
                bordered={false}
                style={{
                    width: 310,
                    marginRight:'10px',
                    marginBottom:'10px',
                }}
                >
                <p>Status: Completed</p>
                <p>Date: Jan 2022 - Apr 2022</p>
                <p>Description: Collaborated with teammates to develop a robotic vehicle, Alex, that is equipped with Simultaneous Localization and Mapping. It is remotely controlled by a local laptop through a secure Transport Layer Security connection and can send the real time map of the environment back to the control station.</p>
                <p>Tech sets: 
                    <ul>
                        <li>Hardware: RPLiDAR sensor, Arduino Uno, Raspberry Pi</li>
                        <li>Software: Baremetal Programming, Serial Communication Protocol, SLAM algorithm, TLS connection, ROS</li>
                    </ul>
                </p>

                </Card>
            </div>
            
          </Content>

        </div>
    );

}

export default ProjectSegment;