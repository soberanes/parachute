(function($){
  $.fn.parachute = function(options){

					$(this).each(function() {
						defaults = {
				    		share_url: $(this).attr('href'),
				    		network: $(this).attr('data-network'),
				    		tweet_via: $(this).attr('data-via'),
				    		tweet_description: $(this).next('.description').text(),
				    		title: 'Popup Dialog',
				    		width: '400',
				    		height: '200'
				    	}

				    	var options = $.extend({}, defaults, options), complete_link, no_network;

						$(this).click(function(){
					    	
					    	

					    	if( options.network == 'facebook' ){
					    		
					    		complete_link = 'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(options.share_url);
					    	
					    	}else if ( options.network == 'twitter' ) {
					    		
					    		complete_link = 'https://twitter.com/intent/tweet?';
					    		
					    		if( options.tweet_via != '' ){
					    			complete_link += 'via=' + options.tweet_via + '&';
					    		}
					    		
					    		complete_link += 'url=' + options.share_url;

					    		if( options.tweet_description != '' ){
					    			complete_link += '&text=' + options.tweet_description + ' ';
					    		}


					    	}else{
					    		no_network = true;
					    		console.log('no network selected');
					    	}
						   	if(!no_network){
								window.open(
									complete_link,
									options.title,
									'width='+options.width+',height='+options.height+''
								);
							}
							return false;
	        			});
	        }); 
	}
})(jQuery);
