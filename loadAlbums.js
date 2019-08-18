$.getJSON('albums.json', function(albums) {
    albums.forEach((album) => {
        $('#Music').append(`
        <div class="Music-album">
            <div class="Music-album-description">
                <h2>`+ album.name +`</h2>
                <p>`+ album.description +`</p>
            </div>
            <img class="Music-album-cover" src="`+ album.cover +`">
            <iframe src="https://open.spotify.com/embed/album/`+ album.spotifyURI +`" width="300" height="250" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>`)
    })
});
