
const url ="https://api.nasa.gov/planetary/apod?api_key=Md6ZhB8e1s2GDDDn6dEI4WialPr963Fl4DVh6PcA&count=15";
 /*
async function  imagenes(){
    try{
    const imagenUrl = await fetch(url); 
    const imagenLista = await imagenUrl.json();
    console.log(imagenLista); 
    const posicion = document.querySelector("[data-ul]");

    imagenLista.forEach(element => {
        const contenido = 
        `
        <li class="card">
        <img class="card__image" src=${element.url} alt="imagen">
        <h3 class="card__title">${element.title}</h3>
        </li>
        `

        posicion.innerHTML = posicion.innerHTML + contenido;
    });
    }   
    catch(error){
        console.log(error);
    }
    

    
}
*/

function imagenes () {
    const posicion = document.querySelector("[data-ul]");
    fetch(url)
    .then(res => res.json())
    .then(datosImagenes => {
        datosImagenes.forEach(element => {
            const contenido = 
            `
            <li class="card">
            <img class="card__image" src=${element.url} alt="imagen">
            <h3 class="card__title">${element.title}</h3>
            </li>
            `
            posicion.innerHTML = posicion.innerHTML + contenido;
        });
    })
    .catch(error)
       
}

imagenes();