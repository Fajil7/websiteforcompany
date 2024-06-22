import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import './App.css'
import Header from './component/Header/Header'
;import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Faq from './component/Faq/Faq';
import Listing from './component/Listing/Listing';



function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/faq' element={<Faq/>}/>
          <Route path='/listing' element={<Listing/>}/>
          
        </Routes>
        
        
        <Footer/>
        
      </Router>
    </>
  )
}

export default App