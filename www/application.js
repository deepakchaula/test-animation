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
					rows : 3,
					columns : 9,
					maxStep : 2,
					interval : 2000,
					w1024 : {
						rows : 4,
						columns : 9
					},
					w768 : {
						rows : 4,
						columns : 8
					},
					w480 : {
						rows : 5,
						columns : 5
					},
					w320 : {
						rows : 7,
						columns : 5
					},
					w240 : {
						rows : 7,
						columns : 4
					},
				} );
    }
  });
};

$(function(){
  loadImages('images.json', 'ul');
});
