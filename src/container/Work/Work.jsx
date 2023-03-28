import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { ExternalLink } from 'react-external-link';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss';
import './Work2.scss';

const Work = () => {
  const [animateCard] = useState({ y: 0, opacity: 1 });
  return (
    <>
    <motion.div
      animate={animateCard}
      transition={{ duration: 0.8, delayChildren: 0.5 }}
      className="app__work-portfolio"
    >
    <div className='project2'>
      <div className='row'>
      <div className='col-xl-7 projectImage' >
        <video src={"https://res.cloudinary.com/djhqargof/video/upload/v1679961420/PMTpro_kbqbck.mov"}
        type="video/mp4"
        loop={true}
        controls={false}
        muted
        autoPlay={true}
        className='HomeVideo img-fluid'
        />
        </div>
        <div className='col-xl-5 description2' >
          <h2>Project Management Tool</h2>
          <p>
            MERN-stack Ticketing System
          </p>
          <p className='descrip'>
          Engineered an end-to-end project management tool using React.js, enabling software engineers to track progress 
from 'to do' to 'finished'.
          </p>
          <h5><Link to={'./project07'} className="SeeMore">See more details   <BsFillArrowRightCircleFill className="arrow" size={18} style={{ marginBottom:'4px' }}/></Link></h5>
          <p>
          <ExternalLink className="GoTo" href="https://pmt-pro.onrender.com/"><FiExternalLink size={25} style={{ marginRight:'10px' }}/></ExternalLink>
          <ExternalLink className="Github" href="https://github.com/paulsgz/ProjectManagementTool.git">< FaGithub size={22} /></ExternalLink>
          </p>
        </div>
      </div>
    </div>
    </motion.div>
    <hr className='newline'></hr>

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


    <motion.div
      animate={animateCard}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__work-portfolio"
    >
    <div className='project3'>
      <div className='row'>
        <div className='col-xl-5 description3' >
          <h2>Pop The Bubbles</h2>
          <p>
           Original Game made with Vanilla JavaScript
          </p>
          <p className='descrip3'>
          Created an original game concept to learn more about vanilla JavaScript. Featuring a fighting fish main character trying to pop the bubbles while avoiding deadly piranhas.
          </p>
          <h5><Link to={'./project03'} className="SeeMore">See more details   <BsFillArrowRightCircleFill className="arrow" size={18} style={{ marginBottom:'4px' }}/></Link></h5>
          <p>
          <ExternalLink className="GoTo" href="https://frenzy-zl37.onrender.com/"><FiExternalLink size={25} style={{ marginRight:'10px' }}/></ExternalLink>
          <ExternalLink className="Github" href="https://github.com/paulsgz/PopTheBubbles.git">< FaGithub size={22} /></ExternalLink>
          </p>
        </div>
        <div className='col-xl-7 projectImage3' >
        <video src={"https://res.cloudinary.com/djhqargof/video/upload/v1675556858/Screen_Recording_2023-02-04_at_6.56.52_PM_ok9wcz.mov"}
        type="video/mp4"
        loop={true}
        controls={false}
        muted
        autoPlay={true}
        className='HomeVideo3 img-fluid'
        />
        </div>
      </div>
    </div>
    </motion.div>
    <hr className='newline'></hr>



    <motion.div
      animate={animateCard}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__work-portfolio"
    >
    <div className='project4'>
      <div className='row'>
      <div className='col-xl-7 projectImage4' >
        <video src={"https://res.cloudinary.com/djhqargof/video/upload/v1675556967/Screen_Recording_2023-02-04_at_7.03.47_PM_sjraf3.mov"}
        type="video/mp4"
        loop={true}
        controls={false}
        muted
        autoPlay={true}
        className='HomeVideo4 img-fluid'
        />
        </div>
        <div className='col-xl-5 description4' >
          <h2>Space Shooter</h2>
          <p>
            2D game featuring player movements and attacks
          </p>
          <p className='descrip4'>
          Space shooter games have been around since the early days of video gaming dating back to 1970's, and are among the most popular gaming genre even in the modern times.
          </p>
          <h5><Link to={'./project04'} className="SeeMore">See more details   <BsFillArrowRightCircleFill className="arrow" size={18} style={{ marginBottom:'4px' }}/></Link></h5>
          <p>
          <ExternalLink className="GoTo" href="https://spaceshooter-uct6.onrender.com/"><FiExternalLink size={25} style={{ marginRight:'10px' }}/></ExternalLink>
          <ExternalLink className="Github" href="https://github.com/paulsgz/Space-Shooter.git">< FaGithub size={22} /></ExternalLink>
          </p>
        </div>
      </div>
    </div>
    </motion.div>
    <hr className='newline'></hr>


    <motion.div
      animate={animateCard}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__work-portfolio"
    >
    <div className='project5'>
      <div className='row'>
        <div className='col-xl-5 description5' >
          <h2>Flappy Bird</h2>
          <p>
            Clone of a simple but popular mobile game
          </p>
          <p className='descrip5'>
          This game involves navigating a bird by pressing space bar to go up and releasing it to go down.
          Created using HTML, CSS and JavaScript.
          </p>
          <h5><Link to={'./project05'} className="SeeMore">See more details   <BsFillArrowRightCircleFill className="arrow" size={18} style={{ marginBottom:'4px' }}/></Link></h5>
          <p>
          <ExternalLink className="GoTo" href="https://flappybird-6e95.onrender.com/"><FiExternalLink size={25} style={{ marginRight:'10px' }}/></ExternalLink>
          <ExternalLink className="Github" href="https://github.com/paulsgz/FlappyBird.git">< FaGithub size={22} /></ExternalLink>
          </p>
        </div>
        <div className='col-xl-7 projectImage5' >
        <video src={"https://res.cloudinary.com/djhqargof/video/upload/v1675556589/Screen_Recording_2023-02-04_at_6.47.05_PM_cfpsfh.mov"}
        type="video/mp4"
        loop={true}
        controls={false}
        muted
        autoPlay={true}
        className='HomeVideo5 img-fluid'
        />
        </div>
      </div>
    </div>
    </motion.div>
    <hr className='newline'></hr>


    <motion.div
      animate={animateCard}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__work-portfolio"
    >
    <div className='project6'>
      <div className='row'>
      <div className='col-xl-7 projectImage6' >
        <video src={"https://res.cloudinary.com/djhqargof/video/upload/v1675556333/Screen_Recording_2023-02-04_at_6.54.59_PM_a9hxy7.mov"}
        type="video/mp4"
        loop={true}
        controls={false}
        muted
        autoPlay={true}
        className='HomeVideo6 img-fluid'
        />
        </div>
        <div className='col-xl-5 description6' >
          <h2>Pac-Man</h2>
          <p>
            Clone of the most popular arcade game
          </p>
          <p className='descrip6'>
         Developed a pac-man game using map function of JavaScript. Involves unit collision to imitate the original arcade game regulations.
          </p>
          <h5><Link to={'./project06'} className="SeeMore">See more details   <BsFillArrowRightCircleFill className="arrow" size={18} style={{ marginBottom:'4px' }}/></Link></h5>
          <p>
          <ExternalLink className="GoTo" href="https://pacman-bp7j.onrender.com/"><FiExternalLink size={25} style={{ marginRight:'10px' }}/></ExternalLink>
          <ExternalLink className="Github" href="https://github.com/paulsgz/Pacman.git">< FaGithub size={22} /></ExternalLink>
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
  'projects',
  'app__whitebg',
);