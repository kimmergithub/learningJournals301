'use strict';

var view = {
  entries: [],
  quotes: ['Words go here!', 'Words go here, again!', 'Words, words, words!'],
  data: [
    {
      title: 'I hate Beiber',
      date: ,
      category: ,
      mood: ,
      text: ,
      author: 'Kimmer O\'Reilly',
    },
    {
      title: ,
      date: ,
      category: ,
      mood: ,
      text: ,
      author: 'Kimmer O\'Reilly',
    }
  ]
};

function Entry (entryObject) {
  this.title = entryObject.title;
  this.date = entryObject.date;
  this.category = entryObject.category;
  this.mood = entryObject.mood;
  this.text = entryObject.text;
  this.author = entryObject.author || 'Kimmer OReilly';


}

Entry();
