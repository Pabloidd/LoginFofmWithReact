import React, {useState} from "react";
import GreetingSection from "./GreetingSection";
import LoginSection from "./LoginSection";

export default function RegistrationForm(){
    return(
        <article className="registration-form">
           <GreetingSection/>
            <LoginSection/>
        </article>
    );
}