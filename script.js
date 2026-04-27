const form = document.querySelector("form")
const item = document.getElementById("itemInput")
const list = document.getElementById("itemList")
const itemToDelete = document.getEl

// Adiciona um item à lista quando o formulário é enviado
form.onsubmit = (e) => {
  e.preventDefault()
  text = item.value.trim()
  if (!text) return;

  const newItem = addItem(text);
  list.appendChild(newItem);
  item.value = ''
}

function addItem(itemText) {
  const id = 'item' + Date.now();

  const li = document.createElement('li')

  const checkbox = document.createElement('input')

  checkbox.type = 'checkbox'
  checkbox.id = id;
  checkbox.name = id;

  const span = document.createElement('span')
  span.textContent = itemText

  const button = document.createElement('button')
  button.className = 'delete-button'
  button.dataset.itemId = id;

  const icon = document.createElement('img')
  icon.src = 'assets/trash.svg'
  icon.alt = 'Lixeira'

  button.appendChild(icon)
  li.appendChild(checkbox)
  li.appendChild(span)
  li.appendChild(button)

  return li;
} 

// Remove um item da lista quando o botão de exclusão é clicado
list.onclick = (e) => {
const button = e.target.closest('.delete-button');

if (!button) return;

const item = button.closest('li')
item.remove();

showToast(); // Exibe o toast de confirmação da exclusão

function showToast() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Fecha o toast quando o botão de fechar é clicado
const closeButton = document.getElementById('closeButton');
closeButton.onclick = () => {
  toast.classList.remove('show');
}  
}

