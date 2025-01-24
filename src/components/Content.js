import React from 'react'
import '../css/Content.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Cart } from './Cart'
import { About } from './About'
import { Contact } from './Contact'
export const Content = ({cartItem,setCartItem}) => {
  return (
    <div className='main-content'>
        <Routes>
            <Route path='/' element={<Home cartItem={cartItem} setCartItem={setCartItem}/>}/>
            <Route path='/Cart' element={<Cart cartItem={cartItem} setCartItem={setCartItem}/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
           
        </Routes>
    </div>
  )
}
