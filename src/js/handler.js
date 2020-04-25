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
  /* for (let i=0;i<len(result_array);i++){
     if (result_array[i]=="true"){
        form.elements[i].checked=true;
     }
     else if (result_array[i]=="false"){
       form.elements[i].checked=false;
     }
   }*/
  for (var i = 0; i < 6; i++) {
   console.log(i);
   // ещё какие-то выражения
  }
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
