const libros = [
    {
        id: 1,
        nombre: "1984",
        autor: "George Well",
        año: "1970",
        leido: false,

    },
    {
        id: 2,
        nombre: "El diario de un chico en apuros",
        autor: "Jaime Borala",
        año: "1983",
        leido: false,
    }
]
const container = document.getElementById("container-libros")
function contenido() {
    container.innerHTML = "";
    libros.map((x) => {
        container.innerHTML +=
            `
        <div class="card" key = ${x.id} style="width:300px;">
       <div class="card-body">
        <h5 class="card-title">${x.nombre}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Año :${x.año} </h6>
        <p class="card-text">Escrito por <strong>${x.autor}</strong></p>    
        <p class="card-text">Estado <strong>${x.leido ? "Leido " : "No leido"
            }</strong></p>    
    
        <button type="button" class="btn btn-primary" id = ${x.id}>Marcar Leido</button>
        <button type="button" class="btn btn-danger" id = ${x.id}>Eliminar</button>
       
      </div>
    </div>
        `

    })
    const button = document.querySelectorAll(".btn-primary")

    button.forEach(element => {
        element.addEventListener("click", (e) => {
            e.preventDefault()
            const libroId = parseInt(element.id);
            const libro = libros.find(x => x.id === libroId);
            libro.leido = true; 
            contenido();
        }

        )

    });
    const eliminar = document.querySelectorAll(".btn-danger")
    eliminar.forEach(boton =>{
        boton.addEventListener("click",(e)=>{
            e.preventDefault()
            const idLibro = parseInt(boton.id)
            libros.splice(idLibro - 1)
            contenido()
        })
    })

}
const btnAgregar = document.getElementById("add")
const modal = document.getElementById("modal")

btnAgregar.addEventListener("click",(e) =>{
    e.preventDefault()
    modal.style.display = "block";
    btnAgregar.style.display = "none"

})
const nombre = document.getElementById("Nombre")
const autor = document.getElementById("autor")
const año = document.getElementById("año")
const añadir = document.getElementById("submit")

añadir.addEventListener("click",(e) =>{
    e.preventDefault()
    function nuevolibro(nombre,autor,año){
        this.id +=1; 
        this.nombre = nombre;
        this.autor = autor;
        this.año = año;

    }
    const nuevo =  new nuevolibro(nombre.value,autor.value,año.value)
    libros.push(nuevo)
    nuevo.id = libros.length;
    modal.style.display = "none"
    btnAgregar.style.display = "inline"
    autor.textContent = " "
    
    contenido()
})


contenido();




