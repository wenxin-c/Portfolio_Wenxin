import React from 'react';
import ReactDOM from 'react-dom';
import { Collapse } from 'antd';
import "../styles/award_segment.css"
const { Panel } = Collapse;

const headerSnt = "NUS Science and Technology Merit Scholarship";
const textSnt = (
    <div>
        <p>Offered by: National University of Sinagpore</p>
        <p>Period: July 2021 - May 2025</p>
    </div>
);

const headerSsef = "Singapore Science and Engineering Fair Merit Award";
const textSsef = (
    <div>
        <p>Offer Date: January 2020</p>
        <p>Description: The project is an Augmented Reality(AR) mobile application Chemistry Escape Room 
        to allow students conduct virtual Chemistry experiments on their mobile devices outside school 
        laboratories to enhance understanding of Chemistry concepts.</p>
    </div>
);

const headerNjc = "National Junior College Academic Excellence Award";
const textNjc = (
    <div>
        <p>Offered by: National Junior College</p>
        <p>Offer Date: January 2020</p>
    </div>
);

const headerPerse = "Perse Team Coding Challenge Distinction Award";
const textPerse = (
    <div>
        <p>Offered by: National Junior College</p>
        <p>Offer Date: January 2019</p>
    </div>
);

const headerPrc = "PRC JM3(SM1) Scholarship";
const textPrc = (
    <div>
        <p>Offered by: Ministry of Education, Singapore</p>
        <p>Offer Date: January 2017</p>
    </div>
);


const AwardSegment = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className = "award-segment">
        <h1 className = "award-title">Awards</h1>
        {/* <Collapse defaultActiveKey={['1']} onChange={onChange}> */}
        {/* The key is important in determining which item gets expanded
        upon clicking. The items with the same keys will be expanded together
        upon clicking*/}
        <Collapse className = "award-content" onChange={onChange}>
            <Panel header={headerSnt} key="1">
                <p>{textSnt}</p>
            </Panel>
            <Panel header={headerSsef} key="2">
                <p>{textSsef}</p>
            </Panel>
            <Panel header={headerNjc} key="3">
                <p>{textNjc}</p>
            </Panel>
            <Panel header={headerPerse} key="4">
                <p>{textPerse}</p>
            </Panel>
            <Panel header={headerPrc} key="5">
                <p>{textPrc}</p>
            </Panel>
        </Collapse>
    </div>

  );
};

export default AwardSegment;