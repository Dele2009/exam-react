import React, { useState, useEffect } from 'react';
import axios from '../../../utilities/axios'
import { SpinningDots,Modal } from '../../Elememts';
import { FaUserGraduate, FaChalkboardTeacher, FaUserShield } from 'react-icons/fa';


const UserTable = () => {
    const [users, setUsers] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [counts, setCounts] = useState({ students: 0, teachers: 0, admins: 0 });
    const [toggleStatus, setToggleStatus] = useState({});
    const [modalOpen, setModalOpen] = useState(false); // State for modal visibility
    const [actionType, setActionType] = useState(''); // State to track the action type (delete/toggle)
    const [selectedUserId, setSelectedUserId] = useState(''); // State to store selected user ID


    const handleDelete = async (id) => {
        try {
            setSelectedUserId(id); // Set selected user ID for deletion
            setActionType('delete'); // Set action type for modal
            setModalOpen(true); // Open modal for confirmation
        } catch (error) {
            console.log('Error deleting user', error);
        }
    };

    const handleToggleChange = async (id) => {
        try {
            setSelectedUserId(id); // Set selected user ID for toggle
            setActionType('toggle'); // Set action type for modal
            setModalOpen(true); // Open modal for confirmation
        } catch (error) {
            console.log('Error toggling user status', error);
        }
    };

    const handleModalCancel = () => {
        setModalOpen(false); // Close modal
        setSelectedUserId(''); // Clear selected user ID
        setActionType(''); // Clear action type
    };


    const handleModalConfirm = async () => {
        try {
            if (actionType === 'delete') {
                await axios.delete(`/admin/deleteuser/${selectedUserId}`);
                // setUsers(users.filter(user => user._id !== selectedUserId));
                // setCounts({
                //     students: users.filter(user => user.__t === 'Student').length,
                //     teachers: users.filter(user => user.__t === 'Teacher').length,
                //     admins: users.filter(user => user.__t === 'Admin').length,
                // });
            } else if (actionType === 'toggle') {
                const newStatus = !toggleStatus[selectedUserId];
                await axios.put(`/admin/setUserstatus/${selectedUserId}`, { active: newStatus });
                // setToggleStatus(prevStatus => ({
                //     ...prevStatus,
                //     [selectedUserId]: newStatus
                // }));
            }
        } catch (error) {
            console.log('Error confirming action', error);
        } finally {
            setModalOpen(false); // Close modal
            setSelectedUserId(''); // Clear selected user ID
            setActionType(''); // Clear action type
        }
    };

    useEffect(() => {
        const FetchUsers = async () => {
            try {
                const { data } = await axios.get(`/admin/getusers`);
                setUsers(data.Users)
                const students = data.Users.filter(user => user.__t === 'Student').length;
                const teachers = data.Users.filter(user => user.__t === 'Teacher').length;
                const admins = data.Users.filter(user => user.__t === 'Admin').length;

                setCounts({ students, teachers, admins });

                const initialToggleStatus = {};
                data.Users.forEach(user => {
                    initialToggleStatus[user._id] = user.active;
                });
                setToggleStatus(initialToggleStatus);
                setIsLoading(false)
            } catch (error) {
                console.log('Error fetching', err)
                setIsLoading(false);
            }
        }
        FetchUsers()

    }, [handleModalConfirm])
    const handleEdit = () => {
        console.log('edit button ')
    }

    

    if (isLoading || !users) {
        return (
            <div className="w-full h-full flex justify-center items-center">
                {/* <h2 className="text-4xl text-emerald-600">
                    Loading........
                </h2> */}

                {/* <Spinner/> */}
                {/* <BouncingDots/> */}
                {/* <PulsingCircle/> */}
                <SpinningDots />

                {/* <SlidingBars/> */}
                {/* <FadingCircle/> */}

                {/* <GrowingBars/> */}
                {/* <RotatingSquare/> */}
            </div>
        )
    }
    return (
        <>
            <div className="flex flex-wrap justify-around ">
                <div className="w-full sm:w-1/3 p-4">
                    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
                        <div className="p-4 bg-blue-100 rounded-full">
                            <FaUserGraduate className="text-blue-500 text-4xl" />
                        </div>
                        <div className="ml-4">
                            <h2 className="text-2xl font-bold mb-2">Total Students</h2>
                            <p className="text-3xl font-semibold text-gray-700">{counts.students}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/3 p-4">
                    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
                        <div className="p-4 bg-green-100 rounded-full">
                            <FaChalkboardTeacher className="text-green-500 text-4xl" />
                        </div>
                        <div className="ml-4">
                            <h2 className="text-2xl font-bold mb-2">Total Teachers</h2>
                            <p className="text-3xl font-semibold text-gray-700">{counts.teachers}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/3 p-4">
                    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
                        <div className="p-4 bg-red-100 rounded-full">
                            <FaUserShield className="text-red-500 text-4xl" />
                        </div>
                        <div className="ml-4">
                            <h2 className="text-2xl font-bold mb-2">Total Admins</h2>
                            <p className="text-3xl font-semibold text-gray-700">{counts.admins}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-x-scroll lg:overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">N/O</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Role</th>
                            {/* <th scope="col" className="px-6 py-4 font-medium text-gray-900">Department</th> */}
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Status</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Active</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {users.map((user, userIndex) => (
                            <tr className="hover:bg-gray-50" key={user._id}>
                                <th className="px-6 py-4">{userIndex + 1}</th>
                                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                    <div className="relative h-10 w-10">
                                        <img
                                            className="h-full w-full rounded-full object-cover object-center"
                                            src={user.profilePicture || "https://via.placeholder.com/150"}
                                            alt={user.name}
                                        />
                                        <span className={`absolute right-0 bottom-0 h-2 w-2 rounded-full ${user.active ? 'bg-green-400' : 'bg-red-400'} ring ring-white`}></span>
                                    </div>
                                    <div className="text-sm">
                                        <div className="font-medium text-gray-700">{user.firstName}</div>
                                        <div className="text-gray-400">{user.email}</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">{user.__t}</td>
                                {/* <td className="px-6 py-4">{user.department}</td> */}
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${user.active ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                        <span className={`h-1.5 w-1.5 rounded-full ${user.active ? 'bg-green-600' : 'bg-red-600'}`}></span>
                                        {user.active || 'Suspended'}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    {/* <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${user.active ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                    <span className={`h-1.5 w-1.5 rounded-full ${user.active ? 'bg-green-600' : 'bg-red-600'}`}></span>
                                    {user.active || 'Suspended'}
                                </span> */}
                                    <div class="flex items-center">
                                        {/* <span class="mr-2 text-gray-700">Toggle Switch:</span> 
                                        peer-focus:ring-2 peer-focus:ring-green-400
                                    */}
                                        <label htmlFor={`toggle-switch${userIndex}`} className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                id={`toggle-switch${userIndex}`}
                                                className="sr-only peer"
                                                checked={toggleStatus[user._id] || false}
                                                onChange={() => handleToggleChange(user._id)}
                                            />
                                            <div className="w-12 h-7 bg-red-600 peer-focus:outline-none  rounded-full peer peer-checked:bg-green-500"></div>
                                            <div className="peer-checked:translate-x-5 bg-white absolute left-1 top-1 w-5 h-5 rounded-full transition-transform"></div>
                                        </label>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-end gap-4">
                                        <a href="#" onClick={() => handleEdit(user.id)}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                className="h-6 w-6 text-yellow-500"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                                />
                                            </svg>
                                        </a>
                                        <a href="#" onClick={() => handleDelete(user.id)}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-6 w-6 text-red-600"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal
                isOpen={modalOpen}
                title={actionType === 'delete' ? 'Confirm Deletion' : 'Confirm Toggle'}
                content={actionType === 'delete' ? 'Are you sure you want to delete this user?' : 'Are you sure you want to toggle this user\'s status?'}
                onCancel={handleModalCancel}
                onConfirm={handleModalConfirm}
            />
        </>
    );
};

export default UserTable;
