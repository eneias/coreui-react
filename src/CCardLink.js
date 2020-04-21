import React from 'react'
import CLink from './CLink'

const CCardLink = props => {
  return (
    <CLink {...props} className={['card-link', props.className]}/>
  )
}

export default CCardLink
