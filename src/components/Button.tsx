import React from 'react'
import '../App.css'
import UpdatedComponent from '../hoc/withClickHandler'


const Button = ({btnText,handleClick,btnClassname}) => {
  return (
    <button className={`btn-Primary${btnClassname ? btnClassname :''}`} onClick={handleClick}>
      {btnText}
    </button>
  )
}

export default UpdatedComponent(Button)