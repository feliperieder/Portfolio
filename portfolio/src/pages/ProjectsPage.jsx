import React from 'react'
import projects from "../assets/projects"
import myCSS from './ProjectsPage.module.css';
import ButtonTopComponent from "../components/ButtonTopComponent"
import { Link } from 'react-router-dom';
import FooterComponent from "../components/FooterComponent"
import GithubImg from "../assets/github.svg"

const ProjectsPage = () => {

  const habilitiesList = (list) => {
    return list.map((item, index) => (
        <li key={index}>{item}</li>
    ));
  }

  const verifyItch = (link) =>{
    if(link !== "#"){
      return(
    <a href={link}  target="_blank" className={myCSS.linkItch}>Play</a>
    )}
    else{
      return null
    }
  }

  const verifyGit = (link) =>{
    if(link !== "#"){
      return(
    <a href={link}  target="_blank" className={myCSS.linkGit}>
      <img src={GithubImg} alt="Github" className={myCSS.socialImg} title="Link to the prject repository"/>
    </a>
    )}
    else{
      return null
    }
  }

  return (
    <>
    
        <header className={myCSS.topBar} id='top'>
          <h1>Meus Projetos</h1>
          <Link to="/" className={myCSS.backButton}>Home Page</Link>
          </header>
      <div className={myCSS.container}>
        <section>
          {projects.map((project) => {
              return(
                <article key={project.id} id={String(project.id)} className={myCSS.project}>
                <h3 className={myCSS.projectTitle}>{project.name}</h3>
                    <div className={myCSS.projectContent}>
                        <div className={myCSS.projectInfo}>
                            <p style={{ whiteSpace: 'pre-line' }}>{project.introText}</p>
                            <p style={{ whiteSpace: 'pre-line' }}>{project.fullText}</p>
                            <ul>Habilidades Desenvolvidas:
                              {habilitiesList(project.habilities)}
                              </ul>
                        </div>
                        <figure>
                            <img src={project.img} alt={project.name} />
                            <figcaption className={myCSS.caption}>Imagens de {project.name}</figcaption>
                        </figure>
                    </div>
                    <div className={myCSS.links}>
                      {verifyItch(project.itchLink)}
                      {verifyGit(project.gitLink)}
                    </div>
                </article>);
                })}
        </section>
        <FooterComponent />
        
      <ButtonTopComponent />
      </div>
      </>
  )
}

export default ProjectsPage