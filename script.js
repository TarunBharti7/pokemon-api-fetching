for(let i = 1 ; i < 21; i++){


let url1 = `https://pokeapi.co/api/v2/pokemon/${i}/`;

async function getData() {
    try {
        const response = await fetch(url1);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const pokemon = await response.json();

        console.log(pokemon.name);
        card(pokemon);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

getData();

function card(pokemon){

        let bDiv = document.getElementById("bDiv");

        let div = document.createElement("div");
        div.setAttribute("class" , "container")
        bDiv.appendChild(div);
    
        let img = document.createElement("img");
        img.setAttribute("class" , "image");
        img.src = `${pokemon.sprites.front_default}`
        div.appendChild(img)
    
        let name = document.createElement("h3");
        name.setAttribute("class" , "name");
        let text = document.createTextNode(`${pokemon.name}`)
        name.appendChild(text);
        div.appendChild(name)

        url2 = `https://pokeapi.co/api/v2/pokemon/${i+2}/`;
    
}    

}