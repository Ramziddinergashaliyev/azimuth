import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import ProductItem from './pages/productItem/ProductItem'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/productItem/:id' element={<ProductItem/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App