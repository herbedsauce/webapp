import { Component, h } from '@stencil/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  componentWillLoad() {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: 'AIzaSyCaMUNdBLEjWR6uBg2anDBwspLNpV1Rh9M',
      authDomain: 'herbedsauce-cd6f6.firebaseapp.com',
      projectId: 'herbedsauce-cd6f6',
      storageBucket: 'herbedsauce-cd6f6.appspot.com',
      messagingSenderId: '526668315816',
      appId: '1:526668315816:web:e804070b7346911948d69d',
      measurementId: 'G-2LYQZLZJYK',
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }
  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
