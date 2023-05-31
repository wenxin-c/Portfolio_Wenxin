import React from 'react';
import ReactDOM from "react-dom/client";
import {RadarChartOutlined , HistoryOutlined, FileDoneOutlined , LaptopOutlined, LikeOutlined , SmileOutlined, UserOutlined, HeartOutlined} from '@ant-design/icons';
import {Layout, Menu, theme } from 'antd';
import '../styles/introduction.css'

import { Outlet, Link } from "react-router-dom";


const { Sider } = Layout;

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
    getItem(<Link to='/'>Introduction</Link>, 'sub1', <HeartOutlined />),
    getItem(<Link to='/Skills'>Skills</Link>, 'sub2', <RadarChartOutlined />),
    getItem(<Link to='/Education'>Education</Link>, 'sub3', <LaptopOutlined />,),
    getItem(<Link to='/Projects'>Projects</Link>, 'sub4', <FileDoneOutlined />,),
    getItem(<Link to='/Experience'>Experience</Link>, 'sub5', <HistoryOutlined />, ),
    getItem(<Link to='/CCA'>CCA</Link>, 'sub6', <LikeOutlined />),
    getItem(<Link to='/Awards'>Awards</Link>, 'sub7', <SmileOutlined />),
  ];


  const Introduction = () => {
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return (
      <div className = "introduction">

        <div className = "innerBox">
            <Sider width={200} style={{background: colorBgContainer}}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{
                    height: '100%',
                    borderRight: 0,
                    
                  }}
                  items={items}
                />
            </Sider>

            <Outlet />
        </div>

      </div>
    );
  };

  export default Introduction;