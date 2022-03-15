require(['gitbook', 'jQuery'], function(gitbook, $) {
  var pluginConfig = {};

  function initializePlugin(config) {
    pluginConfig = config.code;
  }

  gitbook.events.bind('start', function(e, config) {
    initializePlugin(config);
  });

  gitbook.events.bind('page.change', function() {
    console.log('page change');
  });

});
