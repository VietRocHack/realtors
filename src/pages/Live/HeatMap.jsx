import React from 'react'

const HeatMap = ({ imageUrl }) => {
  return (
    <section>
        <h2 className="text-2xl font-bold mb-4">Eye-tracking Emotion</h2>
        <div className="w-[300px] h-[300px] bg-gray-200 rounded-2xl">
            <img
                src={imageUrl}
                alt="Heatmap"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            /> 
                
        </div>
    </section>
  )
}

export default HeatMap