// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig = {
  apiKey: "AIzaSyB-6IDnnCp2-IzFhbVID4guhJHpQVfNZr8",
  authDomain: "intercorp-retail-6f5b5.firebaseapp.com",
  databaseURL: "https://intercorp-retail-6f5b5.firebaseio.com",
  projectId: "intercorp-retail-6f5b5",
  storageBucket: "intercorp-retail-6f5b5.appspot.com",
  messagingSenderId: "316929833155",
  appId: "1:316929833155:web:ed8a44d7fcf1f761ba4a76",
  measurementId: "G-S7W73Z9G13"
};

export const environment = {
  production: false,
  firebaseConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
