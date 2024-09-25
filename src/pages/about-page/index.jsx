import React from "react";
import { useState } from "react";

import "./about-page.scss";
import { Footer, Header } from "../../components/interface";
import { Button } from "../../components/ui";

function AboutPage() {
   const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);
   const [isExpirienceModalOpen, setIsExpirienceModalOpen] = useState(false);
   const [isForPatientsModalOpen, setIsForPatientsModalOpen] = useState(false);

   const handleEducationModalOpen = () => {
      setIsEducationModalOpen(true);

      if (isEducationModalOpen === true) setIsEducationModalOpen(false);
   };

   const handleExpirienceModalOpen = () => {
      setIsExpirienceModalOpen(true);

      if (isExpirienceModalOpen === true) setIsExpirienceModalOpen(false);
   };

   const handleForPatientsModalOpen = () => {
      setIsForPatientsModalOpen(true);

      if (isForPatientsModalOpen === true) setIsForPatientsModalOpen(false);
   };

<<<<<<< HEAD
        if (isExpirienceModalOpen === true)
            setIsExpirienceModalOpen(false);
    }

    const handleForPatientsModalOpen = () => {

        setIsForPatientsModalOpen(true)

        if (isForPatientsModalOpen === true)
            setIsForPatientsModalOpen(false);
    }


    return (
        <main className='about-page-main'>
            <Header />
            <div className='about-div'>
                <section className='info-cards-section'>
                    <section className='education-section'>
                        <div
                            className={`education-label-div ${isEducationModalOpen ? 'inactive' : ''}`}
                        >
                            <p className={`p-text-education ${isEducationModalOpen ? 'inactive' : ''}`}>
                                Освіта
                            </p>
                            {isEducationModalOpen && (
                            <div className='education-div'>
                                Я лікар-ендокринолог<br />з багаторічним досвідом роботи<br />в галузі медицини.<br />
                                Я закінчила Харківський<br />національний медичний<br />університет у 2001 році<br />
                                та продовжила свою<br />кар'єру в галузі внутрішньої<br />медицини.
                            </div>
                            )}
                        </div>
                        <Button 
                        className='open-modal-button'
                        onClick={handleEducationModalOpen}
                        >
                          {isEducationModalOpen ? 'Закрити ': 'Детальніше' }
                        </Button>
                    </section>
                    <section className='expirience-section'>
                        <div
                            className={`expirience-label-div ${isExpirienceModalOpen ? 'inactive' : ''}`}
                        >
                            <p className={`p-text-expirience ${isExpirienceModalOpen? 'inactive' : ''}`}>
                                Досвід
                            </p>
                            {isExpirienceModalOpen && (
                                <div className='expirience-div'>
                                    З 2011 року я повністю <br />присвятила себе ендокринології,
                                    <br />я маю багаторічний<br /> різноманітний досвід
                                    <br />у цьому напрямку, та у <br />напрямку діабетології
                                </div>
                            )}
                        </div>
                        <Button 
                        className='open-modal-button'
                        onClick={handleExpirienceModalOpen}
                        >
                            {isExpirienceModalOpen ? 'Закрити ': 'Детальніше' }
                        </Button>
                    </section>
                    <section className='for-patients-section'>
                        <div
                            className={`for-patients-label-div ${isForPatientsModalOpen ? 'inactive' : ''}`}
                        >
                            <p className={`p-text-for-patients ${isForPatientsModalOpen ? 'inactive' : ''}`}>
                                Для пацієнтів
                            </p>
                            {isForPatientsModalOpen&& (
                                <div className='for-patients-div'>
                                    Моя мета - забезпечити високоякісну<br /> медичну допомогу<br />та підтримку кожному пацієнту.<br />
                                    Я вірю в індивідуальний <br />підхід до лікування<br /> та прагну створити довірливі<br /> відносини з своїми пацієнтами.<br />
                                    Рада буду допомогти <br />вам із будь-якими питаннями,<br /> що стосуються ендокринології.<br />
                                    Звертайтесь до мене <br />за консультацією або лікуванням.<br />
                                    З повагою, Олена Христенко
                                </div>
                            )}
                        </div>
                        <Button 
                        className='open-modal-button'
                        onClick={handleForPatientsModalOpen}
                        >
                            {isForPatientsModalOpen ? 'Закрити ': 'Детальніше' }
                        </Button>
                    </section>
                </section>
            </div>
            <Footer />
        </main>
    )
