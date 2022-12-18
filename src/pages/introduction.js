import React from 'react';
import ReactDOM from "react-dom/client";
import {RadarChartOutlined , HistoryOutlined, FileDoneOutlined , LaptopOutlined, LikeOutlined , SmileOutlined, UserOutlined, HeartOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import '../styles/introduction.css'


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
    getItem(<Link to='/'>Introduction</Link>, 'sub1', <HeartOutlined />),
    getItem(<Link to='/Skills'>Skills</Link>, 'sub2', <RadarChartOutlined />),
    getItem(<Link to='/Education'>Education</Link>, 'sub3', <LaptopOutlined />,),
    getItem(<Link to='/Projects'>Projects</Link>, 'sub4', <FileDoneOutlined />,),
    getItem('Experience', 'sub5', <HistoryOutlined />, [
        getItem('Work', '5', null),
        getItem('Leadership', 'sub3', null),
      ]),
    getItem('CCA', 'sub6', <LikeOutlined />, [
      getItem('NUS Guitar Ensemble', '5'),
      getItem('NUS ECE Club', '6'),
    ]),
    getItem('Awards', 'sub7', <SmileOutlined />, [
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