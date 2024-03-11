import React from 'react'

interface VideoProps {}

// eslint-disable-next-line no-empty-pattern
const Video: React.FC<VideoProps> = ({}) => {
  return (
    <section id='video' className='video-container'>
      <div className='video'>
        Video Conatiner
      </div>
    </section>
  )
}

export default Video