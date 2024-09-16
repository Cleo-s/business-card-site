import React from "react";
import { Button } from "../../ui";
import UserIcon from "../../../assets/icons/user-icon";

import "./footer.scss";
import { useNavigate } from "react-router";

export const Footer = () => {
   const navigate = useNavigate();

   const handleAbout = () => {
      navigate("/about");
   };

   const handleContact = () => {
      navigate("/contact");
   };

   const handleForDoctors = () => {
      navigate("/for-doctors");
   };
   return (
      <footer className="footer">
         <section className="desc-section">
            <h1 className="desc-text">
               Давайте зробимо ваше здоров'я краще - разом.
            </h1>
            <h2 className="transparent-desc-text">
               Зв'яжіться зі мною як найшвидше:
            </h2>
         </section>
         <section className="desc-button-section">
            <Button
               children={"Про мене"}
               className={"about"}
               icon={<UserIcon />}
               onClick={handleAbout}
            />
            <Button
               children={"Зворотній зв`язок"}
               className={"contact"}
               onClick={handleContact}
            />
            <Button
               children={"Для Лікарів"}
               className={"for-doctors"}
               onClick={handleForDoctors}
            />
         </section>

         <div className='copyright-div'>
            <p>Website design developed by <strong>
               Cleo's Group
            </strong>
            </p>
            <p>Copyright © <strong>
               Cleo's Group
            </strong>
            </p>
         </div>
      </footer>
   );
};
