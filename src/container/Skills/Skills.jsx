import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const data = [
    {
      name: "HTML",
      icon: images.html,
      tags: ['Front-end']
    },
    {
      name: "CSS",
      icon: images.css,
      tags: ['Front-end']
    },
    {
      name: "Javascript",
      icon: images.javascript,
      tags: ['Front-end']
    },
    {
      name: "React",
      icon: images.react,
      tags: ['Front-end']
    },
    {
      name: "Git",
      icon: images.git,
      tags: ['Developer Tools']
    },
    {
      name: "Node",
      icon: images.node,
      tags: ['Back-end']
    },
    {
      name: "ExpressJS",
      icon: images.express,
      tags: ['Back-end'],
    },
    {
      name: "BootStrap",
      icon: images.bootstrap,
      tags: ['Front-end'],
    },
    {
      name: "MongoDB",
      icon: images.mongodb,
      tags: ['Back-end'],
    },
    {
      name: "NPM",
      icon: images.npm,
      tags: ['Developer Tools'],
    },
    {
      name: "API",
      icon: images.API,
      tags: ['Developer Tools'],
    },
    {
      name: "SASS",
      icon: images.sass,
      tags: ['Front-end'],
    },
    {
      name: "EJS",
      icon: images.ejs,
      tags: ['Back-end'],
    },
    {
      name: "Github",
      icon: images.github,
      tags: ['Developer Tools'],
    },
    {
      name: "VS Code",
      icon: images.vscode,
      tags: ['Developer Tools'],
    },
    {
      name: "Photoshop",
      icon: images.photoshop,
      tags: ['Developer Tools'],
    },
  ];
  

  useEffect(() => {
    setSkills(data);
    setFilterWork(data);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
  
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
  
      if (item === 'All') {
        setFilterWork(skills);
      } else {
        setFilterWork(skills.filter((skill) =>skill.tags.includes(item)));
      }
    }, 500);
    if(item === null){
      console.log('this one')
    }
  };

  return (
    <>
      <h2>My Skills</h2>
      <div className="app__work-filter">
      {['Front-end', 'Back-end', 'Developer Tools','All'].map((item, index) => (
        <div
          key={index}
          onClick={() => handleWorkFilter(item)}
          className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
        >
          {item}
        </div>
      ))}
      </div>
      <div className='row skillsSection'>
      <div className='col-xl-2'></div>
      <div className='col-xl-9'>
      <div className="app__skills-container">
        <motion.div animate={animateCard}
         transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__skills-list">
          {filterWork.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5}}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex parent skillDiv"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} className="skillImg"/>
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </div>
      <div className='col-xl-2'></div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__primarybg',
);