import React from 'react';
import Header from '../../components/header/index';
import BodySpan from '../../components/body-span/index';
import InfoCard from '../../components/info-card';
import Footer from '../../components/footer';

import './home-page.scss';
import Copyright from '../../components/copyright';

function HomePage() {
    return (
        <main className='home-page-main'>
            <div className='home-page-div'>
                <section className='info-card-section'>
                    <InfoCard />
                </section>
                <BodySpan/>
                <Footer/>
                <Copyright/>
            </div>
        </main>
    )
}

export default HomePage;