export const BASE_URL = 'https://todo-401-default-rtdb.asia-southeast1.firebasedatabase.app/'

export const API = {
  get: url => {
    return fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    }).then(res => res.json())
  },
  post: (url, data) => {
    return fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  },
  delete: url => {
    return fetch(`${BASE_URL}${url}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
  }
}