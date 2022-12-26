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
                <h2>
                    Problem Motivation
                </h2>
                <p>
                    Project management is a practice as old as human culture. No matter the discipline, students cannot avoid project management. 
                    We found that lots of people have great project ideas, but are completely clueless about how to start a project, allowing their ideas to go to waste. 
                    We thus decided to create an app to help students/budding entrepreneurs get started and provide guidance for the process, 
                    using a proven project management framework developed by professors from Singapore’s leading university. 
                    As such, users can manage their project process more effectively and systematically.

                </p>
                <h2>
                    Target group: 
                </h2>
                <p>
                    Students/budding entrepreneurs who have ideas and plan to start on real-world projects. 
                </p>
                <h2>Product description and user guide:</h2>
                <p>
                    To create a web application which can help users construct their ideas, organise and keep track of their project progress.<br></br><br></br>
                    This application consists of various features and four main parts of content, namely a summary of the identified issue, cost management, task management and human resource management. 
                    These are the main pillars of project management.
                </p>
                <h3>Login and Logout</h3>
                <p>
                    First time users can register an account using their email. Please pay attention to the password requirement by hovering on the password input box. <br></br><br></br>
                    After creating an account, users can proceed to login.<br></br><br></br>
                    At any point of the web app, users can click on Logout at the top right corner to logout.

                </p>
                <h3>Side Navigation Bar</h3>
                <p>
                    Users can use the side navigation bar on the left of the web page to navigate to different sections of the app. 
                    As users insert more and more content, the web page will grow longer. 
                    Navigation bar helps them navigate to different sections easily. 

                </p>
                <h3>Summary Section</h3>
                <p>
                For the summary section, users are expected to specify the issue identified, their solutions, stakeholders involved and expected outcome. 
                This is to mark the scope of their projects, help users keep in mind the aim of their projects and remind users to make decisions that align with the main aim of their projects.<br></br><br></br>
                To edit summary, if all the boxes are left empty but clicking on the save button, it will not have any effect on the summary content and an alert window will pop up to remind users to fill in data before save. 
                (This works for all input sections). <br></br><br></br>
                If only some(not all) of the input boxes are empty, the previous answers will be taken for the empty input. 

                </p>
                <h3>Cost Management</h3>
                <p>
                This section is to help users manage their project budget and cost. <br></br><br></br>
                Users can input their initial budget for the project, which can be updated along the way. <br></br><br></br>
                It consists of a cost table in which users can add newly purchased items and delete outdated/wrong items. This is to keep the project spending more organised. <br></br><br></br>
                Many users may not be very clear of the unit cost of the items they want to purchase. 
                Our app provides users with a database in which they can search for the unit cost of many items they are interested in. 
                This is to help them plan and allocate project budgets better. The available categories of items are specified as the followings:  <br></br><br></br>
                watches<br></br><br></br>
                home appliance<br></br><br></br>
                cameras<br></br><br></br>
                sports and outdoors<br></br><br></br>
                home and living<br></br><br></br>
                travel and luggage<br></br><br></br>
                shoes<br></br><br></br>
                apparel<br></br><br></br>
                computers and peripherals<br></br><br></br>

                The total cost of all items in the table will be calculated automatically. 
                Based on the total budget and total cost, the amount of remaining budget will be calculated. 
                This is to help users monitor their spendings and keep their spendings within their budget.

                </p>
                <h3>Time Management</h3>
                <p>
                This section is to help users monitor the entire progress of their projects and help them complete their projects on time. <br></br><br></br>
                This section consists of a time table in which users can add or delete activities/tasks. 
                These activities will be automatically arranged in chronological order and a timeline will also be automatically generated to make activities more organised and help users visualise the sequence of their activities better.

                </p>
                <h3>Human Resource Management</h3>
                <p>
                This section contains a human resource table to record information of relevant personnel involved in the project and making human resource management more organised.

                </p>
                <h2>Project Link</h2>
                <p><a href='https://orbital-pmaster-backend.herokuapp.com/'>https://orbital-pmaster-backend.herokuapp.com/</a></p>
            </div>
            
        </div>
    </Content>

    );

}

export default DescriptionSegment;