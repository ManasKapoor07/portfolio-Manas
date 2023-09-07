import React from 'react'
import {About , Footer , Headers , Skills , Work , Testimonials} from './containers'
import {Navbar} from './components'

import './App.scss'
const App = () => {
  return (
    <div className='app'>
   <Navbar />
   
      <About />
      <Footer />
      <Headers />
      <Skills />
      <Work />
      <Testimonials />
    </div>
  )
}

export default App
