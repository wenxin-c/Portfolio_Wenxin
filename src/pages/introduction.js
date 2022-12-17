import React from 'react';
import ReactDOM from "react-dom/client";
import {RadarChartOutlined , HistoryOutlined, FileDoneOutlined , LaptopOutlined, LikeOutlined , SmileOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import '../styles/introduction.css'
import IntroSegment from '../components/intro_segment.js'
import SkillSegment from '../components/skill_segment.js'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";


const { Header, Content, Sider } = Layout;
const items1 = ["Wenxin's Website"].map((key) => ({
  key,
  label: `${key}`,
}));

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  
  const items2 = [
    getItem('Skills', 'sub1', <RadarChartOutlined />),
    getItem('Education', 'sub2', <LaptopOutlined />, [
      getItem('NUS', '1'),
      getItem('National Junior College', '2'),
    ]),
    getItem('Projects', 'sub3', <FileDoneOutlined />, [
        getItem('Option 1', '1'),
        getItem('Option 2', '2'),
        getItem('Option 3', '3'),
        getItem('Option 4', '4'),
      ]),
    getItem('Experience', 'sub4', <HistoryOutlined />, [
        getItem('Working Experience', '5', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
        getItem('Leadership Experience', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
      ]),
    getItem('CCA', 'sub5', <LikeOutlined />, [
      getItem('NUS Guitar Ensemble', '5'),
      getItem('NUS ECE Club', '6'),
    ]),
    getItem('Awards', 'sub6', <SmileOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
  ];

  const items3 = [<Link to='/Skills'>Skills</Link>, <Link to='/Skills'>Skills</Link>, <Link to='/Skills'>Skills</Link> ];


const Introduction = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header className="header" style={{backgroundColor:'rgb(191,165,142)', borderRadius:'4px'}}>
        <div className="logo" />
        <div style={{backgroundColor:'rgb(191,165,142)', fontWeight:'bold', fontSize:'20px'}} mode="horizontal" defaultSelectedKeys={['2']}>Wenxin's Website</div>
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
              
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
          </Breadcrumb>


          

          <Outlet />
          
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Introduction;