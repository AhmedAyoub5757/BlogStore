export default function About() {
  return (
    <div className="about-page">
      {/* Page Title */}
      <h1 className="about-title">About Me</h1>

      {/* Biography Section */}
      <section className="about-section">
        <h2 className="section-title">Biography</h2>
        <p className="section-text">
          I am a passionate web developer with a strong interest in building
          scalable and user-friendly applications. My journey in software
          development started several years ago, and I have been continuously
          learning and growing ever since.
        </p>
      </section>

      {/* Skills Section */}
      <section className="about-section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">JavaScript (ES6+), TypeScript</div>
          <div className="skill-card">React, Next.js</div>
          <div className="skill-card">HTML5, CSS3, Sass</div>
          <div className="skill-card">Node.js, Express</div>
          <div className="skill-card">Git &amp; GitHub</div>
          <div className="skill-card">REST APIs</div>
        </div>
      </section>

      {/* Experience Highlights Section */}
      <section className="about-section">
        <h2 className="section-title">Experience Highlights</h2>
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
