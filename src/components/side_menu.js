import React from 'react';
import ReactDOM from "react-dom/client";
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import {RadarChartOutlined , HistoryOutlined, FileDoneOutlined , LaptopOutlined, LikeOutlined , SmileOutlined, UserOutlined, HeartOutlined} from '@ant-design/icons';
import { Outlet, Link } from "react-router-dom";
import "../styles/side_menu.css"

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
    getItem(<Link to='/Content'>Overview</Link>, 'sub1', <HeartOutlined />),

    getItem('Education', 'sub2', <LaptopOutlined />, [
    getItem(<Link to='/Content/Institutions'>Institutions</Link>, null, null),
    getItem(<Link to='/Content/CCA'>Cocurricular Activities</Link>, null, null),
    getItem(<Link to='/Content/Awards'>Awards</Link>, null, null),]),

    getItem(<Link to='/Content/Skills'>Skillsets</Link>, 'sub3', <RadarChartOutlined />),

    getItem(<Link to='/Content/Projects'>Projects</Link>, 'sub4', <FileDoneOutlined />,),

    getItem(<Link to='/Content/Experience'>Work Experience</Link>, 'sub5', <HistoryOutlined />, ),

    getItem('Social Life', 'sub6', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];
const onClick = (e) => {
  console.log('click', e);
};

const SideMenu = () => (
  <Menu
    onClick={onClick}
    style={{
      width: "100%",
    }}
    mode="vertical"
    items={items}
  />
);
export default SideMenu;