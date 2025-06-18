import React from 'react'
import myCSS from "./MainComponent.module.css"

const MainComponent = () => {
  return (
    <div>
        <div className= {myCSS.container}>
            <h1 className>Felipe Schmidt Rieder</h1>
            <p className={myCSS.description}>Currently studying Game Development at Unisinos, with experience in both programming and game design.</p>
            <a href='#' className={myCSS.contact}>Get in touch</a>
        </div>
    </div>
  )
}

export default MainComponent