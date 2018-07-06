import { firebase, googleAuthProvider } from '../firebase/firebase';

export const LOGIN = 'LOGIN';
export const login = uid => ({
  type: LOGIN,
  uid
});

export const startLogin = () => {
  return () => firebase.auth().signInWithPopup(googleAuthProvider);
};

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT
});

export const startLogout = () => {
  console.log('hmm');
  return () => firebase.auth().signOut();
};
