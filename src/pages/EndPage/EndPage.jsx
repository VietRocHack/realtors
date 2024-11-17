import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BlackButton from '../../components/Button/BlackButton'
import { motion, AnimatePresence } from 'framer-motion'

const EndPage = () => {
  const navigate = useNavigate()
  const [showNavbar, setShowNavbar] = useState(false)

  return (
    <div className="w-[430px] h-[932px] rounded-3xl shadow-lg overflow-hidden flex flex-col relative">  
      {/* Main Content */}
      <div className="h-full flex-1 flex flex-col items-center justify-between p-2 mt-8 mb-36">
        <h2 className="text-4xl font-bold mb-4">Report <span className="text-emerald-400">Documentation</span></h2>

        <div className="w-[360px] h-[600px] bg-gray-200 rounded-2xl"></div>
      </div>

      {/* Button to scroll navbar up */}
      {!showNavbar && (
        <button
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white rounded-full p-3 shadow-lg hover:bg-gray-800 transition-colors duration-200"
          onClick={() => setShowNavbar(true)}
          aria-label="Show more information"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}

      {/* NavBar */}
      <AnimatePresence>
        {showNavbar && (
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-2/5 w-full flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 to-white rounded-t-3xl shadow-[0_-10px_30px_-5px_rgba(0,0,0,0.3)] border border-gray-200 py-6"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <p className='text-2xl mb-8'>Ready for a new session?</p>
            <BlackButton onClick={() => navigate('/')} name="Home" />

            {/* Button to scroll navbar down */}
            <button
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white rounded-full p-3 shadow-lg hover:bg-gray-800 transition-colors duration-200"
              onClick={() => setShowNavbar(false)}
              aria-label="Hide information"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default EndPage