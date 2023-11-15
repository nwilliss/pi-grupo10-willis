let acaVaLaAPIKey = "5cbe5fc6bbcd1b46780e719884ca45e5";
let almacenado = JSON.parse(localStorage.getItem('misFavoritos'));
let peliculas = [];
let series = [];
console.log(almacenado)
for (let index = 0; index < almacenado.length; index++) {
    const element = almacenado[index];
    if(element.tipo == 'pelicula'){
        peliculas.push(element.id)
    }else{
        series.push(element.id)
    }
}

let contenedor = document.querySelector('.peliculas-por-genero')
// Loop para series
for (let index = 0; index < series.length; index++) {
    const element = series[index];
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
    })
}
