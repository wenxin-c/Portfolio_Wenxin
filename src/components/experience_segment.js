import React from 'react';
import ReactDOM from 'react-dom';
import { Avatar, Layout, theme, Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import '../styles/experience_segment.css'
import '../styles/skill_segment.css'
import TA_profile from '../images/TA_profile.png'
import Grey_Dot from "../images/grey-dot.png"
import Yellow_Dot from "../images/yellow-dot.png"
import Blue_Dot from "../images/blue-dot.png"
import HDB_Pic from "../images/hdb-img.jpg"

const { Meta } = Card;

const { Header, Content, Sider } = Layout;

function ExperienceSegment(){
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return (
        <div>
            <Content  className = "work-segment"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >

            <h1 className='work-title'>Work Experience</h1>

            {/* The part of the code is to update work
                Having one more Card element to insert in one more work*/}
            <div className="work-content" >

                <Card className = "hdb-card"
                    style={{
                    width: 330,
                    }}
                    cover={
                    <img className = "hdb-img"
                        alt="HDB photo"
                        src={HDB_Pic}
                    />
                    }
                >
                    <Meta
                    avatar={<Avatar src={Blue_Dot} />}
                    title="HDB Software Engineer Intern"
                    description=
                        <div>
                            <p>Company: <br></br>Housing Development Board(HDB)</p>
                            <p>Role: <br></br>Software Engineer Intern, May 2023 - October 2023</p>
                            <p>Job Description: <br></br>The main job is to assist in the development of Portal and Web application 
                            as well as Java API and Business Analytics Dashboards for Building and Estate Management related systems 
                            that consists of both Internet-facing e-Services and Intranet modules.</p>
                        </div>
                    />
                </Card>

                <Card className = "epp2-card"
                    style={{
                    width: 330,
                    }}
                    cover={
                    <img className = "epp1Ta-img"
                        alt="TA photo"
                        src={TA_profile}
                    />
                    }
                >
                    <Meta
                    avatar={<Avatar src={Yellow_Dot} />}
                    title="Teaching Assistant"
                    description=
                        <div>
                            <p>Company: <br></br>National University of Singapore</p>
                            <p>Role: <br></br>Teaching Assistant for module CG2111A, AY22/23 Sem 2 August 2023 - November 2023</p>
                            <p>Job Description: <br></br>Guide students during lab experiments and clarify concepts to them.</p>
                        </div>
                    />
                </Card>

                <Card className = "epp1-card"
                    style={{
                    width: 330,
                    }}
                    cover={
                    <img className = "epp1Ta-img"
                        alt="TA photo"
                        src={TA_profile}
                    />
                    }
                >
                    <Meta
                    avatar={<Avatar src={Grey_Dot} />}
                    title="Teaching Assistant"
                    description=
                        <div>
                            <p>Company: <br></br>National University of Singapore</p>
                            <p>Role: <br></br>Teaching Assistant for module CG1111A, AY22/23 Sem 1, January 2023 - April 2023</p>
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