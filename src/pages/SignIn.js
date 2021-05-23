import React from "react";
// import { Link } from "react-router-dom";

import Header from "../partials/Header";
import Footer from "../partials/Footer";

function SignIn() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-200 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Profile Lengkap Safira Andjani</h1>
              </div> */}

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <div class="flex flex-col lg:flex-row items-start items-center lg:justify-center w-full w-full lg:px-10 py-12 ">
                  {/* <div className="flex flex-col lg:flex-row items-start lg:justify-center w-full lg:px-10 py-12 "> */}
                  <article
                    className="bg-white w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center text-primary-dark rounded-lg"
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    <h2 className="pb-4 flex justify-center font-bold border-b border-gray-300">
                      <span className="text-3xl mt-6 mr-1 font-dancing">
                        Safira Andjani, A.Md.Kom
                      </span>
                    </h2>
                    <ul className="text-sm font-bold">
                      <li className="pt-3 pb-4 border-b border-gray-300">
                        Putri Terakhir dari 2 bersaudara{" "}
                      </li>
                      <li className="pt-3 pb-4 border-b border-gray-300">
                        Bapak Untung Dwi Yanto{" "}
                      </li>
                      <li className="pt-4 pb-4 border-b border-gray-300">
                        Ibu Widayati
                      </li>
                      <li className="pt-4 pb-4 border-b border-gray-300">
                        hobby membaca dan terus membaca
                      </li>
                      <li className="pt-4 pb-4 border-b border-gray-300">
                        selalu ingin tau lebih akah hal yang berbeda
                      </li>
                    </ul>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SignIn;
