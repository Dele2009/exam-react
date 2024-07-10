import React, { useState, useEffect } from 'react';

export const Alert = ({ message, error, index, length, onClick }) => {
  // const [visible, setVisible] = useState(true);

  // const handleClose = () => {
  //   setVisible(false);
  // };

  // if (visible === false) return null;
  const time = ((length - index) * 1000) + 4000
  useEffect(() => {
    console.log(time)
    const remove = setTimeout(() => {
      onClick()
    }, time)

    return () => {
      clearTimeout(remove)
    };
  }, [onClick])


  let iconId = error ? 'exclamation-triangle-fill' : 'check-circle-fill';
  let color = error ? 'bg-red-500' : 'bg-green-500';

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" className="hidden" >
        <symbol id="check-circle-fill" viewBox="0 0 16 16">
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </symbol>
        <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
          <path
            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </symbol>
        <symbol id="tl" viewBox="0 0 24 24">
          <path fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"></path>
        </symbol>
      </svg>
      <div className={`font-regular flex alert justify-between items-center w-full max-w-96 rounded-lg  ${color} z-50  px-4 py-4 text-base text-white`} >
        <div className="relative top-0 left-0">
          <svg className="mt-px h-7 w-7" role="img" fill="#f9f9f9">
            <use xlinkHref={`#${iconId}`} />
          </svg>
        </div>
        <div className="ml-8 mr-3">
          <p className="block font-sans text-base font-normal leading-relaxed text-white antialiased">
            {message}
          </p>
        </div>
        <div className="relative top-0 right-0 w-max rounded-lg transition-all hover:bg-opacity-20">
          <div role="button" className="w-max rounded-lg p-1"
            onClick={() => {
              // handleClose()
              onClick()
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export const AlertContainer = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 fixed z-50 top-5 right-1 max-h-96 overflow-y-auto px-3 md:px-10 py-5">
      {children}
    </div>
  )
}

// export const Al = {
//   container: AlertContainer
// }