import React from 'react';

function Newsletter() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

        <div className="text-center max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="fade-up" >
              Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, 
              agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, 
              pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir <strong className='font-dancing'>(QS. Ar-Rum Ayat 21)</strong></p> 
              
            </div>

          {/* CTA box */}
          <div className="bg-seagreen-500 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl" data-aos="fade-up">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                    <stop stopColor="#DFDFDF" offset="0%" />
                    <stop stopColor="#126c49" offset="44.317%" />
                    <stop stopColor="#333" offset="100%" />
                  </radialGradient>
                  
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                    <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                    <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                    <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center" data-aos="fade-up" >
              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <p className="text-gray-300 text-lg mb-6" data-aos="fade-up">"...Yaa Tuhan kami, anugerahkah kepada kami pasangan kami dan keturunan kami sebagai penyenang hati (kami), dan jadikanlah kami pemimpin bagi orang orang yang bertakwa." <strong className='font-dancing'>QS. Al Furqon : 74</strong> </p>
                <p className="text-gray-300 text-lg mb-6"data-aos="fade-up" >"Semoga Allah senantiasa memberkahi untuk kami dalam keadaan mudah dan memberkahi pula atas kami dalam keadaan sulit, serta menghimpun kami berdua untuk senantiasa dalam kebaikan" </p>
                <h3 className="h3 font-dancing text-white mb-2" data-aos="fade-up">Terima Kasih atas doa dan restunya </h3>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Newsletter;
