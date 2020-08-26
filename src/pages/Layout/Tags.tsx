import React from 'react';
import { useHistory, Link } from 'react-router-dom'
import { Tag, Menu, Dropdown, Button } from 'antd'
import './Tags.css'
import { DELETE_TAG, CLOSE_ALL, CLOSE_OTHER } from '../../store/actionTypes'
import { useStore } from '../../store/context'

const Tags: React.FC<any> = () => {
  const [store, dispatch] = useStore()
  const history = useHistory()
  const clickMenu = (param: any) => {
    switch (param.key) {
      case 'closeAll':
        history.push('/')
        dispatch({type: CLOSE_ALL})
        break;
      case 'closeOther':
        let obj: object = {}
        store.tags.forEach((item: any) => {
          if (item.path === history.location.pathname) {
            obj = item
          }
        })
        dispatch({type: CLOSE_OTHER, value: obj})
        break;
    }
  }
  const menu = (
    <Menu onClick={clickMenu} className="tx_c">
      <Menu.Item key="closeAll">关闭所有</Menu.Item>
      <Menu.Item key="closeOther">关闭其他</Menu.Item>
    </Menu>
  )
  const onCloseTag = (index: number) => { // 关闭tag
    history.location.pathname === store.tags[index].path && 
    (store.tags.length ? history.push(store.tags[index-1].path) : history.push('/'))
    dispatch({type: DELETE_TAG, value: index})
  }

  return (
    <div className="bgf bor_t bor_b flex_just_betw flex_cen">
      <div className="tags_box p10">
        {
          store.tags.length && store.tags.map((item: any, index: number) => (
            item.name === 'Home' ?
            <Tag color={history.location.pathname === item.path ? 'blue' : ''} key={item.name}>
              <Link to={item.path}>{item.title}</Link>
            </Tag> :
            <Tag color={history.location.pathname === item.path ? 'blue' : ''} closable onClose={() => onCloseTag(index)} key={item.name}>
              <Link to={item.path}>{item.title}</Link>  
            </Tag>
          ))
        }
      </div>
      <div className="pr10">
        <Dropdown overlay={menu}>
          <Button type="primary">标签选项</Button>
        </Dropdown>
      </div>
    </div>
  )
}

export default Tags