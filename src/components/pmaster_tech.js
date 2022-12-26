import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/poster.css'
import '../styles/description.css'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {AiOutlineArrowRight } from 'react-icons/ai';

const { Header, Content, Footer } = Layout;

function TechSegment(){
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
                <h2>
                    Front-end: 

                </h2>
                <p>
                    HTML, CSS, Javascript, session storage<br></br><br></br>
                    ReactJS: <br></br><br></br>
                    Create virtual dom(react components) <AiOutlineArrowRight/> Real dom components get rendered on web page <AiOutlineArrowRight/> When changes are made, the entire virtual dom gets updated <AiOutlineArrowRight/> 
                    The updated virtual dom gets compared to what it looked like before update, figuring out which dom objects have been updated <AiOutlineArrowRight/> Update only the changed objects in the real dom <AiOutlineArrowRight/>
                    Real dom is re-rendered and make changes on the screen. <br></br><br></br>
                    Javascript: <br></br><br></br>
                    Create front-end interactive features. <br></br><br></br>
                    Functions are triggered by events (e.g. onClick, onChange):<br></br><br></br>
                    Simple front-end functions(e.g. calculation, sorting date etc)<br></br><br></br>
                    Back-end API with a specific route is called to communicate data with back-end server<br></br><br></br>
                    Session storage:<br></br><br></br>
                    To persist data at the front-end within the lifecycle of a session(i.e. a web page tab).<br></br><br></br>
                    Allow the main page to be refreshed with data and changes retained. <br></br><br></br>


                </p>
                <h2>
                    Back-end:  
                </h2>
                <p>
                    NodeJS, ExpressJS: <br></br><br></br>
                    Setting up the back-end server and API routes to communicate data between front-end and back-end. Each back-end route executes a particular command. <br></br><br></br>
                    Axios and Cors are used to communicate data between front-end and back-end. <br></br><br></br>

                </p>
                <h2>Database:</h2>
                <p>
                    MySQL:<br></br><br></br>
                    Database contains tables with user data being saved. <br></br><br></br>
                    The back-end server communicates with the database using queries(e.g. SELECT, INSERT) to add data into the database/retrieve data from database(which will then be sent to front-end) etc. <br></br><br></br>

                </p>
                <h2>Deployment Platform: </h2>
                <p>
                    Heroku<br></br><br></br>
                    Cloud Database: ClearDB MySQL<br></br><br></br>


                </p>
        
            </div>
            
        </div>
    </Content>

    );

}

export default TechSegment;