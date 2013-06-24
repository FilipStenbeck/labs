require.config({
  	// expose jquery and underscore
	paths: {
		"jquery": "../components/jquery/jquery",
		"underscore": "../components/underscore-amd/underscore"
	}
});

require(['main'], function(){ 
	console.log('Config');
});






