import React, {useEffect, useState} from "react";

const witValidation = (WrappedComponent) => {
    class Validation {
        constructor(value, fieldName) {
            this.value = value;
            this.fieldName = fieldName;
            this.error = null;
        }

        isEmpty () {
            if (this.value.length === 0) {
                this.error = `Sorry, but ${this.fieldName} cannot be empty.`
            }
            return this;
        }

        isLatin() {
            const regex = /^[a-zA-Z0-9 ]+$/i;
            if (!regex.test(this.value)) {
                this.error = `Ooops, ${this.fieldName} must contain only Latin characters.`;
            }
            return this;
        }

        isLength(max = 24, min = 3) {
            if (this.value.length < min || this.value.length > max) {
                this.error = `Sorry, but ${this.fieldName} must contain from ${min} to ${max} characters.`;
            }
            return this;
        }

        isEmail() {
            const regex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
            if (!regex.test(this.value)) {
                this.error = 'This email format is invalid.';
            }
            return this;
        }

        getError() {
            return this.error;
        }
    }

    return function(props) {
        const [errors, setErrors] = useState({
            username: null,
            email: null,
            message: null
        });

        const [inputValues, setInputValues] = useState({
            username: null,
            email: null,
            message: null
        });

        const [isFormValid, setIsFormValid] = useState(false);

        const resetValues = () => {
            setInputValues(prevState => ({
                ...prevState, username: null, email: null, message: null
            }));
        }

        const validate = (value, name) => {
            if (name === "username") {
                const validationUserName = new Validation(value, name).isLength().isLatin().isEmpty().getError();
                setErrors((prevState) => ({
                    ...prevState,
                    [name]: validationUserName,
                }));
                if (validationUserName === null) {
                    setInputValues((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                if (validationUserName !== null) {
                    setInputValues((prevState) => ({
                        ...prevState,
                        [name]: null
                    }));
                }
            }
            if (name === "email") {
                const validationEmail = new Validation(value, name).isEmail().isEmpty().getError();
                setErrors((prevState) => ({
                    ...prevState,
                    [name]: validationEmail,
                }));
                if (validationEmail === null) {
                    setInputValues((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                if (validationEmail !== null) {
                    setInputValues((prevState) => ({
                        ...prevState,
                        [name]: null
                    }));
                }
            }
            if (name === "message") {
                const validationMessage = new Validation(value, name).isLength(500, 10).isEmpty().getError();
                setErrors((prevState) => ({
                    ...prevState,
                    [name]: validationMessage,
                }));
                if (validationMessage === null) {
                    setInputValues((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                if (validationMessage !== null) {
                    setInputValues((prevState) => ({
                        ...prevState,
                        [name]: null
                    }));
                }
            }
        };

        useEffect(() => {
            const formValues = Object.values(inputValues);
            const isFormValid = formValues.every(value => value !== null);
            setIsFormValid(isFormValid);

        }, [inputValues, errors]);

        return <WrappedComponent
            {...props}
            errors={errors}
            validate={validate}
            isFormValid={isFormValid}
            resetValues={resetValues}
        />;
    };
}
export default witValidation;