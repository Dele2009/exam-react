import React from 'react';

// const Tooltip = ({ children, text }) => (
//     <div className="relative group">
//         <div className="absolute bottom-full mb-2 hidden group-hover:block px-2 py-1 bg-black text-white text-xs rounded">
//             {text}
//         </div>
//         {children}

//     </div>
// );
// const Tooltip = ({ children, text }) => (


//     <div class="relative group">
//         <div class="bg-black absolute text-white text-xs rounded py-1 px-4  hidden group-hover:block right-0 bottom-full">
//             {text}
//             <svg class=" text-black h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
//         </div>
//         {children}
//     </div>

// );


const Tooltip = ({ children, text }) => (
    <div className="relative group mx-2 flex items-center justify-center flex-col">
        <div className="z-30 absolute hidden group-hover:block bg-black text-white text-xs rounded py-1 px-4  bottom-full">
           
            <svg
                className="absolute text-black h-2 left-0 w-full top-full"
                x="0px"
                y="0px"
                viewBox="0 0 255 255"
                xmlSpace="preserve"
            >
                <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
            </svg>
            {text}
        </div>
        {children}

    </div>
);

export default Tooltip;


// export default Tooltip;