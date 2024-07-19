import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Heropage = () => {
  return (
    <>
      {/* <div className="relative "> */}

        <div className="relative">

          <div className="relative  bg-emerald-700 bg-opacity-90  mx-auto overflow-hidden h-fit md:h-dvh my-auto px-4 py-8 md:py-16 sm:max-w-xl md:max-w-full md:px-24  lg:px-8 lg:py-20 flex items-center">
            <img
              src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              className="absolute -z-10 inset-0 h-full w-full object-cover"
              alt="Online Exams"
            />
            <svg
              className="absolute inset-x-0 -bottom-1 text-white"
              viewBox="0 0 1160 163"
            >
              <path
                fill="currentColor"
                d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
              ></path>
            </svg>
            <div className="flex flex-col items-center lg:h-full lg:justify-around lg:flex-row my-auto mt-14 w-full">
              <div className="lg:mb-12 mb-0 w-full max-w-xl xl:mb-0 xl:w-7/12 xl:pr-16 py-10">
                <h2 className="mb-6 max-w-lg text-3xl font-semibold tracking-tight text-white sm:text-7xl sm:leading-none" style={{ fontVariant: "small-caps" }}>
                  Online Exams <br /> Made Easy
                </h2>
                <p className="mb-4 max-w-xl text-base text-gray-200 md:text-lg pr-5">
                  Simplify the way students take exams and teachers manage them with our intuitive online exam system.
                </p>
                <a
                  href="/"
                  aria-label="Learn more about Tutor Tap"
                  className="inline-flex items-center font-semibold tracking-wider text-teal-400 transition-colors duration-200 hover:text-teal-300"
                >
                  Learn more
                  <svg
                    className="ml-2 inline-block w-3"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                  </svg>
                </a>
              </div>
              <div className="w-full max-w-xl xl:w-5/12 xl:px-8 z-30">
                <div className="overflow-hidden rounded-xl border-4 border-emerald-600 bg-white py-7 md:p-7 p-3 shadow-2xl shadow-emerald-300 sm:p-10 ">
                  <h3 className="mb-4 text-xl font-bold text-emerald-900 sm:mb-6 md:text-start sm:text-3xl text-center" style={{ fontVariant: "small-caps" }}>
                    Start your trial now
                  </h3>
                  <div className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 17l-4 4m0 0l-4-4m4 4V3"
                      />
                    </svg>
                    <div className="abg-orange-400 w-fit rounded-[6rem] mx-auto overflow-hidden rounded-tl-none rounded-br-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute -left-10 -top-20 h-28 w-28 rounded-xl text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute right-0 -bottom-20 h-28 w-28 rounded-xl text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="flex md:w-96 w-80 flex-wrap h-80">
                        <div className="h-1/2 my-1 w-1/2 rounded-full rounded-br-none bg-red-400"></div>
                        <div className="rounded-[6rem] h-1/2 my-1 w-1/2 rounded-tl-none rounded-br-none bg-violet-400"></div>
                        <div className="h-1/2 my-1 w-1/2 rounded-full rounded-b-none rounded-br-none bg-yellow-400"></div>
                        <div className="h-1/2 my-1 w-1/2 rounded-full rounded-t-none rounded-br-none bg-indigo-600"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* New Content Sections */}
          <div className="relative mx-auto py-16 px-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="lg:pr-10">
                <h3 className="mb-4 text-xl font-bold text-emerald-900 sm:mb-6 sm:text-3xl" style={{ fontVariant: "small-caps" }}>
                  Why Choose Tutor Tap?
                </h3>
                <p className="mb-6 text-gray-700">
                  Tutor Tap is designed to provide a seamless and efficient online exam experience. Our platform is built with the latest technologies to ensure reliability, security, and ease of use.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-700 text-white">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-gray-700">User-Friendly Interface</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-700 text-white">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-gray-700">Secure and Reliable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-700 text-white">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-gray-700">Customizable Exam Settings</span>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  className="rounded-xl shadow-lg"
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxlYXJuaW5nfGVufDB8fDB8fHww"
                  alt="Online Learning"
                />
              </div>
            </div>
          </div>
          <div className="relative mx-auto my-9 py-16 px-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20 bg-emerald-800 rounded-xl">
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="lg:pr-10">
                <h3 className="mb-4 text-xl font-bold text-white sm:mb-6 sm:text-3xl" style={{ fontVariant: "small-caps" }}>
                  Trusted by Educators
                </h3>
                <p className="mb-6 text-gray-300">
                  Our platform is trusted by educators worldwide to deliver quality online exams and assessments.
                </p>
                <p className="mb-6 text-gray-300">
                  "Tutor Tap has transformed our examination process, making it more efficient and secure." - <em>John Doe, School Administrator</em>
                </p>
              </div>
              <div className="lg:pr-10">
                <h3 className="mb-4 text-xl font-bold text-white sm:mb-6 sm:text-3xl" style={{ fontVariant: "small-caps" }}>
                  Get Started in Minutes
                </h3>
                <p className="mb-6 text-gray-300">
                  Setting up your online exam system has never been easier. Sign up today and start creating exams within minutes.
                </p>
                <a
                  href="/"
                  aria-label="Get Started"
                  className="inline-flex items-center font-semibold tracking-wider text-teal-400 transition-colors duration-200 hover:text-teal-300"
                >
                  Get Started
                  <svg
                    className="ml-2 inline-block w-3"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                  </svg>
                </a>
              </div>
              <div className="lg:pr-10">
                <h3 className="mb-4 text-xl font-bold text-white sm:mb-6 sm:text-3xl" style={{ fontVariant: "small-caps" }}>
                  Contact Us
                </h3>
                <p className="mb-6 text-gray-300">
                  Have questions or need support? Our team is here to help you every step of the way.
                </p>
                <a
                  href="/"
                  aria-label="Contact Us"
                  className="inline-flex items-center font-semibold tracking-wider text-teal-400 transition-colors duration-200 hover:text-teal-300"
                >
                  Contact Us
                  <svg
                    className="ml-2 inline-block w-3"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* <footer className="bg-emerald-900 text-white py-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
              <div className="mb-6 md:mb-0">
                <h4 className="text-lg font-semibold mb-4">About Tutor Tap</h4>
                <p className="text-sm">
                  Tutor Tap is a modern Learning Management System designed to simplify online exams for students and teachers.
                </p>
              </div>
              <div className="mb-6 md:mb-0">
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="text-sm">
                  <li className="mb-2"><a href="/" className="hover:underline">Home</a></li>
                  <li className="mb-2"><a href="/features" className="hover:underline">Features</a></li>
                  <li className="mb-2"><a href="/pricing" className="hover:underline">Pricing</a></li>
                  <li className="mb-2"><a href="/contact" className="hover:underline">Contact</a></li>
                </ul>
              </div>
              <div className="mb-6 md:mb-0">
                <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                <form>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="mb-3 w-full p-2 rounded text-gray-800"
                  />
                  <button className="w-full p-2 rounded bg-teal-500 hover:bg-teal-600 text-white">
                    Subscribe
                  </button>
                </form>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  <a href="https://facebook.com" aria-label="Facebook" className="hover:text-teal-500"><FaFacebookF size={20} /></a>
                  <a href="https://twitter.com" aria-label="Twitter" className="hover:text-teal-500"><FaTwitter size={20} /></a>
                  <a href="https://instagram.com" aria-label="Instagram" className="hover:text-teal-500"><FaInstagram size={20} /></a>
                  <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-teal-500"><FaLinkedinIn size={20} /></a>
                </div>
              </div>
            </div>
          </footer> */}


        </div>
      {/* </div> */}
    </>
  );
};

export default Heropage;
