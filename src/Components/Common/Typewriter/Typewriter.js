import React, { useState, useEffect } from 'react';

import style from './Typewriter.module.css'

const Typewriter = ({ text }) => {
    const [state, setState] = useState({
        delay: 0,
        displayText: '',
        index: 0,
        shouldDelay: true
    });

    useEffect(() => {
        const timer = setInterval(() => {
            if (state.index < text.length) {
                const newDelay = Math.floor(Math.random() * (250 - 50) + 50);
                setState({
                    delay: newDelay,
                    displayText: state.displayText + text[state.index],
                    index: state.index + 1,
                });
            } else {
                clearInterval(timer);
            }
        }, state.shouldDelay ? 2500 : state.delay);

        return () => clearInterval(timer);
    }, [state, text]);

    function renderStringWithLineBreaks(str) {
        const substrings = str.split('/');
        return substrings.map((substring, index) => (
            <React.Fragment key={index}>
                {substring}
                {index === substrings.length - 1 && <span className={style.cursor}>|</span>}
                {index !== substrings.length - 1 && <br />}
            </React.Fragment>
        ));
    }

    return (
        <div>
            {renderStringWithLineBreaks(state.displayText)}
        </div>
    )
};

export default Typewriter;