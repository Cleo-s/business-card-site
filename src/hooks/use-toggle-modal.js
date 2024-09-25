import { useEffect, useState } from "react";

export const useToggleModalState = () => {
   const [isOpened, setIsOpened] = useState(false);
   const [isShown, setIsShown] = useState(false);

   useEffect(() => {
      if (!isOpened) return;

      const timeoutId = setTimeout(() => {
         setIsShown(false);
      }, 300);

      return () => {
         clearTimeout(timeoutId);
      };
   }, [isOpened]);

   const toggleModal = () => {
      setIsOpened(!isOpened);
   };

   return [isOpened, toggleModal, isShown];
};
