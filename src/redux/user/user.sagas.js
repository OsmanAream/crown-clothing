import { takeLatest, put, call, all } from 'redux-saga/effects'
import userActionTypes from './user.types'
import { signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess } from './user.actions'
import { googleProvider, auth, createUserProfileDocument, gtCurrentUsere } from '../../firebase/firebase.utils'

export function* getSnapshotFromUserAuth (user,additionalData) {
    try{
        const userRef = yield call(createUserProfileDocument, user,additionalData) 
        const userSnapshot = yield userRef.get()
        yield put(signInSuccess({id:userSnapshot.id, ...userSnapshot.data()}))
    }catch(error) {
        yield put(signInFailure(error))
    }
} 

export function* signInWithGoogle() {
    try{
        const { user } = yield auth.signInWithPopup(googleProvider)
        yield getSnapshotFromUserAuth(user)
    }catch(error) {
        yield put(signInFailure(error))
    }
}



export function* signInWithEmail({payload:{email,password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email,password)
        yield getSnapshotFromUserAuth(user)
    }catch(error) {
        yield put(signInFailure(error))
    }
}



export function* isUserAuthenticated() {
    try{
        const user = yield  gtCurrentUsere()
        if(!user) return 
        yield getSnapshotFromUserAuth(user)
    }catch(error){
        yield put(signInFailure(error))
    }
}



export function* signOut() {
    try{
       yield auth.signOut()
       yield put(signOutSuccess())
    }catch(error) {
       yield put(signOutFailure(error))
    }
}

export function* onSignOut() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut)
}

export function* signUp({payload:{email,password,displayName}}) {
    try{
        const { user } = yield auth.createUserWithEmailAndPassword(email,password)

        yield put(signUpSuccess({user,additionalData:{displayName}}))


    } catch(error) {
        yield put(signUpFailure(error))
    }
}

export function* signInAfterSignUp({payload:{user,additionalData}}){
    yield getSnapshotFromUserAuth(user,additionalData)
}

export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}



export function* onSignUpStart() {
    yield takeLatest (userActionTypes.SIGN_UP_START,signUp)
}

export function* onSignUpSuccess(){
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS,signInAfterSignUp)
}

export function* userSagas () {
    yield all([call(onGoogleSignInStart),call(onEmailSignInStart),call(onCheckUserSession),call(onSignOut),call(onSignUpStart),call(onSignUpSuccess)])
}