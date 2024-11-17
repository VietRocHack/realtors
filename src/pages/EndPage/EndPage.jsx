import React from 'react'
import WhiteButton from '../../components/Button/WhiteButton'
import { useNavigate } from 'react-router-dom'

const EndPage = () => {
  const navigate = useNavigate()
  
  return (
    <div className="w-[430px] h-[932px] rounded-3xl shadow-lg overflow-hidden flex flex-col items-center justify-center">  
        {/* Main Content */}
        <div className="h-[650px] flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Summary</h2>
          <div className="w-[300px] h-[500px] bg-gray-200 rounded-2xl"></div>
        </div>

        {/* Live button */}
        <WhiteButton onClick={() => navigate('/')} name="Home">
        </WhiteButton>
    </div>
  )
}

export default EndPage