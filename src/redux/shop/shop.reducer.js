
import {shopActionsType} from './shop.types'

const INITIAL_STATE = {
    collections:null,
    isFetching:false,
    errorMessage:undefined
}

const shopReducer = (state=INITIAL_STATE,action) => {
    switch(action.type) {

        case shopActionsType.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching:true
            }

            case shopActionsType.FETCH_COLLECTIONS_SUCCESS:
                return {
                    ...state,
                    isFetching:false,
                    collections:action.payload
                }

                case shopActionsType.FETCH_COLLECTIONS_failure:
                    return {
                        ...state,
                        isFetching:false,
                        errorMessage:action.payload
                    }

        default:
            return state
    }
}

export default shopReducer