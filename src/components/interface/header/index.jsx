import React from "react";

import { Button } from "../../ui";

import "./header.scss";
import { useNavigate } from "react-router";

export const Header = () => {
   const navigate = useNavigate();

   const handleHomePage = () => {
      navigate("/");
   };

   const handleAbout = () => {
      navigate("/about");
   };

   const handleContact = () => {
      navigate("/contact");
   };

   const handleBlog = () => {
      navigate("/blog");
   };

   const handleForDoctors = () => {
      navigate("/for-doctors");
   };

   return (
      <header className="header-div">
         <p className="home-page-title">Ваш лікар-ендокринолог</p>
         <section className="button-section">
            <Button className={"button"} onClick={handleHomePage}>
               Домашня сторінка
            </Button>

            <Button className={"button"} onClick={handleAbout}>
               Про мене
            </Button>

            <Button className={"button"} onClick={handleContact}>
               Зворотній зв'язок
            </Button>

            <Button className={"button"} onClick={handleBlog}>
               Блог
            </Button>

            <Button className={"button"} onClick={handleForDoctors}>
               Для Лікарів
            </Button>
         </section>
      </header>
   );
};
