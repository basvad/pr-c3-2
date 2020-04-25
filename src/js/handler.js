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
    //разбираем значения
    result_array.forEach(function(i){
      form.elements[i].checked = Boolean(result_array[i]);
      });
    
   // form.elements[0].checked = Boolean(result_array[0]);
   // main.hidden = true; 
   // advanced.hidden =false;
   // question.innerHTML="<p>Ваш город - <strong>"+cookie_site+"</strong> </p>";
    //вешаем обработчки на кнопку сброса куки
    //document.getElementById('reset_cookies').addEventListener('click',function(){
      //удаляем куку 
    //CookiesDelete();
      //обновляемся
     // location.reload();
    //})
}
