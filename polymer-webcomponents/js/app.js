 //Add a clickhandler on all x-kunskapsbar elements
(function() {
    var elements = document.querySelectorAll('x-kunskapsbar');
    elements.forEach(function(el) {
        el.addEventListener('click', function(e) {
            e.target.sayHi(); 
        });
    });
}());

//Create a shadow dom node with a cool image
 (function() {
    var el = document.getElementById('the_shadow');
    var shadow = el.createShadowRoot();
    shadow.innerHTML = '<content><img style="margin-top: 50px;"src="img/Shadow_Death_From_Nowhere.jpg"/></content>';    
}());