import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createTodo } from '../../configs'
import cls from './Create.module.scss'

const Create = () => {

  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')

  const [loading, setLoading] = React.useState(false)

  const navigate = useNavigate()
  function goBack(){
    navigate('/')
  }

  const handleSubmit = e => {
    e.preventDefault()

    setLoading(true)

    createTodo({
      title,
      content,
    })
    .then(() => navigate('/'))
    .catch(console.error)
    .finally(() => setLoading(false))
  }

  return (
    <div className={cls.root}> 
      <form onSubmit={handleSubmit}>
        <input 
          className={cls.textField}
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea 
          className={cls.textArea}
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Content"
        ></textarea>
        <button type="">Submit</button>
      </form>

      <button 
        className={cls.backBtn}
        onClick={goBack}
        disabled={loading}
      >
        Go back
      </button>
    </div>
  )
}

export default Create