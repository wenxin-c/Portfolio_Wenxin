import React from 'react';
import ReactDOM from 'react-dom';
import { Divider, Space, Tag } from 'antd';

function SongList (props) {

    const songList = props.list.map((song) => 
        <Tag bordered = {true} color = {song.color}>
            {song.title}
        </Tag>
    );

    return(
        <div>
            <Space size={[0, 'small']} wrap style = {{justifyContent: "center"}}>
                {songList}
            </Space>
        </div>
    );
  
};
export default SongList;