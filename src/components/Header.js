import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/profile-pic-circle.png'

const logostyle = {
  height: '90%',
  width: 'auto',
  position: 'relative',
  top: '6%'
};

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      {/* <span className="icon fa-diamond"></span> */}
      <img src={logo} alt='profile-pic' style={logostyle} />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Frontend UI/UX Developer</h1>
        <p>
          Hello, I'm Jona. I like to build and design stuff on the web. I have a <br/>strong passion in problem solving, design thinking and growth mindset.
        </p>
        <p> 
          <a href='https://www.linkedin.com/in/jonareyes/' target='_blank'>LinkedIn</a> 
        | <a href='https://github.com/rookie-cookie' target='_blank'>Github</a> 
        | <a href='https://drive.google.com/file/d/1RPY-DKt6b2fXtvlqYIs0Ih8AeI2CENwU/view' target='_blank'>Resume</a> 
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
          About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
          Work
          </button>
        </li>
        
        
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('projects')
            }}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
