import React from 'react';
import { lazy } from 'react'
import {
  MailOutlined,
  CloudOutlined
} from '@ant-design/icons';

let icon1 = <MailOutlined />
let icon2 = <CloudOutlined />

/**
 * 路由懒加载
 * @param {String} filename 文件路径
 */
const lazyRouter = (filename: string) => {
  return lazy(() => import(`../pages/${filename}`))
}

const RouteMap = [
  { path: '/', name: 'Home', title: '首页',icon: icon1, component: lazyRouter('Home/Index') },
  { path: '/Customer', name: 'Customer', title: '客户管理',icon: icon2, component: lazyRouter('Customer/Index') },
]

export default RouteMap
