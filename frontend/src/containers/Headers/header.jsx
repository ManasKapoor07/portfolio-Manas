import React from 'react'

import { motion } from 'framer-motion'

import { Images } from '../../constants'

import './header.scss'
const header = () => {
  return (
    <div id='home' className='app_header app_flex'>


      <div className='app_header-info'>
        <div className="app_header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Manas</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">UI/UX Designer</p>
          </div>
        </div>
      </div>

      <div className='app_header-img'>
        <img src={Images.profile} alt="profile_bg" />
        <img src={Images.circle} alt="profile_circle" className='overlay_circle' />

        <div className='app_header-circles'>
          {[Images.flutter, Images.redux, Images.sass].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="profile_bg" />
            </div>
          ))}


        </div>
      </div>
    </div>





  )
}

export default header