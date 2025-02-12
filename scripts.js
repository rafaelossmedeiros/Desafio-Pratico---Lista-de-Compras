
// const btndelete = document.getElementById("delete")
const listadecompras = document.getElementById("listadecompras")
const form = document.querySelector("form")
const input = document.querySelector("input")
const btn = document.querySelector("button")



form.addEventListener("submit", (e) => {
    e.preventDefault()

    const value = input.value
    const ul = document.querySelector("ul")
    const li = document.createElement("li")

    li.textContent = value

    ul.append(li)

    input.value = ""
    input.focus()


})


listadecompras.addEventListener('click', function (event) {
    // Verifica se o elemento clicado é uma <li>
    if (event.target.tagName === 'LI') {
        // Define o item clicado como o item selecionado
        let selectedItem = event.target;

        // Verifica se o item já possui uma imagem
        let imagemExistente = selectedItem.querySelector("img");

        if (imagemExistente) {
            // Se a imagem já estiver presente, faz o toggle removendo-a
            imagemExistente.remove();
            selectedItem.classList.remove("newbg")
            console.log("Imagem removida");
        } else {
            // Se não houver imagem, cria uma nova e a adiciona ao item
            const imagem = document.createElement("img");
            imagem.src = "assets/icons/delete.svg";
            imagem.classList.add("editimage");
            selectedItem.append(imagem);
            selectedItem.classList.add("newbg")
            console.log("Imagem adicionada");



            // Adiciona o evento de clique à imagem
            imagem.addEventListener('click', (event) => {
                // Evita que o clique na imagem também acione o evento da <li>
                //event.stopPropagation();
                console.log("Imagem foi clicada!");

                selectedItem.remove()
            });

        }
    }
});















