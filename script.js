$(window).on('load', function(){
	// preloader
	$('#status').fadeOut();
	$('#preloader').delay(350).fadeOut();
});

new fullpage('#fullpage', {
    navigation: true,
    responsiveWidth: 700,
    anchors: ['home', 'about-us', 'contact'],
    parallax: true,
    onLeave: function(origin, destination, direction){
        console.log("Leaving section" + origin.index);
    },
    afterSlideLoad: function(section, origin, destination, direction) {
                    console.log(this);
                }
});