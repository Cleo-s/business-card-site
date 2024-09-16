import React from "react";

import { Footer, Header, InfoCard } from "../../components/interface";

import "./home-page.scss";

function HomePage() {
   return (
      <>
         <Header />
         <main className="home-page-main">
            <div className="home-page-div">
               <section className="info-card-section">
                  <InfoCard />
               </section>
            </div>
         </main>
         <Footer />
      </>
   );
}

export default HomePage;
