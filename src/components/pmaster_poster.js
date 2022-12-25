import React from 'react';
import ReactDOM from 'react-dom';
import Poster from '../images/pmaster-poster.png'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import '../styles/poster.css'
const { Header, Content, Footer } = Layout;

function PosterSegment(){
    const {
        token: { colorBgContainer },
      } = theme.useToken();

    return(
    <Content
        style={{
          padding: '0 50px',
        }}
      >
    <Breadcrumb
        style={{
        margin: '16px 0',
        }}
    >
    </Breadcrumb>

        
        <div
        className="site-layout-content"
        style={{
            
        }}
        >
        <img src={Poster}></img>
        </div>
    </Content>

    );

}

export default PosterSegment;
