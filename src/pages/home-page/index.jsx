import React from "react";
// import BodySpan from "../../components/body-span/index";

import { Footer, Header, InfoCard } from "../../components/interface";

import "./home-page.scss";
// import Copyright from "../../components/copyright";

function HomePage() {
   return (
      <>
         <Header />

         <main className="home-page-main">
            <div className="home-page-div">
               <section className="info-card-section">
                  <InfoCard />
               </section>
               {/* <BodySpan /> */}
               {/* <Copyright /> */}
            </div>
         </main>

         <Footer />
      </>
   );
}

export default HomePage;
