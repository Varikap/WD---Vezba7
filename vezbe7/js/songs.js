$(document).ready(function(e){

	for (var i = 0; i < songs.length; i++) {
		var song = songs[i];

		var songLi = $('<li></li>');

		var numberSpan = $('<span></span>');
		numberSpan.addClass('orderNumber');
		numberSpan.text(i+1);
		songLi.append(numberSpan);

		var artistSpan = $('<span></span>');
		artistSpan.addClass('artistSpan');
		artistSpan.text(song.artist);
		songLi.append(artistSpan);

		var titleSpan = $('<span></span>');
		titleSpan.addClass('songSpan');
		titleSpan.text(song.title);
		songLi.append(titleSpan);

		songLi.data('url', song.link);

		$('#audioPlaylist').append(songLi);
	}

	$(document).on('click', '#audioPlaylist li', function(e){
		var link = $(this).data('url');
		var title = $(this).find('.songSpan').text();

		$('audio').attr('src', link);
		$('#mainAudioWindow .songSpan').text(title);

		$('audio').trigger('play');
	});

});
