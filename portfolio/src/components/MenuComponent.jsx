import React from 'react'
import myCSS from "./MenuComponent.module.css"
import { Link } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';
//Precisa por conta do Router, o #id parou de funciionar

const MenuComponent = () => {
  return (
    <div className={myCSS.navBar}>
        <nav>
          <ul className={myCSS.navList}>
            <li ><Link to="/projects" className={myCSS.navLink}>Projects</Link></li>
            <li><HashLink smooth to="#aboutMe_section" className={myCSS.navLink}>About</HashLink></li>
            <li><HashLink smooth to="#getInTouch_section" className={myCSS.navLink}>Contact</HashLink></li>
            <li className={myCSS.menuDisapear}><a className={myCSS.navLink} href="https://roedor.itch.io" target="_blank">Itch.io</a></li>
            <li className={myCSS.menuDisapear}><a className={myCSS.navLink} href="https://github.com/feliperieder" target='_blank'>GitHub</a></li>
          </ul>
        </nav>
    </div>
  )
}

export default MenuComponent