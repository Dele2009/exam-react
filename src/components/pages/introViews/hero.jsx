import React from "react";

const Heropage = () => {
  return (
    <>
      <div className="relative z-10 h-screen">
        <img
          src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          className="absolute inset-0 h-full w-full object-cover"
          alt=""
        />
        <div className="relative bg-emerald-700 bg-opacity-90 h-full">
          <svg
            className="absolute inset-x-0 -bottom-1 text-white"
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            ></path>
          </svg>
          <div className="relative mx-auto overflow-y-auto md:overflow-hidden h-full my-auto px-4 py-8 md:py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20 flex items-center">
            <div className="flex flex-col items-center lg:h-full lg:justify-between lg:flex-row my-auto w-full">
              <div className="lg:mb-12 mb-0 w-full max-w-xl xl:mb-0 xl:w-7/12 xl:pr-16 py-10">
                <h2 className="mb-6 max-w-lg text-3xl font-semibold tracking-tight text-white sm:text-7xl sm:leading-none" style={{ fontVariant: "small-caps" }}>
                  Online Exams <br />Made Easy
                </h2>
                <p className="mb-4 max-w-xl text-base text-gray-200 md:text-lg pr-5">
                  Simplify the way students take exams and teachers manage them
                  with our intuitive online exam system.
                </p>
                <a
                  href="/"
                  aria-label=""
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
              <div className="w-full max-w-xl xl:w-5/12 xl:px-8">
                <div className=" overflow-hidden rounded-xl border-t-4 border-emerald-600 bg-white py-7 md:p-7 p-3 shadow-2xl shadow-emerald-300 sm:p-10 ">
                  <h3
                    className="mb-4 text-xl font-bold text-emerald-900 sm:mb-6 md:text-start sm:text-3xl text-center"
                    style={{ fontVariant: "small-caps" }}
                  >
                    Start your trial now
                  </h3>
                  {/* <form>
                                        <div className="mb-1 sm:mb-2">
                                            <label for="firstName" className="mb-1 inline-block font-medium text-emerald-900">First name</label>
                                            <input placeholder="Albert" required="" type="text" className="mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm ring-emerald-200 transition duration-200 focus:border-emerald-400 focus:outline-none focus:ring" id="firstName" name="firstName" />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                            <label for="lastName" className="mb-1 inline-block font-medium text-emerald-900">Last name</label>
                                            <input placeholder="Einstein" required="" type="text" className="mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm ring-emerald-200 transition duration-200 focus:border-emerald-400 focus:outline-none focus:ring" id="lastName" name="lastName" />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                            <label for="email" className="mb-1 inline-block font-medium text-emerald-900">E-mail</label>
                                            <input placeholder="albert.einstein@example.com" required="" type="text" className="mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm ring-emerald-200 transition duration-200 focus:border-emerald-400 focus:outline-none focus:ring" id="email" name="email" />
                                        </div>
                                        <div className="mt-4 mb-2 sm:mb-4">
                                            <button type="submit" className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-emerald-600 px-6 font-medium tracking-wide text-white shadow-md ring-emerald-200 transition duration-200 hover:bg-emerald-700 focus:outline-none focus:ring">Start Trial</button>
                                        </div>
                                        <p className="text-xs text-gray-600 sm:text-sm">* Creditcard not required</p>
                                    </form> */}
                  <div className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                          fill-rule="evenodd"
                          d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute right-0 -bottom-20 h-28 w-28 rounded-xl text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                          clip-rule="evenodd"
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
        </div>
      </div>
    </>
  );
};

export default Heropage;
