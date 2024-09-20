import React from 'react'

import '../styles/item.css'
const Item = ({ item }) => {
  return (
    <div className='item-container'>
      <div className='name-price-container'>
        {item?.meat ?
          (<p>{item.name}<span className='text-small'>{item.meat}</span></p>) :
          (<p>{item.name}</p>)}
        <p>{`${item.price}`}</p>
      </div>
      {item?.description?.length && (<p className='item-desc'>{item.description}</p>)}
      {item?.secondDesc?.length && (<p className='item-desc second-desc'>{item.secondDesc}</p>)}
    </div>
  )
}

export default Item
