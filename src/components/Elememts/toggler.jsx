import React from 'react'

const ToggleSwitch = ({ id, checked, onToggle }) => {
    return (
        <>
            <div className="flex items-center">

                <label htmlFor={`toggle-switch${id}`} className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        id={`toggle-switch${id}`}
                        className="sr-only peer"
                        checked={checked || false}
                        onChange={onToggle}
                    />
                    <div className="w-12 h-7 bg-red-600 peer-focus:outline-none  rounded-full peer peer-checked:bg-green-500"></div>
                    <div className="peer-checked:translate-x-5 bg-white absolute left-1 top-1 w-5 h-5 rounded-full transition-transform"></div>
                </label>
            </div>
        </>
    )
}

export default ToggleSwitch;