import React, {useState} from 'react';

import About from './pages/About';
import Projects from './pages/Projects';

import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

function Sjimenez44() {
  const [current, setCurrent] = useState('projects');

  const onChangePage = (e) => {
    if (e.key !== '2') {
      setCurrent(e.key);
    }
  }

  return (
    <Layout>
      <Header className="header">
        <div className="logo"></div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[current]} onClick={onChangePage}>
          <Menu.Item key="projects">Projects</Menu.Item>
          <Menu.Item key="2">
            <a href={'https://www.hackster.io/santiagoj'} target={'_blank'} rel={'noreferrer'}>Blog</a>
          </Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Content style={{ padding: '0 24px', minHeight: 540 }}>
            {current === 'about'
              ? <About />
              : <Projects />
            }
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>{`Created with ❤️ by Santiago Jiménez ©2021`}</Footer>
    </Layout>
  );
}

export default Sjimenez44;
