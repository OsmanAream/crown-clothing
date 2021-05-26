import React from 'react'

import CollectionItem from '../../components/collection-item/collection-item.component'



import './collection.styles.scss'
import { selectCollection } from '../../redux/shop/shop.selectors'
import { connect } from 'react-redux'

const CollectionPage = ({collection}) =>{ 
  const {title,items}=collection
  return(
    
    <div className='collection-page'>
        <h1 className='title'>{title}</h1>
        <div className='items'>
            {
                items.map(item => <CollectionItem key={item.id} item={item} />)
            }
        </div>
    </div>
)}

const mapStateToProps = (state,ownProps)=>({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)