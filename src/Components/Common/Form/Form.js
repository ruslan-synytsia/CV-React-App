import React, { useState } from 'react';
import axios from 'axios';
import cx from 'classnames/bind';
import style from './Form.module.css';
import withValidation from "../../HOC/withValidation";
import Preloader from "../Preloader/Preloader";

function Form(props) {
    const {
        errors,
        validate,
        isFormValid,
        resetValues
    } = props;

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: ''
    });

    const [isFetching, setIsFetching] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const showMessage = (time = 5000) => {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false)
        }, time)
    };

    const showErrorMessage = (time = 5000) => {
        setError(true);
        setTimeout(() => {
            setError(false)
        }, time)
    }

    const handleSubmit = async (event) => {
        if (isFormValid) {
            event.preventDefault();
            setIsFetching(true);
            console.log(process.env.REACT_APP_SERVER_URL)
            try {
                await axios.post(`${process.env.REACT_APP_SERVER_URL}/send-message`, { username: formData.username, email: formData.email, message: formData.message });
                setIsFetching(false);
                setFormData(prevState => ({
                    ...prevState, username: '', email: '', message: ''
                }));
                resetValues();
                showMessage();
            } catch (error) {
                setIsFetching(false);
                showErrorMessage();
                console.log(error);
            }
        }
    };

    const handleInputChange = (event) => {
        event.preventDefault();
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    return (
        <div className={style.Form}>
            <h2>Are you ready to have me on your team? Just write to me.</h2>
            <span>Write to me and I will answer you soon!</span>
            <label htmlFor="username">Your name</label>
            <span className={errors.username ? cx(style.Error_username, style.err_display) : style.Error_username}>{errors.username}</span>
            <input type="text" id="username" name="username" placeholder={'Name'} onChange={handleInputChange} onBlur={e => validate(e.target.value, e.target.name)} value={formData.username} />
            <label htmlFor="email">Your email</label>
            <span className={errors.email ? cx(style.Error_email, style.err_display) : style.Error_email}>{errors.email}</span>
            <input type="email" id="email" name="email" placeholder={'your@company.com'} onChange={handleInputChange} onBlur={e => validate(e.target.value, e.target.name)} value={formData.email} />
            <label htmlFor="message">Write your offer</label>
            <span className={errors.message ? cx(style.Error_message, style.err_display) : style.Error_message}>{errors.message}</span>
            <textarea id="message" name="message" rows="2" placeholder={'Your message here...'} onChange={handleInputChange} onBlur={e => validate(e.target.value, e.target.name)} value={formData.message} />
            <button onClick={handleSubmit} className={!isFormValid || isFetching ? style.disabled : ''} disabled={!isFormValid || isFetching}>
                {isFetching ? <Preloader /> : 'Send me your offer!'}
            </button>
            <div className={success ? cx(style.Form_finish, style.visible) : style.Form_finish}>
                <div className={style.success}></div>
                <h2>Your message is sended</h2>
                <p>Thanh you for your offer!</p>
            </div>
            <div className={error ? cx(style.Form_finish_error, style.visible) : style.Form_finish_error}>
                <span className={style.error}>X</span>
                <h2>Ooops, your message dosn't sended...</h2>
                <p>Try again later!</p>
            </div>
        </div>
    )
}

export default withValidation(Form);