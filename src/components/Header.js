import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/profile-pic-circle.png'

const logostyle = {
  height: '75px',
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
        <h1>Frontend Developer</h1>
        <p>
          Hello, I'm Jona. I like to build and design stuff on the web. I have a <br/>strong passion in problem solving, design thinking and growth mindset.
        </p>
        <p> <a href='https://www.linkedin.com/in/jonareyes/' target='_blank'>LinkedIn</a> | <a href='https://github.com/rookie-cookie' target='_blank'>Github</a></p>
      </div>
    </div>
    <nav>
      <ul>
        {/* <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li> */}
        
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
