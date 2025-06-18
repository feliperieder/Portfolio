import React from 'react'
import projects from "../assets/projects"
import myCSS from "./ProjectsComponent.module.css"
import { Link } from 'react-router-dom'

import { HashLink } from 'react-router-hash-link';

const ProjectsComponent = () => {

  const habilitiesList = (list) => {
    return list.map((item, index) => (
        <li key={index}>{item}</li>
    ));
  }

  return (

    <div className="container">
        <h2 className={myCSS.title}>My Projects</h2>
        {projects.map((project) => {
          if (project.id <= 3){
            return(
              <article key={project.id} className={myCSS.project}>
                  <div className={myCSS.projectContent}>
                      <div className={myCSS.projectInfo}>
                          <h3 className={myCSS.projectTitle}>{project.name}</h3>
                          <p style={{ whiteSpace: 'pre-line' }}>{project.introText}</p>
                          <ul>{habilitiesList(project.habilities)}</ul>
                      </div>
                      <figure>
                          <img src={project.img} alt={project.name} />
                          <figcaption>Gameplay de {project.name}</figcaption>
                      </figure>
                  </div>
                  <HashLink to={"/projects#"+String(project.id)} className={myCSS.moreInfo}>More Info</HashLink>
              </article>);}
          else{
            return (null)
          }
              })}
        <HashLink to="/projects#top" className={myCSS.allProjects}>All Projects</HashLink>
    </div>
  )
}

export default ProjectsComponent