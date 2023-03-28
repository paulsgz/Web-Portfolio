import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { ExternalLink } from 'react-external-link';
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Project07.scss';

const Project07 = () => {
    const navigate = useNavigate();
    const backHome = async()=> {
        navigate('/')
    }
    
    return (
    <>  
    <div className='ProjectContainer'>
    <div className='ProjectNav'>
    <button onClick={backHome} className="BackToHome"><IoIosArrowBack size={18} style={{ marginBottom:'4px', marginRight:'4px' }}/>Back To Home</button>
    <h4 className='projectTitle'>Project Management Tool</h4>
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
        <Dropdown.Item> <Link to={"/project07"} className="Links">PMT Pro</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div> 
    <div className='container'>
        <div className='row project01'>
        <div className='col-xl-12 projectDescription'>
          <div className='WebTitle'>
            <h5>Website Title</h5>
            <h2>Project Management Tool</h2>
            </div>
          <div className='WebDescription'>
          <h5>Description</h5>
          <p>Project management tool is a ticketing system that allows engineers and developers to keep track of everything that must be done to finish a software or project.</p></div>
          <div className='WebObjective'>
            <h5>Objective</h5>
            <p>Conceptualized and executed a ticketing system that generated and distributed tasks to software workers using 
React.js; improved task completion rate by 35% and efficiency by 30%</p></div>
          <div className='WebTechnologies'>
            <h5>Technologies Used</h5>
            <p><ul>
              <li>HTML CSS AND JAVASCRIPT</li>
              <li>AXIOS for fetching API</li>
              <li>Node.js and Express.js for Server side</li>
              <li>Bootstrap for responsive web design</li>
              <li>React for front-end development</li>
              </ul></p></div>
          <div className='WebOYear'>
            <h5>Year</h5>
            <p>2023</p></div>
           <div className='links'> 
            <p>
            <ExternalLink className="GoTo" href="https://pmt-pro.onrender.com/"><FiExternalLink size={25} style={{ marginRight:'10px' }}/></ExternalLink>
          <ExternalLink className="Github" href="https://github.com/paulsgz/ProjectManagementTool.git">< FaGithub size={22} /></ExternalLink>
          </p>
        </div>
        </div>
        </div>
        </div>
    </div>
    </>
)
};

export default Project07;