import { motion } from 'framer-motion';
import React from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';


const abouts = [
  { title: 'Web Development', description: 'I am a Web developer who likes to create innovative software and applications.', imgUrl: images.about01},
  { title: 'Frontend Development', description: 'I designed front-end interfaces using HTML , CSS , JavaScript and React.', imgUrl: images.about02},
  { title: 'Backend Development', description: 'I develop back-end interfaces using Node.js , Express.js and MongoDB.', imgUrl: images.about03},
  { title: 'MERN stack', description: 'I use MERN stack for developing full scale websites.', imgUrl: images.about04}
]

const About = () => {
  return (
      <>
      <div className='row aboutme'>
        <div className='col-xl-6 paragraph'>
        <div className='aboutmeParagraph'>
        <h3 className='about text'>About me<hr></hr></h3>
        <p>Hi there! My name is Paul, and <span>I am a third year Computer Science student at York University.</span>
          I am currently studying <span>full-stack development</span>, and I am excited to be learning all about the latest technologies
          and techniques in this field. </p>
          <p> I have always been passionate about technology, and I am eager to apply my skills and knowledge
          to create innovative and user-friendly software and applications. Thank you for visiting my web portfolio,
          and I hope you enjoy exploring my work!
        </p>
        </div>
        </div>
        <div className='col-xl-6 stockPhoto'>
        <img src={images.developer} className="developer img-fluid" alt='developer' />
        </div>
      </div>
        <div className='app__profiles'>
          {abouts.map((about, index) => (
            <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
          ))}
        </div>
      </>
  )
}


export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__primarybg',
);