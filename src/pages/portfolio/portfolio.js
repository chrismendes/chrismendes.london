require('offcanvaspanel/offcanvaspanel');
require('tabs/tabs');
var gallery = require('gallery/gallery');


// ---
// Populate Off-Canvas Panel w/Gallery
// ---
$(document).on('offCanvasPanelOpen', function(event, $data) {

  var $imageSets = $data.children();
  var $target = $('.js-offcanvaspanel-loadedcontent');

  var projectName = $data.attr('data-name');
  var projectURL  = $data.attr('data-url');

  $('.js-projectname').html(projectName);
  $('.js-projecturl').html(projectURL);
  $('.js-projecturl').attr('href', 'http://' + projectURL);

  $imageSets.each(function() {
    var $set = $(this);
    var selector = '.' + $set.attr('class');
    var screenshotCount = $data.attr('data-screenshots');

    var pageControl = $('.js-gallery-pagination > li:first-child').clone();
    $('.js-gallery-pagination').html('');
    for(var i = 0; i < screenshotCount; i++) {

    }

    $target = $target.children(selector);
    $target.html($set.children().clone());

    gallery.initialise($target);
  });

});


// ---
// Clear Off-Canvas Panel
// ---
$(document).on('offCanvasPanelClose', function(event, data) {
  
});