const searchInput = document.getElementById('searchInput');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlist');

function requestAPI(searchTerm) {
    const url = `http://localhost:3000/artist?name_like=${searchTerm}`
    fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden")
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-image');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urling;
    });

    resultArtist.classList.remove ('hidden');

    document.addEventListener('input', function (){
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm === ''){
            resultPlaylist.classList.add ('hidden');
            resultArtist.classList.remove ('hidden');
            return
        }
        console.log(requestAPI(searchTerm));
    })
}