=======
   return (
      <main className="about-page-main">
         <Header />
         <div className="about-div">
            <section className="info-cards-section">
               <section className="education-section">
                  <div
                     className={`education-label-div ${
                        isEducationModalOpen ? "inactive" : ""
                     }`}
                  >
                     <p
                        className={`p-text-education ${
                           isEducationModalOpen ? "inactive" : ""
                        }`}
                     >
                        Освіта
                     </p>
                     {isEducationModalOpen && (
                        <div className="education-div">
                           Я лікар-ендокринолог
                           <br />з багаторічним досвідом роботи
                           <br />в галузі медицини.
                           <br />
                           Я закінчила Харківський
                           <br />
                           національний медичний
                           <br />
                           університет у 2001 році
                           <br />
                           та продовжила свою
                           <br />
                           кар'єру в галузі внутрішньої
                           <br />
                           медицини.
                        </div>
                     )}
                  </div>
                  <Button
                     className="open-modal-button"
                     onClick={handleEducationModalOpen}
                  >
                     Детальніше
                  </Button>
               </section>
               <section className="expirience-section">
                  <div
                     className={`expirience-label-div ${
                        isExpirienceModalOpen ? "inactive" : ""
                     }`}
                  >
                     <p
                        className={`p-text-expirience ${
                           isExpirienceModalOpen ? "inactive" : ""
                        }`}
                     >
                        Досвід
                     </p>
                     {isExpirienceModalOpen && (
                        <div className="expirience-div">
                           З 2011 року я повністю <br />
                           присвятила себе ендокринології,
                           <br />я маю багаторічний
                           <br /> різноманітний досвід
                           <br />у цьому напрямку, та у <br />
                           напрямку діабетології
                        </div>
                     )}
                  </div>
                  <Button
                     className="open-modal-button"
                     onClick={handleExpirienceModalOpen}
                  >
                     Детальніше
                  </Button>
               </section>
               <section className="for-patients-section">
                  <div
                     className={`for-patients-label-div ${
                        isForPatientsModalOpen ? "inactive" : ""
                     }`}
                  >
                     <p
                        className={`p-text-for-patients ${
                           isForPatientsModalOpen ? "inactive" : ""
                        }`}
                     >
                        Для пацієнтів
                     </p>
                     {isForPatientsModalOpen && (
                        <div className="for-patients-div">
                           Моя мета - забезпечити високоякісну
                           <br /> медичну допомогу
                           <br />
                           та підтримку кожному пацієнту.
                           <br />
                           Я вірю в індивідуальний <br />
                           підхід до лікування
                           <br /> та прагну створити довірливі
                           <br /> відносини з своїми пацієнтами.
                           <br />
                           Рада буду допомогти <br />
                           вам із будь-якими питаннями,
                           <br /> що стосуються ендокринології.
                           <br />
                           Звертайтесь до мене <br />
                           за консультацією або лікуванням.
                           <br />З повагою, Олена Христенко
                        </div>
                     )}
                  </div>
                  <Button
                     className="open-modal-button"
                     onClick={handleForPatientsModalOpen}
                  >
                     Детальніше
                  </Button>
               </section>
            </section>
         </div>
         <Footer />
      </main>
   );
>>>>>>> 81b4be9ab256c7bf4dfceef715cd29528951b9b0
}

export default AboutPage;
