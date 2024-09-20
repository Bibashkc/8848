import React from 'react'

import '../styles/item-list.css'

const ItemList = ({ id, sectionTopDesc, sectionBottomDesc, children }) => {
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
