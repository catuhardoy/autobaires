import React from 'react'

const Video = () => {
  return (
    
    <div style={{ width: '100vw'  }}>
        <video control width="100%" height={600} autoPlay muted loop controls= 'true'>
          <source src="AutobairesVideo.mp4" type="video/mp4" />
        </video>
    </div>
    
  )
}

export default Video
