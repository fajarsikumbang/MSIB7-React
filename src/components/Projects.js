import React from 'react';

const Projects = () => {
    const projectList = [
        { title: 'Web Ionic Koperasi', description: 'HAhahaihiiii' },
        { title: 'Laravel', description: 'Website' },
        { title: 'Java', description: 'Mobile Legend' },
    ];

    return (
        <section>
            <h2>Projects</h2>
            {projectList.map((project, index) => (
                <div className="project-card" key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </section>
    );
};

export default Projects;
