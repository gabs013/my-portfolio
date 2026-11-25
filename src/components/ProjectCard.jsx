function ProjectCard({ project }) {
  const { title, description, technologies, demoUrl, repositoryUrl } = project;

  return (
    <article className="project-card">
      <div className="project-card__preview">
        {project.image ? (
          <img src={project.image} alt={project.imageAlt} />
        ) : (
              <span>Captura del proyecto</span>
            )}
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        <ul className="project-card__technologies">
          {technologies.map((technology) => (
            <li className="project-card__tag" key={technology}>
              {technology}
            </li>
          ))}
        </ul>

        <div className="project-card__links">
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noreferrer">
              Ver demo
            </a>
          )}

          <a href={repositoryUrl} target="_blank" rel="noreferrer">
            Ver repositorio
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
