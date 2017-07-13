'use strict';
// stops you from doing the dumb stuff that javascript allows you to do... makes you code more
// formal... more professional

// elements
$('div');
document.getElementsByTagName;

// class   JQuery
$('.container');
document.getElementsByClassName;

//id selector
$('#home');
document.getElementById;

//parent descendent
$('header li');

//parent > child
$('ul > li');
$('.nav-list > li');

//attribute
// $('input[value='']');
// $('input[type='number']');

//set text of the matched element(s)
$('#home').text('Scott was here...');

// $('#home').html('<h2>Scott was here...</h2>')

// html data-rank="1"
$('p').data('rank');

$('p').data('rank', '2');

// create and append to the dom
$('main-content').append('<section></section>');

// EMPTY all the child elements
$('main-content').append('<section></section>');

// run a command as soon as the DOM loads
$(document).ready(function(){

});

// or

// $(function(){
//   // do all the codes
// })

// $newArticle.data('category', this.category) //this is an example of where the data assignment for html is also used.

// rawData.sort(funciton(a,b){

// });  // callback funciton
//
// forEach //array method, a callback funtion that we will use a lot

//NOTE NOTE NOTE NOTE
// WEEK 1 WEDNESDAY

//
$(function () {
  $('.tab-content').hide();
  $('.tab-content#delegation').show();
});

$('.nav-item > a').on('click', function(){
  $('.tab-content').hide();
  $('#' + $(this).data('tab')).show();
  // $(#delegation)
});

$('button').on('click', function (){
  event.preventDefault();
  console.log('this ' + this);
  $('#' + $(this).data('menu')).append('<li>Boomstick</li>');
  console.log('this ' + this);
  console.log(this);

  console.log($(this).data('author'))
  // $('menuOne') or menuTwo
});
// JUST USE .ON to register an event
// NOTE --> click on a button refreshes the page...
// NOTE --> That's why we use the PREVENT DEFUALT METHOD

$('.menu').on('click', 'li', function(){
  console.log(this);
});

// do some research on EACH… for jQuery...
// var === can assign multiple articles using var and commas...
