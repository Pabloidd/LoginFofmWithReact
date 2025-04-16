import React, { useState } from 'react';

export default function LoginSection() {

    const SERVER_URL = "http://localhost:3001";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const MAX_EMAIL_LENGTH = 127;
    const MAX_PASSWORD_LENGTH = 31;
    const MIN_PASSWORD_LENGTH = 6;

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
        return emailRegex.test(email);
    };

    const sendLoginFormData = async (email, password) => {
        try {
            const response = await fetch(SERVER_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: email, password: password })
            });

            if (response.ok) {
                console.log(`Успешно отправлены данные: ${email}, ${password}`);
                return response;
            } else {
                console.error("Ошибка:", response.status, response.statusText);
                throw new Error(`Ошибка отправки данных: ${response.status} ${response.statusText}`);
            }
        } catch (error) {
            console.error("Ошибка сети", error);
            throw error;
        }
    };



    const handleSubmit = async (event) => {
        event.preventDefault();

        let isValid = true;
        let errorMessage = "";

        if (!email) {
            errorMessage += "Пожалуйста, введите адрес электронной почты \n";
            isValid = false;
        } else if (email.length > MAX_EMAIL_LENGTH) {
            errorMessage += `Адрес электронной почты не должен превышать ${MAX_EMAIL_LENGTH} символов \n`;
            isValid = false;
        } else if (!validateEmail(email)) {
            errorMessage += "Пожалуйста, введите корректный адрес электронной почты \n";
            isValid = false;
        }

        if (!password) {
            errorMessage += "Пожалуйста, введите пароль \n";
            isValid = false;
        } else if (password.length > MAX_PASSWORD_LENGTH) {
            errorMessage += `Пароль не должен превышать ${MAX_PASSWORD_LENGTH} символов \n`;
            isValid = false;
        } else if (password.length < MIN_PASSWORD_LENGTH) {
            errorMessage += `Пароль должен содержать не менее ${MIN_PASSWORD_LENGTH} символов \n`;
            isValid = false;
        }

        if (!isValid) {
            alert(errorMessage);
            errorMessage = "";
            return;
        }

        alert('Данные отправлены на сервер');

        try {
            const response = await sendLoginFormData(email, password);
            // Обработка успешного ответа...
        } catch (error) {
            console.error("Произошла ошибка:", error);
        }
    };


    return (
        <section className={"login-section"}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor={"email"}>E-mail:</label>
                <input
                    type={"email"}
                    id={"email"}
                    value={email}
                    onChange={handleEmailChange}
                    maxLength={MAX_EMAIL_LENGTH}
                />


                <label htmlFor={"password"}>Пароль:</label>
                <input
                    type={"password"}
                    id={"password"}
                    value={password}
                    onChange={handlePasswordChange}
                    maxLength={MAX_PASSWORD_LENGTH}
                />

                <br/>

                <button type={"submit"}>Войти</button>
            </form>
            <a href={""}>Я забыл(а) пароль</a>
        </section>
    );
}
