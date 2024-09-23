import React, { useEffect } from 'react'

import '../styles/item-list.css'

const ItemList = ({ background, id, sectionTopDesc, sectionBottomDesc, children }) => {
  useEffect(() => {
    if (!background) return
    const element = document.querySelector(`#${id}`)
    if (!element) return
    element.style.backgroundImage = `url(${background})`
  }, [background, id])
  return (
    <div className='list-wrapper' id={`${id}`}>
      {sectionTopDesc && <p className='text-center text-cap-color'>{sectionTopDesc}</p>}
      <div className='list-item-grid'>
        {children}
      </div>
      {sectionBottomDesc && <p className='text-center text-cap-color'>{sectionBottomDesc}</p>}
    </div>
  )
}

export default ItemList
