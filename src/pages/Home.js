import React from "react";
import '../styles/Home.css'
import { profile } from "../helper/Projectlist";


function Home() {
  const {pic,resume}=profile;
  return (
    <div className="home">
      <div className="about">
        <img height="200px" className='pic' alt="Avatar placeholder" src={pic} />
        <h2> Hi, My Name is Ajin Thapa</h2>
        <div className="prompt">
          <p>I"m a Full Stack Developer.</p>
        </div>
        <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}
        </div>
      </div>   
    </div>
  );
}

export default Home;