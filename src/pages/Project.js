import React, { Component } from 'react';
import uniqid from 'uniqid'
import { project } from "../helper/Projectlist";
import ProjectContainer from './ProjectDisplay';
import "../styles/Projects.css";

class Project extends Component {
    render() {
        if (!project.length) return null

        return (
            <section id='projects' className='section projects'>
                <h2 className='section__title'>My Project Gallary</h2>

                <div className='projects__grid'>
                    {project.map((project) => (
                        <ProjectContainer key={uniqid()} project={project} />
                    ))}
                </div>
            </section>
        )
    }
}
export default Project;