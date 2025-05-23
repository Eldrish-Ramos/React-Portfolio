import projects from '../projects';
import Project from '../components/Project';

function Portfolio() {
  return (
    <section className='app-container'>
      <h2>Portfolio</h2>
      <div>
        {projects.map((proj) => (
          <Project key={proj.title} {...proj} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;