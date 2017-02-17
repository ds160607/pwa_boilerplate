import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBIrTDtCAwFQyUCpbAAJcNcsTg9KVf9lEk",
  authDomain: "pwa-exness.firebaseapp.com",
  databaseURL: "https://pwa-exness.firebaseio.com",
  storageBucket: "pwa-exness.appspot.com"
};

class FirebaseController {

  constructor(){
    console.log('firebase init');
    firebase.initializeApp(config);
    // Get a reference to the database service
    this.database = firebase.database();    
    console.log('firebase database', this.database);
  }

  writeUserData (userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }
}

export default new FirebaseController();
