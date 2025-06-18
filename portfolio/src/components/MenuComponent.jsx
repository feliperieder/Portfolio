import React from 'react'
import myCSS from "./MenuComponent.module.css"

const MenuComponent = () => {
  return (
    <div className={myCSS.navBar}>
        <nav>
          <ul className={myCSS.navList}>
            <li ><a className={myCSS.navLink} href='#projects_section'>Projects</a></li>
            <li><a className={myCSS.navLink} href='#aboutMe_section'>About</a></li>
            <li><a className={myCSS.navLink} href='#getInTouch_section'>Contact</a></li>
            <li className={myCSS.menuDisapear}><a className={myCSS.navLink} href="https://roedor.itch.io" target="_blank">Itch.io</a></li>
            <li className={myCSS.menuDisapear}><a className={myCSS.navLink} href="https://github.com/feliperieder" target='_blank'>GitHub</a></li>
          </ul>
        </nav>
    </div>
  )
}

export default MenuComponent