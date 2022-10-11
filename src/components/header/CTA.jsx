import React from 'react'
import Resume from '../../assets/Resume.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download className='btn'>View Resume</a>
      <a href="#contact" className='btn btn-primary'>Chat with me!</a>
    </div>
  )
}

export default CTA