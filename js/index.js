
const container = document.querySelector('.container');

window.addEventListener('load' , () => {
    if(localStorage.getItem('characters')){
        characters = JSON.parse(localStorage.getItem('characters'));
        putCharacters(characters);
        return
    }
    getData();
})


const getData = async () =>{
    const character = await fetch("https://rickandmortyapi.com/api/character");
    const {results} = await character.json();
    putDataResult(results);
    console.log(results);
}

const settData = (data) => {
    characters = data;
    localStorage.setItem('characters' , JSON.stringify(characters))
    putCharacters(characters);
}

const putDataResult = (results) =>{
    results.forEach(element => {
        
        let div = document.createElement('div');
        let divContent = 
            `<div>
                <img src="${element.image}" alt="${element.name}" />
            </div>
            <div>
                <span><b>ID:</b>${element.id}</span>
                <span><b>Name:</b>${element.name}</span>
                <span><b>Status:</b>${element.species}</span>
            </div>`

        div.innerHTML = divContent;
        container.appendChild(div);
        // element.target.value=element.name;
    });
}

getData();