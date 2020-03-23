import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

let config = {
    apiKey: 'AIzaSyDPDFJToWhm8IfMRFhRvxhKpdK8kgNLp4U',
    authDomain: 'expenses-1ccfb.firebaseapp.com',
    databaseURL: 'https://expenses-1ccfb.firebaseio.com',
    projectId: 'expenses-1ccfb',
    storageBucket: 'expenses-1ccfb.appspot.com',
    messagingSenderId: '667966515131'
}
firebase.initializeApp(config)
firebase.firestore()

export default firebase