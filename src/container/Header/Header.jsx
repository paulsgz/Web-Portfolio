import React from 'react';
import * as Scroll from 'react-scroll';
import { images } from '../../constants';
import './Header.scss';
import SocialMedia from '../../components/SocialMedia';

const Header = () => {
  let Link = Scroll.Link;

  return (
  <>
<div className="home">
<div className='Media'>
  <SocialMedia />
  </div>
<div className="Details">
  <p>Hi, my name is</p>
  <h1>Christian Paul Seguiza</h1>
  <h2>I'm a Full Stack Developer.</h2>
  <p className='Description'>I am a developer specializing in creating innovative software and applications.<br></br> Thank you for visiting my portfolio and I hope you enjoy exploring my work!</p>
  <Link
      to={'projects'}
      smooth={true}
      duration={700}
      spy={true}
      exact='true'
      activeClass='active'
      className='btn btn-outline-primary projectLink'
    >View Work</Link>
   <a className="btn btn-primary projectLink" role="button" href='ChristianSeguiza.pdf'
   download="Christian Seguiza.pdf">
  Resume
</a>
</div>
</div>
</>
)
};

export default Header;
