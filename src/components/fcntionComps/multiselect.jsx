import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const MultiSelect = ({ options, onChange }) => {
    const animatedComponents = makeAnimated();

    const customStyles = {
        control: (provided) => ({
            ...provided,
            borderColor: '#d1d5db',
            padding: '0.5rem',
            borderRadius: '0.375rem',
            '&:hover': { borderColor: '#9ca3af' },
        }),
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: '#3b82f6',
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: '#fff',
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            color: '#fff',
            '&:hover': {
                backgroundColor: '#2563eb',
                color: '#fff',
            },
        }),
    };

    return (
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={options}
            styles={customStyles}
            onChange={onChange}
            className="w-full"
        />
    );
};

export default MultiSelect;
