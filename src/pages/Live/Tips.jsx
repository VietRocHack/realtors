import React, { useState } from 'react';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';

const Tips = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const utterance = new SpeechSynthesisUtterance();
  
  // Text to speech function
  const handleTextToSpeech = () => {
    const text = [
      "Tip 1: Always check your camera angles before starting the stream.",
      "Tip 2: Ensure good lighting for better video quality.",
      "Tip 3: Test your microphone to avoid audio issues.",
      "Tip 4: Have a stable internet connection for smooth streaming.",
      "Tip 5: Interact with your audience to keep them engaged.",
      "Tip 6: Plan your content beforehand for a structured stream.",
      "Tip 7: Take regular breaks during long streaming sessions.",
      "Tip 8: Use appropriate tags to increase your stream's visibility."
    ];

    if ('speechSynthesis' in window) {
      if (isPlaying) {
        speechSynthesis.cancel(); // Stop any ongoing speech
      } else {
        utterance.text = text.join(' ');
        speechSynthesis.speak(utterance);
      }
      setIsPlaying(!isPlaying);
    } else {
      alert('Text-to-speech is not supported in your browser.');
    }
  };

  // Reset isPlaying when speech ends
  utterance.onend = () => {
    setIsPlaying(false);
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 flex flex-row items-center space-x-4">
        Tips
        {/* Button to toggle speech */}
        <button
          onClick={handleTextToSpeech}
          className="ml-2 px-4 py-2 bg-green-400 text-black rounded-2xl hover:bg-yellow-200 transition duration-200 flex items-center"
        >
          {isPlaying ? <FiVolumeX className="mr-2" /> : <FiVolume2 className="mr-2" />}
          {isPlaying ? 'Mute' : 'Play'}
        </button>  
      </h2>
      <div className="w-[300px] h-[180px] bg-gray-200 rounded-2xl overflow-hidden">
        <div className="h-full overflow-y-auto p-4">
          <div className="space-y-4">
            <p className="text-sm text-black">Tip 1: Always check your camera angles before starting the stream.</p>
            <p className="text-sm text-black">Tip 2: Ensure good lighting for better video quality.</p>
            <p className="text-sm text-black">Tip 3: Test your microphone to avoid audio issues.</p>
            <p className="text-sm text-black">Tip 4: Have a stable internet connection for smooth streaming.</p>
            <p className="text-sm text-black">Tip 5: Interact with your audience to keep them engaged.</p>
            <p className="text-sm text-black">Tip 6: Plan your content beforehand for a structured stream.</p>
            <p className="text-sm text-black">Tip 7: Take regular breaks during long streaming sessions.</p>
            <p className="text-sm text-black">Tip 8: Use appropriate tags to increase your stream's visibility.</p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Tips;

