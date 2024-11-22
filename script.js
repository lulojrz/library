libros = [
    {
        id :1,
        nombre : "1984",
        autor : "George Well",
        año : "1970",
        leido: true,

    },
    {
        id : 2,
        nombre : "El diario de un chico en apuros",
        autor:"Jaime Borala",
        año : "1983",
        leido : true,
    }
]
const container = document.getElementById("container-libros")

libros.map((x)=>{
    container.innerHTML+= 
    `
    <div class="card" key = ${x.id} style="width:300px;">
   <div class="card-body">
    <h5 class="card-title">${x.nombre}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Año :${x.año} </h6>
    <p class="card-text">Escrito por <strong>${x.autor}</strong></p>
   
  </div>
</div>
    `

})


