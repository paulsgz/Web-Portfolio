import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { ExternalLink } from 'react-external-link';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss';

const Work = () => {
  const [animateCard] = useState({ y: 0, opacity: 1 });
  return (
    <>
    <motion.div
      animate={animateCard}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__work-portfolio"
    >
    <div className='project1'>
      <div className='row'>
        <div className='col-xl-5 description' >
          <h2>Newsfeed</h2>
          <p>
            Server Side Rendering (SSR) site using EJS and APIs
          </p>
          <p className='descrip'>
          Developed Newsfeed-CPS as a web application that allows users to browse and search through a collection of news 
articles from 80,000 worldwide sources.
          </p>
          <h5><Link to={'./project01'} className="SeeMore">See more details   <BsFillArrowRightCircleFill className="arrow" size={18} style={{ marginBottom:'4px' }}/></Link></h5>
          <p>
          <ExternalLink className="GoTo" href="https://newsfeed-cps.herokuapp.com/"><FiExternalLink size={25} style={{ marginRight:'10px' }}/></ExternalLink>
          <ExternalLink className="Github" href="https://github.com/paulsgz/newsfeed-cps.git">< FaGithub size={22} /></ExternalLink>
          </p>
        </div>
        <div className='col-xl-7 projectImage' >
        <video src={"https://res.cloudinary.com/djhqargof/video/upload/v1672340669/Newsfeed_lipp3j.mov"}
        type="video/mp4"
        loop={true}
        controls={false}
        muted
        autoPlay={true}
        className='HomeVideo img-fluid'
        />
        </div>
      </div>
    </div>
    </motion.div>
    <hr className='newline'></hr>
    <motion.div
      animate={animateCard}
      transition={{ duration: 0.8, delayChildren: 0.5 }}
      className="app__work-portfolio"
    >
    <div className='project2'>
      <div className='row'>
        <div className='col-xl-7 projectImage2' >
        <div className='col-xl-4 box'>
        <video src={"https://res.cloudinary.com/djhqargof/video/upload/v1672339999/iphone1_eobsbz.mp4"}
        type="video/mp4"
        loop={true}
        controls={false}
        muted
        autoPlay={true}
        className='iphoneVid'
        />
        </div>
        <div className='col-xl-4 box'>
        <video src={"https://res.cloudinary.com/djhqargof/video/upload/v1672336958/iphone2_ly5gyf.mp4"}
        type="video/mp4"
        loop={true}
        controls={false}
        muted
        autoPlay={true}
        className='iphoneVid'
        />
        </div>
        <div className='col-xl-4 box'>
        <video src={"https://res.cloudinary.com/djhqargof/video/upload/v1672340384/iphone3_zvfvnt.mp4"}
        type="video/mp4"
        loop={true}
        controls={false}
        muted
        autoPlay={true}
        className='iphoneVid'
        />
        </div>
        </div>
        <div className='col-xl-5 description2' >
          <h2>Space Project</h2>
          <p>
            MERN-stack web application
          </p>
          <p className='descrip'>
          Created a full MERN-stack web application that allows authenticated users to view and share experiences about space 
and astronomy.
          </p>
          <h5><Link to={'./project02'} className="SeeMore">See more details   <BsFillArrowRightCircleFill className="arrow" size={18} style={{ marginBottom:'4px' }}/></Link></h5>
          <p>
          <ExternalLink className="GoTo" href="https://space-project31.herokuapp.com/"><FiExternalLink size={25} style={{ marginRight:'10px' }}/></ExternalLink>
          <ExternalLink className="Github" href="https://github.com/paulsgz/Space-Project.git">< FaGithub size={22} /></ExternalLink>
          </p>
        </div>
      </div>
    </div>
    </motion.div>
    <hr className='newline'></hr>
  </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'project',
  'app__whitebg',
);