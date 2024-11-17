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
          <div className="h-[600px] flex flex-col mb-4">
            <Information />
            <br />
            <div className="w-[300px] h-[450px] bg-gray-50 rounded-2xl overflow-hidden">
                <div className="h-full overflow-y-auto p-4">
                    <div className="space-y-4">
                        <Camera />
                        <br />
                        <Camera />
                        <br />
                        <Camera />
                    </div>
                </div>
            </div>
          </div>

          <br />
          <br />
          
          {/* Live button */}
          <Button onClick={() => navigate('/live')}>
              Start stream
          </Button>
      </div>
  )
}

export default Settings