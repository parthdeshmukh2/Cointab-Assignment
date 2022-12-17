import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import UserProfile from './UserProfile'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/user' element={<UserProfile/>} />
      
    </Routes>
  )
}

export default MainRoutes
