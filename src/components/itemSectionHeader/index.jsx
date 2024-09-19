import React from 'react'
import './itemSectionHeader.css'

const ItemSectionHeader = ({ img, name }) => {
  return (
    <div className='item-section-header'>
      <div className='item-section-header-img'>
        <img src={img} alt="beer mug" />
      </div>
      <div className='item-section-header-name'>
        <h1>{name}</h1>
      </div>
    </div>
  )
}

export default ItemSectionHeader
