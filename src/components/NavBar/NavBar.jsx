import React from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ name, nav }) => {
    const navigate = useNavigate()
    return (
        <div className="h-1/3 flex justify-center items-center bg-gray-100 rounded-3xl shadow-lg border border-gray-200">
        <Button onClick={() => navigate(`/${nav}`)} >
            {name}
        </Button>
        </div>
    );
};

export default NavBar;