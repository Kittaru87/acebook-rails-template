// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

// global.$ = require('jquery')

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// // const imagePath = (name) => images(name, true)
$(document).on("turbolinks:load", function() {
  $('#like-btn').click(function() {
    console.log("found the right place")
    let currentLikes = parseInt($('#like-count').text());
    $('#like-btn').attr('class', 'fa fa-heart fa-2x like');
    $('#like-count').text(currentLikes + 1);
  })
  
  $('#unlike-btn').click(function() {
      console.log("found the right place")
      let currentLikes = parseInt($('#like-count').text());
      $('#unlike-btn').attr('class', 'fa fa-heart unlike fa-2x');
      $('#like-count').text(currentLikes - 1);
    })
  })