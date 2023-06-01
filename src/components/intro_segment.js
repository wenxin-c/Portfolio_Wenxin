import React from 'react';
import ReactDOM from 'react-dom';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import '../styles/intro_segment.css'

const { Header, Content, Sider } = Layout;

/** This function is used to update introduction page */

function IntroSegment(){
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return (
        <div className = "introSegment">
            <Content style={{
              padding: 24,
              margin: 0,
              minHeight: "280px",
              background: colorBgContainer,
            }}
          >
            <div className ='introContent'>
              <div className = "contentWrapper">
                  <h2 className='nameTitle'>
                      <span className='nameText'>Chen Wenxin</span>
                  </h2>
                  <p className = "preview">
                      I'm Wenxin, currently an undergraduate majoring in Computer Engineering 
                      at National University of Singapore. 
                      <br/>
                      I'm interested to be a Software Engineer in the future. <br/>
                      I like watching dramas, listening to kpop songs or hanging out with friends during my free time.<br/>
                      Oh yes, I'm a durian fan :D <br/>
                      <br/>

                      Use the side navigation bar to learn more about me!!

                  </p>
                  <h3 className='linkTitle'>
                      <a href="https://www.linkedin.com/in/wenxin-chen-0825" target="_blank"><img src = {linkedin} alt = "Linkedin Page" height="40px"/></a> <br></br>
                      <a href="https://github.com/wenxin-c" target="_blank"><img src = {github} alt = "Github Page" height="65px"/></a>
                  </h3>
              </div>
                
              <div className = "dynamic-picture"></div>
            </div>
            
          </Content>

        </div>
    );

}

export default IntroSegment;