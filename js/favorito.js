let acaVaLaAPIKey = "5cbe5fc6bbcd1b46780e719884ca45e5";
let almacenado = JSON.parse(localStorage.getItem('misFavoritos'));
let peliculas = [];
let series = [];
console.log(almacenado)
for (let index = 0; index < almacenado.length; index++) {
    let element = almacenado[index];
    if(element.tipo == 'pelicula'){
        peliculas.push(element.id)
    }else{
        series.push(element.id)
    }
}
let contenedor = document.querySelector('.peliculas-por-genero')
if (almacenado == null || almacenado.length==0 ) {
    document.querySelector("#texto").innerHTML="No hay favoritos"
    
}else{


// Loop para series
    for (let index = 0; index < series.length; index++) {
    let element = series[index];
    let DetalleSeries = `https://api.themoviedb.org/3/tv/${element}?api_key=${acaVaLaAPIKey}`
    fetch(DetalleSeries).then(function (res) {
        return res.json();
    }).then(function (data) {
        contenedor.innerHTML += `
        <div>
            <a  class="container-serie" href="./detalle_series.html?id=${data.id}">    
            
                <img src="https://image.tmdb.org/t/p/w500${data.poster_path}"/>
                <div>
                <h3>${data.name}</h3>
                <p>Fecha de estreno: ${data.first_air_date}</p>
                <p>Rating: ${data.vote_average}</p>
                <p>Popularidad: ${data.popularity}</p>
                <p>Sinopsis: ${data.overview}</p>      
                </div>
                </a>
                <button class="eliminar" data-id="${data.id}" >Eliminar</button>
                </div>
                `
    }).catch(function (error) {
        console.log(error);
    })}

// Loop para peliculas
for (let index = 0; index < peliculas.length; index++) {
    let  element = peliculas[index];
    let DetallePelicula = `https://api.themoviedb.org/3/movie/${element}?api_key=${acaVaLaAPIKey}`
    fetch(DetallePelicula).then(function (res) {
        return res.json();
    }).then(function (data) {
        console.log(data)
        contenedor.innerHTML += `
        <div>
            <a  class="container-serie" href="./detalle_peliculas.html?id=${data.id}">    
            
                <img src="https://image.tmdb.org/t/p/w500${data.poster_path}"/>
                <div>
                <h3>${data.original_title}</h3>
                <p>Fecha de estreno: ${data.release_date}</p>
                <p>Rating: ${data.vote_average}</p>
                <p>Popularidad: ${data.popularity}</p>
                <p>Sinopsis: ${data.overview}</p>      
                </div>
                
                </a>
                <button class="eliminar" data-id="${data.id}" >Eliminar</button>
                </div>`

    }).catch(function (error) {
        console.log(error);
    })

}}  

document.querySelector('.peliculas-por-genero').addEventListener('click', function(event) {
    // Comprueba si el elemento clickeado es un botón con la clase 'eliminar'.
    if (event.target.className === 'eliminar') {
        var idElemento = event.target.getAttribute('data-id');
        eliminarElemento(idElemento);
    }
});

function eliminarElemento(idElemento) {
    let almacenado = JSON.parse(localStorage.getItem('misFavoritos'));
    // Filtra el elemento a eliminar comparando su id.
    for (let index = 0; index < almacenado.length; index++) {
        let element = almacenado[index];
        if(element.id == idElemento){
            almacenado.splice(index, 1);
        }
    }
    localStorage.setItem('misFavoritos', JSON.stringify(almacenado));
}