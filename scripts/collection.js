var buildCollectionItemTemplate = function () {
    var template =
<<<<<<< HEAD
    '<div class="collection-album-container column fourth">'
        + '  <img src="assets/images/album_covers/01.png"/>'
        + '  <div class="collection-album-info caption">'
        + '    <p>'
        + '      <a class="album-name" href="album.html"> The Colors </a>'
        + '      <br/>'
        + '      <a href="album.html"> Pablo Picasso </a>'
        + '      <br/>'
        + '      X songs'
        + '      <br/>'
        + '    </p>'
        + '  </div>'
        + '</div>'
        ;
    return $(template); 
};
$(window).load(function () {

    var $collectionContainer = $('.album-covers');
    $collectionContainer.empty();

    for (var i = 0; i < 12; i++) {
        var $newThumbnail = buildCollectionTemplate();

        $collectionContainer.append($newThumbnail);
=======
     '<div class="collection-album-container column fourth">'
   + '  <img src="assets/images/album_covers/01.png"/>'
   + '  <div class="collection-album-info caption">'
   + '    <p>'
   + '      <a class="album-name" href="album.html"> The Colors </a>'
   + '      <br/>'
   + '      <a href="album.html"> Pablo Picasso </a>'
   + '      <br/>'
   + '      X songs'
   + '      <br/>'
   + '    </p>'
   + '  </div>'
   + '</div>'
   ;

     return $(template); 
};
$(window).load(function () {
    // #1
    var $collectionContainer = $('.album-covers');
    // #2
    $collectionContainer.empty(); 

    // #3
    for (var i = 0; i < 12; i++) {
        var $newThumbnail = buildCollectionItemTemplate(); 

        $collectionContainer.append($newThumbnail); 
>>>>>>> checkpoint-17
    }
});