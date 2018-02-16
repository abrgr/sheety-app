import React, { Component } from 'react';
import { Map } from 'immutable';
import firebaseui from 'firebaseui';
import uuid from 'uuid';
import { ensureHaveAuthState } from '../ensure-authenticated';
import firebase from '../firebase';
import presenter from '../presenter';

import 'firebaseui/dist/firebaseui.css';

const auth = firebase.auth();

class RequireAuthPresenter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: `auth-${uuid.v4()}`, // element ids must start with a letter
      isAuthed: false
    };
  }

  authenticated = () => {
    this.setState({
      isAuthed: true
    });
  };

  isAuthenticated = () => (
    // TODO: check roles, etc.
    auth.currentUser && !auth.currentUser.isAnonymous
  );

  componentDidMount() {
    ensureHaveAuthState.then(() => {
      if ( this.isAuthenticated() ) {
        return this.authenticated();
      }

      // not authenticated yet
      const ui = new firebaseui.auth.AuthUI(auth);
      ui.start(
        `#${this.state.id}`,
        {
          autoUpgradeAnonymousUsers: true,
          signInSuccessUrl: window.location.href,
          tosUrl: 'https://ezbds.com',
          credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
          signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            {
              provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
              authMethod: 'https://accounts.google.com',
              clientId: '669147253643-fdslrbc9suglja8j6gfh3o243u9ni7r2.apps.googleusercontent.com'
            }
          ],
          callbacks: {
            signInSuccess: (user, cred, redirectUrl) => {
              if ( cred && cred.providerId === 'google.com' ) {
                // cred.accessToken is the google oauth access token
              }

              this.authenticated();

              return true;
            },
            signInFailure: (err) => {
              if ( err.code !== 'firebaseui/anonymous-upgrade-merge-conflict' ) {
                return Promise.resolve();
              }

              const anonymousUser = auth.currentUser;
              const cred = err.credential;

              // TODO: actually copy data per https://github.com/firebase/firebaseui-web#using-firebaseui-for-authentication

              return auth.signInWithCredential(cred)
                         .then(_ => anonymousUser.delete())
                         .then(_ => this.authenticated());
            }
          }
        }
      );
    });
  }

  render() {
    const { id, isAuthed } = this.state;

    if ( isAuthed ) {
      const { renderPresenter, config } = this.props;
      return renderPresenter(config.get('presenter'));
    }

    return (
      <div id={id} />
    );
  }
};

export default presenter({
  configKeyDocs: new Map({
    presenter: 'Inner presenter definition'
  })
})(RequireAuthPresenter);
