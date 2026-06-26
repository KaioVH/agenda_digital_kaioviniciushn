console.log("Aplicativo iniciado!");

// MENU

function mostrarPagina(pagina) {

    document.querySelectorAll(".pagina")
        .forEach(secao => secao.classList.remove("ativa"));

    if (pagina === "inicio") {
        document.getElementById("paginaInicio")
            .classList.add("ativa");
    }

    if (pagina === "tarefas") {
        document.getElementById("paginaTarefas")
            .classList.add("ativa");
    }

    if (pagina === "config") {
        document.getElementById("paginaConfig")
            .classList.add("ativa");
    }
}

// TAREFAS

function adicionarTarefa() {

    let input = document.getElementById("inputTarefa");

    let tarefa = input.value.trim();

    if (tarefa === "") {
        alert("Digite uma tarefa antes de adicionar.");
        return;
    }

    let lista = document.getElementById("listaTarefas");

    let item = document.createElement("li");

    item.innerHTML = "✓ " + tarefa;

    item.onclick = function () {

        if (item.style.textDecoration === "line-through") {

            item.style.textDecoration = "none";
            item.style.opacity = "1";

        } else {

            item.style.textDecoration = "line-through";
            item.style.opacity = "0.6";
        }
    };

    lista.appendChild(item);

    document.getElementById("totalTarefas").innerHTML =
        "Total de tarefas: " + lista.children.length;

    input.value = "";
    input.focus();
}

// MODO ESCURO

window.onload = function () {

    const toggleTema = document.getElementById("toggleTema");

    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "escuro") {
        document.body.classList.add("dark-mode");
        toggleTema.checked = true;
    }

    toggleTema.addEventListener("change", function () {

        if (this.checked) {

            document.body.classList.add("dark-mode");
            localStorage.setItem("tema", "escuro");

        } else {

            document.body.classList.remove("dark-mode");
            localStorage.setItem("tema", "claro");
        }

    });

};