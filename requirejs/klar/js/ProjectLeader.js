//Utvecklarna har en projektledare

//Implementera honom här och använd Underscore  för att sorera utvecklarna
//_.sortBy http://underscorejs.org/#sortBy 

define(['underscore'],function (_) {
    "use strict";
     console.log('PL');   
    
    return function () {
   
        return {
            sortStuffByName: function (list) {
                 var newList;
                 newList = _.sortBy(list, function (item) {

                 	return item.getName();
                 });
                 return newList;   
            } 
        }; 
    }

});