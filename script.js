const form = document.querySelector("form")
const item = document.getElementById("itemInput")
const list = document.getElementById("itemList")

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
  icon.src = '/assets/trash.svg'
  icon.alt = 'Lixeira'

  button.appendChild(icon)
  li.appendChild(checkbox)
  li.appendChild(span)
  li.appendChild(button)

  return li;
} 