import React from "react";
// import React, { useState, useRef, useEffect } from "react";
// import Transition from "../utils/Transition.js";

function Features() {
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
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="font-dancing h2 mb-4"data-aos="fade-up">Kisah Cinta Kita</h1>
            <p className="text-xl text-gray-600" data-aos="fade-up">
              Cinta Itu Rumit, Maka Belajarlah untuk Menyederhanakannya
            </p>
            {/* <p className="text-xl text-gray-600">"...Yaa Tuhan kami, anugerahkah kepada kami pasangan kami dan keturunan kami sebagai penyenang hati (kami), dan jadikanlah kami pemimpin bagi orang orang yang bertakwa." (QS. Al Furqon : 74)</p> */}
          </div>

          {/* <div className="relative min-h-screen bg-gray-100 container bg-gray-100 mx-auto w-full h-full"> */}
            <div className="relative wrap overflow-hidden p-10 h-full" data-aos="zoom-y-out">
              <div
                className="border-1-1 absolute border-opacity-20 border-gray-900 h-full border"
                style={{ left: "50%" }}
              ></div>
              {/* <!-- right timeline --> */}

              <div className="mb-8 flex justify-between items-center w-full right-timeline" data-aos="fade-up">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-pool-1 shadow-xl w-7 h-7 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">
                    1
                  </h1>
                </div>
                <div className="order-1 bg-pool-1 rounded-md shadow-xl w-5/12 px-6 py-4" data-aos="fade-up">
                  <i className="mb-3 font-bold text-gray-800 text-md">
                  9 Sept 2019
                  </i>
                  <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-90">
                  Awal kita bertemu di Bootcamp sebagai <strong>FullStack Developer</strong> di Enigma dalam kelas yang sama
                  </p>
                </div>
              </div>

              {/* <!-- left timeline --> */}
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline" data-aos="fade-up">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-pool-2 shadow-xl w-7 h-7 rounded-full">
                  <h1 className="mx-auto text-white font-semibold text-lg">
                    2
                  </h1>
                </div>
                <div className="order-1 bg-pool-2 rounded-lg shadow-xl w-5/12 px-6 py-4" data-aos="fade-up">
                  <p className="mb-3 font-bold text-white text-md">
                  11 Mart 2020
                  </p>
                  <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                  Mulai bekerja bersama di Ittomey Bintang Indonesia (Bank BRI) 
                  <p>sering ngobrol bareng tentang <strong>Bug dan Error</strong> jadi semakin dekat</p>
                  </p>
                </div>
              </div>

              {/* <!-- right timeline --> */}
              <div className="mb-8 flex justify-between items-center w-full right-timeline" data-aos="fade-up">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-pool-3 shadow-xl w-7 h-7 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">
                    3
                  </h1>
                </div>
                <div className="order-1 bg-pool-3 rounded-lg shadow-xl w-5/12 px-6 py-4"  data-aos="fade-up">
                  <p className="mb-3 font-bold text-white text-md">
                  03 Mei 2020
                  </p>
                  <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                  Berkomitment bersama
                  </p>
                </div>
              </div>

              {/* <!-- left timeline --> */}
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline" data-aos="fade-up">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gray-900 shadow-xl w-7 h-7 rounded-full">
                  <h1 className="mx-auto text-white font-semibold text-lg">
                    4
                  </h1>
                </div>
                <div className="order-1 bg-pool-4 rounded-lg shadow-xl w-5/12 px-6 py-4" data-aos="fade-up">
                  <p className="mb-3 font-bold text-white text-md">
                  15 Nov 2020
                  </p>
                  <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                    Hari dan tanggal dimana kita Lamaran
                  </p>
                </div>
              </div>

              <div className="mb-8 flex justify-between items-center w-full right-timeline"data-aos="fade-up">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-pool-5 shadow-xl w-7 h-7 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">
                    5
                  </h1>
                </div>
                <div className="order-1 bg-pool-5 rounded-lg shadow-xl w-5/12 px-6 py-4" data-aos="fade-up">
                  <p className="mb-3 font-bold text-white text-md">
                  30 Mei 2021
                  </p>
                  <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                   Akad Nikah yang akan di lakukan di 
                   <a className='text-gray-900 hover:text-blue-900' href='https://maps.app.goo.gl/GP1xB8ovP4cT8Pmp8'> 📍Lokasi</a> Kediaman Mempelai Wanita 
                  </p>
                </div>
              </div>

              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline" data-aos="fade-up">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-pool-6 shadow-xl w-7 h-7 rounded-full">
                  <h1 className="mx-auto text-white font-semibold text-lg">
                    6
                  </h1>
                </div>
                <div className="order-1 bg-pool-6 rounded-lg shadow-xl w-5/12 px-6 py-4" data-aos="fade-up">
                  <p className="mb-3 font-bold text-white text-md">
                  23 Juli 2021
                  </p>
                  <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  Resepsi yang akan di lakukan di<a className='text-blue-500 hover:text-gray-900' href='https://maps.app.goo.gl/GP1xB8ovP4cT8Pmp8'> 📍Lokasi</a> Kediaman Mempelai Pria
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
    </section>
  );
}

export default Features;
