let acaVaLaAPIKey = "5cbe5fc6bbcd1b46780e719884ca45e5";

let urlparams = new URLSearchParams(location.search);

let qsIdGenero = urlparams.get('id_genero');
let qsNombre = urlparams.get('nombre');

let titulo = document.querySelector('.genero-elegido');
titulo.innerHTML = qsNombre
// https://api.themoviedb.org/3/discover/movie?api_key=xxx&with_genres=28   
let endpointPeliculas = `https://api.themoviedb.org/3/discover/movie?api_key=${acaVaLaAPIKey}&with_genres=${qsIdGenero}`
let endpointSeries = `https://api.themoviedb.org/3/discover/tv?api_key=${acaVaLaAPIKey}&with_genres=${qsIdGenero}`

fetch(endpointPeliculas)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        let contenedor = document.querySelector('.peliculas-por-genero')
        const peliculas = data.results;
        for (let index = 0; index < peliculas.length; index++) {
            const element = peliculas[index];
            contenedor.innerHTML += `<a class="container-serie" href="./detalle_peliculas.html?id=${element.id}">    
            
                <img src="https://image.tmdb.org/t/p/w500${element.poster_path}"/>
                <div>
                <h3>${element.original_title}</h3>
                <p>Fecha de estreno: ${element.release_date}</p>
                <p>Rating: ${element.vote_average}</p>
                <p>Popularidad: ${element.popularity}</p>
                <p>Sinopsis: ${element.overview}</p>      
                </div>
                </a>`
        }
    }
    ).catch(function (error) {
        console.log(error);
    })

    fetch(endpointSeries)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        let contenedor = document.querySelector('.peliculas-por-genero')
        const peliculas = data.results;

        for (let index = 0; index < peliculas.length; index++) {
            const element = peliculas[index];
            console.log(element)
            contenedor.innerHTML += `<a class="container-serie" href="./detalle_series.html?id=${element.id}">    
            
                <img src="https://image.tmdb.org/t/p/w500${element.poster_path}"/>
                <div>
                <h3>${element.name}</h3>
                <p>Fecha de estreno: ${element.first_air_date}</p>
                <p>Rating: ${element.vote_average}</p>
                <p>Popularidad: ${element.popularity}</p>
                <p>Sinopsis: ${element.overview}</p>      
                </div>
                </a>`
        }
    }
    ).catch(function (error) {
        console.log(error);
    })