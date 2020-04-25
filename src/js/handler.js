// возвращает куки с указанным name,
// или undefined, если ничего не найдено
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
//получаем форму
const form = document.querySelector('form');
//получаем вопрос
const question = document.getElementById('question');
//получаем кнопку
const button = document.querySelector('button');
//устнавливаем имя куки
let name_cookie='choice'
//получаем куки
let cookie_site = getCookie(name_cookie);
//если куки нет
if (typeof cookie_site === 'undefined'){
  //вешаем обработчик события submit
    form.addEventListener('submit',function(event){
    let value = String(form.elements[0].checked) + ":" + String(form.elements[1].checked)+ ":" + String(form.elements[2].checked)+ ":" + String(form.elements[3].checked)+ ":" + String(form.elements[4].checked)+ ":" + String(form.elements[5].checked);
    // +1 день от текущей даты
    let date = new Date(Date.now() + 86400e3);
    date = date.toUTCString();
    document.cookie = encodeURIComponent(name_cookie) + '=' + encodeURIComponent(value)+'; expires=' + date;
    location.reload();
    event.preventDefault();
    });
}
else{
    //делаем из куки массив
    let result_array=cookie_site.split(":");
    console.log(result_array);
    //устанавливаем значения
    for (var i = 0; i < 6; i++) {
    if (result_array[i]=='true') form.elements[i].checked=true;
  }
  // отключаем чекбоксы
  for (var i = 0; i < 6; i++) { form.elements[i].disabled=true;
}
  //меняем текст
  question.innerText="Ваши предпочтения:";
  //отключаем кнопку
  button.disabled=true;
}
