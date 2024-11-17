import React from 'react'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import home from '../../assets/home.jpg'
import NavBar from '../../components/NavBar/NavBar'

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div className="w-[430px] h-[932px] rounded-3xl shadow-lg overflow-hidden flex flex-col">
            {/* <header className="mt-32 mb-8">
                <h1 className="text-4xl font-bold leading-tight text-center">Realty Wingman</h1>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center px-4">
                <div className="w-[410px] h-[410px] rounded-lg mb-8">
                    <img
                        src={home}
                        alt="background"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    /> 
                </div>

                <div className="flex flex-col items-center space-y-4 mb-16">
                    <h2 className="text-2xl font-semibold text-center">
                        Best real-time assistant
                    </h2>
                    <h2 className="text-2xl font-semibold text-center">for 
                        <span className="text-emerald-400"> realtors</span>
                    </h2>
                </div>

                <Button onClick={() => navigate('/settings')}>
                    Explore
                </Button>
            </main> */}
            <div className="flex-1">
                <img src={home}/>
            </div>
            <NavBar name="Explore" nav="settings" />

        </div>
    )
}

export default HomePage