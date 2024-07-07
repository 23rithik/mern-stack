import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Userhome from './components/Userhome'
import Main from './components/Main'
import Adminhome from './components/Adminhome'
import Main2 from './components/Main2'
import Addemployee from './components/Addemployee'
import UpdateEmployee from './components/UpdateEmployee'
import PrivateRoutes from './components/PrivateRoutes'

function App() {
  

  return (
    <>
      <Routes>
      <Route path={'/'} element={<Login/>}></Route>
      {/* <Route path={'/Signup'} element={<Signup/>}></Route> */}
      <Route element={<PrivateRoutes/>}>
      <Route path={'/userhome'} element={<Main child={<Userhome/>}/>}></Route>
      <Route path={'/adminhome'} element={<Main2 child={<Adminhome/>}/>}></Route>
      <Route path={'/addemployee'} element={<Main2 child={<Addemployee/>}/>}></Route>
      <Route path={'/updateemployee'} element={<Main2 child={<UpdateEmployee/>}/>}></Route>
      </Route>
      </Routes>
    </>
  )
}

export default App
