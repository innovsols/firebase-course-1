// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  useEmulators: true,
  firebase: {
    apiKey: 'AIzaSyAhqWO3w_M0F2b8QG0uWew2cMEeAIxzU5Q',
    authDomain: 'fir-course-1-391d5.firebaseapp.com',
    projectId: 'fir-course-1-391d5',
    storageBucket: 'fir-course-1-391d5.appspot.com',
    messagingSenderId: '77326104982',
    appId: '1:77326104982:web:378ec3da8c9abbdaf9c5b7'
  },
  api: {

  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
