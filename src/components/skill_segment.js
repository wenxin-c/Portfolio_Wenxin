import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, theme, Card } from 'antd';
import '../styles/skill_segment.css'

const { Header, Content, Sider } = Layout;

function SkillSegment(){
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

            {/* The part of the code is to update skills
                Having one more Card element to insert in one more skill*/}
            <div className="skill-content" >

                <div className="card" >
                    <img src="https://picsum.photos/id/380/600/300"/>
                    <h2 className = "skill-title">Programming Language</h2>
                    <div className = "skill-text">
                        <p>C/C++</p>
                        <p>Java</p>
                        <p>Verilog</p>
                        <p>Baremetal Programming</p>
                    </div>
                </div>


                <div className="card" >
                    <img src="https://picsum.photos/id/80/600/300"/>
                    <h2 className = "skill-title">Web Front-end Development</h2>
                    <div className = "skill-text">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>ReactJS</p>
                    </div>
                </div>

                <div className="card" >
                    <img src="https://picsum.photos/id/280/600/300"/>
                    <h2 className = "skill-title">Web Back-end Development</h2>
                    <div className = "skill-text">
                        <p>Database/SQL</p>
                        <p>Java API</p>
                        <p>NodeJS</p>
                        <p>ExpressJS</p>
                    </div>
                </div>

                <div className="card" >
                    <img src="https://picsum.photos/id/260/600/300"/>
                    <h2 className = "skill-title">Web Back-end Development</h2>
                    <div className = "skill-text">
                        <p>Microcontrollers (e.g. Arduino, Raspberry Pi)</p>
                        <p>Electronic components (e.g conductor, inductor)</p>
                        <p>Electronic Circuit Design</p>
                    </div>
                </div>




            </div>
            
          </Content>



        </div>
    );

}

export default SkillSegment;