import React from 'react';
import { ExternalLink } from 'react-external-link';
import { AiFillInstagram } from 'react-icons/ai';
import { FaGithub } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <ExternalLink className="Github" href="https://github.com/paulsgz"><FaGithub  /></ExternalLink>
    </div>
    <div>
    <ExternalLink className="LinkedIn" href="http://linkedin.com/in/christian-paul-seguiza-394292195"><GrLinkedinOption /></ExternalLink>
    </div>
    <div>
    <ExternalLink className="Github" href="https://www.instagram.com/paulsgz31/"><AiFillInstagram  /></ExternalLink>
    </div>
  </div>
);
export default SocialMedia;