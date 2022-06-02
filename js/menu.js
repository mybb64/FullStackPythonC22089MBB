/*
    1) Las constantes presentan un ámbito de bloque (block scope) 
    tal y como lo hacen las variables definidas usando la instrucción let, 
    con la particularidad de que el valor de una constante no puede cambiarse 
    a través de la redeclaracion.

    2) classList: permite agregar, eliminar, alternar clases(toogle) en 
    diferentes elementos para cambiar de estado. Usando el objeto classList, 
    podemos hacer esto fácilmente solo con JavaScript.
*/


const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')

/*Si hago click en la imagen hamburguesa, entonces se despliega el menu*/
hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

/*Si hago click fuera del menu  o fuera de la imagen hamburguesa y esta desplegado,
 entonces se contrae el menu*/
window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != hamburguer){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})