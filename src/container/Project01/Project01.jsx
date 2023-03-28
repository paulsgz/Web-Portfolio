import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { ExternalLink } from 'react-external-link';
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Project01.scss';

const Project01 = () => {
    const navigate = useNavigate();
    const backHome = async()=> {
        navigate('/')
    }
    
    return (
    <>  
    <div className='ProjectContainer'>
    <div className='ProjectNav'>
    <button onClick={backHome} className="BackToHome"><IoIosArrowBack size={18} style={{ marginBottom:'4px', marginRight:'4px' }}/>Back To Home</button>
    <h4 className='projectTitle'>Newsfeed</h4>
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
            <h2>Newsfeed</h2>
            </div>
          <div className='WebDescription'>
          <h5>Description</h5>
          <p>Newsfeed is a site for reading news articles from different resources about many different aspects of life. The site includes News.com API that searches for news articles from different websites returning their own API to the site, before finally returning JSON file to the newsfeed webpage. Also includes NASA api to generate images and articles related to astronomy and space.</p></div>
          <div className='WebObjective'>
            <h5>Objective</h5>
            <p>To create a web application that can fetch API data using Embedded Javascript System to render HTML documents dynamically. 
              Also, to learn how API is used to display data and how communication between two system interfaces work.</p></div>
          <div className='WebTechnologies'>
            <h5>Technologies Used</h5>
            <p><ul>
              <li>HTML CSS AND JAVASCRIPT</li>
              <li>AXIOS for fetching API</li>
              <li>EJS for a dynamic webpage design</li>
              <li>Node.js and Express.js for Server Side Interface</li>
              </ul></p></div>
          <div className='WebOYear'>
            <h5>Year</h5>
            <p>2022</p></div>
           <div className='links'> 
            <p>
          <ExternalLink className="GoTo" href="https://newsfeed-cps.herokuapp.com/"><FiExternalLink size={25} style={{ marginRight:'10px' }}/></ExternalLink>
          <ExternalLink className="Github" href="https://github.com/paulsgz/newsfeed-cps.git">< FaGithub size={22} /></ExternalLink>
          </p>
        </div>
        </div>
        </div>
        </div>
    </div>
    </>
)
};

export default Project01;