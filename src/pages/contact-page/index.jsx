import React, { useEffect } from 'react';
import { useState } from 'react';
import EmailJS from '@emailjs/browser';

import './contact-page.scss';

import { Footer, Header } from '../../components/interface';
import { Button } from '../../components/ui';
import Input from '../../components/ui/input';

function ContactMePage() {

    const [shortRequestValue, setShortRequestValue] = useState('');
    const [fullRequestValue, setFullRequestValue] = useState('');
    const [userNameValue, setUserNameValue] = useState('');
    const [userPhoneValue, setUserPhoneValue] = useState('');

    const [currentSlide, setCurrentSlide] = useState(0);

    const requestInfoObject = {
        userName: userNameValue,
        userPhone: userPhoneValue,
        shortRequestInfo: shortRequestValue,
        fullRequestInfo: fullRequestValue,
    };

    const handleSendRequest = (e) => {
        e.preventDefault();

        EmailJS.send('service_2lp78pr', 'template_hfixmjj', {
            toName: 'Михайло',
            fromName: userNameValue,
            toEmail: 'cleo.mics@gmail.com',
            shortMessage: shortRequestValue,
            fullMessage: fullRequestValue,
            phoneNumber: userPhoneValue,
        }, {
            publicKey: 'C-5y-d4eKELO6GqiO'
        })
            .then((response) => {
                alert('Sent!', response.status)
            })
            .catch((error) => {
                alert('Oops...', error)
                console.log(error)
            });
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

    const handlePhoneValue = (e) => {

        setUserPhoneValue(e.target.value);
    }

    const handleSlideChange = () => {
        setCurrentSlide((currentSlide + 1) % 2)
    }

    return (
        <main className='contact-page-main'>
            <Header />
            <div className='input-request-div'>
                <div className='slide-section-one'>
                    <p className='p-user-name-request'>
                        Ваше Ім'я:
                    </p>
                    <Input
                        className='user-name-request'
                        type='text'
                        placeholder=''
                        value={userNameValue}
                        onChange={handleNameValue}
                    />

                    <p className='p-user-phone-request'>
                        Ваш номер телефону:
                    </p>
                    <Input
                        className='user-phone-request'
                        type='tel'
                        placeholder=''
                        value={userPhoneValue}
                        onChange={handlePhoneValue}
                    />

                    <Button className='next-slide-button' onClick={handleSlideChange}>
                        Продовжити
                    </Button>
                </div>
                <div className='slide-section-two'>
                    <p className='p-short-define-request'>
                        Кратко опишіть ваше звернення:
                    </p>
                    <Input
                        className='short-define-request'
                        type='text'
                        placeholder=''
                        value={shortRequestValue}
                        onChange={handleShortValueSave}
                    />
                    <p className='p-full-define-request'>
                        Детально опишіть що вас турбує:
                    </p>
                    <Input
                        className='full-define-request'
                        type='text'
                        placeholder=''
                        value={fullRequestValue}
                        onChange={handleFullValueSave}
                    />

                    <Button className='send-request-button' onClick={handleSendRequest}>
                        Відправити звернення
                    </Button>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default ContactMePage;