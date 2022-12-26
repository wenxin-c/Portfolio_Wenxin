import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, theme, Card } from 'antd';
import '../styles/skill_segment.css'

const { Header, Content, Sider } = Layout;

function AwardsSegment(){
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

            {/* The part of the code is to update award
                Having one more Card element to insert in one more award*/}
            <div className="site-card-border-less-wrapper" >
                <Card
                title="Science and Technology Merit Scholarship"
                bordered={false}
                style={{
                    width: 355,
                    marginRight:'10px',
                    marginBottom:'10px',
                }}
                >
                <p>Offered by: National University of Sinagpore</p>
                <p>Offer Date: July 2021</p>
                </Card>

                <Card
                title="Merit award in the Singapore Science and Engineering Fair"
                bordered={false}
                style={{
                    width: 482,
                    marginRight:'10px',
                    marginBottom:'10px',
                }}
                >
                <p>Offer Date: January 2020</p>
                <p>Description: The project is an Augmented Reality(AR) mobile application Chemistry Escape Room 
                to allow students conduct virtual Chemistry experiments on their mobile devices outside school laboratories to enhance understanding of Chemistry concepts.</p>
                </Card>

                <Card
                title="National Junior College Academic Excellence Award"
                bordered={false}
                style={{
                    width: 430,
                    marginRight:'10px',
                    marginBottom:'10px',
                }}
                >
                <p>Offered by: National Junior College</p>
                <p>Offer Date: January 2020</p>
                </Card>

                <Card
                title="Perse Team coding challenge Distinction Award"
                bordered={false}
                style={{
                    width: 392,
                    marginRight:'10px',
                    marginBottom:'10px',
                }}
                >
                <p>Offered by: National Junior College</p>
                <p>Offer Date: January 2019</p>
                </Card>

                <Card
                title="PRC JM3(SM1) scholarship"
                bordered={false}
                style={{
                    width: 355,
                    marginRight:'10px',
                    marginBottom:'10px',
                }}
                >
                <p>Offered by: Ministry of Education, Singapore</p>
                <p>Offer Date: January 2017</p>
                
                </Card>
            </div>
            
          </Content>

        </div>
    );

}

export default AwardsSegment;