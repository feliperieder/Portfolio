import React from 'react'
import Photo from "../assets/Me.JPG"
import myCSS from "./AboutMeComponent.module.css"
import resumeEN from "../assets/FelipeRiederGameDev_Curriculum_en.pdf"
import resumePT from "../assets/FelipeRiederGameDev_Curriculum_ptbr.pdf"

const AboutMeComponent = () => {


  return (
    <div className="container">
        <h2>About Me</h2>
        <div className={myCSS.aboutMeInfo}>    
            <figure>
                <img src= {Photo} alt="Me" />
            </figure>
            <div className={myCSS.info}>
                <p className={myCSS.text}>I am currently studying Game Development at Unisinos, in Porto Alegre, RS, Brazil. I have experience in both programming and game design.
                I am familiar with Unity and Godot and proficient in C#, Python, and GDScript.
                    I am always looking to improve and learn new things. I am used to work in teams and I'm fluent in English.
                </p>
                <a href={resumeEN} target="_blank" className={myCSS.resume}>Resume (English)</a>
                <a href={resumePT} target="_blank" className={myCSS.resume}>Resume (Portuguese)</a>
            </div>
        </div>
    </div>
  )
}

export default AboutMeComponent