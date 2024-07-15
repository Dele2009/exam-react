import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { SpinnerLoader } from './loaders';

const Modal = ({ 
    isOpen, 
    title, 
    content,
    isLoading = false, 
    onCancel, 
    onConfirm 
}) => {
    return (
        <>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="relative w-auto min-w-96 max-w-lg mx-auto bg-white rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                            <h3 className="text-2xl font-semibold">{title}</h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 hover:opacity-90 rounded-full hover:bg-gray-200 focus:outline-none"
                                onClick={onCancel}
                            >
                                <FaTimes className="text-xl" />
                            </button>
                        </div>
                        {/* Body */}
                        <div className="p-6">
                            {isLoading? 
                              (<SpinnerLoader/>)
                              :
                              (<p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                {content}
                              </p>)
                            }
                        </div>
                        {/* Footer */}
                        <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-4 hover:text-red-700"
                                type="button"
                                onClick={onCancel}
                            >
                                Cancel
                            </button>
                            <motion.button
                                className="bg-green-500 disabled:bg-green-400 text-white active:bg-green-600 font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none"
                                type="button"
                                disabled={isLoading}
                                onClick={onConfirm}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Confirm
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default Modal;
