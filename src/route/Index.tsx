import React from 'react';
import { lazy } from 'react'
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
  { path: '/', name: 'Home', title: '首页', icon: <MailOutlined />, component: lazyRouter('Home/Index') },
  { name: 'Customer', title: '客户管理', icon: <CloudOutlined />,
    children: [
      { path: '/Customer', name: 'CustomerIndex', title: '客户管理', component: lazyRouter('Customer/Index')}
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
