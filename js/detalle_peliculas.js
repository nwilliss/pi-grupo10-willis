let acaVaLaAPIKey = "5cbe5fc6bbcd1b46780e719884ca45e5";

let urlparams = new URLSearchParams(location.search);

let qsIdPelicula = urlparams.get('id');



let DetallePelicula = `https://api.themoviedb.org/3/movie/${qsIdPelicula}?api_key=${acaVaLaAPIKey}`

console.log(DetallePelicula)

fetch(DetallePelicula)

    .then(function (res) {

        return res.json();

    })

    .then(function (data) {

        console.log(data);

        let imagen = document.querySelector('#imagen');
        imagen.src = "https://image.tmdb.org/t/p/w500/" + data.poster_path

        let titulo = document.querySelector('#Titulo');
        titulo.innerHTML = data.title
        let sinopsis = document.querySelector('#sinopsis');
        sinopsis.innerHTML = "Sinopsis  :<br>" + data.overview

        fechaestreno = document.querySelector('#fechaestrenoid');
        fechaestreno.innerHTML = 'Fecha de estreno:' + ' ' + data.release_date

        valoracion = document.querySelector('#valoracion');
        valoracion.innerHTML = 'Puntaje: ' + data.vote_average + ' /10'

        for (let index = 0; index < data.genres.length; index++) {



            genero = document.querySelector('#generoid');
            genero.innerHTML += "" + data.genres[index].name

        }


    })




    .catch(function (error) {

        console.log(error);


    })