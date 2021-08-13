import Firebase from '../../config/firebase'
import firebase from 'firebase'
import history from 'history/createBrowserHistory'
import useHistory from 'react-router-dom'
import { useStore } from 'react-redux'
import swal from 'sweetalert';
const set_data = (data) => {
    return (dispatch) => {
        // console.log(data)
        dispatch({ type: "set_data", payload: {name:'M'} })
    }
}
const facebook_login=(history)=>{
            // console.log("facebook_login.......")
            return (dispatch) => {
                   var provider = new firebase.auth.FacebookAuthProvider();
                // provider.setCustomParameters({
                //     'display': 'popup'
                //   });
                firebase.auth().signInWithPopup(provider)
                   .then(function(result) {
                    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;
                    let create_user={
                      name:user.displayName,
                      email:user.email,
                      profile:user.photoURL,
                      uid:user.uid
                    }
                    firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
                    .then(()=>{
                      dispatch({type:"SETUSER",payload:create_user})
                      swal({
                        title: "User Login Succesful!",
                        // text: "You clicked the button!",
                        icon: "success",
                      });
                      // alert("user login Succesful!",create_user.name);
                      // history.push('/Addproduct')
                    })
                    // ...
                    // console.log('user==ac=>',create_user)
                  }).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage)
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    // ...
                  });

            }
}



const get_users=()=>{
  return (dispatch) => {
    let users=[];
    firebase.database().ref('/').child('users').on('child_added',(data)=>{
      users.push(data.val())
      // console.log("firebase.database==>",data.val())
      // console.log("Z",users)
      dispatch({type:"SETFIERBASEUASERS",payload:users })
    })
    }
  }
export { 
    set_data,
    facebook_login,
    get_users
 }   