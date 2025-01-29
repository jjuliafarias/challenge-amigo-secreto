// Cria um array vazio para armazenar os nomes
let amigos = [];

// Função para adicionar amigos ao array e exibir a lista na tela
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nomeAmigo = input.value.trim(); // Pega o valor do input e remove espaços extras

    // Verifica se o nome não está vazio
    if (nomeAmigo) {
        // Adiciona o nome ao array
        amigos.push(nomeAmigo);
        
        // Atualiza a lista de amigos na tela
        atualizarListaAmigos();
        
        // Limpa o campo de input
        input.value = '';
    } else {
        alert('Por favor, insira um nome válido.');
    }
}

// Função para remover um amigo da lista
function removerAmigo(nome) {
    // Remove o amigo do array
    amigos = amigos.filter(amigo => amigo !== nome);

    // Atualiza a lista na tela após a remoção
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos exibida na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de renderizar novamente

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;

        // Criar um botão para remover o amigo
        const buttonRemover = document.createElement('button');
        buttonRemover.textContent = 'Remover';
        buttonRemover.onclick = () => removerAmigo(amigo); // Chama a função removerAmigo quando clicado
        
        li.appendChild(buttonRemover); // Adiciona o botão de remover ao item da lista
        listaAmigos.appendChild(li);
    });
}

// Função para sortear o amigo secreto (só um exemplo simples de sorteio)
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para sortear!');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior

    const sorteados = [];

    amigos.forEach(amigo => {
        // Em um sorteio simples, podemos remover aleatoriamente do array original
        let amigoSorteado;
        do {
            const index = Math.floor(Math.random() * amigos.length);
            amigoSorteado = amigos[index];
        } while (sorteados.includes(amigoSorteado));

        sorteados.push(amigoSorteado);

        // Exibe o resultado de forma simples
        const li = document.createElement('li');
        li.textContent = `${amigo} sorteou ${amigoSorteado}`;
        resultado.appendChild(li);
    });
}

// Função para sortear um amigo secreto de forma aleatória
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos 1 amigo para sortear!');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior

    // Sorteia um índice aleatório entre 0 e o comprimento do array
    const indexSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indexSorteado];

    // Exibe o amigo sorteado
    const li = document.createElement('li');
    li.textContent = `${amigoSorteado} foi o sorteado!`;
    resultado.appendChild(li);
}