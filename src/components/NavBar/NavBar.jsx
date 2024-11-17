import React from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavBar = ({ name, nav }) => {
    const navigate = useNavigate()
    return (
        <motion.div className="h-1/3 flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 to-white rounded-3xl shadow-[0_-10px_30px_-5px_rgba(0,0,0,0.3)] border border-gray-200"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
            <h2 className="text-4xl font-semibold text-center">Realty <span className="text-emerald-400"> Wingman</span></h2>
            <p>Best real-time assistant for realtors</p>
            <p>
                <span className="text-purple-600"> Voice</span>
                <span className="text-orange-500"> Eye Gazing</span>
                <span className="text-blue-400"> Face</span>
            </p>

            <br />

            <Button onClick={() => navigate(`/${nav}`)} >
                {name}
            </Button>
        </motion.div>
    );
};

export default NavBar;