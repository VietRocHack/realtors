import React from 'react'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-[375px] h-[812px] rounded-3xl shadow-lg overflow-hidden flex flex-col">

            <h1 className="text-5xl font-bold leading-tight text-center mt-16 mb-8 text-black">reAItor</h1>
            {/* <img 
                src={Teamwork} 
                alt="Workflow Teamwork Illustration" 
                className="w-[320px] h-[320px] mx-auto rounded-lg"
            /> */}
        
            <div className="flex flex-col items-center space-y-4 mb-16">
                <h2 className="w-[192px] h-[28px] text-2xl font-semibold text-center text-black">
                    Anyone can <span className="text-emerald-400">Help</span>
                </h2>
                <p className="w-[295px] h-[20px] text-sx text-gray-600 text-center">
                    When life is on the line.
                </p>
            </div>

            <div className='bg-green-500'>Hello this should be green</div>
            
            <Button onClick={() => navigate('/settings')}>
                Explore
            </Button>
              
        </div>
    </div>
  )
}

export default HomePage