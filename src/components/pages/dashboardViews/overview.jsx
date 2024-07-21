import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import axios from '../../../utilities/axios';
import { SpinningDots } from '../../Elememts';
import { useAuthContent } from '../../../hooks/useAuth';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import { FaRegChartBar, FaChartPie, FaChartLine, FaChartArea } from 'react-icons/fa'; // Importing icons from React Icons

const Overview = () => {
    const { user } = useAuthContent();
    const [timeOfDay, setTimeOfDay] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [examsPerMonth, setExamsPerMonth] = useState([]);
    const [popularSubjects, setPopularSubjects] = useState([]);
    const [examStatus, setExamStatus] = useState([]);

    const lineChartRef = useRef(null);
    const barChartRef = useRef(null);
    const doughnutChartRef = useRef(null);
    const pieChartRef = useRef(null);

    useEffect(() => {
        const Time = new Date().getHours();
        if (Time < 12) setTimeOfDay('Good Morning');
        else if (Time >= 12 && Time < 17) setTimeOfDay('Good Afternoon');
        else if (Time >= 17) setTimeOfDay('Good Evening');
    }, []); // Empty dependency array to run only once

    useEffect(() => {
        const fetchAppAnalytics = async () => {
            try {
                const { data } = await axios.get('/admin/getAppAnalytics');

                setExamsPerMonth(data.examsPerMonth);
                setPopularSubjects(data.popularSubjects);
                setExamStatus(data.examStatus);
            } catch (error) {
                console.error('Error fetching app analytics:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchAppAnalytics();
    }, []);

    useEffect(() => {
        if (lineChartRef.current && barChartRef.current && doughnutChartRef.current && pieChartRef.current) {
            const lineCtx = lineChartRef.current.getContext('2d');
            const barCtx = barChartRef.current.getContext('2d');
            const doughnutCtx = doughnutChartRef.current.getContext('2d');
            const pieChartCtx = pieChartRef.current.getContext('2d');

            const lineChart = new Chart(lineCtx, {
                type: 'line',
                data: {
                    labels: examsPerMonth.map(e => `${e._id.month}/${e._id.year}`),
                    datasets: [{
                        label: 'Exams Created',
                        data: examsPerMonth.map(e => e.count),
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        fill: true,
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { position: 'top' },
                        title: { display: true, text: 'Exams Created Per Month' }
                    }
                }
            });

            const barChart = new Chart(barCtx, {
                type: 'bar',
                data: {
                    labels: popularSubjects.map(s => s._id),
                    datasets: [{
                        label: 'Popular Subjects',
                        data: popularSubjects.map(s => s.count),
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0'],
                        hoverOffset: 4
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { position: 'top' },
                        title: { display: true, text: 'Most Popular Subjects' }
                    }
                }
            });

            const doughnutChart = new Chart(doughnutCtx, {
                type: 'doughnut',
                data: {
                    labels: popularSubjects.map(s => s._id),
                    datasets: [{
                        label: 'Popular Subjects',
                        data: popularSubjects.map(s => s.count),
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0'],
                        hoverOffset: 4
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { position: 'top' },
                        title: { display: true, text: 'Most Popular Subjects' }
                    }
                }
            });

            const piechart = new Chart(pieChartCtx, {
                type: 'pie',
                data: {
                    labels: examStatus.map(s => s._id ? 'Active' : 'Inactive'),
                    datasets: [{
                        label: 'Exam Status',
                        data: examStatus.map(s => s.count),
                        backgroundColor: ['#FF6384', '#36A2EB'],
                        hoverOffset: 4
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { position: 'top' },
                        title: { display: true, text: 'Exam Status' }
                    }
                }
            });

            return () => {
                lineChart.destroy();
                barChart.destroy();
                doughnutChart.destroy();
                piechart.destroy();
            };
        }
    }, [examsPerMonth, popularSubjects, examStatus]);

    if (isLoading) {
        return (
            <div className="w-full h-full flex justify-center items-center">
                <SpinningDots />
            </div>
        );
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-black text-gray-800 mb-4">{`${timeOfDay}, ${user.info.firstName}!`}</h1>
            <p className="mb-6 text-gray-600">Welcome to your overview dashboard. Here's a snapshot of the recent activity and performance metrics.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div className="bg-white rounded-xl shadow-md p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}>
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                        <FaChartLine className="mr-2" /> Exams Created Per Month
                    </h2>
                    <canvas ref={lineChartRef} height="100%"></canvas>
                </motion.div>
                <motion.div className="bg-white rounded-xl shadow-md p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}>
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                        <FaRegChartBar className="mr-2" /> Most Popular Subjects
                    </h2>
                    <canvas ref={barChartRef} height="150"></canvas>
                </motion.div>
                <motion.div className="bg-white rounded-xl shadow-md p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}>
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                        <FaChartPie className="mr-2" /> Subject Popularity
                    </h2>
                    <canvas ref={doughnutChartRef} height="150"></canvas>
                </motion.div>
                <motion.div className="bg-white rounded-xl shadow-md p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}>
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                        <FaChartArea className="mr-2" /> Exam Status
                    </h2>
                    <canvas ref={pieChartRef} height="150"></canvas>
                </motion.div>
                <motion.div className="bg-white rounded-xl shadow-md p-8 col-span-1 md:col-span-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}>
                    <h2 className="text-xl font-bold mb-4">Additional Analytics</h2>
                    <p>Here you can add more content or charts as needed to further analyze the data and metrics relevant to your activities.</p>
                </motion.div>
            </div>
        </div>
    );
};

export default Overview;
