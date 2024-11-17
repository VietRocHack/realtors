import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Camera from './Camera'
import Information from './Information'

const Settings = () => {
  const navigate = useNavigate()

  return (
      <div className="w-[430px] h-[932px] rounded-3xl shadow-lg overflow-hidden flex flex-col items-center justify-center">  
          {/* Main Content */}
          <div className="h-[650px] flex flex-col mb-4">
            <Information />
            <Camera />
            <Camera />
          </div>

          {/* Live button */}
          <Button onClick={() => navigate('/live')}>
              Start stream
          </Button>
      </div>
  )
}

export default Settings