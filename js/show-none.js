

var home = $('#home').offset().top,
    ventas = $('#ventas').offset().top,
    registro = $('#registro').offset().top;

var content = {"btn-home":"home","btn-registro":"registro","btn-ventas":"ventas"};
const array = [];
function showNone(id_input) {
//pinta  color a opcion seleccionada
    var menu = array.push(id_input);
    var container= document.getElementById(id_input);
    container.style.background = "rgb(241, 136, 19)";

//elimina color anterior
    e = array.length - 2;
    const element = array[e];    
    if(element && element!==id_input){
        afterContainer = document.getElementById(element)        
        afterContainer.style.background = "none";
    }

    switch (content[id_input]) {
        case "home":
            $('#content').animate({
                scrollTop: home - 60
            },500);
          break;
        case "registro":
            $('#content').animate({
                scrollTop: registro  - 40
            },500);
          break;
        case "ventas":
            $('#content').animate({
                scrollTop: ventas 
            },500);
          break;
      }

}