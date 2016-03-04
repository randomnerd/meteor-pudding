Package.describe({
  name: 'randomnerd:pudding',
  version: '1.0.2',
  summary: 'Pudding - a (more) delightful contract abstraction, based on web3',
  git: 'https://github.com/randomnerd/meteor-pudding',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.export(['Pudding'], ['client']);
  api.add_files('ether-pudding.js', 'client');
});
