import {shopActionsType} from './shop.types'


export const fetchCollectionsStart = () =>({
    type:shopActionsType.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type:shopActionsType.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionsMap
})

export const fetchCollectionsFailure = errorMessage =>({
    type:shopActionsType.FETCH_COLLECTIONS_FAILURE,
    payload:errorMessage
})

