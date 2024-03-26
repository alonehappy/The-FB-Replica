
import './App.css'
import Login from './components/Login/Login'
import AllRoute from './components/allRoute/AllRoute'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import MainPage from './components/mainpage/MainPage'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/*' element = {<AllRoute/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
      
      
    </>
  )
}

export default App
