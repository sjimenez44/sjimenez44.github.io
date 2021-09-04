import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

function Sjimenez44() {
  return (
    <Layout>
      <Header className="header">
        <div className="logo"></div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Projects</Menu.Item>
          <Menu.Item key="2">Blog</Menu.Item>
          <Menu.Item key="3">About</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Content style={{ padding: '0 24px', minHeight: 540 }}>Content</Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>{`Created with ❤️ by Santiago Jiménez ©2021`}</Footer>
    </Layout>
  );
}

export default Sjimenez44;
