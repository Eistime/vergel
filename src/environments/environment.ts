// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAnggaY92-0My34p6VQIYhUFw-GjH1ykL4',
    authDomain: 'vergel-manager.firebaseapp.com',
    databaseURL: 'https://vergel-manager.firebaseio.com',
    projectId: 'vergel-manager',
    storageBucket: 'vergel-manager.appspot.com',
    messagingSenderId: '730991069012'
  }
};
