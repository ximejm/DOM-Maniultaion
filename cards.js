/*Crear tarjeta [] 
* Crear secciones para tarjetas 
* Img
*nombre, desc, edad, lista de algo
* insertar en la tarjeta 
* Mostrar dentro de div container 
*/

const CARDS_CONTAINER =document.querySelector("#card-container");

//Crear tarjeta 


const USER = { 
    id: 1,
    username: "User Name",
    desc:"Sobre mí", 
    age: 26,
    fav_books: { 
        books: [
            "Brida",
            "Ensayo sobre la ceguera",
            "La mecánica del corazón", 
            "Angeles y Demonios", 
            "El principito",
        ],        
    }, 
}

//Crear seccciones 
const card = document.createElement("div"); 
const name_section = document.createElement("h3");
const desc_section = document.createElement("p");
const age_section = document.createElement("p"); 
const book_section = document.createElement("div"); 

//Lista 
const booklist = USER.fav_books.books.map((e) => { 
    const item = document.createElement("ul"); 
    item.textContent = e; 
    return item; 
})

//Crear tarjeta 
//Inyectamos info 
name_section.textContent = USER.username;
desc_section.textContent = USER.desc;
age_section.textContent = USER.age; 
book_section.append(...booklist);
card.append(name_section, desc_section, age_section); 

//Inyectar tarjeta en el container 
CARDS_CONTAINER.append(card); 
