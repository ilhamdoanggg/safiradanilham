import React from 'react';

function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-seagreen-500 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="font-dancing h2 mb-4" data-aos="fade-up">Pemberitahuan</h2>
            <p className="text-md text-gray-600" data-aos="fade-up">Tanpa mengurangi rasa hormat bagi tamu yang akan menghadiri akad nikah pada tanggal 
            <code> 30 Mei 2021 / 18 Syawal 1442</code> wajib mengikuti protokol kesehatan sebagai berikut</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            
            <div className=" flex flex-col items-center p-3 bg-white rounded shadow-xl" data-aos="fade-up">
            <img className="object-contain h-48 w-full" src={require('../images/masker.png').default} rx="32" alt="Hero" />
            </div>

            <div className=" flex flex-col items-center p-3 bg-white rounded shadow-xl" data-aos="fade-up">
            <img className="object-contain h-48 w-full" src={require('../images/2meter.png').default} width="64" height="64" rx="32" alt="Hero" />
            </div>
            
            <div className=" flex flex-col items-center p-3 bg-white rounded shadow-xl" data-aos="fade-up">
            <img className="object-contain h-48 w-full" src={require('../images/cuci-tangan.png').default} rx="32" alt="Hero" />  
            </div>

            <div className=" flex flex-col items-center p-3 bg-white rounded shadow-xl" data-aos="fade-up">
            <img className="object-contain h-48 w-full" src={require('../images/jabat.png').default} rx="32" alt="Hero" />
            </div>

            <div className=" flex flex-col items-center p-3 bg-white rounded shadow-xl" data-aos="fade-up">
            <img className="object-contain h-48 w-full" src={require('../images/gunakan.png').default} rx="32" alt="Hero" />
            </div>

            <div className=" flex flex-col items-center p-3 bg-white rounded shadow-xl" data-aos="fade-up">
            <img className="object-contain h-48 w-full" src={require('../images/kerumunan.png').default} rx="32" alt="Hero" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
