let i = 1;
const addDoc = document.querySelector(".back");
const body = document.querySelector('body')
// События

// 1. События добавления данных
addDoc.addEventListener("click", openMadal);
body.addEventListener('click', add);
body.addEventListener('click',read);


// Функции

// 1. Функция для создания модального окна
function read(event) {
  if(event.target.dataset.action === 'on') {
    const inp = event.target.closest('.bbttnn')
    const modal = inp.parentElement;
    const lab = modal.querySelectorAll('label');
    let var1 = lab[0].firstElementChild;
    let var2 = lab[1].firstElementChild;
    let var3 = lab[2].firstElementChild;
    let var4 = lab[3].firstElementChild;
    const table = document.querySelector('table');
    const newq = `<tr>
    <td>${i++}</td>
    <td>${var1.value}</td><td>${var2.value}</td><td>${var3.value}</td><td>${var4.value}</td><td>${var3.value*var4.value}</td>
  </tr>`
  table.insertAdjacentHTML('beforeend',newq)
  }
}
function add(event) {
  if(event.target.dataset.action === 'off') {
    const modal = event.target.closest('.modal');
    modal.remove();
  }
}
function openMadal() {
  let div = document.createElement("div");
  div.className = "modal";
  div.innerHTML = `<div class="modal-window">
   <label class="lb" for="inp1">Наименование товара: <input type="text" class="inp" id="inp1"></label>
   <label class="lb" for="inp2">Ед.измерения: <input type="text" class="inp" id="inp2"></label>
   <label class="lb" for="inp3">Количество: <input type="number" class="inp" id="inp3"></label>
   <label class="lb" for="inp4">Цена за ед: <input type="number" class="inp" id="inp4"></label>
   <div class="bbttnn">
     <button class="btnBotom" data-action = 'off' type="button">Отмена</button>
     <button class="btnBotom" data-action = 'on' type="button">Готово</button>
   </div>
 </div>
 <div class="overlay">`;
  document.body.append(div);
}

