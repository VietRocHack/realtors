import React from 'react'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div className="w-full max-w-[430px] h-[932px] rounded-3xl shadow-lg overflow-hidden flex flex-col">
            <header className="mt-16 mb-8">
                <h1 className="text-5xl font-bold leading-tight text-center text-white">reAItor</h1>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center px-4">
                {/* Placeholder for image */}
                <div className="w-[320px] h-[320px] bg-gray-200 rounded-lg mb-8">
                    {/* Replace this div with your image when available */}
                </div>

                <div className="flex flex-col items-center space-y-4 mb-16">
                    <h2 className="text-2xl font-semibold text-center">
                        Real-time assistant
                    </h2>
                    <h2 className="text-2xl font-semibold text-center">for 
                        <span className="text-emerald-400"> realtors</span>
                    </h2>
                    
                </div>

                {/* Start button */}
                <Button onClick={() => navigate('/settings')}>
                    Explore
                </Button>
            </main>

            <footer className="mb-16">
            {/* Add any footer content here if needed */}
            </footer>
        </div>
    )
}

export default HomePage