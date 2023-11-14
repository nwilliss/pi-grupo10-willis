let APIKey = "5cbe5fc6bbcd1b46780e719884ca45e5";

let urlGenerosPelis = `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKey}`
let urlGenerosseries = `https://api.themoviedb.org/3/genre/tv/list?api_key=${APIKey}`;
let listaPelis = document.querySelector(".generos-series");
let listaSeries = document.querySelector (".generos-peliculas");

fetch(urlGenerosPelis)
.then(function(miRespuesta){
    return miRespuesta.json();
}
)
.then(function(miRespuesta){
    let generos= miRespuesta.genres;
    console.log(generos);

    let contenido = "";
    for (let  i = 0; i <12; i++){
        contenido += `<li><a href ="./detallegenero.html?id_genero=${generos[i].id}&nombre=${generos[i].name}">${generos[i].name} `
    }

    listaPelis.innerHTML = contenido;
})
.catch(function(miError){
    console.log(miError);
}); 
fetch(urlGenerosseries)
.then(function(miRespuesta){
    return miRespuesta.json();
}
)
.then(function(miRespuesta){
    let generos= miRespuesta.genres;
    console.log(generos);

    let contenido = "";
    for (let  i = 0; i <12; i++){
        contenido += `<li><a href ="./detallegenero.html?id_genero=${generos[i].id}&nombre=${generos[i].name}">${generos[i].name} `
    }

    listaSeries.innerHTML = contenido;
})
.catch(function(miError){
    console.log(miError);
});
