import React from 'react'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import home from '../../assets/home.jpg'
import NavBar from '../../components/NavBar/NavBar'

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div className="w-[430px] h-[932px] rounded-3xl shadow-lg overflow-hidden flex flex-col relative">
            <div className="flex-1">
                <img src={home} alt="Home" className="w-full h-full object-cover" />
            </div>
            <NavBar name="Explore" nav="settings" />
        </div>
    )
}

export default HomePage