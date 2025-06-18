import React from 'react'

import myCSS from "./GetInTouchComponent.module.css"

const GetInTouchComponent = () => {
  return (
    <div className='container'>
        <h2>Get In Touch</h2>
        <div className={myCSS.contact}>
            <p className={myCSS.text}>If you're looking to get in touch, collaborate on a project, or explore partnership opportunities, feel free to contact me! The quickest way is by email.</p>
            <a href="mailto:feliperieder@gmail.com" target="_blank" className={myCSS.email}>feliperieder@gmail.com</a>
        </div>
    </div>
  )
}

export default GetInTouchComponent