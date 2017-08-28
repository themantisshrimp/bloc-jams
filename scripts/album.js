// Example Album
var albumPicasso = {
    title: 'The Colors', 
    artist: 'Pablo Picasso', 
    label: 'Cubism', 
    year: '1881', 
    albumArtUrl: 'assets/images/album_covers/01.png', 
    songs: [
        { title: 'Blue', duration: '4:26'}, 
        { title: 'Green', duration: '3:14'}, 
        { title: 'Red', duration: '5:01'}, 
        { title: 'Pink', duration: '3:21'}, 
        { title: 'Magenta', duration: '2:15'}
    ]
}; 

// Another Example Album

var albumMarconi = {
    title: 'The Telephone', 
    artist: 'Guglielmo Marconi', 
    label: 'EM', 
    year: '1990', 
    albumArtUrl: 'assets/images/album_covers/20.png', 
    songs: [
        { title: 'Hello, Operator?', duration: '1:01'}, 
        { title: 'Ring, ring, ring', duration: '5:01'}, 
        { title: 'Fits in your pocket', duration: '3:21'}, 
        { title: 'Can you hear me now?', duration: '3:14'}, 
        { title: 'Wrong phone number', duration: '2:15'}
    ]
}; 

var albumHero = {
    title: 'Prometheus', 
    artist: 'Quake of the Universe', 
    label: 'Titan', 
    year: '2900 B.C.', 
    albumArtUrl: 'assets/images/album_covers/07.png', 
    songs: [
        { title: 'The beginning', duration: '00:01'}, 
        { title: 'Birth', duration: '5:05'}, 
        { title: 'Battle', duration: '66:06'}, 
        { title: 'Aftermath', duration: '20:05'}, 
        { title: 'Re-Birth', duration: '00:30'}
    ]
};

var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>';
 
     return $(template);
 };

 //These variables may go under setCurrentAlbum function
    var $albumTitle = $('.album-view-title'); 
    var $albumArtist = $('.album-view-artist'); 
    var $albumReleaseInfo = $('.album-view-release-info');
    var $albumImage = $('.album-cover-art'); 
    var $albumSongList = $('.album-view-song-list'); 

var setCurrentAlbum = function(album) {
      
    $albumTitle.text(album.title);
    $albumArtist.text(album.artist);
    $albumReleaseInfo.text(album.year + ' ' + album.label); 
    $albumImage.attr('src', album.albumArtUrl); 
     
    $albumSongList.empty(); 
 
     for (var i = 0; i < album.songs.length; i++) {
         var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
         $albumSongList.append($newRow); 
     }
    };

var findParentByClassName = function (element, targetClass) {
    if (element) {
        var currentParent = element.parentElement;
        while (currentParent.className !== targetClass && currentParent.className !== null) {
            currentParent = currentParent.parentElement
        }
        return currentParent;
    }

};

var getSongItem = function (element) {
    switch (element.className) {
        case 'album-song-button':
        case 'ion-play':
        case 'ion-pause':
            return findParentByClassName(element, 'song-item-number');
        case 'album-view-song-item':
            return element.querySelector('.song-item-number');
        case 'song-item-title':
        case 'song-item-duration':
            return findParentByClassName(element, 'album-view-song-item').querySelector('.song-item-number');
        case 'song-item-number':
            return element;
        default:
            return;
    }
};


var clickHandler = function (targetElement) {

    var songItem = getSongItem(targetElement);
    var dSongNumber = parseInt(songItem.getAttribute('data-song-number'));

    if (currentlyPlayingSong === null) {
        songItem.innerHTML = pauseButtonTemplate;
        currentlyPlayingSong = dSongNumber;

    } else if (currentlyPlayingSong === dSongNumber) {
        songItem.innerHTML = playButtonTemplate;
        currentlyPlayingSong = null;

    } else if (currentlyPlayingSong !== dSongNumber) {
        var currentlyPlayingSongElement = document.querySelector('[data-song-number="' + currentlyPlayingSong + '"]');
        currentlyPlayingSongElement.innerHTML = currentlyPlayingSongElement.getAttribute('data-song-number');
        songItem.innerHTML = pauseButtonTemplate;
        currentlyPlayingSong = dSongNumber;
    }

}; 

var findParentByClassName = function(element, targetClass) {
    if(element) {
        var currentParent = element.parentElement; 
        while (currentParent.className !== targetClass && currentParent.className !== null) {
            currentParent = currentParent.parentElement
        }
        return currentParent; 
    }
    
};

