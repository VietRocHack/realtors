import React, { useRef, useEffect } from 'react'

const Camera = () => {
  return (
    <section>
        <h2 className="text-2xl font-bold m-2">Camera</h2>
        <div className="w-full h-[250px] border-2 border-gray-300">
          <img
            src="http://192.168.137.37:8080/video"
            alt="Live stream"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
    </section>
  )
}

export default Camera