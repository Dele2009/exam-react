import React from 'react';
import { motion } from 'framer-motion';
// import Logo from './logo';



export const LogoLoader = () => {
    const circleVariants = {
        start: {
            scale: 0.5,
        },
        end: {
            scale: 2,
            transition: {
                repeat: Infinity,
                duration: 1,
                ease: 'easeInOut',
            },
        },
    };

    const loaderContainer = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
    };

    const circleStyle = {
        width: '3rem',
        height: '3rem',
        borderRadius: '50%',
        backgroundColor: '#3498db',
    };

    return (
        <div style={loaderContainer}>
            <motion.div
                style={circleStyle}
                variants={circleVariants}
                initial="start"
                animate="end"
            />
        </div>
    );
};

export const SpinnerLoader = () => {
    const ringVariants = {
        animate: {
            rotate: [0, 360],
            transition: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 1,
                ease: "linear",
            },
        },
    };

    const loaderContainer = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
    };

    const ringStyle = {
        width: '4rem',
        height: '4rem',
        border: '0.5rem solid #3498db',
        borderTop: '0.5rem solid transparent',
        borderRadius: '50%',
    };

    return (
        <div style={loaderContainer}>
            <motion.div
                style={ringStyle}
                variants={ringVariants}
                animate="animate"
            />
        </div>
    );
};

// export const SquareLoader = () => {
//     const squareVariants = {
//         rotate: {
//             rotate: 360,
//             transition: {
//                 repeat: Infinity,
//                 repeatType: "loop",
//                 duration: 1,
//                 ease: "linear",
//             },
//         },
//     };

//     const loaderContainer = {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '100%',
//         height: '100vh',
//     };

//     const squareStyle = {
//         display: 'block',
//         width: '2rem',
//         height: '2rem',
//         margin: '0.5rem',
//         backgroundColor: '#3498db',
//     };

//     return (
//         <div style={loaderContainer}>
//             <motion.div
//                 style={squareStyle}
//                 variants={squareVariants}
//                 animate="rotate"
//             />
//             <motion.div
//                 style={squareStyle}
//                 variants={squareVariants}
//                 animate="rotate"
//                 transition={{
//                     repeat: Infinity,
//                     repeatType: "loop",
//                     duration: 1,
//                     ease: "linear",
//                     delay: 0.2,
//                 }}
//             />
//             <motion.div
//                 style={squareStyle}
//                 variants={squareVariants}
//                 animate="rotate"
//                 transition={{
//                     repeat: Infinity,
//                     repeatType: "loop",
//                     duration: 1,
//                     ease: "linear",
//                     delay: 0.4,
//                 }}
//             />
//         </div>
//     );
// };




export const Spinner = () => {
    const spinnerVariants = {
        animate: {
            rotate: [0, 360],
            transition: {
                duration: 1,
                ease: 'linear',
                repeat: Infinity,
            },
        },
    };

    return (
        <motion.div
            className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full"
            variants={spinnerVariants}
            animate="animate"
        />
    );
};


export const BouncingDots = () => {
    const dotVariants = {
        initial: {
            y: '0%',
        },
        animate: {
            y: ['0%', '-100%', '0%'],
            transition: {
                duration: 0.6,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 0.2,
            },
        },
    };

    return (
        <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-4 h-4 bg-emerald-600 rounded-full"
                    variants={dotVariants}
                    initial="initial"
                    animate="animate"
                    style={{ animationDelay: `${i * 0.2}s` }}
                />
            ))}
        </div>
    );
};


export const PulsingCircle = () => {
    const circleVariants = {
        animate: {
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
            transition: {
                duration: 1,
                ease: 'easeInOut',
                repeat: Infinity,
            },
        },
    };

    return (
        <motion.div
            className="w-16 h-16 bg-emerald-600 rounded-full"
            variants={circleVariants}
            animate="animate"
        />
    );
};

export const SpinningDots = () => {
    const dotVariants = {
        animate: {
            scale: [1, 0.5, 1],
            opacity: [1, 0.7, 1],
            transition: {
                duration: 1,
                repeat: Infinity,
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <div className="flex space-x-3">
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-4 h-4 md:w-7 md:h-7 bg-emerald-600 rounded-full"
                    variants={dotVariants}
                    animate="animate"
                />
            ))}
        </div>
    );
};

export const GrowingBars = () => {
    const barVariants = {
        initial: {
            scaleY: 1,
        },
        animate: {
            scaleY: [1, 2, 1],
            transition: {
                duration: 0.6,
                repeat: Infinity,
                repeatDelay: 0.2,
            },
        },
    };

    return (
        <div className="flex space-x-1">
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-2 h-12 bg-emerald-600"
                    variants={barVariants}
                    initial="initial"
                    animate="animate"
                    style={{ animationDelay: `${i * 0.2}s` }}
                />
            ))}
        </div>
    );
};


export const RotatingSquare = () => {
    const squareVariants = {
        animate: {
            rotate: [0, 90, 180, 270, 360],
            transition: {
                duration: 1,
                ease: 'linear',
                repeat: Infinity,
            },
        },
    };

    return (
        <motion.div
            className="w-12 h-12 bg-emerald-600"
            variants={squareVariants}
            animate="animate"
        />
    );
};

export const FadingCircle = () => {
    const circleVariants = {
        animate: {
            opacity: [1, 0.5, 1],
            transition: {
                duration: 1,
                ease: 'easeInOut',
                repeat: Infinity,
            },
        },
    };

    return (
        <motion.div
            className="w-16 h-16 bg-emerald-600 rounded-full"
            variants={circleVariants}
            animate="animate"
        />
    );
};


export const SlidingBars = () => {
    const barVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: [0, -20, 20, 0],
            transition: {
                duration: 0.8,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 0.2,
            },
        },
    };

    return (
        <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-2 h-10 bg-emerald-600"
                    variants={barVariants}
                    initial="initial"
                    animate="animate"
                />
            ))}
        </div>
    );
};
