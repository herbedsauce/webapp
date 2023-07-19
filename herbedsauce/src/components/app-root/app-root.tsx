import { Component, h } from '@stencil/core';
import { initializeApp } from 'firebase/app';
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
      apiKey: 'AIzaSyCvvPHOQncs4t6UXYjISXa503rxRpSAUxo',
      authDomain: 'herbedsauce.firebaseapp.com',
      projectId: 'herbedsauce',
      storageBucket: 'herbedsauce.appspot.com',
      messagingSenderId: '114230572887',
      appId: '1:114230572887:web:0c625247e731b697aaf012',
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig, 'herbedsauces');
    console.log(app.name);
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
