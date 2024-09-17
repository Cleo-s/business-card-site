import React, { useEffect } from 'react';
import { useState } from 'react';

import './contact-page.scss';

import { Footer, Header } from '../../components/interface';
import { Button } from '../../components/ui';

function ContactMePage() {

    const [shortRequestValue, setShortRequestValue] = useState('');
    const [fullRequestValue, setFullRequestValue] = useState('');
    const [userNameValue, setUserNameValue] = useState('');

    const requestInfoObject = {
        userName: userNameValue,
        shortRequestInfo: shortRequestValue,
        fullRequestInfo: fullRequestValue,
    };
    
    const handleShortValueSave = (e) => {
        
        setShortRequestValue(e.target.value);
    }
    
    const handleFullValueSave = (e) => {
        
        setFullRequestValue(e.target.value);
    }

    const handleNameValue = (e) => {

        setUserNameValue(e.target.value);
    }

    console.log(requestInfoObject);

    return (
        <>
            <Header />
            <main className='main-contact-page'>
                <div className='input-request-div'>
                    <p className='p-user-name-request'>
                        Ваше Ім'я:
                    </p>
                    <input
                        className='user-name-request'
                        type='text'
                        placeholder=''
                        value={userNameValue}
                        onChange={handleNameValue}
                    />
                    <p className='p-short-define-request'>
                        Кратко опишіть ваше звернення:
                    </p>
                    <input
                        className='short-define-request'
                        type='text'
                        placeholder=''
                        value={shortRequestValue}
                        onChange={handleShortValueSave}
                    />
                    <p className='p-full-define-request'>
                        Детально опишіть що вас турбує:
                    </p>
                    <input
                        className='full-define-request'
                        type='text'
                        placeholder=''
                        value={fullRequestValue}
                        onChange={handleFullValueSave}
                    />

                    <p>
                        {shortRequestValue} {fullRequestValue}
                    </p>
                </div>

                <Button className='send-request-button' />
            </main>
            <Footer />
        </>
    )
}

export default ContactMePage;