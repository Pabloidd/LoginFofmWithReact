import React from 'react'

export default function GreetingSection() {
    return (
        <section className={"greeting-section"}>
            <h2>Welcome!</h2>
            <p>Введите ваши <b>почту</b> и <b>пароль</b> чтобы войти.  </p>
            <p>Если вы здесь в первый раз, то для вас будет создан новый профиль с введёнными данными.</p>
        </section>
    );
}