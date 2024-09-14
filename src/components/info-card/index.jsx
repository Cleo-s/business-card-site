import React from 'react';
import OverlayImageblock from '../overlay-image-block';

import './info-card.scss';
import OverlayContactSection from '../overlay-contact-section';

function InfoCard() {
    return (
        <div className='info-card-div'>
            <OverlayImageblock/>
            <OverlayContactSection/>
        </div>
    )
}

export default InfoCard;