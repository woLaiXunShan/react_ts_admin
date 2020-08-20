import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom'
import { Tag } from 'antd'
import './Tags.css'
import { DELETE_TAG } from '../../store/actionTypes'
import { useStore } from '../../store/context'

const Tags: React.FC<any> = () => {
  const [store, dispatch] = useStore()
  const [tags, setTags] = useState<any[]>([])

  const history = useHistory()
  useEffect(() => {
    setTags(store.tags)
  }, [store.tags])

  const onCloseTag = (index: number) => { // 关闭tag
    dispatch({type: DELETE_TAG, value: index})
    history.push(tags[index-1].path)
  }

  return (
    <div className="tags_box bgf bor_t bor_b p10">
      <div>{JSON.stringify(tags)}</div>
      {
        // console.log(tags)
      }
      {
        tags.length && tags.map((item: any, index: number) => (
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
  )
}

export default Tags