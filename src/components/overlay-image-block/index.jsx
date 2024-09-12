import React from 'react';
import AvatarCircle from '../avatar-circle';

import './overlay-image-block.scss';

function OverlayImageblock() {
    return(
        <div className='background-container'>
            <img src='personal-photo-blur-fixed-size.jpg'></img>
            <AvatarCircle/>
        </div>
    )
}

export default OverlayImageblock;