import React from 'react'
import './welcome.scss'
import HomeSection from '../HomeSection'
import { bg1 } from '../../../assets/images'
const Welcome = (props) => {
  return (
    <HomeSection
        className={`welcome ${props.isActive ? 'active' : ''}`}
        contentClassName="overlay welcome__content"
        bgImage={bg1}
    >
        Welcome
    </HomeSection> 
  )
}

export default Welcome