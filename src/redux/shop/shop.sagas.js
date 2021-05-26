import { takeLatest,call,put,all } from 'redux-saga/effects'
import {fetchCollectionsSuccess,fetchCollectionsFailure} from './shop.actions'
import {firestore,convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'

import  {shopActionsType} from './shop.types'

export function* fetchCollectionsAsync() {
    const collectionRef = firestore.collection("collections")
        try{
            const snapshot = yield collectionRef.get()
            
            const collectionsMap = yield call(convertCollectionSnapshotToMap,snapshot)

            yield put(fetchCollectionsSuccess(collectionsMap))

                
        }catch(error){ 
            yield put(fetchCollectionsFailure(error.errorMessage))
        }

}

export function* fetchCollectionsStart() {
    yield takeLatest(shopActionsType.FETCH_COLLECTIONS_START,fetchCollectionsAsync)
}

export default function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}