
let ApiKey = "5cbe5fc6bbcd1b46780e719884ca45e5";
// pelliculass populares
let url1 =`https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}`;
let url2= `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`;
let urlserie = `https://api.themoviedb.org/3/tv/popular?api_key=${ApiKey}`;

// recuperamos del dom 

let peliMasValorada = document.querySelector(".peliculasmasvaloradas ");
let peliPopular = document.querySelector("#peliPopulares");
let seriePopular = document.querySelector(".seriespopulares ");


//primer fetch
fetch(url1)
.then(function(response){
    return response.json();
}

)
.then(function(data){
    
    
    let pelicula = data.results; //todas las peliculas
    console.log(pelicula)
    let contenido = "";
    for (let i = 0; i < 10; i++) {
        console.log (pelicula[i]);
        contenido +=  `<li>
                         <a href="./detalle_peliculas.html?id=${pelicula[i].id}">
                         <img class="pelicula-card" src=https://image.tmdb.org/t/p/w500/${pelicula[i].poster_path} alt="">
                         </a>
                        <h3>${pelicula[i].title}</h3>
                        <p>${pelicula[i].release_date} </p>
                     </li>`

    }
    peliMasValorada.innerHTML = contenido;
}

)
.catch(function(error){
    console.log(error);
});


//segundo fetch 

fetch(url2)
.then(function(response){
    return response.json();
}

)
.then(function(data){
    
    
    let pelicula = data.results; //todas las peliculas
    console.log(pelicula)
    let contenido = "";
    

    for (let i = 0; i < 10; i++) {
        console.log (pelicula[i]);
        contenido +=  `<li>
                         <a href="./detalle_peliculas.html?id=${pelicula[i].id}">
                         <img class="pelicula-card" src=https://image.tmdb.org/t/p/w500/${pelicula[i].poster_path} alt="">
                         </a>
                        <h3>${pelicula[i].title}</h3>
                        <p>${pelicula[i].release_date} </p>
                     </li>`

    }
    peliPopular.innerHTML = contenido;
}

)
.catch(function(error){
    console.log(error);
});



//tercer fetch
fetch(urlserie)
.then(function(response){
    return response.json();
}

)
.then(function(data){
    
    
    let pelicula = data.results; //todas las peliculas
    console.log(pelicula)
    let contenido = "";
    

    for (let i = 0; i < 10; i++) {
        console.log (pelicula[i]);
        contenido +=  `<li> 
                         <a href="./detalle_series.html?id=${pelicula[i].id}">
                         <img class="pelicula-card" src=https://image.tmdb.org/t/p/w500/${pelicula[i].poster_path} alt="">
                         </a>
                        <h3>${pelicula[i].name}</h3>
                        <p>${pelicula[i].first_air_date} </p>
                     </li>`

    }
    seriePopular.innerHTML = contenido;
}

)
.catch(function(error){
    console.log(error);
});
















// let ApiKey = "5cbe5fc6bbcd1b46780e719884ca45e5";
// // pelliculass populares
// let url1 =`https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}`;
// let url2= `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`;
// let urlserie = `https://api.themoviedb.org/3/tv/popular?api_key=${ApiKey}`;

// // recuperamos del dom 

// let peliMasValorada = document.querySelector(".peliculasmasvaloradas ");
// let peliPopular = document.querySelector("#peliPopulares");
// let seriePopular = document.querySelector(".seriespopulares ");


// //primer fetch
// fetch(url1)
// .then(function(response){
//     return response.json();
// }

// )
// .then(function(data){
    
    
//     let pelicula = data.results; //todas las peliculas
//     console.log(pelicula)
//     let contenido = "";
//     for (let i = 0; i < 10; i++) {
//         console.log (pelicula[i]);
//         contenido +=  `<li>
//                          <a href="./detalle_peliculas.html?id =${pelicula[i].id}">
//                          <img class="pelicula-card" src=https://image.tmdb.org/t/p/w500/${pelicula[i].poster_path} alt="">
//                          </a>
//                         <h3>${pelicula[i].title}</h3>
//                         <p>${pelicula[i].release_date} </p>
//                      </li>`

//     }
//     peliMasValorada.innerHTML = contenido;
// }

// )
// .catch(function(error){
//     console.log(error);
// });


// //segundo fetch 

// fetch(url2)
// .then(function(response){
//     return response.json();
// }

// )
// .then(function(data){
    
    
//     let pelicula = data.results; //todas las peliculas
//     console.log(pelicula)
//     let contenido = "";
    

//     for (let i = 0; i < 10; i++) {
//         console.log (pelicula[i]);
//         contenido +=  `<li>
//                          <a href="./detalle_peliculas.html?${pelicula[i].id}">
//                          <img class="pelicula-card" src=https://image.tmdb.org/t/p/w500/${pelicula[i].poster_path} alt="">
//                          </a>
//                         <h3>${pelicula[i].title}</h3>
//                         <p>${pelicula[i].release_date} </p>
//                      </li>`

//     }
//     peliPopular.innerHTML = contenido;
// }

// )
// .catch(function(error){
//     console.log(error);
// });



// //tercer fetch
// fetch(urlserie)
// .then(function(response){
//     return response.json();
// }

// )
// .then(function(data){
    
    
//     let pelicula = data.results; //todas las peliculas
//     console.log(pelicula)
//     let contenido = "";
    

//     for (let i = 0; i < 10; i++) {
//         console.log (pelicula[i]);
//         contenido +=  `<li> 
//                          <a href="./detalle_series.html?${pelicula[i].id}">
//                          <img class="pelicula-card" src=https://image.tmdb.org/t/p/w500/${pelicula[i].poster_path} alt="">
//                          </a>
//                         <h3>${pelicula[i].name}</h3>
//                         <p>${pelicula[i].first_air_date} </p>
//                      </li>`

//     }
//     seriePopular.innerHTML = contenido;
// }

// )
// .catch(function(error){
//     console.log(error);
// });