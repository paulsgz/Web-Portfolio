import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import * as Scroll from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  let Link = Scroll.Link;


const toggleHome = () => {
  scroll.scrollToTop();
}

  return (
    <nav className='app__navbar'>
      <button onClick={toggleHome} className="LogoButton"> 
      <img src={images.newLogo} alt="logo"  className='LogoPic'/>
      </button>
    {/* <div className='app__navbar-logo'>
      
    </div> */}
    <ul className='app__navbar-links'>
        {['home','about','projects','skills','contact'].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
                <Link
                to={item}
                smooth={true}
                duration={700}
                spy={true}
                exact='true'
                activeClass='active'
                >{item}</Link>
                <div />
            </li>
        ))}
    </ul>
    <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={()=> setToggle(true)}/>

          {
            toggle && (
              <motion.div
                whileInView={ {x: [150,0]}}
                transition={{duration:0.85, ease:'easeOut'}}
              >
                <HiX onClick={() => setToggle(false)}/>
                <ul>
                    {['home','about','projects','skills','contact'].map((item) => (
                <li key={item}>
                 <Link
                    to={item}
                    smooth={true}
                    duration={700}
                    spy={true}
                    exact='true'
                    activeClass='active'
                    onClick={() => setToggle(false)}
                    >{item}</Link>
                </li>
            ))}
            </ul>
              </motion.div>
            )
          }
    </div>
    </nav>

  )
}

export default Navbar