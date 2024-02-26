import { Routes, Route, NavLink } from 'react-router-dom'

import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'

import './App.css'

function App() {

  return (
      <>
    <header>
        <div className='container headers'>
      <div className="logo">
        <a href="/">Logo</a>
      </div>
      <nav>
      <ul>
        <li>
          <NavLink to="/login">Log in</NavLink>
        </li>

        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
      </nav>
      </div>
    </header>


    <Routes>  
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
    </Routes>
    </>
  )
}

export default App
