import React from "react";
import { useNavigate } from "react-router";

import { Button } from "../../ui";

import "./overlay-contact-section.scss";

export const OverlayContactSection = () => {
   const navigate = useNavigate();

   const handleEmailCopy = () => {
      navigator.clipboard.writeText("cleo.mics@gmail.com");
      alert("Електронну адресу скопійовано");
   };

   const handlePhoneNumberCopy = () => {
      navigator.clipboard.writeText("+380685595292");
      alert("Номер телефону скопійовано");
   };

   const handleAbout = () => {
      navigate("/about");
   };

   return (
      <section className="overlay-contact-section">
         <h2 className="contact-me">Зворотній зв'язок:</h2>
         <div className="divider" />
         <section className="buttons-section">
            <Button onClick={handleAbout} className="overlay-contact-button">
               Зв'язок зі мною
            </Button>
            <Button onClick={handleEmailCopy} className="overlay-email-button">
               Моя електронна пошта
            </Button>
            <Button
               onClick={handlePhoneNumberCopy}
               className="oberlay-phone-number-button"
            >
               Мій номер телефону
            </Button>
         </section>
      </section>
   );
};
