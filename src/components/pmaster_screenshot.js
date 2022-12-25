import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/poster.css'
import '../styles/description.css'
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

function DescriptionSegment(){
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

        
        <div className="site-layout-content ">
            <div className='pmasterDescription'>
                
            </div>
            
        </div>
    </Content>

    );

}

export default DescriptionSegment;