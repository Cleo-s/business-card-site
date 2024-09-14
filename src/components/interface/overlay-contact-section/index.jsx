import React from "react";

import "./overlay-contact-section.scss";
import { Button } from "../../ui";

export const OverlayContactSection = () => {
   return (
      <section className="overlay-contact-section">
         <h2 className="contact-me">Зв'язок зі мною:</h2>
         <div className="divider" />
         <section className="buttons-section">
            <Button>Click Me</Button>
            <Button>Click Me</Button>
            <Button>Click Me</Button>
         </section>
      </section>
   );
};
