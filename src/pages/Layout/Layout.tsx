import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import menuList from '../../route/Index'
import PrivateRoute from '../../components/privateRoute/Index'
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import './Layout.css';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
// import menuList from '../../menuList/menu'
import avatar from '../../images/logo.png'

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const menu = (
  <Menu className="tx_c">
    <Menu.Item>个人中心</Menu.Item>
    <Menu.Item>修改密码</Menu.Item>
    <Menu.Item>退出登录</Menu.Item>
  </Menu>
)

const Layout_: React.FC<any> = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={`logo ${collapsed ? 'small' : ''}`}>LOGO</div>
        <Menu className="menu_box scrollbar" theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          {
            menuList.map((item: any) => (
              item.children && item.children.length > 0 ? 
              <SubMenu key={item.name} icon={item.icon} title={item.title}>
                {
                  item.children.map((it: any) => (
                    <Menu.Item key={it.name}>
                      <Link to={it.path}>{it.title}</Link>
                    </Menu.Item>
                  ))
                }
              </SubMenu> :
              <Menu.Item key={item.name} icon={item.icon}>
                <Link to={item.path}>{item.title}</Link>
              </Menu.Item>
            ))
          }
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="bgf flex_just_betw flex_cen" style={{ padding: '0 15px' }}>
          <div className="flex_just_betw flex_cen">
            {
              collapsed ? 
              <MenuUnfoldOutlined onClick={() =>setCollapsed(!collapsed)} style={{fontSize: 20}} /> :
              <MenuFoldOutlined onClick={() =>setCollapsed(!collapsed)} style={{fontSize: 20}} />
            }
            <div className="ml30"><p>首页</p></div>
          </div>
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <Avatar size={50} src={avatar} />
          </Dropdown>
        </Header>
        <Content
          className="bgf"
          style={{
            margin: '15px',
            padding: 10,
            minHeight: 280,
          }}
        >
          <PrivateRoute />
        </Content>
      </Layout>
    </Layout>
  )
}

export default Layout_