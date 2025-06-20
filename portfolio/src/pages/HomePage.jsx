import { useState } from 'react'
import '../App.css'
import HeaderComponent from '../components/headerComponent'
import ProjectsComponent from '../components/ProjectsComponent'
import AboutMeComponent from '../components/AboutMeComponent'
import GetInTouchComponent from '../components/GetInTouchComponent'
import FooterComponent from '../components/FooterComponent'
import ButtonTopComponent from '../components/ButtonTopComponent'

function HomePage() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <header id='top'>
          <HeaderComponent />
        </header>

        <section id="projects_section">
          <ProjectsComponent />
        </section>

        <section id="aboutMe_section">
          <AboutMeComponent />
        </section>

        <section id="getInTouch_section">
          <GetInTouchComponent />
        </section>

        <footer>
          <FooterComponent />
        </footer>      
      </ div>
      <ButtonTopComponent />
    </>
  )
}

export default HomePage
