import React from 'react'

const Container = ({ children, containerFluid, container, id }) => {
  return (
    <div className={`container-fluid ${containerFluid?.class ?? ''}`} id={id}>
      <div className={`container ${container?.class ?? ''}`}>
        {children}
      </div>
    </div>
  )
}

export default Container
