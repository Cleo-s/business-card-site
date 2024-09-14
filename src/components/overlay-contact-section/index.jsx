import React from 'react';

import './overlay-contact-section.scss';
import Button from '../button';

function OverlayContactSection() {

    return (
        <section className='overlay-contact-section'>
            <h2 className='contact-me'>Зв'язок зі мною:</h2>
            <div className='divider' />
            <section className='buttons-section'>
                <Button children={'click me'} />
                <Button children={'click me'} />
                <Button children={'click me'} />
            </section>
        </section>
    )
}

export default OverlayContactSection;