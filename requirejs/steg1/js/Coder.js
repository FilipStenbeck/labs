define(function () {
    "use strict";
     console.log('Coder');   
    
    return function (firstName, favorite) {
        var name = firstName || 'unamed';
        var like = favorite || 'nothing';
        return {
            getName : function () {
                    return name;
            },
            likes : function () {
                    return like;
            }   
        }; 
    }

});