import firebase from 'firebase/app';
import 'firebase/auth';

const authenticate = () => {
  const provider = new firebase.auth.GithubAuthProvider();
  firebase.auth().signInWithRedirect(provider);
}

export default { authenticate };
