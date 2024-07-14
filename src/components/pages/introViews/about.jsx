import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaHistory, FaBullseye, FaTrophy } from 'react-icons/fa';
import { LogoPreloader } from '../../Elememts';


const AboutPage = () => {
   
    return (
        <div className="dark:bg-gray-900 text-white">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-emerald-700 bg-opacity-80 t-10 h-dvh">
                <video
                    className="absolute -z-10 inset-0 h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                >
                    <source src="/students.mp4" type="video/mp4" />
                </video>
                <svg
                    className="absolute inset-x-0 -bottom-1 text-white"
                    viewBox="0 0 1160 163"
                >
                    <path
                        fill="currentColor"
                        d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                    ></path>
                </svg>

                {/* <svg
                    className="absolute inset-x-0 -bottom-1 text-white"
                    viewBox="0 0 1160 163"
                >
                    <path
                        fill="currentColor"
                        d="M-160 26L-100 56.3C-40 86.7 80 146 200 171C320 196 440 183 560 144.3C680 106 800 41 920 14C1040 -13 1160 5 1220 14.7L1280 24V163.5H1220C1160 163.5 1040 163.5 920 163.5C800 163.5 680 163.5 560 163.5C440 163.5 320 163.5 200 163.5C80 163.5 -40 163.5 -100 163.5H-160V26Z"
                    ></path>
                </svg> */}

                <div className="mx-auto my-auto px-6 py-20 flex items-center justify-center h-full">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl font-bold mb-4">About Us</h1>
                        <p className="text-lg mb-8">
                            Welcome to Tutor Tap, where we revolutionize learning experiences.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="my-20 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col md:flex-row items-center mb-8 shadow-2xl rounded-lg p-10 bg-white dark:bg-gray-800"
                >
                    <div className="md:w-1/2 mb-8 md:mb-0 h-full">
                        <FaHistory className="text-emerald-800 dark:text-gray-400 text-6xl mb-4" />
                        <h2 className="text-3xl font-semibold mb-4 text-emerald-800 dark:text-gray-100">Our Story</h2>
                        <p className="text-lg text-emerald-700 dark:text-gray-300">
                            Founded with a passion for education, Tutor Tap was born from a vision to democratize access to quality learning. Our journey began with a small team of educators and technologists, united by the belief that every student deserves personalized learning opportunities. Today, we stand as a beacon for innovation in education, continuously adapting to meet the evolving needs of students worldwide.
                        </p>
                    </div>
                    <div className="md:w-1/2 h-full">
                        <img
                            src="https://via.placeholder.com/400"
                            alt="Our Story - Tutor Tap"
                            className="rounded-lg shadow-lg w-full h-full"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Our Mission Section */}
            <section className="dark:bg-gray-800 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col md:flex-row justify-center items-center mb-8 bg-emerald-700 rounded-lg p-10 shadow-2xl"
                    >
                        <div className="md:w-1/2 md:pr-8 order-last md:order-first">
                            <img
                                src="https://via.placeholder.com/400"
                                alt="Our Mission - Tutor Tap"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="md:w-1/2 mb-8 md:mb-0 text-white">
                            <FaBullseye className="text-white dark:text-gray-400 text-6xl mb-4" />
                            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                            <p className="text-lg">
                                At Tutor Tap, our mission is to create an inclusive learning ecosystem where students can thrive. We are committed to providing high-quality, engaging, and personalized education experiences that cater to the unique needs of each learner. Our goal is to bridge the gap between traditional education and modern learning technologies, fostering a culture of continuous improvement and innovation.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="py-16 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-12"
                >
                    <FaUsers className="text-emerald-800 dark:text-gray-400 text-6xl mb-4" />
                    <h2 className="text-3xl font-semibold mb-4 text-emerald-800 dark:text-gray-100">Our Team</h2>
                    <p className="text-lg text-gray-300 dark:text-gray-400">
                        Meet the passionate team driving the Tutor Tap mission forward.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Team Member 1 */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-center"
                    >
                        <img
                            src="https://via.placeholder.com/150"
                            alt="John Doe - CEO"
                            className="w-40 h-40 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-emerald-800 dark:text-gray-100">John Doe</h3>
                        <p className="text-gray-600 dark:text-gray-400">CEO</p>
                    </motion.div>
                    {/* Team Member 2 */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-center"
                    >
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Jane Smith - CTO"
                            className="w-40 h-40 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-emerald-800 dark:text-gray-100">Jane Smith</h3>
                        <p className="text-gray-600 dark:text-gray-400">CTO</p>
                    </motion.div>
                    {/* Team Member 3 */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-center"
                    >
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Emily Johnson - CFO"
                            className="w-40 h-40 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-emerald-800 dark:text-gray-100">Emily Johnson</h3>
                        <p className="text-gray-600 dark:text-gray-400">CFO</p>
                    </motion.div>
                    {/* Team Member 4 */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-center"
                    >
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Michael Brown - COO"
                            className="w-40 h-40 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-emerald-800 dark:text-gray-100">Michael Brown</h3>
                        <p className="text-gray-600 dark:text-gray-400">COO</p>
                    </motion.div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="bg-emerald-800 dark:bg-gray-800 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-center mb-12"
                    >
                        <FaTrophy className="text-emerald-800 dark:text-gray-400 text-6xl mb-4" />
                        <h2 className="text-3xl font-semibold mb-4 text-gray-300 dark:text-gray-400">Our Achievements</h2>
                        <p className="text-lg text-gray-300 dark:text-gray-400">
                            We take pride in our accomplishments and the milestones we have achieved together.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="text-center"
                        >
                            <div className="text-4xl font-bold">10K+</div>
                            <p className="mt-2">Students Empowered</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="text-center"
                        >
                            <div className="text-4xl font-bold">500+</div>
                            <p className="mt-2">Courses Available</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="text-center"
                        >
                            <div className="text-4xl font-bold">20+</div>
                            <p className="mt-2">Awards Won</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="text-center"
                        >
                            <div className="text-4xl font-bold">100+</div>
                            <p className="mt-2">Partnerships</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
