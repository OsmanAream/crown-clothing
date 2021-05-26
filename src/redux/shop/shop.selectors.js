import {createSelector} from 'reselect'


const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPrieview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key =>collections[key])
)

export const selectCollection = collectionUrlParamId =>
createSelector(
    [selectCollections],
    collections => collections[collectionUrlParamId]
    )

export const selectIsCollectionsFetching = createSelector(
    [selectShop],
    shop=>shop.isFetching
)


export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)