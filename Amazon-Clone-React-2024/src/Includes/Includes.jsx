import React from 'react'
import Header from '../Includes/Header/Header'
function Includes({children}) {
  return (
    <div>
        <Header  />
        {children}
    </div >

  )
}

export default Includes