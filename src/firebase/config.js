import Firebase from 'firebase'

let config = {
    apiKey: 'AIzaSyDPDFJToWhm8IfMRFhRvxhKpdK8kgNLp4U',
    authDomain: 'expenses-1ccfb.firebaseapp.com',
    databaseURL: 'https://expenses-1ccfb.firebaseio.com',
    projectId: 'expenses-1ccfb',
    storageBucket: 'expenses-1ccfb.appspot.com',
    messagingSenderId: '667966515131'
}
let app = Firebase.initializeApp(config)
export const db = app.database()