// creo var hamburger e seleziono 'a' di header right
var hamburger = $(".header-right > a");
console.log(hamburger);
// creo var hamburger menu e seleziono hamburg menu
var hamburger_menu = $(".hamburger-menu");
console.log(hamburger_menu);

// creo funzione per mostrare testo Menu
hamburger.click(
  function(){
    hamburger_menu.show(slow);
  }
);
