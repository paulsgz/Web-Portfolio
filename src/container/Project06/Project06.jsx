import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { ExternalLink } from 'react-external-link';
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import './Project06.scss';

const Project06 = () => {
    const navigate = useNavigate();
    const backHome = async()=> {
        navigate('/')
    }
    
    return (
    <>  
    <div className='ProjectContainer'>
    <div className='ProjectNav'>
    <button onClick={backHome} className="BackToHome"><IoIosArrowBack size={18} style={{ marginBottom:'4px', marginRight:'4px' }}/>Back To Home</button>
    <h4 className='projectTitle'>Pac-Man</h4>
    <Dropdown className='dropdown'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        See More Projects
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="/project01" class="active">Newsfeed</Dropdown.Item>
        <Dropdown.Item href="/project02" class="active">Space Project</Dropdown.Item>
        <Dropdown.Item href="/project03" class="active">Pop the Bubbles</Dropdown.Item>
        <Dropdown.Item href="/project04" class="active">Space Shooter</Dropdown.Item>
        <Dropdown.Item href="/project05" class="active">Flappy Bird</Dropdown.Item>
        <Dropdown.Item href="/project06" class="active">Pac-Man</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div> 
    <div className='container'>
        <div className='row project01'>
        <div className='col-xl-12 projectDescription'>
          <div className='WebTitle'>
            <h5>Website Title</h5>
            <h2>Pac-Man</h2>
            </div>
          <div className='WebDescription'>
          <h5>Description</h5>
          <p>Pac-Man is one of the most popular arcade games of its generation. The game is simple but have some difficult implementations to it before making the game work.
            One of this is the creations of the map that would be use for the characters to run around. It also needs some artificial intelligence or close to it to implement the ghost algorithms.
            Multiple set of rules and algorithms were used to create this game, but is heavily expandable and flexible enough to make the map larger if need be or create more ghost enemies.</p></div>
          <div className='WebObjective'>
            <h5>Objective</h5>
            <p>To be able to develope creative ways of cloning classic arcade games. Featuring using JavaScript map function to recreate a map where the players and enemies run around.</p></div>
          <div className='WebTechnologies'>
            <h5>Technologies Used</h5>
            <p><ul>
              <li>HTML and CSS</li>
              <li>Vanilla JavaScript</li>
              <li>PNG images for mapping</li>
              </ul></p></div>
          <div className='WebOYear'>
            <h5>Year</h5>
            <p>2022</p></div>
           <div className='links'> 
            <p>
            <ExternalLink className="GoTo" href="https://pacman-bp7j.onrender.com/"><FiExternalLink size={25} style={{ marginRight:'10px' }}/></ExternalLink>
          <ExternalLink className="Github" href="https://github.com/paulsgz/Pacman.git">< FaGithub size={22} /></ExternalLink>
          </p>
        </div>
        </div>
        </div>
        </div>
    </div>
    </>
)
};

export default Project06;