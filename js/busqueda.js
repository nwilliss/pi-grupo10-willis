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

console.log(urlm);
fetch(urlm)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
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
            contenido1 += `  <li>
            <a href="./detalle_peliculas.html??id=${element.id}">
                <img class="pelicula-card" src="./img/oppenheimerpelicula.webp?${element.poster_path}" alt="">
            </a>
            <h3> ${element.name}</h3>
            <p> ${element.release_date}</p>
        </li>`  
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
        console.log(data);
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
            srul.innerHTML += `<li>
                <a href="detalle-series.html?id=${element.id}"><img src="https://image.tmdb.org/t/p/w500${element.poster_path}"/></a>
                <p>${element.name}</p>
                <p>${element.first_air_date}</p>      
           <li>`  
        }
    })

    .catch(function (error) {
        console.log(error);
    })
