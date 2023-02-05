import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { ExternalLink } from 'react-external-link';
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Project03.scss';

const Project03 = () => {
    const navigate = useNavigate();
    const backHome = async()=> {
        navigate('/')
    }
    
    return (
    <>  
    <div className='ProjectContainer'>
    <div className='ProjectNav'>
    <button onClick={backHome} className="BackToHome"><IoIosArrowBack size={18} style={{ marginBottom:'4px', marginRight:'4px' }}/>Back To Home</button>
    <h4 className='projectTitle'>Pop the Bubbles</h4>
    <Dropdown className='dropdown'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        See More Projects
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <Dropdown.Item> <Link to={"/project01"} className="Links">Newsfeed</Link></Dropdown.Item>
        <Dropdown.Item> <Link to={"/project02"} className="Links">Space Project</Link></Dropdown.Item>
        <Dropdown.Item> <Link to={"/project03"} className="Links">Pop the Bubbles</Link></Dropdown.Item>
        <Dropdown.Item> <Link to={"/project04"} className="Links">Space Shooter</Link></Dropdown.Item>
        <Dropdown.Item> <Link to={"/project05"} className="Links">Flappy Bird</Link></Dropdown.Item>
        <Dropdown.Item> <Link to={"/project06"} className="Links">Pac-Man</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div> 
    <div className='container'>
        <div className='row project01'>
        <div className='col-xl-12 projectDescription'>
          <div className='WebTitle'>
            <h5>Website Title</h5>
            <h2>Pop the Bubbles</h2>
            </div>
          <div className='WebDescription'>
          <h5>Description</h5>
          <p>Pop the Bubbles game is an original game concept. It features a fighting fish main character trying to pop as many bubbles as the user can by pointing the mouse in its direction. The farther the mouse click is the faster the character will move towards that direction but will slow down if close.
            It also features piranhas that can eat the fighting fish character when it comes close to it resulting in the ending of the game.
            Also,a parallax background was implemented to make the game have more underwater feel to it.</p></div>
          <div className='WebObjective'>
            <h5>Objective</h5>
            <p>To create an application using Vanilla JavaScript. This means that no libraries or frameworks were used to make this game. </p></div>
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
            <ExternalLink className="GoTo" href="https://frenzy-zl37.onrender.com/"><FiExternalLink size={25} style={{ marginRight:'10px' }}/></ExternalLink>
          <ExternalLink className="Github" href="https://github.com/paulsgz/PopTheBubbles.git">< FaGithub size={22} /></ExternalLink>
          </p>
        </div>
        </div>
        </div>
        </div>
    </div>
    </>
)
};

export default Project03;