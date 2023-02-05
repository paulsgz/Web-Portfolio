import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { ExternalLink } from 'react-external-link';
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import './Project05.scss';

const Project05 = () => {
    const navigate = useNavigate();
    const backHome = async()=> {
        navigate('/')
    }
    
    return (
    <>  
    <div className='ProjectContainer'>
    <div className='ProjectNav'>
    <button onClick={backHome} className="BackToHome"><IoIosArrowBack size={18} style={{ marginBottom:'4px', marginRight:'4px' }}/>Back To Home</button>
    <h4 className='projectTitle'>Flappy Bird</h4>
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
            <h2>Flappy Bird</h2>
            </div>
          <div className='WebDescription'>
          <h5>Description</h5>
          <p>A classic and popular game created in the ealy 2010's. Featuring a flying bird that tries to avoid obstacles to score more points. The game is simple but very addictive, it only needs a tap, in this case a space bar to fly up and release it to fly down.
            The game was implemented with a parallax background to make a progress or forward movement feel to it.</p></div>
          <div className='WebObjective'>
            <h5>Objective</h5>
            <p>To recreate one of the most popular games in the modern times without using any libraries and frameworks. </p></div>
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
            <ExternalLink className="GoTo" href="https://flappybird-6e95.onrender.com/"><FiExternalLink size={25} style={{ marginRight:'10px' }}/></ExternalLink>
          <ExternalLink className="Github" href="https://github.com/paulsgz/FlappyBird.git">< FaGithub size={22} /></ExternalLink>
          </p>
        </div>
        </div>
        </div>
        </div>
    </div>
    </>
)
};

export default Project05;