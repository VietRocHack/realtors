import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { io } from 'socket.io-client'
import { PinataSDK } from "pinata"
import WhiteButton from '../../components/Button/WhiteButton'
import HeatMap from './HeatMap'
import Tips from './Tips'


const Live = () => {
  const navigate = useNavigate()
  const [message, setMessage] = useState(null)
  const [imageUrl, setImageUrl] = useState("")

  // pinata
  const pinata = new PinataSDK({
    pinataJwt: import.meta.env.PINATA_JWT,
    pinataGateway: import.meta.env.PINATA_GATEWAY,
  });

  async function fetchImage(id) {
    try {
      const data = await pinata.gateways.get(id);
      console.log(data)

      const url = await pinata.gateways.createSignedURL({
        cid: id,
        expires: 1800,
      })
      console.log('Image URL:', url)
      setImageUrl(url)
    } catch (error) {
      console.log('Error fetching image: ', error)
    }
  }

  async function fetchTips(text) {
    try {
      console.log(text)
      setMessage(text)
    } catch (error) {
      console.log('Error tips: ', error)
    }
  }

  useEffect(() => {
    // create a socket connection
    const socket = io("http://localhost:3000")

    // listen for heatmap
    socket.on('message', (data) => {
      fetchImage(data)
    })

    // listen for tips
    socket.on('tips', (text) => {
      fetchTips(text)
    })

    // clean up the socket connection
    return () => {
      socket.disconnect()
    }
  }, [])


  return (
      <div className="w-[430px] h-[932px] rounded-3xl shadow-lg overflow-hidden flex flex-col items-center justify-center">  
          {/* Main Content */}
          <div className="h-[650px] flex flex-col">
            <HeatMap imageUrl={imageUrl}/>
            <br />
            <Tips />
          </div>

          {/* Live button */}
          <WhiteButton onClick={() => navigate('/endpage')} name="End Stream">
          </WhiteButton>
      </div>
  )
}

export default Live