const lista = document.getElementById("datosCuriososLista");
fetch('../curiosidades.json')
    .then((res) => res.json())
    .then((data) =>
        data.forEach((datoCurioso) => {
            const card = document.createElement('div');
            card.innerHTML = `
    <div class="row cols-md-2 cols-sm-1">
    <div class="card bg-dark col mb-3">
    <div class="card-body">
    <h3> ${datoCurioso.dato}</h3>
    <p class="text-white">${datoCurioso.autor}</p>
    </div>
    </div>
    `
            lista.append(card)

        }))
/*const datosCuriosos = [{
        dato: "Los juegos de ingenio son excelentes formas de mantenernos mentalmente activos",
        autor: "curiosidadescuriosas"
    },
    {
        dato: "Las adivinanzas mejoran la lógica y el pensamiento crítico.",
        autor: "editorial geu"
    },
    {
        dato: "Favorecen el desarrollo y la asociación de ideas y conceptos.",
        autor: "Bosque de Fantasias"
    },
    {
        dato: "Jugar a las adivinanzas ayuda a desarrollar la paciencia, darse tiempo para escuchar, aprender a memorizar, interpretar, razonar, prestar atención, concentrarse, comprender el lenguaje articulado, asociar ideas, motivarse, y así sucesivamente.",
        autor: "eresmama.com"
    }
]
const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor)
};
guardarLocal("Curiosidades", JSON.stringify(datosCuriosos));
let datosCuriososGet = JSON.parse(localStorage.getItem("Curiosidades"));
/*curiosidad1
let curio1 = document.getElementById("curio1");
let autor1 = document.getElementById("autor1");
curio1.innerText = (datosCuriososGet[0].dato);
autor1.innerText = (datosCuriososGet[0].autor);
/*curiosidad2
let curio2 = document.getElementById("curio2");
let autor2 = document.getElementById("autor2");
curio2.innerText = (datosCuriososGet[1].dato);
autor2.innerText = (datosCuriososGet[1].autor);
/*curiosidad3
let curio3 = document.getElementById("curio3");
let autor3 = document.getElementById("autor3");
curio3.innerText = (datosCuriososGet[2].dato);
autor3.innerText = (datosCuriososGet[2].autor);
/*curiosidad4
let curio4 = document.getElementById("curio4");
let autor4 = document.getElementById("autor4");
curio4.innerText = (datosCuriososGet[3].dato);
autor4.innerText = (datosCuriososGet[3].autor);
*/