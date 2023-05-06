import React from 'react';
import style from './Main.module.css';
import Welcome from "./Welcome/Welcome";

function Main() {
    return (
        <>
            <Welcome />
            <section className={style.Main}>
                <div className={style.Main_content}>
                    <div className={style.Main_content_img}>
                        <img src="./avatar.png" alt="Avatar" />
                    </div>
                    <div className={style.Main_content_content}>
                        <h2>Frontend Developer</h2>
                        <h1>Ruslan Synytsia</h1>
                        <p>I am 38 years old, I am from Ukraine. I have been living and working in Poland since 2020.<br/><br/>With my knowledge of HTML/CSS, JavaScript, React, Node.js, Express, and Web Sockets, I am ready to apply my skills and knowledge in commercial development. Although I have no experience in this field, I have spent 2 years learning and developing my skills, ready to apply them in a team of professionals.<br/><br/>I am confident that my drive to improve and develop my skills, as well as my desire to solve complex problems, will help me successfully perform my duties as a Frontend Developer.<br/><br/>Thank you for considering my resume. I am ready to discuss the possibility of joining your team and further collaboration.</p>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Main;