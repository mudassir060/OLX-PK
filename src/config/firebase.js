// // import * as firebase from 'firebase/app';
// import firebase from 'firebase/app'

// import 'firebase/auth';
// import 'firebase/database';


//  // Your web app's Firebase configuration
//  var firebaseConfig = {
//   apiKey: "AIzaSyBWaHwWTAIByEoeup6QjdYFyUhGi5XfbTE",
//   authDomain: "olx--wm-5689.firebaseapp.com",
//   databaseURL: "https://olx--wm-5689.firebaseio.com",
//   projectId: "olx--wm-5689",
//   storageBucket: "olx--wm-5689.appspot.com",
//   messagingSenderId: "496340416521",
//   appId: "1:496340416521:web:db8eadfcf067ae1c2ba0d8",
//   measurementId: "G-T3WQCPMCM8"
// };
//   // Initialize Firebase
  

//   var Firebase=firebase.initializeApp(firebaseConfig);
//   export default Firebase; 



  // import * as firebase from 'firebase/app';
import firebase from 'firebase/app'

import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';



 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCjSaFy1gbh3HBUuLbYPWxrhFGrpkAed1k",
    authDomain: "lovelychat-wm-5689.firebaseapp.com",
    databaseURL: "https://lovelychat-wm-5689.firebaseio.com",
    projectId: "lovelychat-wm-5689",
    storageBucket: "lovelychat-wm-5689.appspot.com",
    messagingSenderId: "599465255403",
    appId: "1:599465255403:web:8d300fb377e21eb5a279ae"
  };
  // Initialize Firebase
  

  var Firebase=firebase.initializeApp(firebaseConfig);
  const storage =firebase.storage();
  export {storage, Firebase as default} ; 