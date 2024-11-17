import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import HeatMap from './HeatMap'
import Tips from './Tips'

const Live = () => {
  const navigate = useNavigate()

  return (
      <div className="w-[430px] h-[932px] rounded-3xl shadow-lg overflow-hidden flex flex-col items-center justify-center">  
          {/* Main Content */}
          <div className="h-[650px] flex flex-col">
            <HeatMap />
            <br />
            <Tips />
          </div>

          {/* Live button */}
          <Button onClick={() => navigate('/endpage')}>
              End stream
          </Button>
      </div>
  )
}

export default Live