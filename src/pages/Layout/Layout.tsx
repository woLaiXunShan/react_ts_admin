import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { RouteMap } from '../../route/Index'
import PrivateRoute from '../../components/privateRoute/Index'
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import './Layout.css';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import Tags from './Tags'
import avatar from '../../images/logo.png'
import { useStore } from '../../store/context'
import { IS_LOGIN } from '../../store/actionTypes'

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const Layout_: React.FC<any> = () => {
  const [store, dispatch] = useStore()
  const history = useHistory()
  const clickMenu = (param: any) => {
    switch (param.key) {
      case 'logout':
        store.dispatch({type: IS_LOGIN, value: false})
        console.log(store)
        dispatch({type: IS_LOGIN, value: false})
        history.push('/')
        break;
    }
  }
  const menu = (
    <Menu onClick={clickMenu} className="tx_c">
      <Menu.Item key="personal">个人中心</Menu.Item>
      <Menu.Item key="logout">退出登录</Menu.Item>
    </Menu>
  )
  const [collapsed, setCollapsed] = useState(false)


  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={`logo ${collapsed ? 'small' : ''}`}>LOGO</div>
        <Menu className="menu_box scrollbar" theme="dark" mode="inline" defaultSelectedKeys={[history.location.pathname]}>
          {
            RouteMap.map((item: any) => (
              !item.notMenu &&
              (
                item.children && item.children.length > 0 ? 
                <SubMenu key={item.name} icon={item.icon} title={item.title}>
                  {
                    item.children.map((it: any) => (
                      <Menu.Item key={it.name} onClick={() => history.push(it.path)}>
                        {it.title}
                      </Menu.Item>
                    ))
                  }
                </SubMenu> :
                <Menu.Item key={item.name} icon={item.icon} onClick={() => history.push(item.path)}>
                  {item.title}
                </Menu.Item>
              )
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
            <div className="ml20"><p>首页</p></div>
          </div>
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <Avatar size={50} src={avatar} />
          </Dropdown>
        </Header>
        <Tags></Tags>
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