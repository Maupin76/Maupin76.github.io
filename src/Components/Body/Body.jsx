import './Body.css';

export default function Body() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Douglas<br />Maupin</h1>
            <img
              src={new URL('../../assets/images/avatar.png', import.meta.url).href}
              alt="Douglas Maupin"
              className="profile-pic"
            />
            <p>Full-Stack Developer</p>
            <p className="location">Meridian, Idaho</p>
            <div className="btn-group">
              <a href="#projects" className="btn">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Full-Stack Developer with Real-World Experience</h3>
              <p>
                I'm a passionate full-stack developer focused on building modern
                web applications with clean code and intuitive user experiences.
              </p>
              <p>
                I specialize in developing complete web solutions from frontend to
                backend, with experience in both personal projects and live
                business websites for local clients.
              </p>
              <p>
                I'm constantly learning and exploring new technologies to stay
                current with industry best practices and deliver high-quality
                solutions.
              </p>
            </div>
            <div className="about-highlights">
              <h3>What I Do</h3>
              <ul>
                <li>Full-Stack Web Development</li>
                <li>Frontend Design & Development</li>
                <li>Backend API Development</li>
                <li>Database Design & Management</li>
                <li>Live Business Websites</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Tech Stack</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & CSS3</li>
                <li>React</li>
                <li>Vite</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Python</li>
                <li>Flask & Django</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Database</h3>
              <ul>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools & Platforms</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>npm</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header live">
                <h3>Thai Royal Therapeutic</h3>
                <span className="project-tag">Live Business Site</span>
              </div>
              <div className="project-body">
                <p>
                  Professional massage therapy business website with online
                  booking and service information.
                </p>
                <div className="project-links">
                  <a href="https://www.thairoyaltherapeutic.com/" target="_blank" rel="noreferrer">
                    Visit Site →
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header live">
                <h3>Siam Thai Bodyworks</h3>
                <span className="project-tag">Live Business Site</span>
              </div>
              <div className="project-body">
                <p>
                  Wellness and therapy business website featuring services,
                  pricing, and client information.
                </p>
                <div className="project-links">
                  <a href="https://siamthaibodyworks.com/" target="_blank" rel="noreferrer">
                    Visit Site →
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Spots</h3>
                <span className="project-tag">JavaScript</span>
              </div>
              <div className="project-body">
                <p>
                  Interactive web application built with modern JavaScript
                  demonstrating frontend development skills.
                </p>
                <div className="project-links">
                  <a href="https://github.com/Maupin76/se_project_spots" target="_blank" rel="noreferrer">
                    View Code →
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Coffee Shop</h3>
                <span className="project-tag">HTML/CSS</span>
              </div>
              <div className="project-body">
                <p>
                  A responsive coffee shop website showcasing modern frontend
                  design principles.
                </p>
                <div className="project-links">
                  <a href="https://github.com/Maupin76/se_project_coffeeshop" target="_blank" rel="noreferrer">
                    View Code →
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Todo App</h3>
                <span className="project-tag">JavaScript</span>
              </div>
              <div className="project-body">
                <p>
                  Full-featured todo application with modern JavaScript and
                  interactive UI.
                </p>
                <div className="project-links">
                  <a href="https://github.com/Maupin76/se_project_todo-app" target="_blank" rel="noreferrer">
                    View Code →
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Me Kwam Sook</h3>
                <span className="project-tag">Full-Stack</span>
              </div>
              <div className="project-body">
                <p>
                  Full-stack project demonstrating end-to-end development
                  capabilities.
                </p>
                <div className="project-links">
                  <a href="https://github.com/Maupin76/me_kwam_sook" target="_blank" rel="noreferrer">
                    View Code →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <p>
            I'm always open to discussing new projects, creative ideas, or
            opportunities.
          </p>
          <div className="contact-links">
            <a href="https://github.com/Maupin76" target="_blank" rel="noreferrer" className="contact-link">
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/douglas-maupin/" target="_blank" rel="noreferrer" className="contact-link">
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
