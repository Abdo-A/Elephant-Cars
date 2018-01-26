// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAPqBVK5TmlQrPqfdv6r7EfX8ghF3iX1TQ",
    authDomain: "the-elephant-cars.firebaseapp.com",
    databaseURL: "https://the-elephant-cars.firebaseio.com",
    projectId: "the-elephant-cars",
    storageBucket: "the-elephant-cars.appspot.com",
    messagingSenderId: "604665620162"
  }
};