import { API } from './api'

export const getTodos = () => {
  return API.get('todos.json')
}

export const createTodo = data => {
  return API.post('todos.json', data)
}

export const deleteTodo = url => {
  return API.delete(`todos/${url}.json`)
}