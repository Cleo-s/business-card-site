import React from 'react';

import './about-page.scss';
import { Footer, Header } from '../../components/interface';


function AboutPage() {
    return (
        <>
            <Header />
            <div className='about-div'>
                <section className='info-cards-section'>
                    <div className='education-label-div'>
                        <p className='p-text-education'>
                            Освіта
                        </p>
                        <div className='education-div'>
                            Я лікар-ендокринолог<br />з багаторічним досвідом роботи<br />в галузі медицини.<br />
                            Я закінчила Харківський<br />національний медичний<br />університет у 2001 році<br />
                            та продовжила свою<br />кар'єру в галузі внутрішньої<br />медицини.
                        </div>
                    </div>
                    <div className='expirience-label-div'>
                        <p className='p-text-expirience'>
                            Досвід
                        </p>
                        <div className='expirience-div'>З 2011 року я повністю <br />присвятила себе ендокринології,
                            <br />я маю багаторічний<br /> різноманітний досвід
                            <br />у цьому напрямку, та у <br />напрямку діабетології
                        </div>
                    </div>
                    <div className='for-patients-label-div'>
                        <p className='p-text-for-patients'>
                            Для пацієнтів
                        </p>
                        <div className='for-patients-div'>
                            <p>
                                Моя мета - забезпечити високоякісну<br/> медичну допомогу<br/>та підтримку кожному пацієнту.<br/>
                                Я вірю в індивідуальний <br/>підхід до лікування<br/> та прагну створити довірливі<br/> відносини з своїми пацієнтами.<br/>
                                Рада буду допомогти <br/>вам із будь-якими питаннями,<br/> що стосуються ендокринології.<br/>
                                Звертайтесь до мене <br/>за консультацією або лікуванням.<br/>
                                З повагою, Олена Христенко
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default AboutPage;
