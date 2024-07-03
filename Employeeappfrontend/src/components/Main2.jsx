import React from 'react'
import Navbar from './Navbar'
import Navbar1 from './Navbar1'

const Main2 = ({child}) => {
  return (
    <div>
        <Navbar1/>
        {child}
    </div>
  )
}

export default Main2