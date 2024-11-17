import React from 'react'

const Tips = () => {
  return (
    <section>
        <h2 className="text-2xl font-bold mb-4">Tips</h2>
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
  )
}

export default Tips