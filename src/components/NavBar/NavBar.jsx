import React from 'react'
import BlackButton from '../Button/BlackButton'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const NavBar = ({ nav }) => {
    const navigate = useNavigate()
    return (
        <motion.div 
            className="h-2/5 flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 to-white rounded-3xl shadow-[0_-10px_30px_-5px_rgba(0,0,0,0.3)] border border-gray-200 py-6"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
            <h2 className="text-4xl font-bold text-center mb-2">Realty <span className="text-emerald-400">Wingman</span></h2>
            <p className="font-semibold mb-2">Best real-time assistant for realtors</p>
            <p className="mb-4">
                <span className="text-purple-600 font-semibold mr-2">Voice</span>
                <span className="text-orange-500 font-semibold mr-2">Eye Gazing</span>
                <span className="text-blue-400 font-semibold">Face</span>
            </p>

            <BlackButton onClick={() => navigate(`/${nav}`)} name="Explore">
            </BlackButton>
        </motion.div>
    )
}

export default NavBar