let acaVaLaAPIKey = "5cbe5fc6bbcd1b46780e719884ca45e5";

let urlparams = new URLSearchParams(location.search);

let IdSerie = urlparams.get('id');



let DetalleSeries = `https://api.themoviedb.org/3/tv/${IdSerie}?api_key=${acaVaLaAPIKey}`

console.log(DetalleSeries)

fetch(DetalleSeries)

    .then(function (res) {

        return res.json();

    })

    .then(function (data) {

        console.log(data);

        let imagen = document.querySelector('#imagen2');
        imagen.src = "https://image.tmdb.org/t/p/w500/" + data.poster_path

        let titulo = document.querySelector('#Titulo2');
        titulo.innerHTML = data.title || data.name
        