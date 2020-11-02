import React, { lazy } from 'react';
import {
  MailOutlined,
  CloudOutlined
} from '@ant-design/icons';

/**
 * 路由懒加载
 * @param {String} filename 文件路径
 */
const lazyRouter = (filename: string) => {
  return lazy(() => import(`../pages/${filename}`))
}

export const RouteMap = [
  { path: '/', name: 'Home', title: '首页', notMenu: true, icon: <MailOutlined />, component: lazyRouter('Home/Index') },
  { name: 'Customer', title: '客户管理', icon: <CloudOutlined />,
    children: [
      { path: '/Customer', name: 'CustomerIndex', title: '客户管理', component: lazyRouter('Customer/Index')},
      { path: '/Customer2', name: 'CustomerIndex2', title: '客户管理2', component: lazyRouter('Customer/Index')},
      { path: '/Customer3', name: 'Customer3', title: '客户管理3', component: lazyRouter('Customer/Index')},
      { path: '/Customer4', name: 'Customer4', title: '客户管理4', component: lazyRouter('Customer/Index')},
      { path: '/Customer5', name: 'Customer5', title: '客户管理5', component: lazyRouter('Customer/Index')},
      { path: '/Customer6', name: 'Customer6', title: '客户管理6', component: lazyRouter('Customer/Index')},
      { path: '/Customer7', name: 'Customer7', title: '客户管理7', component: lazyRouter('Customer/Index')},
      { path: '/Customer8', name: 'Customer8', title: '客户管理8', component: lazyRouter('Customer/Index')},
      { path: '/Customer9', name: 'Customer9', title: '客户管理9', component: lazyRouter('Customer/Index')},
      { path: '/Customer10', name: 'Customer10', title: '客户管理10', component: lazyRouter('Customer/Index')},
      { path: '/Customer11', name: 'Customer11', title: '客户管理11', component: lazyRouter('Customer/Index')},
    ]
  },
]

let routeList: any[] = []
let neatenRouteMap = (list: any[]) => {
  list.forEach((item: any) => {
    if (item.children && item.children.length) {
      neatenRouteMap(item.children)
    } else {
      routeList.push(item)
    }
  })
}
neatenRouteMap(RouteMap)

export const RouteList = routeList
// 登录后默认跳转的地址
export const loginToHome = '/'
