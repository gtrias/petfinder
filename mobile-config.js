// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
    id: 'li.acs.genar.petfinder',
    version: '0.0.1',
    name: 'Petfinder',
    description: 'Petfinder',
    author: 'Genar Trias',
    email: 'genar@acs.li',
    website: 'https://genar.me'
});

// Set PhoneGap/Cordova preferences
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('StatusBarOverlaysWebView', false);
App.setPreference('StatusBarStyle', 'lightcontent');
App.setPreference('StatusBarBackgroundColor', '#000000');
App.setPreference('ShowSplashScreenSpinner', false);
App.setPreference('android-targetSdkVersion', '22');
App.setPreference('android-minSdkVersion', '19');
App.accessRule('*');

