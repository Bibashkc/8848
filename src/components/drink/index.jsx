import React, { useEffect } from 'react'
import ItemSectionHeader from '../itemSectionHeader'
import ItemSection from '../itemSection'
import './drink.css'
import beer from '../../images/beer.svg'
import wine from '../../images/wine.svg'
import logo from '../../images/nav_logo.png'
import Container from '../../wrappers/Container'
import ItemList from '../../shared/components/ItemList.component'
import { beers, classiCocktails, signatureCocktails, wines } from '../../data/drink.data'
import Item from '../../shared/components/Item.component'
import { useParams } from 'react-router-dom'

const Drink = () => {
  let { id: sectionId } = useParams()
  useEffect(() => {
    if (sectionId) {
      const ele = document.getElementById(sectionId)
      if (ele) {
        ele.scrollIntoView({ behavior: "smooth", vertical: 'start' })
      } else {
        const ele = document.getElementById('drink-container')
        ele.scrollIntoView({ behavior: "smooth", vertical: 'start' })
      }
    }
  }, [sectionId])

  return (
    <Container id="drink-container" container={{ class: "item-list-container" }}>
      <div className='item-list-logo'>
        <img src={logo} alt="8848-logo" className='logo-8848-logo' />
      </div>
      <div className='disclaimer'>
        <p>
          <small>Alcoholic beverages are intended for customers of legal drinking age. Please drink responsibly.</small>
        </p>
      </div>
      <ItemSection>
        <>
          <ItemSectionHeader title="SIGNATURE" subTitle="COCKTAILS" img={wine} />
          <ItemList id="singature-cocktail">
            {signatureCocktails.map(item => (
              <Item key={item.id} item={item} />
            ))}
          </ItemList>
        </>
      </ItemSection>

      <ItemSection>
        <>
          <ItemSectionHeader title="CLASSIC" subTitle="COCKTAILS" img={wine} />
          <ItemList id="classic-cocktail">
            {classiCocktails.map(item => (
              <Item key={item.id} item={item} />
            ))}
          </ItemList>
        </>
      </ItemSection>

      <ItemSection>
        <>
          <ItemSectionHeader title="SHOTS" img={wine} />
          <ItemList id="shots">
            {signatureCocktails.map(item => (
              <Item key={item.id} item={item} />
            ))}
          </ItemList>
        </>
      </ItemSection>

      <ItemSection>
        <>
          <ItemSectionHeader title="Wine" img={wine} />
          <ItemList id="wine">
            {wines.map(item => (
              <Item key={item.id} item={item} />
            ))}
          </ItemList>
        </>
      </ItemSection>

      <ItemSection>
        <>
          <ItemSectionHeader title="BEER" img={beer} />
          <ItemList id="beer">
            {beers.map(item => (
              <Item key={item.id} item={item} />
            ))}
          </ItemList>
        </>
      </ItemSection>

      <ItemSection>
        <>
          <ItemSectionHeader title="DRAFT BEER" img={beer} />
          <ItemList id="draft-beer">
            {beers.map(item => (
              <Item key={item.id} item={item} />
            ))}
          </ItemList>
        </>
      </ItemSection>
      <ItemSection>
        <>
          <ItemSectionHeader title="NON-ALCOHOLIC" subTitle="DRINK" img={beer} />
        </>
      </ItemSection>
      <div className='disclaimer'>
        <p>
          <small>We cannot guarantee the absence of allergens or cross-contamination in our drink ingredients. Please inform our staff of any allergies or dietary restrictions.</small>
        </p>
      </div>
    </Container>
  )
}

export default Drink
