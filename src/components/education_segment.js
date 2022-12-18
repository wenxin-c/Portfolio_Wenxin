import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, theme, Card } from 'antd';
import '../styles/skill_segment.css'

const { Header, Content, Sider } = Layout;

function EducationSegment(){
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

            {/* The part of the code is to update education
                Having one more Card element to insert in one more education*/}
            <div className="site-card-border-less-wrapper" >
                <Card
                title="National University of Singapore"
                bordered={false}
                style={{
                    width: 285,
                    marginRight:'10px',
                    marginBottom:'10px',
                }}
                >
                <p>Status: Undergraduate</p>
                <p>Major: Computer Engineering</p>
               
                </Card>

                <Card
                title="National Junior College"
                bordered={false}
                style={{
                    width: 250,
                    marginRight:'10px',
                    marginBottom:'10px',
                }}
                >
                <p>Degree: High School</p>
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
                <p>A Level: 
                    <ul>
                        <li>Rank points: 87.5</li>
                        <li>H3 Physics: Merit</li>
                    </ul>
                </p>
                </Card>

                <Card
                title="Crescent Girls' School"
                bordered={false}
                style={{
                    width: 250,
                    marginRight:'10px',
                    marginBottom:'10px',
                }}
                >
                <p>Degree: Secondary School</p>
                <p>O Level:
                    <ul>
                        <li>L1R5: 6</li>
                    </ul>
                </p>
                </Card>

                <Card
                title="Additional Information"
                bordered={false}
                style={{
                    width: 250,
                    marginRight:'10px',
                    marginBottom:'10px',
                }}
                >
                <p>Experience: I was having education in China before I went to Sinagpore in 2016. </p>

                </Card>

            </div>
            
          </Content>

        </div>
    );

}

export default EducationSegment;