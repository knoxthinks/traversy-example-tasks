import PropTypes from 'prop-types'
// import React from 'react'

export const Button = ({color, text, onClick}) => {
    // const onClick =(e) => {
    //     // console.log(e);
    // }
  return (
    <button onClick={onclick}
            style={{backgroundColor: color}} 
            className='btn'>{text}
    </button>
  )
}

Button.defaultProps = {
    color: 'black'
}

Button.propTypes = {
    text:PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}