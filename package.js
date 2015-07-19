Package.describe({
  name: 'zooshme:active-links',
  version: '0.0.1',
  summary: 'Adds an ".active" class to links pointing to current path, or a parent of the current path',
  git: 'https://github.com/zooshme/active-links.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use([
    'aldeed:template-extension@3.4.3',
    'iron:router@1.0.9',
    'templating@1.1.1'
  ], 'client');
  api.addFiles('active-links.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('zooshme:active-links');
  api.addFiles('active-links-tests.js', 'client');
});
