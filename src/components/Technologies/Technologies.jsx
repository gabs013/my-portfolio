import './Technologies.css';

const technologies = [
  { name: 'React', mark: '⚛' },
  { name: 'JavaScript', mark: 'JS' },
  { name: 'HTML5', mark: '5' },
  { name: 'CSS3', mark: '#' },
  { name: 'Git', mark: 'Git' },
  { name: 'GitHub', mark: 'GH' },
  { name: 'Figma', mark: 'F' },
  { name: 'npm', mark: 'npm' },
];

function Technologies() {
  return (
    <section className="technologies" id="tecnologias">
      <p className="technologies__label">Tecnologías</p>
      <h2 className="technologies__title">Mi caja de herramientas</h2>

      <ul className="technologies__list">
        {technologies.map((technology) => (
          <li className="technologies__item" key={technology.name}>
            <span className="technologies__mark" aria-hidden="true">
              {technology.mark}
            </span>
            <span>{technology.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Technologies;
