export default function About() {
  return (
    <div className="about-page">
      {/* Page Title */}
      <h1>About Me</h1>

      {/* Biography Section */}
      <section className="about-section">
        <h2>Biography</h2>
        <p>
          I am a passionate web developer with a strong interest in building
          scalable and user-friendly applications. My journey in software
          development started several years ago, and I have been continuously
          learning and growing ever since.
        </p>
      </section>

      {/* Skills Section */}
      <section className="about-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>JavaScript (ES6+), TypeScript</li>
          <li>React, Next.js</li>
          <li>HTML5, CSS3, Sass</li>
          <li>Node.js, Express</li>
          <li>Git &amp; GitHub</li>
          <li>REST APIs</li>
        </ul>
      </section>

      {/* Experience Highlights Section */}
      <section className="about-section">
        <h2>Experience Highlights</h2>
        <ul className="experience-list">
          <li>
            Developed and maintained multiple full-stack web applications using
            React and Next.js.
          </li>
          <li>
            Collaborated with cross-functional teams to deliver high-quality
            software on time.
          </li>
          <li>
            Implemented responsive designs and improved accessibility for
            diverse user bases.
          </li>
          <li>
            Optimized application performance and reduced load times by 30%.
          </li>
        </ul>
      </section>
    </div>
  );
}
