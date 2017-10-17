Package.describe({
  name: 'spectrum:onsenui',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('fortawesome:fontawesome', 'client');
  api.use('pagebakers:ionicons', 'client');
  api.use('ixdi:material-design-iconic-font', 'client');
  
  api.addFiles('lib/onsen-css-components.css', 'client');
  api.addFiles('lib/onsenui.css', 'client');
  api.addFiles('lib/onsenui.js', 'client');
});