function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div className="app-container">
      <img src={image} alt={title} width="200" />
      <h3>{title}</h3>
      <a href={deployedLink} target="_blank" rel="">Live</a> |{' '}
      <a href={githubLink} target="_blank" rel="">GitHub</a>
    </div>
  );
}

export default Project;