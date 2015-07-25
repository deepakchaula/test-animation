function loadImages (url, container){
  // get the JSON object
  $.getJSON(url, function(data){
   if(typeof data === 'object'){
     // create the HTML markup for the slider from data
      $.each(data['images'], function(key, image){
        var slide = '<li><a href="#"><img src="'+image['url']+'"></a></li>';
        $(container).append(slide);
      });
     // initialize anythingSlider
      $( '#ri-grid' ).gridrotator( {
					rows		: 3,
					columns		: 15,
					animType	: 'fadeInOut',
					animSpeed	: 1000,
					interval	: 600,
					step		: 1,
					w320		: {
						rows	: 3,
						columns	: 4
					},
					w240		: {
						rows	: 3,
						columns	: 4
					}
				} );
    }
  });
};

$(function(){
  loadImages('images.json', 'ul');
});
