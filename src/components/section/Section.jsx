import React from 'react'
import './section.scss'

const Section = (props) => {
  return (
    <div className={`section ${props.className}`}>
        Section
    </div>
  )
}
export const SectionContent = (props) => {
    
    const bgImage = props.bgImage ? {
        backgroundImage: `url(${props.bgImage})`
    } : {}

    return (
      <div 
        className={`section__content ${props.className}`}
        style={bgImage}
      >
          Section
      </div>
    )
  }

export default Section