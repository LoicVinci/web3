import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Button, Form } from 'antd';

const CreateNew = (props) => {
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [info, setInfo] = useState('')

    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault()
      props.addNew({
        content,
        author,
        info,
        votes: 0
      })
      props.setNotification('a new anecdote ' + content + ' created!')
      navigate('/')
    }
  
    return (
      <div>
        <h2>create a new anecdote</h2>
        <Form onFinish={handleSubmit}>
            <Form.Item label="Content" name="Content" rules={[{ required: true, message: 'Please input your content!' }]}>
            <Input style={{width: '15%',}} name='content' value={content} />
            </Form.Item>
            <Form.Item label="Author" name="Author" rules={[{ required: true, message: 'Please input your author!' }]}>
            <Input style={{width: '15%',}} name='author' value={author} onChange={(e) => setAuthor(e.target.value)} />
            </Form.Item>
            <Form.Item label="Info" name="Info" rules={[{ required: true, message: 'Please input your info!' }]}>
            <Input style={{width: '15%',}} name='info' value={info} onChange={(e) => setInfo(e.target.value)} />
            </Form.Item>
          <Button type="primary">Create</Button>
        </Form>
      </div>
    )
  
  }

export default CreateNew