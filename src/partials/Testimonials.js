import React from 'react';

function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#18681a" offset="77.402%" />
              <stop stopColor="#0e3e10" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="font-dancing h2 mb-4" data-aos="fade-up">Bagi yang berhalangan hadir</h2>
            <p className="text-xl text-gray-600" data-aos="fade-up">bagi yg berhalangan hadir dan ingin membagi rizky untuk pengantin bisa dengan mentransfer ke</p>
          </div>

          {/* Items */}
          
          <div className="flex items-center justify-center">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                  {/* <!-- 1 card --> */}
                  <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl" data-aos="fade-up">
                      <div className=" text-white flex items-center absolute rounded py-4 px-4 shadow-xl bg-bank-bri left-4 -top-6">
                        <span className='font-semibold'>BRI</span >
                          
                      </div>
                      <div className="mt-8">
                          <p className="text-xl font-semibold my-2">Nomer Rekening</p>
                          <p className="font-semibold text-base mb-2">Safira Andjani</p>
                          <div className="flex space-x-2 text-gray-900 text-sm">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                              <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                            </svg>
                            <p className='text-gray-900'>581101021719537</p> 
                          </div>
                          
                          <div className="pb-2 pt-2 border-b border-gray-300"></div>
                          <div className="my-3"></div>
                          <p className="font-semibold text-base mb-2">Ilham</p>
                          <div className="flex space-x-2 text-gray-400 text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                            <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                          </svg>
                              <p>-</p> 
                          </div>
                          
                      </div>
                  </div>

                  {/* <!-- 2 card --> */}
                  <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl" data-aos="fade-up">
                      <div className=" text-white flex items-center absolute rounded py-4 px-4 shadow-xl bg-bank-bca2 left-4 -top-6">
                      <span className='font-semibold'>BCA</span >
                      </div>
                      <div className="mt-8">
                          <p className="text-xl font-semibold my-2">Nomer Rekening</p>
                          <p className="font-semibold text-gray-900 text-base mb-2">Safira Andjani</p>
                          <div className="flex space-x-2 text-gray-900 text-sm">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                              <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                            </svg>
                            <p className='text-gray-900'>7180376334</p> 
                          </div>
                          
                          <div className="pb-2 pt-2 border-b border-gray-300"></div>
                          <div className="my-3"></div>
                          <p className="font-semibold text-base mb-2">Ilham</p>
                          <div className="flex space-x-2 text-gray-400 text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                            <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                          </svg>
                              <p>-</p> 
                          </div>
                          
                      </div>
                  </div>

                  {/* <!-- 4 card --> */}
                  <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl" data-aos="fade-up">
                      <div className=" text-white flex items-center rounded absolute py-4 px-4 shadow-xl bg-yellow-500 left-4 -top-6">
                      <span className='font-semibold'> &#8383; </span>
                      </div>
                      <div className="mt-8">
                      <p className="font-semibold text-base mb-2">Bitcoin ke Alamat </p>
                      {/* <p >16i1AiGgjpKsD31MyJg5z6CbR5USo9TRoP</p> */}
                      <img className="object-contain h-32 w-full" src={require('../images/btc.png').default} rx="32" alt="Hero" />
                      </div>
                  </div>
              </div>
          </div>

          {/* Testimonials */}
          {/* <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <img className="relative rounded-full" src={require('../images/testimonial.jpg').default} width="96" height="96" alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ I love this product and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time. “
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Darya Finger</cite>
                <div className="text-gray-600">
                  <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@Dropbox</a>
                </div>
              </div>

            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
}

export default Testimonials;