var getSongItem = function (element) {
   switch (element.className) {
       case 'album-song-button': 
       case 'ion-play': 
       case 'ion-pause': 
           return findParentByClassName(element, 'song-item-number'); 
       case 'album-view-song-item': 
           return element.querySelector('.song-item-number'); 
       case 'song-item-title': 
       case 'song-item-duration': 
           return findParentByClassName(element, 'album-view-song-item').querySelector('.song-item-number');
       case 'song-item-number':
           return element;
       default:
                            return;
                            }
};


var clickHandler = function(targetElement) {

    var songItem = getSongItem(targetElement); 
    var dSongNumber = parseInt(songItem.getAttribute('data-song-number'));
    
    if (currentlyPlayingSong === null) {
        songItem.innerHTML = pauseButtonTemplate; 
        currentlyPlayingSong = dSongNumber;
   
    } else if (currentlyPlayingSong === dSongNumber) {
        songItem.innerHTML = playButtonTemplate;
        currentlyPlayingSong = null; 
   
    } else if (currentlyPlayingSong !== dSongNumber) {
        var currentlyPlayingSongElement = document.querySelector('[data-song-number="' + currentlyPlayingSong + '"]');
        currentlyPlayingSongElement.innerHTML = currentlyPlayingSongElement.getAttribute('data-song-number');         
        songItem.innerHTML = pauseButtonTemplate;
        currentlyPlayingSong = dSongNumber;
    }
    
}; 

var songListContainer = document.getElementsByClassName('album-view-song-list')[0]; 
var songRows = document.getElementsByClassName('album-view-song-item'); 

var playButtonTemplate = '<a class ="album-song-button"><span class="ion-play"></span></a>'; 

var pauseButtonTemplate = '<a class ="album-song-button"><span class="ion-pause"></span></a>'; 

var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>'; 


// Store state of playing songs
var currentlyPlayingSong = null; 

window.onload = function () {
    setCurrentAlbum(albumPicasso);

    songListContainer.addEventListener('mouseover', function (event) {
        // Only target individual song rows during event delegation
        if (event.target.parentElement.className === 'album-view-song-item') {
            // Change the content from the number to the play button's HTML
            //event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate;

            var songItem = getSongItem(event.target);
            var songItemNumber = parseInt(songItem.getAttribute('data-song-number'));

            if (songItemNumber !== currentlyPlayingSong) {
                songItem.innerHTML = playButtonTemplate;
            }
        }
    });

    for (var i = 0; i < songRows.length; i++) {
        songRows[i].addEventListener('mouseleave', function(event) {
            
            var songItem = getSongItem(event.target);
            var songItemNumber = parseInt(songItem.getAttribute('data-song-number'));

            if (songItemNumber !== currentlyPlayingSong) {
                songItem.innerHTML = songItemNumber;
            }
        });

        songRows[i].addEventListener('click', function (event) {
            clickHandler(event.target);
        });
    }

    var albums = [albumPicasso, albumMarconi, albumHero];
    var index = 1;

    albumImage.addEventListener('click', function (Event) {
        setCurrentAlbum(albums[index]);
        index++;
        if (index === albums.length) {
            index = 0;
        }
    });
};

 window.onload = function() {    
     setCurrentAlbum(albumPicasso);
     
     songListContainer.addEventListener('mouseover', function(event) { 
         // Only target individual song rows during event delegation
         if (event.target.parentElement.className === 'album-view-song-item') {
             // Change the content from the number to the play button's HTML
             event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate; 
         }
         var songItem = getSongItem(event.target); 
         var songItemNumber = parseInt(songItem.getAttribute('data-song-number'));
         
         if (songItemNumber === currentlyPlayingSong) {
             songItem.innerHTML = pauseButtonTemplate;
         } 
     });
     
         for (var i= 0; i < songRows.length; i++) {
         songRows[i].addEventListener('mouseleave', function(event) {  
                        
             var songItem = getSongItem(event.target);
             var songItemNumber = parseInt(songItem.getAttribute('data-song-number'));
             
             if (songItemNumber !== currentlyPlayingSong) {
                 songItem.innerHTML = songItemNumber; 
             } 
        });
         
         songRows[i].addEventListener('click', function(event) { 
             clickHandler(event.target);
         });
     }
     
     var albums = [albumPicasso, albumMarconi, albumHero]; 
     var index = 1; 
     
     albumImage.addEventListener('click', function(Event) { 
         setCurrentAlbum(albums[index]);
         index++; 
            if (index === albums.length){
                index=0; 
            }
     }); 
 };

