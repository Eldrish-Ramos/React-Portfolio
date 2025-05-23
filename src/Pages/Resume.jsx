function Resume() {
  return (
    <section className='app-container'>
      <h2>Resume</h2>
      <a href="/resume.pdf" download>Download Resume</a>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML/CSS</li>
        <li>Node.js</li>
        {/* Add more skills */}
      </ul>
    </section>
  );
}

export default Resume;