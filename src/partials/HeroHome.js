import React, { useState, useEffect } from 'react';
import Modal from '../utils/Modal';

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const [date] = useState('May 30, 2021')
  const [dateResepsi] = useState('July 23, 2021')

  const calculateTimeLeft = (time) => {
      var nowMillis = new Date(time).getTime();
      var targetMillis = new Date().getTime();
      var duration = nowMillis-targetMillis;
      var years = Math.floor(duration / 3.154e+10);
      var durationMinusYears = duration - (years * 3.154e+10);
      var months = Math.floor(duration / 2.628e+9) % 12;
      var durationMinusMonths = durationMinusYears - (months * 2.628e+9);
      var days = Math.floor(durationMinusMonths / 8.64e+7);
      var hours = Math.floor(duration / 3.6e+6 ) % 24;
      var mins = Math.floor(duration / 60000 ) % 60;
      var secs = Math.floor(duration / 1000 ) % 60;

      let timeLeft = {};
      if (duration >0){
        timeLeft={
            Tahun: years,
            // Bulan: months,
//            Minggu: Math.floor(duration/(1000 * 60 * 60 * 24 * 7)),
            Hari: days,
            Jam: hours,
            Menit: mins,
            Detik:secs
        }
      }
      return timeLeft;
    }
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [timeLeftResepsi, setTimeLeftRsepsi] = useState(calculateTimeLeft());
  
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(date));
      setTimeLeftRsepsi(calculateTimeLeft(dateResepsi));
    }, 1000);
  });

  const timerComponents = [];
  const timerComponentsResepsi = [];
  Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
        timerComponents.push(
            <span>
              {timeLeft[interval]} {interval}{" "}
            </span>
          );
  });

  Object.keys(timeLeftResepsi).forEach((interval) => {
    if (!timeLeftResepsi[interval]) {
      return;
    }
    timerComponentsResepsi.push(
        <span>
          {timeLeftResepsi[interval]} {interval}{" "}
        </span>
      );
});
  
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true" >
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg" data-aos="fade-up" data-aos-delay="200">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#9ee4a2" offset="0%" />
              <stop stopColor="#168657" offset="77.402%" />
              <stop stopColor="#193b2e" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
          <p className="text-5xl md:text-6xl font-dancing leading-tighter tracking-tighter mb-4" data-aos="fade-up">Save The Date</p>
          <p className="text-4xl md:text-xl font-dancing leading-tighter tracking-tighter mb-4" data-aos="fade-up">Resepsi & Akad</p>
          </div>
          <div className="text-center pb-12 md:pb-16">
          <h1 className="text-4xl md:text-6xl font-dancing leading-tighter tracking-tighter mb-4" data-aos="fade-up">Akad</h1>
              <h2 className=" md:text-6xl font-semibold leading-tighter tracking-tighter mb-4" data-aos="fade-up">
                <span className="bg-clip-text text-seagreen-400 bg-gradient-to-r from-seagreen-500 to-blue-400">
                { timerComponents.length ? timerComponents :` Alhamdulillah Akad nikah sudah dilakukan tanggal ${date}`}</span>
              </h2>

            <h1 className="text-4xl md:text-6xl font-dancing leading-tighter tracking-tighter mb-4" data-aos="fade-up">Resepsi</h1>
            <h2 className="md:text-6xl font-semibold leading-tighter tracking-tighter mb-4" data-aos="fade-up">
                <span className="bg-clip-text text-seagreen-400 bg-gradient-to-r from-seagreen-500 to-blue-400">
                { timerComponentsResepsi.length ? timerComponentsResepsi :` Alhamdulillah Resepsi nikah sudah dilakukan pada tanggal ${dateResepsi}`}</span>
              </h2>
            
            {/* <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="150">
              Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, 
              agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, 
              pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir <strong className='font-dancing'>(QS. Ar-Rum Ayat 21)</strong></p> 
              
            </div> */}
          </div>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="100">
              <div className="flex flex-col justify-center">
                <img className="" src={require('../images/hero-images.png').default} width="768" height="100" alt="Hero" />
                
              </div>
              <button className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} aria-controls="modal">
                <svg className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                  <path d="M10 17l6-5-6-5z" />
                </svg>
                <span className="ml-3">Watch the full video (1 min)</span>
              </button>
            </div>

            {/* Modal */}
            <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
              <div className="relative pb-9/16">
                <iframe className="absolute w-full h-full"
                src="https://www.youtube.com/embed/7UD-LDerZvg?autoplay=1" 
                title="Video" allowFullScreen></iframe>
              </div>
            </Modal>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;
