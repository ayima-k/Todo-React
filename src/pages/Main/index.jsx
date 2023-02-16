import React from 'react'
import cls from './Main.module.scss'
import { useNavigate } from 'react-router-dom'
import { getTodos, deleteTodo } from '../../configs/index'

const Main = () => {

  const navigate = useNavigate()
  const goCreate = () => navigate('/create')

  const [todos, setTodos] = React.useState(null)

  const [loading, setLoading] = React.useState(false)

  const [updateUseEffect, setUpdateUseEffect] = React.useState(null)

  const handleDelete = id => {
    setLoading(true)

    const askDelete = window.confirm('Вы точно хотите удалить эту карточку?')

    if (askDelete) {
      deleteTodo(id)
      .then(() => setUpdateUseEffect(id))
      .catch(console.error)
      .finally(() => setLoading(false))
    }
  }


  React.useEffect(() => {
    getTodos()
    .then(res => {
      const data = res ? Object.entries(res).map(([id, rest]) => {
        return {
          id,
          ...rest
        }
      }) : []
      setTodos(data)
    })
  }, [updateUseEffect])


  if (!todos) return <h1>Loading...</h1>
  return (
    <div className={cls.root}>
      {
        loading && (
          <h1>Загрузка...</h1>
        )
      }

      {
        todos?.map(({title, content, id}) => {
          return (
            <div 
              className={cls.card}
              onClick={() => handleDelete(id)}
            >
              <h1>{ title }</h1>
              <p>{ content }</p>
            </div>
          )
        })
      }

      {
        todos?.length === 0 && (
          <h1>Нет данных</h1>
        )
      }


      <button
        className={cls.createBtn}
        onClick={goCreate}
      >
        Create Todo
      </button>
    </div>
  )
}

export default Main