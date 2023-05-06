import React from 'react';
import style from './Projects.module.css';

function Projects() {
    const projects = [
        {
            header: "Find Movies Application",
            image: "./project.png",
            description: "This is Single Page Application was created using React.",
            link: "https://symphonious-paprenjak-fac495.netlify.app/"
        },
        {
            header: "Travel Blog Template",
            image: "./project-1.png",
            description: "This html template was created using HTML&CSS.",
            link: "http://resume-ruslan-synytsia.atwebpages.com/travel-template/"
        },
        {
            header: "Bouncy Template",
            image: "./project-2.png",
            description: "This html template was created using HTML, CSS and JS.",
            link: "http://resume-ruslan-synytsia.atwebpages.com/bouncy-template/"
        },
        {
            header: "JS Game Application",
            image: "./project-3.png",
            description: "This JS application was created using HTML, CSS and JS Canvas.",
            link: "http://resume-ruslan-synytsia.atwebpages.com/hangman-game/"
        },
        {
            header: "JS Calculator",
            image: "./project-4.png",
            description: "This html template was created using HTML, CSS and JS.",
            link: "http://resume-ruslan-synytsia.atwebpages.com/calculator/"
        }
    ];

    return (
        <section className={style.Projects}>
            {projects.map((project, index) => {
                return (
                    <article key={index} className={style.Projects_item}>
                        <h2>{project.header}</h2>
                        <img className={style.Projects_item_img} src={project.image} alt=""/>
                        <p className={style.Projects_item_desc}>{project.description}</p>
                        <div className={style.Projects_item_link}>
                            <a href={project.link} target={'blank_'}>To see</a>
                        </div>
                    </article>
                )
            })}
        </section>
    )
};

export default Projects;