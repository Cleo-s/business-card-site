import { useClickOutside } from "@react-hookz/web";
import s from "./modal.module.scss";
import { useRef } from "react";
import clsx from "clsx";

export const Modal = ({ children, onClose, isOpened, options: { size } }) => {
   const modalRef = useRef(null);

   const handleClose = () => isOpened && onClose();

   useClickOutside(modalRef, handleClose);

   return (
      <section className={clsx(s.wrapper, isOpened && s.opened)}>
         <section className={s.backdrop} />

         <section className={clsx(s.modal, s[size])} ref={modalRef}>
            {children}
         </section>
      </section>
   );
};
