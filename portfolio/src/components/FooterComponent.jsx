import React from 'react'
import GithubImg from "../assets/github.svg"
import ItchIoImg from "../assets/itchImg.png"
import linkedinImg from "../assets/linkedin.svg"
import myCSS from "./FooterComponent.module.css"

const FooterComponent = () => {
  return (
    <div className="container">
        <ul className={myCSS.socialMedia}>
            <li>
                <a href="https://github.com/feliperieder" target="_blank" title="Link to Github Profile" className={myCSS.link}>
                    <img src={GithubImg} alt="Github" className={myCSS.socialImg}/>
                </a> 
            </li>
            <li>
                <a href="https://roedor.itch.io" target="_blank" title="Link to Itch.io Profile" className={myCSS.link}>
                    <img src={ItchIoImg} alt="Itch.io" className={myCSS.socialImg}/>
                </a> 
            </li>
            <li>
                <a href="https://www.linkedin.com/in/felipe-rieder/" target="_blank" title="Link to Linkedin Profile" className={myCSS.link}>
                    <img src={linkedinImg} alt="Linkedin" className={myCSS.socialImg}/>
                </a> 
            </li>
        </ul>
    </div>
  )
}

export default FooterComponent