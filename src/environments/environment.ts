// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
  firebase: {
    projectId: 'getstream-chat-52971',
    appId: '1:975187763274:web:afc4a7c634e7beaafdc6b3',
    storageBucket: 'getstream-chat-52971.appspot.com',
    apiKey: 'AIzaSyC04hazuYsPbFdy8iFdMtYIpFiduheY-SU',
    authDomain: 'getstream-chat-52971.firebaseapp.com',
    messagingSenderId: '975187763274',
  },
  production: false,
  apiURL: 'https://us-central1-getstream-chat-52971.cloudfunctions.net',
  streamApp: {
    key: 'fem5uwbqx9p6'
  }
};

export default environment;

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
