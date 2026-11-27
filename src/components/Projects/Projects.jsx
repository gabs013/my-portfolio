import { projects } from '../../data/projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';

function Projects() {
  return (
    <section className="projects" id="proyectos">
      <div className="projects__header">
        <div>
          <p className="projects__section-label">Proyectos</p>
          <h2 className="projects__section-title">Trabajo seleccionado</h2>
        </div>

        <p className="projects__intro">
          Una selección de proyectos de desarrollo frontend, desde páginas
          responsivas hasta aplicaciones con React y APIs.
        </p>
      </div>

      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
