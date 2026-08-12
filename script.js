const itens = JSON.parse(localStorage.getItem('minha_lista')) || [];

const form = document.getElementById('item-form');
const input = document.getElementById('item-input');
const lista = document.getElementById('lista-itens');

document.addEventListener('DOMContentLoaded', atualizarInterface);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const valor = input.value.trim();

  if (valor !== '') {
    itens.push(valor);
    salvarNoLocalStorage();
    atualizarInterface();
    input.value = '';
    input.focus();
  }
});

function removerItem(index) {
  itens.splice(index, 1);
  salvarNoLocalStorage();
  atualizarInterface();
}

function salvarNoLocalStorage() {
  localStorage.setItem('minha_lista', JSON.stringify(itens));
}

function atualizarInterface() {
  if (itens.length === 0) {
    lista.innerHTML = '<div class="empty-state">Nenhum item adicionado.</div>';
    return;
  }

  lista.innerHTML = '';
  
  itens.forEach((item, index) => {
    const li = document.createElement('li');
    
    const span = document.createElement('span');
    span.textContent = item;

    const btnDeletar = document.createElement('button');
    btnDeletar.textContent = '✕';
    btnDeletar.className = 'btn-del';
    btnDeletar.addEventListener('click', () => removerItem(index));

    li.appendChild(span);
    li.appendChild(btnDeletar);
    lista.appendChild(li);
  });

  if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => console.log('Service Worker registrado com sucesso!', reg))
      .catch((err) => console.error('Erro ao registrar Service Worker:', err));
  });
  }
}