import firebasePromise from './firebase';

export const ensureHaveAuthState = firebasePromise.then(firebase => {
  const auth = firebase.auth();
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(auth);
    });
  });
});

// we want to ensure that if multiple ensureAuthenticated calls come in
// before the first completes, they do not result in multiple 
// anonymous user creations
let authenticationPromise = null;
export default function ensureAuthenticated(allowAnonymous, signIn) {
  if ( authenticationPromise ) {
    return authenticationPromise;
  }

  authenticationPromise = ensureHaveAuthState.then((auth) => {
    authenticationPromise = null;
    if ( auth.currentUser
        && (allowAnonymous || !auth.currentUser.isAnonymous) ) {
      return Promise.resolve(auth.currentUser.uid);
    }

    if ( allowAnonymous ) {
      return auth.signInAnonymouslyAndRetrieveData()
                 .then(creds => creds.user.uid);
    }

    // we're going to invoke our signIn function on the next tick and we'll
    // wait for some change in the authentication state
    process.nextTick(signIn);

    return Promise((resolve) => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if ( auth.currentUser && !auth.currentUser.isAnonymous ) {
          unsubscribe();
          return resolve(auth.currentUser.uid);
        }

        // TODO: does this really make sense?
        signIn();
      });
    });
  });

  return authenticationPromise;
}
