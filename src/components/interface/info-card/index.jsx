import React from "react";

import { OverlayImageblock, OverlayContactSection } from "../../interface";

import "./info-card.scss";

export const InfoCard = () => {
   return (
      <div className="info-card-div">
         <OverlayImageblock />

         <OverlayContactSection />
      </div>
   );
};
