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
            <div className="site-card-border-less-wrapper" >
                <Card
                title="Front-end Development"
                bordered={false}
                style={{
                    width: 230,
                    marginRight:'10px',
                    marginBottom:'10px',
                }}
                >
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>ReactJS</p>
                </Card>

                <Card
                title="Back-end Development"
                bordered={false}
                style={{
                    width: 230,
                    marginRight:'10px',
                    marginBottom:'10px',
                }}
                >
                <p>Database</p>
                <p>SQL</p>
                <p>NodeJS</p>
                <p>ExpressJS</p>
                </Card>

                <Card
                title="Programming Language"
                bordered={false}
                style={{
                    width: 230,
                    marginRight:'10px',
                    marginBottom:'10px',
                }}
                >
                <p>C/C++</p>
                <p>Data Structures & Algorithms</p>
                <p>Verilog</p>
                <p>Baremetal Programming</p>
                </Card>

                <Card
                title="Microcontrollers"
                bordered={false}
                style={{
                    width: 230,
                    marginRight:'10px',
                    marginBottom:'10px',
                }}
                >
                <p>Arduino</p>
                <p>Raspberry Pi</p>
                </Card>

                <Card
                title="Hardware"
                bordered={false}
                style={{
                    width: 230,
                    marginRight:'10px',
                    marginBottom:'10px',
                }}
                >
                <p>Basic Electronic Components</p>
                <p>Electronic Circuit Design</p>
                
                </Card>
            </div>
            
          </Content>

        </div>
    );

}

export default SkillSegment;