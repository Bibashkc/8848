import React, { useEffect } from 'react'
import ItemSectionHeader from '../itemSectionHeader'
import ItemSection from '../itemSection'
import './drink.css'
import beer from '../../images/beer.svg'
import wine from '../../images/wine.svg'
import logo from '../../images/nav_logo.png'
import signature from '../../images/signature.svg'
import classic from '../../images/classic.svg'
import draft from '../../images/draft.svg'
import soft from '../../images/soft.svg'
import shots from '../../images/shots.svg'
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
          <ItemSectionHeader title="SIGNATURE" subTitle="COCKTAILS" id="singature-cocktail-header" />
          <ItemList id="singature-cocktail" background={signature}>
            {signatureCocktails.map(item => (
              <Item key={item.id} item={item} />
            ))}
          </ItemList>
        </>
      </ItemSection>

      <ItemSection>
        <>
          <ItemSectionHeader title="CLASSIC" subTitle="COCKTAILS" id="classic-cocktail-header" alternate={true} />
          <ItemList id="classic-cocktail" background={classic}>
            {classiCocktails.map(item => (
              <Item key={item.id} item={item} />
            ))}
          </ItemList>
        </>
      </ItemSection>

      <ItemSection>
        <>
          <ItemSectionHeader title="SHOTS" id="shots-header" />
          <ItemList id="shots" background={shots}>
            {signatureCocktails.map(item => (
              <Item key={item.id} item={item} />
            ))}
          </ItemList>
        </>
      </ItemSection>

      <ItemSection>
        <>
          <ItemSectionHeader title="Wine" id="wine-header" alternate={true} />
          <ItemList id="wine" background={wine}>
            {wines.map(item => (
              <Item key={item.id} item={item} />
            ))}
          </ItemList>
        </>
      </ItemSection>

      <ItemSection>
        <>
          <ItemSectionHeader title="BEER" id="beer-header" />
          <ItemList id="beer" background={beer} >
            {beers.map(item => (
              <Item key={item.id} item={item} />
            ))}
          </ItemList>
        </>
      </ItemSection>

      <ItemSection>
        <>
          <ItemSectionHeader title="DRAFT BEER" alternate={true} id="draft-beer-header" />
          <ItemList id="draft-beer" background={draft}>
            {beers.map(item => (
              <Item key={item.id} item={item} />
            ))}
          </ItemList>
        </>
      </ItemSection>
      <ItemSection>
        <>
          <ItemSectionHeader title="NON-ALCOHOLIC" subTitle="DRINK" id="non-alcoholic-header" />
          <ItemList id="non-alcoholic" background={soft}>
            {beers.map(item => (
              <Item key={item.id} item={item} />
            ))}
          </ItemList>
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
