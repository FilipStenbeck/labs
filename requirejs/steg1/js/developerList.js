define(["jquery"], function($) {

  "use strict";
  console.log('DeveloperList');

  
  return {
    setTitle : function(text) {
      $('title').html(text);
      $('#title').html(text);
    },
    createList : function (developers) {
      developers.forEach(function(developer){
        $('#awsome-coders').append('<li>' 
            + developer.getName() 
            + ', who believes in ' 
            + developer.likes());
      });
    }
  };
});