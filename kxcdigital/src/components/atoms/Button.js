import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = ({ props: Object }) => {

  const { backgroundColor, border, color} = props
  
  return <CustomButton color={color} backgroundColor={backgroundColor} border={border} />
}

Button.defaultProps = {
  backgroundColor: '#000',
  border: true,
  color: '#fff'
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  border: PropTypes.bool, 
  color: PropTypes.string
}

export default Button