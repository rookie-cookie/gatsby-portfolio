import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'
import pic05 from '../images/pic05.jpg'
import emailjs from "emailjs-com"

class Main extends React.Component {

  sendEmail(event){
    event.preventDefault()
    emailjs
      .sendForm(
        "service_2zm1vhx",
        "template_3icqt39",
        event.target,
        "user_qaowQ52rzVjFAksdDmgF9"
      )
      .then(
        result => {
          alert('Thank you for your message. Message has been sent!')
        },
        error => {
          console.log(error.text)
        }
      )
  }

  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Side <br/>Projects</h2>
          <span className="image main">
            <img src={pic04} alt="project-screenshot" />
          </span>
          <h3>Ecommerce App</h3>
    
          <p>
            CRWN clothing is a full-stack e-commerce application that enables users to shop online. App also features ability to create a new user account or sign up using an existing gmail account - all authentication and database is powered by Firebase. Users are also able to 'purchase' products through the help of Stripe's API. This project is still in progress - more features to come.  
          </p>

          <p>Technologies used: HTML, SCSS, Javascript, React, Redux, Styled-Components, Firebase, Stripe, Heroku, Git </p>

          <p>
            <span><a href="https://crwn-jreyes-live.herokuapp.com" target="_blank">Demo</a></span> | <a href="https://github.com/rookie-cookie/react-ecommerce-app" target="_blank">Github</a>
          </p>

          <span className="image main">
            <img src={pic02} alt="project-screenshot" />
          </span>
          <h3>Weather App</h3>
    
          <p>
            Simple weather application made with React and makes use of Open Weather Api. Application is made with using functional react components and react hooks. Features an on click temperature conversion and weather icons that varies depending on the current temperature. 
          </p>

          <p>Technologies used: HTML, CSS, Javascript, React, React Hooks, Open Weather API, GH-Pages, Git</p>

          <p>
            <span><a href="https://rookie-cookie.github.io/react-weather-app/" target="_blank">Demo</a></span> | <a href="https://github.com/rookie-cookie/react-weather-app" target="_blank">Github</a>
          </p>

          <span className="image main">
            <img src={pic05} alt="project-screenshot" />
          </span>
          <h3>Wikipedia Viewer</h3>
    
          <p>
            Users can search wikipedia entries using the search box and see all resulting entries. User can also generate a random search entry. 
          </p>

          <p>Technologies used: Javascript, jQuery, Mediawiki API, Codepen</p>

          <p>
            <span><a href="https://codepen.io/rookie-cookie/pen/xqppBq" target="_blank">Demo</a></span> 
          </p>

          

          <h3>More to come...</h3>
          <h5><a href="https://github.com/rookie-cookie" target="_blank">Github</a></h5>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            {/* <img src={pic03} alt="" /> */}
          </span>
          <p>
           Hi there! Thank you for stopping by. I'm a creative frontend developer with experience building full-stack applications with Javascript, React, Node, Express and various API integrations. I'm passionate about creating visually appealing products that have a positive impact on the end user. Always eager to learn new things and looking for ways to challenge myself creatively. 
          </p>

          <p>
            Prior to working in the software development industry, I've worked in the IT industry where I've been able to develop strong analytical and troubleshooting skills. I have a passion for problem-solving and enjoy being in dynamic teams. My goal is to combine my analytical thinking with my dedication for creating beautiful, accessible web applications.
          </p>

          <p>CORE TECHNOLOGIES: <br/> HTML | CSS | Sass | Javascript | jQuery | React | Redux | NodeJS | ExpressJS | Git | Bootstrap | Gatsby | Heroku | Figma | VScode </p>
          <p> </p>

          <p>FAMILIAR WITH: <br/> Django | Linux | Docker | Kubernetes | AWS | Google Analytics </p>

          <p>OTHER SKILLS: <br/>Detail Oriented | Problem Solving | Teamwork | Communication | Web Design</p>

          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#" onSubmit={(e) => this.sendEmail(e)}>
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" placeholder="send me a message..."></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/jonareyes/"
                className="icon fa-linkedin" target="_blank"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/micaxreyes/" className="icon fa-instagram"
                target="_blank"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href = "https://github.com/rookie-cookie"
                className="icon fa-github" target="_blank"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
