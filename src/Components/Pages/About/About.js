import React from 'react';
import style from './About.module.css';

function About() {
    const about = {
        history: 'Since childhood, I have studied programming in BASIC and Pascal./In 1997 I created my first website, it was a simple html page written in the HTML2 standard./Since 2020, I started learning JS, and since 2021 - React./In 2022, I wrote my first MERN application in which I implemented LiveChat over the web socket protocol./At the moment I continue to study in the field of web development.',
        goals: 'I enjoy creating beautiful and functional interfaces that enhance the user experience./I want to develop in the field of web development and work on projects that change the world./It would be very interesting for me to develop in a team of professionals and reach the level of commercial development.',
        interests: 'In my spare time, I enjoy cycling, listening to podcasts from the IT world, and spending time with my family in nature.',
        qualities: 'Purposefulness and firm intention are my strengths. I am willing to spend enough time to achieve my goal./Independence - helps me overcome many difficulties in developing ideas and ways to implement them, as well as in achieving goals in the face of a shortage of third-party assistance./Cold judgment and common sense help me avoid jumping to conclusions, calmly analyze the consequences of my decisions and make the best decisions based on the available resource base./Concentration in finding a solution to a problem until a solution is found that satisfies me. But variations are also possible, with a change in the formulation and formulation of the problem, for example, if it is not possible to find an effective solution to the problem in its current state.This also includes the ability to find compromise solutions./Striving for excellence in every project I undertake and the ability to work in a team. I take responsibility for my part of the work.',
        skills: 'HTML/CSS/JS/React/Redux/Node.js/REST API/Express/Mongoose/MongoDB/WebPack/Git/Figma'
    };

    const stringToList = (str, tag) => {
        const arr = str.split('/');
        if (tag === 'li') {
            return arr.map((paragraph, index) => <li key={index}>{paragraph}</li>)
        } else {
            return arr.map((paragraph, index) => <span key={index}>{paragraph}</span>);
        }
    }

    return (
        <section className={style.About}>
            <article className={style.About_history}>
                <h2>My history</h2>
                <p>
                    {stringToList(about.history)}
                </p>
            </article>
            <article className={style.About_skills}>
                <h2>Skills</h2>
                <ul>
                    {stringToList(about.skills, 'li')}
                </ul>
            </article>
            <article className={style.About_goals}>
                <h2>Motivation and goals</h2>
                <p>
                    {stringToList(about.goals)}
                </p>
            </article>
            <article className={style.About_qualities}>
                <h2>Personal qualities</h2>
                <ul>
                    {stringToList(about.qualities, 'li')}
                </ul>
            </article>
            <article className={style.About_hobbies}>
                <h2>Interests and hobbies</h2>
                <p>
                    {stringToList(about.interests)}
                </p>
            </article>
        </section>
    )
};

export default About;