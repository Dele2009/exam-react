import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const MultiSelect = ({ id, name, value, options, onChange }) => {
    const animatedComponents = makeAnimated();

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderColor: state.isFocused ? '#3b82f6' : '#d1d5db',
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
        <div className="relative">
            <Select
                id={id}
                name={name}
                value={value}
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={options}
                styles={customStyles}
                onChange={onChange}
                className="w-full"
                classNamePrefix="react-select"
            />
            <label
                htmlFor={id}
                className={`absolute left-2 top-2 text-gray-500 duration-300 transform scale-75 origin-top-left 
                ${value && value.length ? '-translate-y-6' : 'peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100'} 
                peer-placeholder-shown:top-2 peer-focus:-translate-y-8 peer-focus:scale-75`}
            >
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
        </div>
    );
};

export default MultiSelect;
