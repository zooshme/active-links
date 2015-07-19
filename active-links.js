Template.onRendered(function() {
  var path = Router.current().location.get().path;
  var paths = path.replace(/(\/[A-Za-z\-]+)/g, function(m, $1, idx, str) {
      return str.slice(0, str.length - idx).replace(/\/$/, '') + ',';
    })
    .replace(/\,$/, '')
    .split(',');
  var $anchors = $('a');
  paths.forEach(function(item) {
    $anchors.removeClass('active').filter('[href="' +  item + '"]').addClass('active');
  });
});