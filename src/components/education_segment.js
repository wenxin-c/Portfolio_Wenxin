import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, theme, Card } from 'antd';
import '../styles/skill_segment.css'
import '../styles/education_segment.css'
import NUS_logo from '../images/nus_logo.jpg'
import NJC_logo from '../images/njc_logo.png'
import CGS_logo from '../images/cgs_logo.png'

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
                title=<div className='schoolTitle'><img src={NUS_logo} width='50px'/><span className='schoolName'>National University of Singapore</span></div>
                bordered={false}
                style={{
                    width: 340,
                    marginRight:'10px',
                    marginBottom:'10px',
                }}
                >
                <p>Status: Undergraduate</p>
                <p>Major: Computer Engineering</p>
               
                </Card>

                <Card
                title=<div className='schoolTitle'><img src={NJC_logo} width='50px'/><span className='schoolName'>National Junior College</span></div>
                bordered={false}
                style={{
                    width: 330,
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
                title=<div className='schoolTitle'><img src={CGS_logo} width='40px' height='40px'/><span className='schoolName'>Crescent Girls' School</span></div>
                bordered={false}
                style={{
                    width: 330,
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