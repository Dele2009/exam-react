import React, { useState } from 'react';
import axios from '../../../utilities/axios'
import MultiSelect from '../../fcntionComps/multiselect';

async function submitToServer(formData, url) {
    const data = await axios.post(url, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    console.log(data)
    return { data, status: data.status }
}

export const StudentForm = () => {
    const [studentFormData, setStudentFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        phone: '',
        password: '',
        dob: '',
        address: '',
        studentId: '',
        gradeLevel: '',
        parentName: '',
        parentContact: '',
        enrollmentDate: '',
        coursesEnrolled: '',
        emergencyContact: '',

    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setStudentFormData({ ...studentFormData, [name]: value });
    };

    const handleFileChange = (e) => {
        setStudentFormData({ ...studentFormData, profilePicture: e.target.files[0] });
        console.log()
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        studentFormData[firstName] = 'maxmadman'
        console.log(studentFormData[firstName])
        console.log(studentFormData.firstName)
        const formData = new FormData();
        Object.keys(studentFormData).forEach((key) => {
            formData.append(key, studentFormData[key]);
        });

        try {
            const response = await submitToServer(formData, '/auth/student')
            if (response.status >= 200)
                setStudentFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    username: '',
                    phone: '',
                    password: '',
                    dob: '',
                    address: '',
                    studentId: '',
                    gradeLevel: '',
                    parentName: '',
                    parentContact: '',
                    enrollmentDate: '',
                    coursesEnrolled: '',
                    emergencyContact: '',
            
                })
            console.log('teacher created:', response);
        } catch (err) {
            console.error(err);
        }
        console.log(studentFormData);
    };

    return (
        <div className="bg-gray-100 transition-colors duration-300">
            <div className="container mx-auto p-4">
                <div className="bg-white shadow rounded-lg p-6">
                    <h1 className="text-xl font-semibold mb-4 text-gray-900">Student Information</h1>
                    <p className="text-gray-600 mb-11">Use a permanent address where you can receive mail.</p>
                    <form onSubmit={handleSubmit}>
                        {/* Common Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                            <div className="relative">
                                <input type="text" id="firstName" value={studentFormData.firstName} name="firstName" className="peer border p-2 rounded w-full" placeholder=" " required onChange={handleChange} />
                                <label htmlFor="firstName" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">First name</label>
                            </div>
                            <div className="relative">
                                <input type="text" id="lastName" value={studentFormData.lastName} name="lastName" className="peer border p-2 rounded w-full" placeholder=" " required onChange={handleChange} />
                                <label htmlFor="lastName" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Last name</label>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                            <div className="relative">
                                <input type="email" id="email" value={studentFormData.email} name="email" className="peer border p-2 rounded w-full" placeholder=" " required onChange={handleChange} />
                                <label htmlFor="email" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Email address</label>
                            </div>
                            <div className="relative">
                                <input type="text" id="username" value={studentFormData.username} name="username" className="peer border p-2 rounded w-full" placeholder=" " required onChange={handleChange} />
                                <label htmlFor="username" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Username</label>
                            </div>
                            <div className="relative">
                                <input type="tel" id="phone" value={studentFormData.phone} name="phone" className="peer border p-2 rounded w-full" placeholder=" " required onChange={handleChange} />
                                <label htmlFor="phone" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Phone number</label>
                            </div>
                        </div>
                        <div className="relative mb-12">
                            <input type="password" id="password" value={studentFormData.password} name="password" className="peer border p-2 rounded w-full" placeholder=" " required onChange={handleChange} />
                            <label htmlFor="password" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Password</label>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                            <div className="relative">
                                <input type="date" id="dob" value={studentFormData.dob} name="dob" className="peer border p-2 rounded w-full" placeholder=" " required onChange={handleChange} />
                                <label htmlFor="dob" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Date of Birth</label>
                            </div>
                            <div className="relative">
                                <input type="text" id="address" value={studentFormData.address} name="address" className="peer border p-2 rounded w-full" placeholder=" " required onChange={handleChange} />
                                <label htmlFor="address" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Address</label>
                            </div>
                        </div>
                        <div className="relative mb-12">
                            <input type="file" id="profilePicture" name="profilePicture" className="peer border p-2 rounded w-full" placeholder=" " onChange={handleFileChange} />
                            <label htmlFor="profilePicture" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Profile Picture</label>
                        </div>

                        {/* Student Specific Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                            <div className="relative">
                                <input type="text" id="studentId" value={studentFormData.studentId} name="studentId" className="peer border p-2 rounded w-full" placeholder=" " onChange={handleChange} />
                                <label htmlFor="studentId" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Student ID</label>
                            </div>
                            <div className="relative">
                                <select id="gradeLevel" value={studentFormData.gradeLevel} name="gradeLevel" className="peer border p-2 rounded w-full bg-white" onChange={handleChange}>
                                    <option value="" selected >---select Level---</option>
                                    <option value="grade1">Grade 1</option>
                                    <option value="grade2">Grade 2</option>
                                    <option value="grade3">Grade 3</option>
                                    <option value="grade4">Grade 4</option>
                                    <option value="grade5">Grade 5</option>
                                    <option value="grade6">Grade 6</option>
                                    <option value="grade7">Grade 7</option>
                                    <option value="grade8">Grade 8</option>
                                    <option value="grade9">Grade 9</option>
                                    <option value="grade10">Grade 10</option>
                                    <option value="grade11">Grade 11</option>
                                    <option value="grade12">Grade 12</option>
                                </select>
                                <label htmlFor="gradeLevel" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Grade Level</label>
                            </div>

                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                            <div className="relative">
                                <input type="text" id="parentName" value={studentFormData.parentName} name="parentName" className="peer border p-2 rounded w-full" placeholder=" " onChange={handleChange} />
                                <label htmlFor="parentName" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Parent/Guardian Name</label>
                            </div>
                            <div className="relative">
                                <input type="tel" id="parentContact" value={studentFormData.parentContact} name="parentContact" className="peer border p-2 rounded w-full" placeholder=" " onChange={handleChange} />
                                <label htmlFor="parentContact" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Parent/Guardian Contact</label>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                            <div className="relative">
                                <input type="date" id="enrollmentDate" value={studentFormData.enrollmentDate} name="enrollmentDate" className="peer border p-2 rounded w-full" placeholder=" " onChange={handleChange} />
                                <label htmlFor="enrollmentDate" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Enrollment Date</label>
                            </div>
                            <div className="relative">
                                <input type="text" id="coursesEnrolled" value={studentFormData.coursesEnrolled} name="coursesEnrolled" className="peer border p-2 rounded w-full" placeholder=" " onChange={handleChange} />
                                <label htmlFor="coursesEnrolled" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Courses Enrolled</label>
                            </div>
                        </div>
                        <div className="relative mb-12">
                            <input type="tel" id="emergencyContact" value={studentFormData.emergencyContact} name="emergencyContact" className="peer border p-2 rounded w-full" placeholder=" " onChange={handleChange} />
                            <label htmlFor="emergencyContact" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Emergency Contact Information</label>
                        </div>

                        <button type="submit" className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors">
                            Add Student
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export const TeacherForm = () => {
    const [teacherFormData, setTeacherFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        phone: '',
        dob: '',
        address: '',
        employeeId: '',
        department: '',
        subjectsTaught: '',
        hireDate: '',
        classroomAssigned: '',
        role: "Teacher",
        dataType: 'user'
    });

    const handleChange = (e) => {
        setTeacherFormData({ ...teacherFormData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setTeacherFormData({ ...teacherFormData, profilePicture: e.target.files[0] });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        teacherFormData[firstName] = 'maxmadman'
        console.log(teacherFormData[firstName])
        console.log(teacherFormData.firstName)
        const formData = new FormData();
        Object.keys(teacherFormData).forEach((key) => {
            formData.append(key, teacherFormData[key]);
        });

        try {
            const response = await submitToServer(formData, '/auth/teacher')
            if (response.status >= 200)
                setTeacherFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    username: '',
                    password: '',
                    phone: '',
                    dob: '',
                    address: '',
                    employeeId: '',
                    department: '',
                    subjectsTaught: '',
                    hireDate: '',
                    classroomAssigned: '',
                    dataType: 'user'
                })
            console.log('teacher created:', response);
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div className="bg-gray-100 transition-colors duration-300">
            <div className="container mx-auto p-4">
                <div className="bg-white shadow rounded-lg p-6">
                    <h1 className="text-xl font-semibold mb-4 text-gray-900">Teacher Information</h1>
                    <p className="text-gray-600 mb-11">Use a permanent address where you can receive mail.</p>
                    <form onSubmit={handleSubmit}>
                        {/* Common Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                            <div className="relative">
                                <input type="text" id="firstName" name="firstName" value={teacherFormData.firstName} className="peer border p-2 rounded w-full" placeholder=" " required onChange={handleChange} />
                                <label htmlFor="firstName" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">First name</label>
                            </div>
                            <div className="relative">
                                <input type="text" id="lastName" name="lastName" value={teacherFormData.lastName} className="peer border p-2 rounded w-full" placeholder=" " required onChange={handleChange} />
                                <label htmlFor="lastName" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Last name</label>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                            <div className="relative">
                                <input type="email" id="email" name="email" value={teacherFormData.email} className="peer border p-2 rounded w-full" placeholder=" " required onChange={handleChange} />
                                <label htmlFor="email" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Email address</label>
                            </div>
                            <div className="relative">
                                <input type="text" id="username" name="username" value={teacherFormData.username} className="peer border p-2 rounded w-full" placeholder=" " required onChange={handleChange} />
                                <label htmlFor="username" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Username</label>
                            </div>
                            <div className="relative">
                                <input type="tel" id="phone" name="phone" value={teacherFormData.phone} className="peer border p-2 rounded w-full" placeholder=" " required onChange={handleChange} />
                                <label htmlFor="phone" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Phone number</label>
                            </div>
                        </div>
                        <div className="relative mb-12">
                            <input type="password" id="password" name="password" value={teacherFormData.password} className="peer border p-2 rounded w-full" placeholder=" " required onChange={handleChange} />
                            <label htmlFor="password" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Password</label>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                            <div className="relative">
                                <input type="date" id="dob" name="dob" value={teacherFormData.dob} className="peer border p-2 rounded w-full" placeholder=" " required onChange={handleChange} />
                                <label htmlFor="dob" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Date of Birth</label>
                            </div>
                            <div className="relative">
                                <input type="text" id="address" name="address" value={teacherFormData.address} className="peer border p-2 rounded w-full" placeholder=" " required onChange={handleChange} />
                                <label htmlFor="address" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Address</label>
                            </div>
                        </div>


                        {/* Teacher Specific Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                            <div className="relative">
                                <input type="text" id="employeeId" name="employeeId" value={teacherFormData.employeeId} className="peer border p-2 rounded w-full" placeholder=" " onChange={handleChange} />
                                <label htmlFor="employeeId" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Employee ID</label>
                            </div>
                            <div className="relative">
                                <input type="text" id="department" name="department" value={teacherFormData.department} className="peer border p-2 rounded w-full" placeholder=" " onChange={handleChange} />
                                <label htmlFor="department" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Department</label>
                            </div>
                            <div className="relative">
                                <input type="text" id="subjectsTaught" name="subjectsTaught" value={teacherFormData.subjectsTaught} className="peer border p-2 rounded w-full" placeholder=" " onChange={handleChange} />
                                <label htmlFor="subjectsTaught" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Subjects Taught</label>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                            <div className="relative">
                                <input type="date" id="hireDate" name="hireDate" value={teacherFormData.hireDate} className="peer border p-2 rounded w-full" placeholder=" " onChange={handleChange} />
                                <label htmlFor="hireDate" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Hire Date</label>
                            </div>
                            <div className="relative">
                                <input type="text" id="classroomAssigned" name="classroomAssigned" value={teacherFormData.classroomAssigned} className="peer border p-2 rounded w-full" placeholder=" " onChange={handleChange} />
                                <label htmlFor="classroomAssigned" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Classroom Assigned</label>
                            </div>
                        </div>

                        <div className="relative mb-12">
                            <input type="file" id="profilePicture" name="profilePicture" className="peer border p-2 rounded w-full" placeholder=" " onChange={handleFileChange} />
                            <label htmlFor="profilePicture" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Profile Picture</label>
                        </div>

                        <button type="submit" className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors">
                            Add Teacher
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export const AdminForm = () => {
    const [adminFormData, setAdminFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        phone: '',
        dob: '',
        address: '',
        profilePicture: null,
        role: '',
        department: '',
        permissions: [],
        dataType: 'user'
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setAdminFormData({ ...adminFormData, [name]: value });
    };

    const handleFileChange = (e) => {
        setAdminFormData({ ...adminFormData, [e.target.name]: e.target.files[0] });
    };

    const handleMultiSelectChange = (selectedOptions) => {
        setAdminFormData({ ...adminFormData, permissions: selectedOptions });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(adminFormData).forEach((key) => {
            if (key === 'permissions') {
                formData.append(key, JSON.stringify(adminFormData[key].map(option => option.value)));
            } else {
                formData.append(key, adminFormData[key]);
            }
        });

        try {
            const response = await submitToServer(formData, '/auth/admin')
            if (response.status >= 200) {
                setAdminFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    username: '',
                    password: '',
                    phone: '',
                    dob: '',
                    address: '',
                    profilePicture: null,
                    role: '',
                    department: '',
                    permissions: [],
                    dataType: 'user'
                })
            }
            console.log('Admin created:', response);
        } catch (err) {
            console.error(err);
        }
    };

    const permissionsOptions = [
        { value: 'read', label: 'Read' },
        { value: 'write', label: 'Write' },
        { value: 'delete', label: 'Delete' }
    ];

    return (
        <div className="bg-gray-100 transition-colors duration-300">
            <div className="container mx-auto p-4">
                <div className="bg-white shadow rounded-lg p-6">
                    <h1 className="text-xl font-semibold mb-4 text-gray-900">Admin Information</h1>
                    <p className="text-gray-600 mb-11">Use a permanent address where you can receive mail.</p>
                    <form onSubmit={handleSubmit}>
                        {/* Common Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                            <div className="relative">
                                {/* {adminFormData.firstName} */}
                                <input type="text" id="firstName" value={adminFormData.firstName} name="firstName" className="peer border p-2 rounded w-full" placeholder=" " required onChange={handleChange} />
                                <label htmlFor="firstName" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">First name</label>
                            </div>
                            <div className="relative">
                                <input type="text" id="lastName" value={adminFormData.lastName} name="lastName" className="peer border p-2 rounded w-full" placeholder=" " required onChange={handleChange} />
                                <label htmlFor="lastName" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Last name</label>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                            <div className="relative">
                                <input type="email" id="email" value={adminFormData.email} name="email" className="peer border p-2 rounded w-full" placeholder=" " required onChange={handleChange} />
                                <label htmlFor="email" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Email address</label>
                            </div>
                            <div className="relative">
                                <input type="text" id="username" value={adminFormData.username} name="username" className="peer border p-2 rounded w-full" placeholder=" " required onChange={handleChange} />
                                <label htmlFor="username" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Username</label>
                            </div>
                            <div className="relative">
                                <input type="tel" id="phone" name="phone" value={adminFormData.phone} className="peer border p-2 rounded w-full" placeholder=" " required onChange={handleChange} />
                                <label htmlFor="phone" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Phone number</label>
                            </div>
                        </div>
                        <div className="relative mb-12">
                            <input type="password" id="password" name="password" value={adminFormData.password} className="peer border p-2 rounded w-full" placeholder=" " required onChange={handleChange} />
                            <label htmlFor="password" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Password</label>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                            <div className="relative">
                                <input type="date" id="dob" name="dob" value={adminFormData.dob} className="peer border p-2 rounded w-full" placeholder=" " required onChange={handleChange} />
                                <label htmlFor="dob" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Date of Birth</label>
                            </div>
                            <div className="relative">
                                <input type="text" id="address" name="address" value={adminFormData.address} className="peer border p-2 rounded w-full" placeholder=" " required onChange={handleChange} />
                                <label htmlFor="address" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Address</label>
                            </div>
                        </div>
                        <div className="relative mb-12">
                            <input type="file" id="profilePicture" name="profilePicture" className="peer border p-2 rounded w-full" placeholder=" " onChange={handleFileChange} />
                            <label htmlFor="profilePicture" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Profile Picture</label>
                        </div>

                        {/* Admin Specific Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                            <div className="relative">
                                <input type="text" id="role" name="role" value={adminFormData.role} className="peer border p-2 rounded w-full" placeholder=" " onChange={handleChange} />
                                <label htmlFor="role" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Role</label>
                            </div>
                            <div className="relative">
                                <input type="text" id="department" name="department" value={adminFormData.department} className="peer border p-2 rounded w-full" placeholder=" " onChange={handleChange} />
                                <label htmlFor="department" className="absolute left-2 top-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-80">Department</label>
                            </div>
                            <div className="relative">
                                <label htmlFor="permissions" className="text-gray-500">Permissions</label>
                                <MultiSelect options={permissionsOptions} onChange={handleMultiSelectChange} />
                            </div>

                            {/* <input type="text" value={adminFormData.dataType} onChange={handleChange} className='hidden'/> */}
                        </div>

                        <button type="submit" className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors">
                            Add Admin
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};




