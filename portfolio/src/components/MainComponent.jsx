import React from 'react'
import myCSS from "./MainComponent.module.css"

import { HashLink } from 'react-router-hash-link';

const MainComponent = () => {
  return (
    <div>
        <div className= {myCSS.container}>
            <h1 className>Felipe Schmidt Rieder</h1>
            <p className={myCSS.description}>Currently studying Game Development at Unisinos, with experience in both programming and game design.</p>
            <HashLink smooth to="#aboutMe_section" className={myCSS.contact}>Get in touch</HashLink>
        </div>
    </div>
  )
}

export default MainComponent