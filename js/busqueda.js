let campo = document.querySelector('.search')
let aviso = document.querySelector('.textooo')
let formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(evento){  
    evento.preventDefault()
    console.log("Error. Sin enviar")
if (campo.value == "") {
    aviso.innerText = 'El campo no puede estar vacío';
    campo.style.outline = '2px solid red'
    aviso.style.color = 'red'
}
else if (campo.value.length < 3){
    aviso.innerText = 'Debe ingresar más caracteres';
    campo.style.outline = '2px solid red'
    aviso.style.color = 'red'
}
else {
    this.submit()
}
})



let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get("q");
let apiKey = "5cbe5fc6bbcd1b46780e719884ca45e5"
let urlm = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${busqueda}`
let urls = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${busqueda}`


fetch(urlm)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
      
        let tituloBusqueda = document.querySelector(".resultado-busqueda")


        if (data.results.length == "") {
            tituloBusqueda.innerText= `No se ha encontrado resultado de busqueda para: ${busqueda}` //crear una alert
        }
        else {
            tituloBusqueda.innerText = `Resultado de busqueda para: ${busqueda}`
        }
        let srul = document.querySelector(".listaadoResults")
        let contenido1 = ""
        for (let i = 0; i < data.results.length; i++) {
            const element = data.results[i];
            
            srul.innerHTML += `
            <a  class="container-serie" href="./detalle_peliculas.html?id=${element.id}">    
            
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
        
    })   
   .catch(function (error) {
        console.log(error);
    })

fetch(urls)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
       
        let tituloBusqueda = document.querySelector(".resultado-busqueda")
        if (data.results.length == 0) {
            tituloBusqueda.innerText = `No se ha encontrado resultado de busqueda para: ${busqueda}`
        }
        else {
            tituloBusqueda.innerText = `Resultado de busqueda para: ${busqueda}`
        }
        let srul = document.querySelector(".listaadoResults")
        for (let i = 0; i < data.results.length; i++) {
            const element = data.results[i];
            srul.innerHTML += `
            <a  class="container-serie" href="./detalle_series.html?id=${element.id}">    
            
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
    })

    .catch(function (error) {
        console.log(error);
    })
