import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { ExternalLink } from 'react-external-link';
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Project02.scss';

const Project02 = () => {
    const navigate = useNavigate();
    const backHome = async()=> {
        navigate('/')
    }
    
    return (
    <>  
    <div className='ProjectContainer'>
    <div className='ProjectNav'>
    <button onClick={backHome} className="BackToHome"><IoIosArrowBack size={18} style={{ marginBottom:'4px', marginRight:'4px' }}/>Back To Home</button>
    <h4 className='projectTitle'>Space Project</h4>
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
        {/* <div className='col-xl-6 projectVideo'>
        <video src={"https://res.cloudinary.com/djhqargof/video/upload/v1672341296/newsVideo_qigrgn.mov"}
        type="video/mp4"
        loop={true}
        controls={false}
        muted
        autoPlay={true}
        className='NewsfeedVid'
        />
        </div> */}
        <div className='col-xl-12 projectDescription'>
          <div className='WebTitle'>
            <h5>Website Title</h5>
            <h2>Space Project</h2>
            </div>
          <div className='WebDescription'>
          <h5>Description</h5>
          <p>Space Project is web application for sharing and exploring different astronomical experiences. Users can view different images from different people about the sky, space, galaxy and anything related to astronomy. Users can also share their own experiences by logging in using their google account as a way to authenticate and verify the owner of the image or post.</p></div>
          <div className='WebObjective'>
            <h5>Objective</h5>
            <p>To create a web application that can do CRUD operations using NODE.js and Express.js backend together with React front-end interface.</p></div>
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
            <p>2022</p></div>
           <div className='links'> 
            <p>
            <ExternalLink className="GoTo" href="https://space-project31.herokuapp.com/"><FiExternalLink size={25} style={{ marginRight:'10px' }}/></ExternalLink>
          <ExternalLink className="Github" href="https://github.com/paulsgz/Space-Project.git">< FaGithub size={22} /></ExternalLink>
          </p>
        </div>
        </div>
        </div>
        </div>
    </div>
    </>
)
};

export default Project02;