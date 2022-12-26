import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, theme, Card, Collapse, Carousel } from 'antd';
import '../styles/skill_segment.css'
import '../styles/cca_segment.css'
import Springtide1 from '../images/springtide1.jpg'
import Springtide2 from '../images/springtide2.jpg'
import Springtide3 from '../images/springtide3.jpg'
import Springtide4 from '../images/springtide4.jpg'
import ECE1 from '../images/ece1.jpg'
import ECE2 from '../images/ece2.jpg'
import ECE3 from '../images/ece3.jpg'

const { Panel } = Collapse;
const { Header, Content, Sider } = Layout;

function CCASegment(){
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

            {/* The part of the code is to update CCA
                Having one more Card element to insert in one more education*/}
            <h1 className="ccaTitle">Co-Curriculum Activities</h1>
            <div className="site-card-border-less-wrapper" >
            <Collapse defaultActiveKey={['1']}  >
                <Panel header="NUS Guitar Ensemble" key="1">
                    <div className="genusContent">
                        <Carousel >
                            <div>
                                <h3 className="photoWrapper" ><img src={Springtide1} alt="springtide photo1" height='500px' width='100%'/></h3>
                            </div>
                            <div>
                                <h3 className="photoWrapper" ><img src={Springtide2} alt="springtide photo2" height='500px' width='100%'/></h3>
                            </div>
                            <div>
                                <h3 className="photoWrapper" ><img src={Springtide3} alt="springtide photo3" height='500px' width='40%'/></h3>
                            </div>
                            <div>
                                <h3 className="photoWrapper" ><img src={Springtide4} alt="springtide photo4" height='500px' width='70%'/></h3>
                            </div>
                        </Carousel>
                        <p>NUS Guitar Ensemble(GENUS) is a member of NUS Centre of the Arts, and one of 20 co-curricular arts activity groups (CCA) distinguished as Arts Excellence Groups in NUS. 
                        I joined GENUS in Year 1 Sem 1.
                        I really enjoy playing the guitar as an ensemble, with a group of friends who share the common interest with me. 
                        At the same time, I have learned more music knowledge and developed teamwork, communication and leadership skills. <br></br><br></br>
                        To give back to my CCA, I took on the Treasurer role in AY22/23 to take care of CCA finance. <br></br><br></br>
                        The above photos feature GENUS AY21/22 Concert <b>Springtide</b> </p>
                    </div>
                </Panel>
                
                <Panel header="NUS Electrical and Computer Engineering Club" key="2">
                    <div className="eceContent">
                        <Carousel >
                            <div>
                                <h3 className="photoWrapper" ><img src={ECE1} alt="ece photo1" height='500px' width='70%'/></h3>
                            </div>
                            <div>
                                <h3 className="photoWrapper" ><img src={ECE2} alt="ece photo2" height='500px' width='65%'/></h3>
                            </div>
                            <div>
                                <h3 className="photoWrapper" ><img src={ECE3} alt="ece photo3" height='500px' width='90%'/></h3>
                            </div>
                            
                        </Carousel>
                        <p>The National University of Singapore Electrical and Computer Engineering Club (ECE Club) is a link - bridge between the students and the Department of Electrical and Computer Engineering. 
                        ECE Club provides different student life opportunities such as welfare, student outreaches, workshops and more for fellow ECE students. 
                        As an undergraduate in Computer Engineering, I wish to make more friends in the same major and at the same time help each other out. <br></br><br></br>
                        I took on the Vice President Internal(VPI) role, mainly in charge of organising welfare events such as Welfare Pack Giveaway and Freshmen Camp. <br></br><br></br>
                        The above are photos of <b>Beach Cleaning</b> event. 
                        </p>
                    </div>
                </Panel>
            </Collapse>

            </div>
            
          </Content>

        </div>
    );

}

export default CCASegment;