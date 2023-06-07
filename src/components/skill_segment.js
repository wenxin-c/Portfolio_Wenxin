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
                <Card className = "skill-card"
                title="Programming Language"
                bordered={false}
                style={{
                    width: 260,
                    marginRight:'10px',
                    marginBottom:'10px',
                }}
                >
                <p>C/C++</p>
                <p>Java</p>
                <p>Verilog</p>
                <p>Baremetal Programming</p>
                </Card>
                
                <Card className = "skill-card"
                title="Web Front-end Development"
                bordered={false}
                style={{
                    width: 260,
                    marginRight:'10px',
                    marginBottom:'10px',
                }}
                >
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>ReactJS</p>
                </Card>

                <Card className = "skill-card"
                title="Back-end Development"
                bordered={false}
                style={{
                    width: 260,
                    marginRight:'10px',
                    marginBottom:'10px',
                }}
                >
                <p>Database/SQL</p>
                <p>Java API</p>
                <p>NodeJS</p>
                <p>ExpressJS</p>
                </Card>

                <Card className = "skill-card"
                title="Hardwares"
                bordered={false}
                style={{
                    width: 260,
                    marginRight:'10px',
                    marginBottom:'10px',
                }}
                >
                <p>Microcontrollers
                    <ul>
                        <li>Arduino</li>
                        <li>Raspberry Pi</li>
                    </ul>
                </p>
                <p>Basic electronic components (e.g conductor, inductor)</p>
                <p>Electronic Circuit Design</p>
                </Card>

            </div>
            
          </Content>

        </div>
    );

}

export default SkillSegment;