function App() {

  return (
    <>
      {/* Sidebar */}
      <section id="sidebar">
        <div className="inner">
          <nav>
            <ul>
              <li>
                <a href="#intro">Welcome</a>
              </li>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#skills">My Skillset</a>
              </li>
              <li>
                <a href="#works">My Works</a>
              </li>
              <li>
                <a href="#contact">Get in Touch</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      {/* Wrapper */}
      <div id="wrapper">
        {/* Intro */}
        <section id="intro" className="wrapper style1 fullscreen fade-up">
          <div className="inner">
            <div className="col-12">
              <span className="image right">
                <img src="images/em.jpg" alt="" />
              </span>
            </div>
            <p style={{ marginBottom: 0 }}>Hello, I'm</p>
            <h1>Ryan Aaron Dela Cruz</h1>
            <p style={{ marginBottom: "1em" }}>
              &nbsp; ࣭ ⭑๋ ࣭ ⭑ <i>Crafting Digital Realms, One Commit at a Time&nbsp;</i> ๋ ࣭ ⭑๋ ࣭
            </p>
            <p>A Full-Stack Developer in the making who loves interweaving technology, design, and creative ideas.</p>
            <ul className="actions">
              <li>
                <a href="#about" className="button scrolly">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="wrapper style1 fade-up">
          <div className="inner" style={{ paddingTop: 0 }}>
            <h1 className="major" />
            <h2>About Me</h2>
            <blockquote>
              I'm currently a 3rd year Bachelor of Science in Information Systems student in La Verdad Christian College, passionate about web app development and full-stack projects. My academic journey taught me more than technical skills — it strengthened how I think about systems, people, and the stories behind everything we build.
              <br />
              <br />
              I've spent the last few years exploring how technology can make education and systems simpler, effective and efficient. One of my goals is to design smarter, more intuitive systems that go beyond function — systems that actually feel alive and engaging to use.
            </blockquote>
            <hr />
            <h2>Education</h2>
            <blockquote>
              La Verdad Christian College <br />
              Bachelor of Science in Information Systems <br />
              2025 - present <br />
              <ul style={{ margin: "0 1em" }}>
                {/* <li></li> */}
              </ul>
              <hr />
              La Verdad Christian College <br />
              Associate in Computer Technology <br />
              2024 Graduate <br />
              <ul style={{ margin: "0 1em" }}>
                <li>Gold Medalist</li>
              </ul>
              <hr />
              Arellano University - Andres Bonifacio Campus <br />
              Senior High School <br />
              2022 Graduate <br />
              <ul style={{ margin: "0 1em" }}>
                <li>With Honors</li>
              </ul>
            </blockquote>
            <hr />
            <h2>Beyond The Screen</h2>
            <blockquote>
              When I'm not coding, I like to draw—mostly anime-inspired portraits. I got into it because of someone who once encouraged me to create, and though I haven't drawn as much lately, it remains a part of me that I'd love to bring into my web work someday through digital art and design.
              <br />
              <br />
              Gaming is where I find inspiration the most. I'm drawn to the rich worlds and breathtaking sceneries of games like Genshin Impact—to me, they're like digital landscapes worth exploring, with lore and storytelling that feel as immersive as a good book.
              <br />
              <br />
              I also enjoy listening to music, particularly Korean and Japanese pop, however I've been listening to classical music for stuying and coding lately.
              <br />
              <br />
              Outside all that, I'd say I'm a pretty chill person, and what most would call a “social butterfly.” Not entirely an extrovert but I like listening and learning about others' experiences, which I think has helped me connect with a lot of different people and perspectives.
            </blockquote>
          </div>
        </section>

        {/* My Skillset */}
        <section id="skills" className="wrapper style3 fade-up">
          <div className="inner">
            <h2>Skills &amp; Technologies</h2>
            <p>
              Here are the languages, frameworks, and tools I use to turn ideas into
              interactive, functional, and user-friendly applications. Each skill
              represents part of how I design, build, and refine digital experiences.
            </p>
            <div className="features">
              <section style={{ padding: "2em 0", justifyItems: "center" }}>
                <h3>Languages, Frameworks &amp; Libraries</h3>
              </section>
              <section style={{ padding: "2em 0", justifyItems: "center" }}>
                <h3>Tools &amp; Technologies</h3>
              </section>
              <section>
                <span className="icon solid major fa-code" />
                <h3>Languages</h3>
                <table>
                  <tbody>
                    <tr
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0)",
                        border: "none"
                      }}
                    >
                      <td>
                        <ul style={{ marginBottom: 0 }}>
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>Javascript (ES6+)</li>
                        </ul>
                      </td>
                      <td>
                        <ul style={{ marginBottom: 0 }}>
                          <li>Python</li>
                          <li>Java</li>
                          <li>PHP</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section>
                <span className="icon brands major fa-github" />
                <h3>Git &amp; Github</h3>
                <p>
                  Version control and collaboration tools that I rely on to track
                  progress, manage branches, and share code responsibly.
                </p>
              </section>
              <section>
                <span className="icon brands major fa-laravel" />
                <h3>Laravel</h3>
                <p>
                  My main framework for backend development. It's where I learned to
                  manage routes, controllers, and models efficiently while keeping code
                  clean and organized.
                </p>
              </section>
              <section>
                <span className="icon solid major fa-database" />
                <h3>MySQL</h3>
                <p>
                  My go to database system I use for storing, managing, and querying
                  structured data, it's what I use together with Laravel to build
                  functional, data-driven applications.
                </p>
              </section>
              <section>
                <span className="icon brands major fa-react" />
                <h3>React</h3>
                <p>
                  The JavaScript library I use for creating dynamic, component-based
                  interfaces. React helps me think in reusable parts, manage states
                  effectively, and design UIs.
                </p>
              </section>
              <section>
                <span className="icon brands major fa-figma" />
                <h3>Figma</h3>
                <p>
                  My preferred tool for designing interfaces and visual prototypes. It helps me plan user experiences and translate ideas into practical layouts before moving to development.
                </p>
              </section>
            </div>
            <ul className="actions">
              <li>
                <a href="Ryan-Aaron-Resume.pdf" className="button" download>
                  <span className="icon solid fa-download">&nbsp;&nbsp;</span>Download My
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* My Works */}
        <section id="works" className="wrapper style2 spotlights">
          <div className="inner">
            <h2>My Recent Works</h2>
            <p>
              Here are some of the systems and prototypes I've worked on, each
              reflecting a stage in my growth as a developer.
            </p>
          </div>
          <section>
            <a className="image fit">
              <img src="images/secrequery.png" alt="" data-position="center center" />
            </a>
            <div className="content">
              <div className="inner">
                <h2>SecreQuery</h2>
                <p>
                  <i>"Take Notes, Take Charge"</i>
                </p>
                <p>
                  A web app for class secretaries to manage attendance, notes, and events. Built with Laravel, it strengthened my skills in notifications, helper functions, and background job processing.
                </p>
                <ul className="actions">
                  <li>
                    <a
                      href="https://github.com/Ry-leigh/secrequery-app.git"
                      className="button"
                    >
                      GitHub Repository
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <a className="image fit">
              <img src="images/digibook.jpg" alt="" data-position="top center" />
            </a>
            <div className="content">
              <div className="inner">
                <h2>Digibook</h2>
                <p>
                  <i>"Digital interactive book"</i>
                </p>
                <p>
                  An interactive Florante at Laura e-book with gamified learning features. Though it didn't reach the application's MVP, it taught me to define scopes clearly and prioritize core features.
                </p>
                <ul className="actions">
                  <li>
                    <a
                      href="https://github.com/Ry-leigh/digibook.git"
                      className="button"
                    >
                      GitHub Repository
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <a className="image fit">
              <img src="images/memoryte.png" alt="" data-position="25% 25%" />
            </a>
            <div className="content">
              <div className="inner">
                <h2>Memoryte</h2>
                <p>
                  <i>"Memo-write"</i>
                </p>
                <p>
                  A note taking web application, and my first ever Laravel project to practice the basic fundamentals of CRUD, routing and database management.
                </p>
                <ul className="actions">
                  <li>
                    <a
                      href="https://github.com/Ry-leigh/memoryte.git"
                      className="button"
                    >
                      GitHub Repository
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </section>

        {/* Get in Touch */}
        <section id="contact" className="wrapper style1 fade-up">
          <div className="inner">
            <h2>Get in touch</h2>
            <p>
              I'm always open to new opportunities, collaborations, or simply exchanging
              ideas. Whether you'd like to discuss a project, ask a question, or just
              say hello, please feel free to reach out to any of my contacts below :)
            </p>
            <div className="split style1">
              <section>
                <form method="POST" action="https://formspree.io/f/xvgwvyqb">
                  <div className="fields">
                    <div className="field half">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" id="name" required="" />
                    </div>
                    <div className="field half">
                      <label htmlFor="email">Email</label>
                      <input type="text" name="email" id="email" required="" />
                    </div>
                    <div className="field">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        required=""
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <ul className="actions">
                    <li>
                      <button type="submit" className="button submit">
                        Send Message
                      </button>
                    </li>
                  </ul>
                </form>
              </section>
              <section>
                <ul className="contact">
                  <li>
                    <h3>Address</h3>
                    <span>
                      9066 Sitio Punong Balite, Balayong
                      <br />
                      Malolos City, Bulacan
                      <br />
                      Philippines
                    </span>
                  </li>
                  <li>
                    <h3>Email</h3>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ryanaarondc@gmail.com"
                    target="_blank">
                      ryanaarondc@gmail.com
                    </a>
                  </li>
                  <li>
                    <h3>Phone</h3>
                    <span>(+63) 949-597-9973</span>
                  </li>
                  <li>
                    <h3>Social</h3>
                    <ul className="icons">
                      <li>
                        <a href="https://www.facebook.com/mythrynne"
                        target="_blank"
                        className="icon brands fa-facebook-f">
                          <span className="label">Facebook</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/mythrynne/"
                        target="_blank"
                        className="icon brands fa-instagram">
                          <span className="label">Instagram</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://discord.com/users/745509844693549147"
                        target="_blank"
                        className="icon brands fa-discord">
                          <span className="label">Twitter</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/Ry-leigh"
                        target="_blank"
                        className="icon brands fa-github">
                          <span className="label">GitHub</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/ryan-aaron-dela-cruz-a93b19301/"
                        target="_blank"
                        className="icon brands fa-linkedin-in">
                          <span className="label">LinkedIn</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer id="footer" className="wrapper style1-alt">
        <div className="inner">
          <ul className="menu">
            <li>© Mythrynne. All rights reserved.</li>
            <li>
              Design: <a href="http://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </div>
      </footer>
      {/* Scripts */}
    </>
  )
}

export default App
