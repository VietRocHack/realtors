import React from 'react'
import { useNavigate } from 'react-router-dom'
import WhiteButton from '../../components/Button/WhiteButton'
import Camera from './Camera'
import Information from './Information'

const Settings = () => {
  const navigate = useNavigate()

  return (
      <div className="w-[430px] h-[932px] rounded-3xl shadow-lg overflow-hidden flex flex-col items-center justify-center">  
          {/* Main Content */}
          <div className="h-[500px] flex flex-col mb-4">
            <Information />
            <br />
            <Camera />
          </div>

          <br />
          <br />
          <br />
          
          {/* Live button */}
          <WhiteButton onClick={() => navigate('/live')}>
              Start stream
          </WhiteButton>
      </div>
  )
}

export default Settings