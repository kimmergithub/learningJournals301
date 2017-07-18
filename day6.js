'use strict';

// JSON ===>  javascript object notation
// compresses the data -- JSON is like the universal language...
// JSON ---> the most common across platform tool?

//-----------------------------
// ---------- AJAX SYNTAX -----

// QJuery.AJAX === https://oscarotero.com/jquery/
//
// ajax === asycronis javascript and xml;
//
//

// $.ajax({
//   url: 'https://swapi.co/people/5',
//   type: 'GET',
//   dataType: ''
//   success: function(data) {
//     console.log(data);
//   },
//   fail: function(err) {
//     console.error(err);
//   }
// });

// ------------------------
// SHORTCUTS
// console.log($.get('https://swapi.co/api/people/5'))
//   .done(function(data){
//     console.log('Done', data);
//   })
//   .fail(function(err){
//     console.log('Fail', err);
//   })
//   .always(function(){
//     console.log('I ran anyways');
//   });
//
// $.get('https://swapi.co/api/people/5')
//   .then(
//     function(data) {
//       console.log(data);
//     },
//     function(err) {
//       console.log(err);
//     }
//   );

// let vs var   const (constant)

let successCallback = function(data) {
  console.log(data)

  let template = Handlevars.compile($('#template').html());
  $('#app').html(template(data.results))
}

let errorCallback = function(err) {
    console.log(err)
}

$.getJSON('https://swapi.co/api/people/5')
  .then(successCallback, errorCallback)
// You will get a DEFFERED OBJECT back...



// LAB get.JSON  .then syntax... 
