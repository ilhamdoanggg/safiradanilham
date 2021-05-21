import React,{ useEffect} from 'react';
import AOS from "aos";

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

function Home() {
  
  useEffect(() => {
    AOS.init({
      once: true,
      // disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });
  // const [loading, setLoading] = useState(true);

  // function fakeRequest() {
  //   return new Promise((resolve) => setTimeout(() => resolve(), 200));
  // }
  
  // useEffect(() => {
    
  //   fakeRequest().then(() => {
  //     const el = document.querySelector(".loader-container");
  //     if (el) {
  //       el.remove();
  //       setLoading(!loading);
  //     }
  //   });
  // },[loading]);
  // if (loading) {
  //   return null
  // }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />

      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
