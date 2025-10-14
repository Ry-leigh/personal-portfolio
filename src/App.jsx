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
                <img src="images/pic01.jpg" alt="" />
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
          </div>
        </section>

        {/* My Skillset */}
        <section id="skills" className="wrapper style3 fade-up">
          <div className="inner">
            <h2>What we do</h2>
            <p>
              Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis
              mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget
              hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit
              quis lorem.
            </p>
            <div className="features">
              <section>
                <span className="icon solid major fa-code" />
                <h3>Lorem ipsum amet</h3>
                <p>
                  Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                  aliquam turpis mauris, sed ultricies erat dapibus.
                </p>
              </section>
              <section>
                <span className="icon solid major fa-lock" />
                <h3>Aliquam sed nullam</h3>
                <p>
                  Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                  aliquam turpis mauris, sed ultricies erat dapibus.
                </p>
              </section>
              <section>
                <span className="icon solid major fa-cog" />
                <h3>Sed erat ullam corper</h3>
                <p>
                  Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                  aliquam turpis mauris, sed ultricies erat dapibus.
                </p>
              </section>
              <section>
                <span className="icon solid major fa-desktop" />
                <h3>Veroeros quis lorem</h3>
                <p>
                  Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                  aliquam turpis mauris, sed ultricies erat dapibus.
                </p>
              </section>
              <section>
                <span className="icon solid major fa-link" />
                <h3>Urna quis bibendum</h3>
                <p>
                  Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                  aliquam turpis mauris, sed ultricies erat dapibus.
                </p>
              </section>
              <section>
                <span className="icon major fa-gem" />
                <h3>Aliquam urna dapibus</h3>
                <p>
                  Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                  aliquam turpis mauris, sed ultricies erat dapibus.
                </p>
              </section>
            </div>
            <ul className="actions">
              <li>
                <a href="generic.html" className="button">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* My Works */}
        <section id="works" className="wrapper style2 spotlights">
          <section>
            <a href="#" className="image">
              <img src="images/pic01.jpg" alt="" data-position="center center" />
            </a>
            <div className="content">
              <div className="inner">
                <h2>Sed ipsum dolor</h2>
                <p>
                  Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
                  turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.
                </p>
                <ul className="actions">
                  <li>
                    <a href="generic.html" className="button">
                      Learn more
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <a href="#" className="image">
              <img src="images/pic02.jpg" alt="" data-position="top center" />
            </a>
            <div className="content">
              <div className="inner">
                <h2>Feugiat consequat</h2>
                <p>
                  Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
                  turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.
                </p>
                <ul className="actions">
                  <li>
                    <a href="generic.html" className="button">
                      Learn more
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <a href="#" className="image">
              <img src="images/pic03.jpg" alt="" data-position="25% 25%" />
            </a>
            <div className="content">
              <div className="inner">
                <h2>Ultricies aliquam</h2>
                <p>
                  Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
                  turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.
                </p>
                <ul className="actions">
                  <li>
                    <a href="generic.html" className="button">
                      Learn more
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
              Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis
              mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget
              hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit
              quis lorem.
            </p>
            <div className="split style1">
              <section>
                <form method="post" action="#">
                  <div className="fields">
                    <div className="field half">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                      <label htmlFor="email">Email</label>
                      <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <ul className="actions">
                    <li>
                      <a href="" className="button submit">
                        Send Message
                      </a>
                    </li>
                  </ul>
                </form>
              </section>
              <section>
                <ul className="contact">
                  <li>
                    <h3>Address</h3>
                    <span>
                      12345 Somewhere Road #654
                      <br />
                      Nashville, TN 00000-0000
                      <br />
                      USA
                    </span>
                  </li>
                  <li>
                    <h3>Email</h3>
                    <a href="#">user@untitled.tld</a>
                  </li>
                  <li>
                    <h3>Phone</h3>
                    <span>(000) 000-0000</span>
                  </li>
                  <li>
                    <h3>Social</h3>
                    <ul className="icons">
                      <li>
                        <a href="#" className="icon brands fa-twitter">
                          <span className="label">Twitter</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icon brands fa-facebook-f">
                          <span className="label">Facebook</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icon brands fa-github">
                          <span className="label">GitHub</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icon brands fa-instagram">
                          <span className="label">Instagram</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icon brands fa-linkedin-in">
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
            <li>© Untitled. All rights reserved.</li>
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
