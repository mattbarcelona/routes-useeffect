import { Link } from "react-router-dom";
import projects from "../data/projects";

//( id, name, image, description, url)

function Projects() {
  return (
    <>
      <ul>
        {projects.map((project) => (
          <li>
            <p>nombre del proyecto:{project.name}</p>
            <img src={project.image}  alt='imagen del proyecto' />
            <p>Descripcion:{project.description} </p>
            <a href={project.url} target="_blank">Enlace al projecto</a>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Projects;