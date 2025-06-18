import React from 'react'
import projects from "../assets/projects"
import myCSS from "./ProjectsComponent.module.css"

const ProjectsComponent = () => {

  const habilitiesList = (list) => {
    return list.map((item, index) => (
        <li key={index}>{item}</li>
    ));
  }

  return (

    <div className="container">
        <h2 className={myCSS.title}>My Projects</h2>
        {projects.map((project) => (
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
            <button className={myCSS.moreInfo}>More Info</button>
        </article>))}
        <button className={myCSS.allProjects}>All Projects</button>
    </div>
  )
}

export default ProjectsComponent