import React from 'react';

import { Row, Col, Divider } from 'antd';
import Card from '../components/Card';
import projects_pinned from '../data/pinned';
import projects from '../data/others';

function Projects() {
    return (
        <>
            {projects_pinned.length > 0 &&
                <>
                    <Divider orientation="left">Pinned</Divider>
                    <Row gutter={[16, 16]}>
                        {projects_pinned.map((project) => (
                            <Col span={6}>
                                <Card 
                                    title={project.title}
                                    description={project.description}
                                    tag={project.tag}
                                    alt={project.alt}
                                    src={project.src}
                                    github={project.github}
                                    video={project.video}
                                />
                            </Col>
                        ))}
                    </Row>
                </>
            }
            {projects.length > 0 && 
                <>    
                    <Divider orientation="left">Others</Divider>
                    <Row gutter={[16, 16]}>
                        {projects.map((project) => (
                            <Col span={6}>
                                <Card 
                                    title={project.title}
                                    description={project.description}
                                    tag={project.tag}
                                    alt={project.alt}
                                    src={project.src}
                                    github={project.github}
                                    video={project.video}
                                />
                            </Col>
                        ))}
                    </Row>
                </>
            }
        </>
    )
}
  
export default Projects;