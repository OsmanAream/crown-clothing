import React from 'react'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'


import PreviewCollection from '../preview-collection/preview-collection.component'
import './collections-overview.styles.scss'
import { selectCollectionsForPrieview } from '../../redux/shop/shop.selectors'

const CollectionsOverview =  ({collections}) => (
    <div className='collections-overview'>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id}  {...otherCollectionProps} />
        ))
      }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPrieview
})

export default  connect(mapStateToProps)(CollectionsOverview)