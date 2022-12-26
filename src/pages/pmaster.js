import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, Link } from "react-router-dom";
import {PictureOutlined, ProjectOutlined, DeploymentUnitOutlined, ScissorOutlined} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const PMaster = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem(<Link to='/Projects/PMaster'>Project Description</Link>, 'sub1', <ProjectOutlined />),
    getItem(<Link to='/Projects/PMaster/Tech'>Technical Sets</Link>, 'sub2', <DeploymentUnitOutlined />),
    getItem(<Link to='/Projects/PMaster/Poster'>Project Poster</Link>, 'sub3', <PictureOutlined />), 
    getItem(<Link to='/Projects/PMaster/Screenshot'>Project Screenshot</Link>, 'sub4', <ScissorOutlined />),
    getItem(<Link to='/Projects'>Return</Link>, 'sub5'),
   
  ];

  return (
    <Layout className="layout">
      <Header style={{backgroundColor:'rgb(191,165,142)', borderRadius:'4px'}}>
        <div className="logo" />
        <Menu
          style={{backgroundColor:'rgb(191,165,142)', fontSize:'16px', fontWeight:'500'}}
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          /*
            items={new Array(2).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `${titles[index]}`,
            };
          })}
          
          */

        />
      </Header>
      <Outlet />
      
    </Layout>
  );
};
export default PMaster;