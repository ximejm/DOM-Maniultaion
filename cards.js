/*Crear tarjeta [] 
* Crear secciones para tarjetas 
* Img
*nombre, desc, edad, lista de algo
* insertar en la tarjeta 
* Mostrar dentro de div container 
*/

const CARDS_CONTAINER =document.querySelector("#card-container");
const USERS = [
    {
        id:1,
        username: "booklover123",
        desc: "Fantasy and mistery my two loves",
        age: 22, 
        fav_books: {
            books: ["pride and prejudge", "emma", "janne eyre"]
        }, 

    },
    {
        id: 2, 
        username: "worldofletters",
        desc: "Love, books, sadness",
        age: 25, 
        fav_books: { 
            books: ["Mal de amores", "Paula", "Todos los días son nuestros"]
        },
    },
];

//Crear tarjeta 



//Crear seccciones  
function CreateElements () {
    const cardobj = { 
        name_section: document.createElement("h3)"),
        desc_section:document.createElement("p)"),
        age_section: document.createElement("p"),
        book_section:document.createElement("div"), 
    };
    return cardobj;
}


//Crear tarjeta 
//Inyectamos info 
function InjectData (obj, user){
    const booklist = user.fav_books.books.map((e) => { 
        const item = document.createElement("ul"); 
        item.textContent = e; 
        return item; 
    })
    obj.name_section.textContent = user.username; 
    obj.desc_section.textContent = user.desc;
    obj.age_section.textContent = user.age; 
    obj.book_section.append(...booklist);
}

function RenderCard (cardobj) { 
const card = document.createElement("div"); 
card.append(cardObj.name_section, 
    cardobj.desc_section, 
    cardobj_agesection, 
    cardobj_booksection
);
card.className("div-creado");     
CARDS_CONTAINER.appendChild(card); 
}

const cardData = CreateElements(); 
InjectData(cardData); 

USERS.forEach((user) => {
    const cardData = createElements(); 
    injectData(cardData, user);

}); 



