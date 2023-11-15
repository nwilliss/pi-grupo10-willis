let acaVaLaAPIKey = "5cbe5fc6bbcd1b46780e719884ca45e5";

let urlparams = new URLSearchParams(location.search);

let qsIdPelicula = urlparams.get('id');



let DetallePelicula = `https://api.themoviedb.org/3/movie/${qsIdPelicula}?api_key=${acaVaLaAPIKey}`



fetch(DetallePelicula)

    .then(function (res) {

        return res.json();

    })

    .then(function (data) {

        console.log(data)

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
            genero.innerHTML += `<a class="link-genero" href="./detallegenero.html?id_genero=${data.genres[index].id}&nombre=${data.genres[index].name}">${data.genres[index].name}</a>`


        }


    })



    .catch(function (error) {

        console.log(error);


    })

    let similares = `https://api.themoviedb.org/3/movie/${qsIdPelicula}/similar?api_key=${acaVaLaAPIKey}`
    fetch(similares).then(function (res) {
        return res.json();
    }).then(function (data) {
        let contenedor = document.querySelector('.peliculas-similares')
        const peliculas = data.results;
        for (let index = 0; index < peliculas.length; index++) {
            const element = peliculas[index];
            contenedor.innerHTML += `<a class="container-similares" href="./detalle_peliculas.html?id=${element.id}">    
            
                <img src="https://image.tmdb.org/t/p/w500${element.poster_path}"/>
                
                <h3>${element.original_title}</h3>   
                
                </a>`
        }
        console.log(data)}).catch(function (error) {
        console.log(error);
    })

document.getElementById('fav').addEventListener('click', function() {

    let data = JSON.parse(localStorage.getItem('misFavoritos'));
    if (data == null) {
        data = [];
    }
    data.push({tipo: 'pelicula', id: qsIdPelicula});
    localStorage.setItem('misFavoritos', JSON.stringify(data));
});