import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/poster.css'
import '../styles/description.css'
import '../styles/pmaster_screenshot.css'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import PMaster_Cost from '../images/cost.png'
import PMaster_Login from '../images/login.png'
import PMaster_Logout from '../images/logout.png'
import PMaster_Main from '../images/main_page.png'
import PMaster_Search from '../images/search.png'
import PMaster_Summary from '../images/summary.png'
import PMaster_Time from '../images/time.png'
import PMaster_Timeline from '../images/timeline.png'

const { Header, Content, Footer } = Layout;

function ScreenshotSegment(){
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
            <div className='pmasterScreenshot'>
                <img src={PMaster_Login} ></img>
                <label>Login Page</label>
                <img src={PMaster_Main}></img>
                <label>Summary and Cost Management</label>
                <img src={PMaster_Summary} ></img>
                <label>Update New Summary Content</label>
                <img src={PMaster_Cost} ></img>
                <label>Add New Expense Items</label>
                <img src={PMaster_Search} ></img>
                <label>Search Unit Cost</label>
                <img src={PMaster_Time} ></img>
                <label>Time Management</label>
                <img src={PMaster_Timeline}></img>
                <label>Auto-generated Timeline</label>
                <img src={PMaster_Logout} ></img>
                <label>Logout Page</label>
            </div>
            
        </div>
    </Content>

    );

}

export default ScreenshotSegment;