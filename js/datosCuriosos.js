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
