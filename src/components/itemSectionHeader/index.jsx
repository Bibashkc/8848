import React from 'react'
import './itemSectionHeader.css'

const ItemSectionHeader = ({ img, title, subTitle }) => {
  return (
    <div className='item-section-header'>
      <div className='item-section-header-name'>
        <h1 className='header-title'>{title}</h1>
        {subTitle && <h1 className='header-sub-title'>{subTitle}</h1>}
      </div>
      {/* <div className='item-section-header-img'>
        <img src={img} alt="beer mug" />
      </div> */}
    </div>
  )
}

export default ItemSectionHeader
