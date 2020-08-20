import React from 'react';
import './login.css'
import { Form, Input, Button, message } from 'antd'
import { IS_LOGIN } from '../../store/actionTypes'
import { login } from '../../fetch/api'
import { useStore } from '../../store/context'

interface IParams {
  ulogin: string,
  upsw: string
}
const Login: React.FC<any> = (props) => {
  const [store, dispatch] = useStore()
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 16 },
  }
  const onFinish = (values: any) => {
    // let counttime = new Date().getTime(); // 当前时间戳
    // let pwdLen = values.upsw.length / 2
    // let pwd1 = String(counttime).substring(Math.floor(pwdLen), counttime.toString().length);
    // let pwd2 = String(counttime).substring(0, Math.floor(pwdLen));
    // const params: IParams = {
    //   ulogin: values.ulogin,
    //   upsw: pwd1 + values.upsw + pwd2
    // }
    // login(params).then((res: any) => {
    //   if (res.statusCode === 200) {
        dispatch({type: IS_LOGIN, value: true})
        props.history.push('/')
    //   } else {
    //     message.error(res.message)
    //   }
    // })
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