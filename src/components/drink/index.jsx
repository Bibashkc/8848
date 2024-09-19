import React from 'react'
import ItemSectionHeader from '../itemSectionHeader'
import ItemSection from '../itemSection'
import './drink.css'
import beer from '../../images/beer.svg'
import wine from '../../images/wine.svg'

const Drink = () => {
  return (
    <div className='container-fluid'>
      <div className='container'>
        <ItemSection>
          <>
            <ItemSectionHeader name="Beer" img={beer} />
          </>
        </ItemSection>
        <ItemSection>
          <>
            <ItemSectionHeader name="Wine" img={wine} />
          </>
        </ItemSection>
      </div>
    </div>
  )
}

export default Drink
