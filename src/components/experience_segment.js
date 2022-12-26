import React from 'react';
import ReactDOM from 'react-dom';
import { Avatar, Layout, theme, Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import '../styles/experience_segment.css'
import '../styles/skill_segment.css'
import TA_profile from '../images/TA_profile.png'
const { Meta } = Card;

const { Header, Content, Sider } = Layout;

function ExperienceSegment(){
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

            <h1 className='workTitle'>Work Experience</h1>

            {/* The part of the code is to update work
                Having one more Card element to insert in one more work*/}
            <div className="site-card-border-less-wrapper" >
                <Card
                    style={{
                    width: 350,
                    }}
                    cover={
                    <img
                        alt="TA photo"
                        src={TA_profile}
                    />
                    }
                >
                    <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Teaching Assistant"
                    description=
                        <div>
                            <p>Company: <br></br>National University of Singapore</p>
                            <p>Role: <br></br>Teaching Assistant for module CG1111A, AY22/23 Sem 1</p>
                            <p>Job Description: <br></br>Guide students during lab experiments and clarify concepts to them.</p>
                        </div>
                    />
                </Card>
            </div>
            
          </Content>

        </div>
    );

}

export default ExperienceSegment;