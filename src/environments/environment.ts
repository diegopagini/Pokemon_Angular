// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'pokemon-angular-578e9',
    appId: '1:950470601098:web:beb880533458e0d6918073',
    storageBucket: 'pokemon-angular-578e9.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyC8CkCp6Hxh6euNXxzRS2H-diIe3A577WI',
    authDomain: 'pokemon-angular-578e9.firebaseapp.com',
    messagingSenderId: '950470601098',
    measurementId: 'G-5S1CYJWN73',
  },
  production: false,
  baseUrl: 'https://pokeapi.co/api/v2',
  picUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
