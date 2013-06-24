define(['Coder','developerList','ProjectLeader'], function(Coder, developerList, ProjectLeader) {
    //init
    console.log('Main');
   
    //Create developers array
    var developers = [];
    var pl = new ProjectLeader();

    // and add a few awsome developers to it
    developers.push(new Coder('The nihilist'));
    developers.push(new Coder('Paul Irish', 'JavaScript'));
    developers.push(new Coder('Homer Simpson', 'donuts'));
    developers.push(new Coder('Douglas Crockford', 'semicolons'));
    
    //Projektledaren sorterar utvecklarna här
    developers = pl.sortStuffByName(developers);

    //Handle DOM-stuff in a seperate module
    developerList.setTitle('List of developers');
    developerList.createList(developers);

});
