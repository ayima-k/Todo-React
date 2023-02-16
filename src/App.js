import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Create from './pages/Create'
import Main from './pages/Main'

const App = () => {
  return (
    <Routes>
      <Route path="/create" element={<Create />} />
      <Route path="/" element={<Main />}  />
    </Routes>
  )
}

export default App;