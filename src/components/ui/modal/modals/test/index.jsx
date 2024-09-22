import { Modal } from "../..";

import s from "./test.module.scss";

export const TestModal = ({ isOpened, onClose, options: { size } }) => {
   return (
      <Modal isOpened={isOpened} onClose={onClose} options={{ size }}>
         <section className={s.wrapper}></section>
      </Modal>
   );
};
