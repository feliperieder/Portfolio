import React from 'react'
import myCSS from "./HeaderComponent.module.css"
import MenuComponent from './MenuComponent'
import MainComponent from './MainComponent'

const HeaderComponent = () => {

  return (
    <div className={myCSS.header}>
      <MenuComponent />
      <MainComponent />
    </div>
  )
}

export default HeaderComponent