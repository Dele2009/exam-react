import React from 'react';
import {useAuthContent} from  '../../../hooks'
import {formatDate} from '../../../utilities/helpers'
const Profile = () => {
    const {user} = useAuthContent()
    return (
        <div className="container mx-auto my-5 p-5">
            <div className="md:flex no-wrap md:-mx-2">
                {/* Left Side */}
                <div className="w-full md:w-3/12 md:mx-2">
                    {/* Profile Card */}
                    <div className="bg-white p-3 border-t-4 border-green-400">
                        <div className="image overflow-hidden">
                            <img
                                className="h-auto w-full mx-auto"
                                src="https://randomuser.me/api/portraits/men/3.jpg"
                                alt="Profile"
                            />
                        </div>
                        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{user.info.firstName} {user.info.lastName}</h1>
                        {/* <h3 className="text-gray-600 font-lg text-semibold leading-6">Owner at Her Company Inc.</h3>
                        <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui
                            unde aspernatur non deserunt
                        </p> */}
                        <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                            <li className="flex items-center py-3">
                                <span>Status</span>
                                <span className="ml-auto">
                                    <span className={`${user.info.active ? 'bg-green-500' : 'bg-red-500'} py-1 px-2 rounded text-white text-sm`}>Active</span>
                                </span>
                            </li>
                            <li className="flex items-center py-3">
                                <span>Member since</span>
                                <span className="ml-auto">Nov 07, 2016</span>
                            </li>
                        </ul>
                    </div>
                    {/* End of profile card */}
                    <div className="my-4"></div>
                    {/* Friends card */}
                    {/* <div className="bg-white p-3 hover:shadow">
                        <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                            <span className="text-green-500">
                                <svg className="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </span>
                            <span>Similar Profiles</span>
                        </div>
                        <div className="grid grid-cols-3">
                            {['Kojstantin', 'James', 'Natie', 'Casey'].map((name, index) => (
                                <div className="text-center my-2" key={index}>
                                    <img
                                        className="h-16 w-16 rounded-full mx-auto"
                                        src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`}
                                        alt={name}
                                    />
                                    <a href="#" className="text-main-color">{name}</a>
                                </div>
                            ))}
                        </div>
                    </div> */}
                    {/* End of friends card */}
                </div>
                {/* Right Side */}
                <div className="w-full md:w-9/12 mx-2 h-64">
                    {/* Profile tab */}
                    {/* About Section */}
                    <div className="bg-white p-3 shadow-sm rounded-sm">
                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span className="text-green-500">
                                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <span className="tracking-wide">About</span>
                        </div>
                        <div className="text-gray-700">
                            <div className="grid md:grid-cols-2 text-sm">
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">First Name</div>
                                    <div className="px-4 py-2">{user.info.firstName}</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Last Name</div>
                                    <div className="px-4 py-2">{user.info.lastName}</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Gender</div>
                                    <div className="px-4 py-2">{user.info.gender}</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                                    <div className="px-4 py-2">{user.info.phone}</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Current Address</div>
                                    <div className="px-4 py-2">{user.info.address}</div>
                                </div>
                                
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Email</div>
                                    <div className="px-4 py-2">
                                        <a className="text-blue-800" href={`mailto:${user.info.email}`}>{user.info.email}</a>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Birthday</div>
                                    <div className="px-4 py-2">{formatDate(user.info.dob)}</div>
                                </div>
                            </div>
                        </div>
                        <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                            Show Full Information
                        </button>
                    </div>
                    {/* End of about section */}
                    <div className="my-4"></div>
                    {/* Experience and education */}
                    <div className="bg-white p-3 shadow-sm rounded-sm">
                        <div className="grid grid-cols-2">
                            <div>
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                    <span className="text-green-500">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">Experience</span>
                                </div>
                                <ul className="list-inside space-y-2">
                                    <li>
                                        <div className="text-teal-600">Owner at Her Company Inc.</div>
                                        <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                    </li>
                                    <li>
                                        <div className="text-teal-600">Software Engineer at Facebook Inc.</div>
                                        <div className="text-gray-500 text-xs">June 2018 - March 2020</div>
                                    </li>
                                    <li>
                                        <div className="text-teal-600">Intern at Microsoft</div>
                                        <div className="text-gray-500 text-xs">May 2017 - September 2017</div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                    <span className="text-green-500">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v7a2 2 0 002 2h6a2 2 0 002-2v-7m-10 0v7a2 2 0 01-2 2H4a2 2 0 01-2-2v-7" />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">Education</span>
                                </div>
                                <ul className="list-inside space-y-2">
                                    <li>
                                        <div className="text-teal-600">Masters Degree in Oxford</div>
                                        <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                    </li>
                                    <li>
                                        <div className="text-teal-600">Bachelors Degree in LPU</div>
                                        <div className="text-gray-500 text-xs">March 2018 - May 2019</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* End of Experience and education grid */}
                </div>
                {/* End of right side */}
            </div>
        </div>
    );
};

export default Profile;
