var menuBar=document.getElementById('menu-bar');
var menu=document.getElementById('menu');

menuBar.addEventListener('click',function(){
	menu.classList.toggle('mostrar');
});