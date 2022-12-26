import React from 'react';
import ReactDOM from 'react-dom';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import profile_pic from '../images/profile_pic1.png'
import '../styles/introduction.css'

const { Header, Content, Sider } = Layout;

/** This function is used to update introduction page */

function IntroSegment(){
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
            <h1 className='introTitle'>
                <img src={profile_pic} width='90px' height='90px'></img>
                <span className='introText'>Introduction</span>
                
            </h1>
            <div className='introContent'>
                <h2 className='nameTitle'>
                    <span className='nameText'>Chen Wenxin</span>
                </h2>
                <h3 className='linkTitle'>
                    <span className='linkText'>
                      LinkedIn: <a href="https://www.linkedin.com/in/wenxin-chen-0825" target="_blank">Link</a> <br></br>
                      Github: <a href="https://github.com/wenxin-c" target="_blank">Link</a>
                    </span>  
                </h3>
                <p className='contentText'>
                      Hi, I'm Wenxin, an undergradute major in Computer Engineering at National University of Singapore. 
                      One of my habits is to play the guitar.  
                      I'm interested in software engineering for future career. 
                      I'm fluent in programming language C/C++ and have experience in full-stack web-development. 
                      I also have good knowledge in microcontrollers such as Arduino, Raspberry Pi. <br></br>  <br></br>
                      More detailed introduction about myself can be found in this website. 
                </p>

            </div>
            
          </Content>

        </div>
    );

}

export default IntroSegment;