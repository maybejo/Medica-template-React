import React from 'react'

import PropTypes from 'prop-types'

import './doctor.css'

const Doctor = (props) => {
  return (
    <div className={`doctor-doctor ${props.rootClassName} `}>
      <div className="doctor-heading">
        <h2 className="doctor-text">{props.heading}</h2>
        <p className="doctor-text1">{props.text}</p>
      </div>
    </div>
  )
}

Doctor.defaultProps = {
  rootClassName: '',
  heading: 'Dr. Audrey Smith',
  imageSrc: '3a509d7c-a1a1-4605-a923-8a2f09e49807',
  imageAlt: 'image',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
}

Doctor.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.string,
}

export default Doctor
