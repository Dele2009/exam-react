import React, { useState, useEffect } from 'react';
import axios from '../../../utilities/axios';
import { SpinningDots,Modal,ToggleSwitch,SpinnerLoader } from '../../Elememts';
import { formatDate } from '../../../utilities/helpers';

import { FaPencilAlt, FaTrash } from 'react-icons/fa';


const ExamTable = () => {
    const [exams, setExams] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    const [modalOpen, setModalOpen] = useState(false);
    const [actionType, setActionType] = useState('');
    const [selectedExamId, setSelectedExamId] = useState('');

    useEffect(() => {
        const fetchExams = async () => {
            try {
                const { data } = await axios.get('/admin/getexams');
                setExams(data.Exams);
                console.log(data.Exams)
            } catch (error) {
                console.error('Error fetching exams:', error);
                setError(error.message)
            }finally{
                setIsLoading(false);
            }
        };

        fetchExams();
    }, []);

    const handleDelete = (id) => {
        setSelectedExamId(id);
        setActionType('delete');
        setModalOpen(true);
    };

    const handleEdit = (id) => {
        console.log('Edit exam with ID:', id);
    };

    const handleToggleChange = async (id) => {
        setSelectedExamId(id);
        setActionType('toggle');
        setModalOpen(true);
    };

    const handleModalCancel = () => {
        setModalOpen(false);
        setSelectedExamId('');
        setActionType('');
    };

    const handleModalConfirm = async () => {
        try {
            if (actionType === 'delete') {
                await axios.delete(`/admin/deleteexam/${selectedExamId}`);
                setExams(exams.filter((exam) => exam._id !== selectedExamId));
                return;
            } 
            
            if(actionType === 'toggle'){
                try {
                    const examToUpdate = exams.find((exam) => exam._id === selectedExamId);
                    const newStatus = !examToUpdate.active;
                    await axios.put(`/admin/setexamstatus/${selectedExamId}`, { active: newStatus });
                    setExams((prevExams) =>
                        prevExams.map((exam) =>
                            exam._id === selectedExamId ? { ...exam, active: newStatus } : exam
                        )
                    );
                } catch (error) {
                    console.error('Error toggling exam status:', error);
                }finally{
                    return;
                }
            } 
            
            if (actionType === 'edit') {
                console.log('Edit confirmed for exam ID:', selectedExamId);
                return;
            }
        } catch (error) {
            console.error('Error confirming action:', error);
        } finally {
            setModalOpen(false);
            setSelectedExamId('');
            setActionType('');
        }
    };

    if (isLoading) {
        return (
            <div className="w-full h-full flex justify-center items-center">
                <SpinningDots />
            </div>
        );
    }

    if(error){
        return(
            <div className='w-full h-full flex justify-center items-center'>
               <h2  className='text-slate-700 font-bold font-sans text-3xl'>Request Timeout, try again</h2>
            </div>
        )
    }

    return (
        <>
            <div className="overflow-x-scroll lg:overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                                N/O
                            </th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                                Duration
                            </th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                                T/Q
                            </th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                                Active
                            </th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {exams.map((exam, index) => (
                            <tr className="hover:bg-gray-50" key={exam._id}>
                                <td className="px-6 py-4 text-slate-700">{index + 1}</td>
                                <td className="px-6 py-4 text-slate-700">{exam.title}</td>
                                <td className="px-6 py-4 text-slate-700">
                                    {formatDate(exam.createdAt)}
                                </td>
                                <td className="px-6 py-4 text-slate-700">{exam.duration ? exam.duration.hours : '00'}h : {exam.duration ? exam.duration.minutes : '00'}m</td>
                                <td className="px-6 py-4 text-slate-700">{exam.questions.length}</td>
                                <td className="px-6 py-4">
                                    {/* <span className="ml-2 text-gray-700">
                                        {exam.active ? 'Active' : 'Inactive'}
                                    </span> */}
                                    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${exam.active? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                        <span className={`h-1.5 w-1.5 rounded-full ${exam.active? 'bg-green-600' : 'bg-red-600'}`}></span>
                                        {exam.active ? 'Active' : 'Inactive'}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <ToggleSwitch
                                        id={index}
                                        checked={exam.active}
                                        onToggle={() => handleToggleChange(exam._id)}
                                    />
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-start gap-4">
                                        <button
                                            onClick={() => handleEdit(exam._id)}
                                            className="text-yellow-500 hover:text-yellow-600"
                                        >
                                            <FaPencilAlt  className='size-5'/>
                                        </button>
                                        <button
                                            onClick={() => handleDelete(exam._id)}
                                            className="text-red-500 hover:text-red-600"
                                        >
                                            <FaTrash  className='size-5'/>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal
                isOpen={modalOpen}
                title={actionType === 'delete' ? 'Confirm Deletion' : 'Confirm status change'}
                content={
                    actionType === 'delete'
                        ? 'This action can not be reversed, are you sure you want to delete this exam?'
                        : 'Note that you are requesting to change the status of this exam !!!'
                }
                onCancel={handleModalCancel}
                onConfirm={handleModalConfirm}
            />
        </>
    );
};

export default ExamTable;
