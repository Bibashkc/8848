import React, { useEffect } from 'react'
import './itemSectionHeader.css'

const ItemSectionHeader = ({ title, subTitle, id, alternate = false }) => {
  useEffect(() => {
    if (!id) return
    console.log(id, alternate)
    const element = document.querySelector(`#${id}`)
    if (!element) return
    if (alternate) {
      element.style.backgroundPosition = "right"
    } else {
      element.style.backgroundPosition = "left"
    }
  }, [alternate, id])
  return (
    <div className='item-section-header' id={`${id}`}>
      <div className='item-section-header-name'>
        <h1 className='header-title'>{title.toUpperCase()}</h1>
        {subTitle && <h1 className='header-sub-title'>{subTitle}</h1>}
      </div>
    </div>
  )
}

export default ItemSectionHeader
