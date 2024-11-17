import React from 'react'

const BlackButton = ({ name, onClick, className = ''}) => {
    const baseStyles = className="w-[211px] h-[56px] py-3 px-4 text-lg font-bold bg-black text-white rounded-full border border-gray-100 shadow-xl duration-300 ease-in-out"

    return (
      <button 
        className={`${baseStyles} ${className}`}
        onClick={onClick}
      >
        {name}
      </button>
    )
}

export default BlackButton