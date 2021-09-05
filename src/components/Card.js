import React from 'react';

import { Badge, Card, Button } from 'antd';
import { GithubOutlined, VideoCameraOutlined } from '@ant-design/icons';

const tagDict = {
    'Robotics': 'red',
    'Logistics': 'volcano',
    'Fullstack': 'green',
    'IOT': 'cyan'
}

function Projects({ title, description, tag, alt, src, github, video }) {
    return (
        <Badge.Ribbon text={tag} color={tagDict[tag]}>
            <Card
                cover={ <img alt={alt} src={src} /> }
                actions={[
                    <Button 
                        type="text" 
                        shape="circle" 
                        disabled={github === null} 
                        icon={<GithubOutlined />} 
                        onClick={() => {window.open(github)}}
                    >
                    </Button>,
                    <Button 
                        type="text" 
                        shape="circle" 
                        disabled={video === null} 
                        icon={<VideoCameraOutlined />} 
                        onClick={() => {window.open(video)}}
                    >
                    </Button>,
                ]}
            >
                <Card.Meta title={title} description={description} />
            </Card>
        </Badge.Ribbon>
    )
}
  
export default Projects;