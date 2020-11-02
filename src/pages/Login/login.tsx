import React from 'react';
import { useHistory } from 'react-router-dom'
import './login.css'
import { Form, Input, Button } from 'antd'
import { IS_LOGIN } from '../../store/actionTypes'
import { useStore } from '../../store/context'
import { loginToHome } from '../../route/Index'

interface IParams {
  ulogin: string,
  upsw: string
}
const Login: React.FC<any> = (_props: any) => {
  const history = useHistory()
  const [, dispatch] = useStore()
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 16 },
  }
  const onFinish = (values: any) => {
    dispatch({type: IS_LOGIN, value: true})
    history.push(loginToHome)
  }
  return (
    <div className="login">
      <div className="form_box">
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="用户名"
            name="ulogin"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="upsw"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">登录</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login