$(document).ready(function(e) {

	for (var i = 0; i < videos.length; i++) {
		var video = videos[i];

		var videoLi = $('<li></li>');

		var numberSpan = $('<span></span>');
		numberSpan.addClass('orderNumber');
		numberSpan.text(i+1);
		videoLi.append(numberSpan);

		var titleSpan = $('<span></span>');
		titleSpan.addClass('songSpan');
		titleSpan.text(video.title);
		videoLi.append(titleSpan);

		videoLi.data('url', video.link);
		$('#videoPlaylist').append(videoLi);
	}

	$(document).on('click', '#videoPlaylist li', function(e){
		var link = $(this).data('url');
		var title = $(this).find('.songSpan').text();

		$('video').attr('src', link);
		$('#mainVideoWindow .songSpan').text(title);

		$('video').trigger('play');
	});

});