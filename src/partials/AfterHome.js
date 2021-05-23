import React from "react";
// import React, { useState, useRef, useEffect } from "react";
// import Transition from "../utils/Transition.js";

function AfterHome() {
  // const [tab, setTab] = useState(1);

  // const tabs = useRef(null);

  // const heightFix = () => {
  //   if (tabs.current.children[tab]) {
  //     tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
  //   }
  // }

  // useEffect(() => {
  //   heightFix()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [tab])

  return (
    <section className="relative">
      <div
        className="absolute  inset-0 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      {/* <div className="absolute left-0 right-0 m-auto w-24 md:w-auto w-px p-px h-5 bg-gray-200 transform -translate-y-1/2"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="md:pt-20">
          {/* Section header */}
          <div className=" text-center md:pb-16">
            <h1 className="h2 mb-4 font-dancing"data-aos="fade-up">Akan Menikah</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="150">
              Semoga Allah SWT senantiasa memberkahi untuk kami dalam keadaan mudah dan memberkahi pula atas kami dalam keadaan sulit, serta menghimpun kami berdua untuk senantiasa dalam kebaikan.</p>
              
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start items-center lg:justify-center w-full w-full lg:px-10 py-12 ">
            {/* <div className="flex flex-col lg:flex-row items-start lg:justify-center w-full lg:px-10 py-12 "> */}
              <article className="bg-white w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center text-primary-dark rounded-lg" data-aos="fade-up" data-aos-delay="150">
                  <h5 className="font-bold text-base">Calon mempelai Wanita</h5>
                  <h2 className="pb-4 flex justify-center font-bold border-b border-gray-300">
                      <span className="text-3xl mt-6 mr-1 font-dancing">Safira Andjani, A.Md.Kom</span>
                  </h2>
                  <ul className="text-sm font-bold">
                      <li className="pt-3 pb-4 border-b border-gray-300">Putri Terakhir dari </li>
                      <li className="pt-3 pb-4 border-b border-gray-300">Bapak Untung  Dwi Yanto </li>
                      <li className="pt-4 pb-4 border-b border-gray-300">Ibu Widayati</li>
                  </ul>
                  
              </article>
              <article className="bg-white w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center text-primary-dark rounded-lg" data-aos="fade-up" data-aos-delay="150">
                  <h5 className="font-bold text-base">Calon mempelai Pria</h5>
                  <h2 className="pb-4 flex justify-center font-bold border-b border-gray-300">
                      <span className="text-3xl mt-6 mr-1 font-dancing">Ilham, S.Kom</span>
                  </h2>
                  <ul className="text-sm font-bold">
                      <li className="pt-3 pb-4 border-b border-gray-300">Putra Pertama dari </li>
                      <li className="pt-3 pb-4 border-b border-gray-300">Bapak Hafidh</li>
                      <li className="pt-4 pb-4 border-b border-gray-300">Ibu Mafadah</li>
                  </ul>
                </article>
                
          </div>      
          </div>
        </div>
    </section>
  );
}

export default AfterHome;
