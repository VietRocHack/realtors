import React from 'react'

const Button = ({ children, onClick, className = '', ...props }) => {
    const baseStyles = 'w-[211px] h-[56px] py-3 px-4 text-lg font-bold bg-white text-gray-800 rounded-full border border-gray-100 shadow-xl hover:bg-gray-50 transition duration-300 ease-in-out'

    return (
      <button 
        className={`${baseStyles} ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    )
}

export default Button