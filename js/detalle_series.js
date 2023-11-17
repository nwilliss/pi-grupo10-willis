let acaVaLaAPIKey = "5cbe5fc6bbcd1b46780e719884ca45e5";

let urlparams = new URLSearchParams(location.search);

let IdSerie = urlparams.get('id');



let DetalleSeries = `https://api.themoviedb.org/3/tv/${IdSerie}?api_key=${acaVaLaAPIKey}`



fetch(DetalleSeries)

    .then(function (res) {

        return res.json();

    })

    .then(function (data) {

       
        let imagen = document.querySelector('#imagen2');
        imagen.src = "https://image.tmdb.org/t/p/w500/" + data.poster_path

        let titulo = document.querySelector('#Titulo2');
        titulo.innerHTML = data.title || data.name
        let sinopsis = document.querySelector('#sinopsis2');
        sinopsis.innerHTML = "Sinopsis  :<br>" + data.overview

        fechaestreno = document.querySelector('#fechaestrenoid2');
        fechaestreno.innerHTML = 'Fecha de estreno:' + ' ' +( data.release_date || data.first_air_date)
        

        valoracion = document.querySelector('#valoracion2');
        valoracion.innerHTML = 'Puntaje: ' + data.vote_average + ' /10'

        for (let index = 0; index < data.genres.length; index++) {



            genero = document.querySelector('#generoid2');
            genero.innerHTML += `<a class="link-genero" href="./detallegenero.html?id_genero=${data.genres[index].id}&nombre=${data.genres[index].name}">${data.genres[index].name}</a>`
            

        }


    })




    .catch(function (error) {

        console.log(error);


    })
    let similares = `https://api.themoviedb.org/3/tv/${IdSerie}/similar?api_key=${acaVaLaAPIKey}`

    document.getElementById('fav').addEventListener('click', function()  {

        let data = JSON.parse(localStorage.getItem('misFavoritos'));
        if (data == null) {
            data = [];
        }
        data.push({tipo: 'serie', id: IdSerie});
        localStorage.setItem('misFavoritos', JSON.stringify(data));
    });

    document.getElementById('similares').addEventListener('click', function() {

        fetch(similares).then(function (res) {
    return res.json();
}).then(function (data) {
    let contenedor = document.querySelector('.similares')
    let peliculas = data.results;
    contenedor.innerHTML = '<h2>Series similares</h2>';
    for (let index = 0; index < 10; index++) {
        let element = peliculas[index];

        contenedor.innerHTML += `<div>
        <a href="./detalle_series.html?id=${element.id}"><img  class="imagReco"src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt=""></a>
        <h2 class="titulopeli">${element.name}</h2>
        </div>`
    }    
}).catch(function (error) {
    console.log(error);
})
    });
    