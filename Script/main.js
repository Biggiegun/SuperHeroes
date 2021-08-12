const API_URL = 'https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/heroes.json';

const main = document.getElementById('main');


// Promise
const getHeroes = (url) =>{
   
        const peticion =  fetch(url);
        peticion.then (respuesta => respuesta.json())
        .then(data => showHeroes(data.results))
}

getHeroes(API_URL);

function showHeroes(heroes){
    main.innerHTML = ''
    
    heroes.forEach((heroe) => {
       const {superhero, alter_ego, image} = heroe 

       const heroeEl = document.createElement('div')
       heroeEl.classList.add('movie')

       heroeEl.innerHTML = `
            <img src="${image}" alt="${superhero}">
            <div class="heroe-info">
                <h3>${superhero}</h3>
            </div>
            <div>
               <h4>${alter_ego}</h4>
            </div>
        `
        main.appendChild(heroeEl);

    });
}