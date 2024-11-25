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
        <button type="button" class="btn btn-danger">Eliminar</button>
       
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
}



contenido();




