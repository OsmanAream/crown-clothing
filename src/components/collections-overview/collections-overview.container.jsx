import { connect } from 'react-redux'
import { compose } from 'redux'
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'

import CollectionsOverview  from './collections-overview.component'
import WithSpinner from '../with-spinner/with-spinner.component'

const mapStateToProps = state => ({
    isLoading : !selectIsCollectionsLoaded(state)
})

const CollectiosOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default CollectiosOverviewContainer