import { BrowserRouter, Routes ,  Route } from 'react-router-dom'
import './App.css'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import TestPage from './pages/TestPage'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/contact' element={<ContactPage/>} />
      <Route path='/test' element={<TestPage/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
