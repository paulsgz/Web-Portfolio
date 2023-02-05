import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { ExternalLink } from 'react-external-link';
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import './Project04.scss';

const Project04 = () => {
    const navigate = useNavigate();
    const backHome = async()=> {
        navigate('/')
    }
    
    return (
    <>  
    <div className='ProjectContainer'>
    <div className='ProjectNav'>
    <button onClick={backHome} className="BackToHome"><IoIosArrowBack size={18} style={{ marginBottom:'4px', marginRight:'4px' }}/>Back To Home</button>
    <h4 className='projectTitle'>Space Shooter</h4>
    <Dropdown className='dropdown'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        See More Projects
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="/project01">Newsfeed</Dropdown.Item>
        <Dropdown.Item href="/project02">Space Project</Dropdown.Item>
        <Dropdown.Item href="/project03">Pop the Bubbles</Dropdown.Item>
        <Dropdown.Item href="/project04">Space Shooter</Dropdown.Item>
        <Dropdown.Item href="/project05">Flappy Bird</Dropdown.Item>
        <Dropdown.Item href="/project06">Pac-Man</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div> 
    <div className='container'>
        <div className='row project01'>
        <div className='col-xl-12 projectDescription'>
          <div className='WebTitle'>
            <h5>Website Title</h5>
            <h2>Space Shooter</h2>
            </div>
          <div className='WebDescription'>
          <h5>Description</h5>
          <p>Space shooter game features similar game instructions and regulations with the classic and popular space shooter games, first introduced in the late 1970's.
            The main character is a space ship that can move up, down, left and right using arrow keys to dodge enemy attacks or launch an attack using space bar.
            Also, a parallax background effect were implemented to create a flying feel to it, it was create using HD backgrounds that is compose of small and big stars and outer space clouds.</p></div>
          <div className='WebObjective'>
            <h5>Objective</h5>
            <p>To create an interactive web application by allowing users to move the space ship character via arrow keys and use space bar to launch an attack.</p></div>
          <div className='WebTechnologies'>
            <h5>Technologies Used</h5>
            <p><ul>
              <li>HTML and CSS</li>
              <li>Vanilla JavaScript</li>
              <li>Spritesheets for character movements</li>
              <li>Parallax Backgrounds</li>
              </ul></p></div>
          <div className='WebOYear'>
            <h5>Year</h5>
            <p>2022</p></div>
           <div className='links'> 
            <p>
            <ExternalLink className="GoTo" href="https://spaceshooter-uct6.onrender.com/"><FiExternalLink size={25} style={{ marginRight:'10px' }}/></ExternalLink>
          <ExternalLink className="Github" href="https://github.com/paulsgz/Space-Shooter.git">< FaGithub size={22} /></ExternalLink>
          </p>
        </div>
        </div>
        </div>
        </div>
    </div>
    </>
)
};

export default Project04;