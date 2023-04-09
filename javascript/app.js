//--- SECCION DEL MENU ---------------------------------
    //Variables
    const header = document.querySelector('.header');
    const hamburguer = document.querySelector('.hamburguer');
    const nav = document.querySelector('.nav');

    const alturaInicial = getAltura(header);

    //Listeners
    document.addEventListener('DOMContentLoaded', init);
    hamburguer.addEventListener('click', menu);

    //Funciones
    function init(){
        //Calcula la altura del header --> Necesario para la animación del menu
        setAltura(header, getAltura(header));
        
        //Carousel
        reproducirSlides(); //automaticamente  
    }

    function menu(){
        //El atributo permitirá saber el estado del nav
        if(header.getAttribute("data-collapsed") === "false"){
            header.setAttribute("data-collapsed", true);
            setAltura(header, ( getAltura(nav) + alturaInicial) );
            setTimeout(() => {
                nav.classList.toggle('nav--collapsed');
            }, 400);
        }else{
            header.setAttribute("data-collapsed", false);
            setAltura(header, alturaInicial);
            nav.classList.toggle('nav--collapsed');
        }

        
        document.querySelector('.hamburguer__btn').classList.toggle('hamburguer__btn--collapsed')
    }

    function setAltura(elemento, altura){
        elemento.style.height = `${altura}px`;
    }

    function getAltura(elemento){
        return elemento.clientHeight;
    }

//-------------------------------------------------------------------------------------------------

//-- SECCION DEL CAROUSEL ---------------------------------------

const slider = document.querySelector('.carousel__slider');
const sliderElements = document.querySelectorAll('.carousel__slide');
const rootStyles = document.documentElement.style;

let slideCounter = 0;
let isInTransition = false;

const DIRECTION = {
  RIGHT: 'RIGHT',
  LEFT: 'LEFT'
};
//Obtener translateX
const getTransformValue = () => Number(rootStyles.getPropertyValue('--slide-transform').replace('px', ''));

const reorderSlide = () => {
  // 1.- Obtener el transalteX
  const transformValue = getTransformValue();
  // 2.- Establecer transition en none
  rootStyles.setProperty('--transition', 'none');

  //Si llegó al final
  if (slideCounter === sliderElements.length - 1) {
    //Insertar en el ultimo hijo, al primer hijo
    slider.appendChild(slider.firstElementChild);

    //Establecer el translateX = tamaño de caja + arreglodesliders[contador].scrollwidth px
    rootStyles.setProperty(
      '--slide-transform',
      `${transformValue + sliderElements[slideCounter].scrollWidth}px`
    );

    //Restar contador
    slideCounter--;
  } else if (slideCounter === 0) {
    slider.prepend(slider.lastElementChild);
    rootStyles.setProperty(
      '--slide-transform',
      `${transformValue - sliderElements[slideCounter].scrollWidth}px`
    );
    slideCounter++;
  }

  isInTransition = false;
};

const moveSlide = direction => {
  if (isInTransition) return;
  const transformValue = getTransformValue();
  rootStyles.setProperty('--transition', 'transform 1s');
  isInTransition = true;
  if (direction === DIRECTION.LEFT) {
    rootStyles.setProperty(
      '--slide-transform',
      `${transformValue + sliderElements[slideCounter].scrollWidth}px`
    );
    slideCounter--;
  } else if (direction === DIRECTION.RIGHT) {
    rootStyles.setProperty(
      '--slide-transform',
      `${transformValue - sliderElements[slideCounter].scrollWidth}px`
    );
    slideCounter++;
  }
};


function reproducirSlides(){
    setInterval(() => {
      moveSlide(DIRECTION.RIGHT)
    }, 3500);
}

slider.addEventListener('transitionend', reorderSlide);

reorderSlide();

//-- FIN CAROUSEL -----------------------------------------------

//-- SECCION CARD CAROUSEL --------------------------------------

function moverIzqCards(elem, unit) {
    let recorrido = elem.scrollLeft; //Cuanto se ha movido el carousel

    //Mueve el carousel sumandole el ancho de la card
    elem.scrollLeft = ((unit) + recorrido);
}

//Carousel Facial
    let carouselContenedor1 = document.querySelector(".faciales .cardCarousel__container");
    let anchoCard1;
    let tamMax1;

    function actualizarInfoFacial() {
        anchoCard1 = document.querySelector(".faciales .card").offsetWidth + 16; //Se suma el ancho de la card + margin
        tamMax1 = (document.querySelectorAll(".faciales .card").length * anchoCard1) - document.querySelector(".faciales .cardCarousel__container").clientWidth;
    }

    document.querySelector(".faciales .cardCarousel__boton--prev").addEventListener("click", () =>{
        actualizarInfoFacial(); //En caso de modificar el ancho de la pantalla
        if (carouselContenedor1.scrollLeft > 0) {
            moverIzqCards(carouselContenedor1, -anchoCard1 ); //El negativo lo mueve a la derecha
        }
    });

    document.querySelector(".faciales .cardCarousel__boton--next").addEventListener("click", ()=>{
        actualizarInfoFacial(); //En caso de modificar el ancho de la pantalla
        if (carouselContenedor1.scrollLeft < tamMax1) {
            moverIzqCards(carouselContenedor1, anchoCard1 /* x numCards a mover*/);
        }
    });



//Carousel Corporales
    let carouselContenedor2 = document.querySelector(".corporales .cardCarousel__container");
    let anchoCard2;
    let tamMax2;

    function actualizarInfoCorporal() {
        anchoCard2 = document.querySelector(".corporales .card").offsetWidth + 16; //Se suma el ancho de la card + margin
        tamMax2 = (document.querySelectorAll(".corporales .card").length * anchoCard2) - document.querySelector(".corporales .cardCarousel__container").clientWidth;
    }

    document.querySelector(".corporales .cardCarousel__boton--prev").addEventListener("click", () =>{
        actualizarInfoCorporal(); //En caso de modificar el ancho de la pantalla
        if (carouselContenedor2.scrollLeft > 0) {
            moverIzqCards(carouselContenedor2, -anchoCard2 ); //El negativo lo mueve a la derecha
        }
    });

    document.querySelector(".corporales .cardCarousel__boton--next").addEventListener("click", ()=>{
        actualizarInfoCorporal(); //En caso de modificar el ancho de la pantalla
        if (carouselContenedor2.scrollLeft < tamMax2) {
            moverIzqCards(carouselContenedor2, anchoCard2 /* x numCards a mover*/);
        }
    });
//Carousel quirurgicos
    let carouselContenedor3 = document.querySelector(".quirurgicos .cardCarousel__container");
    let anchoCard3;
    let tamMax3;

    function actualizarInfoQuirurgicos() {
        anchoCard3 = document.querySelector(".quirurgicos .card").offsetWidth + 16; //Se suma el ancho de la card + margin
        tamMax3 = (document.querySelectorAll(".quirurgicos .card").length * anchoCard3) - document.querySelector(".quirurgicos .cardCarousel__container").clientWidth;
    }

    document.querySelector(".quirurgicos .cardCarousel__boton--prev").addEventListener("click", () =>{
        actualizarInfoQuirurgicos(); //En caso de modificar el ancho de la pantalla
        if (carouselContenedor3.scrollLeft > 0) {
            moverIzqCards(carouselContenedor3, -anchoCard3 ); //El negativo lo mueve a la derecha
        }
    });

    document.querySelector(".quirurgicos .cardCarousel__boton--next").addEventListener("click", ()=>{
        actualizarInfoQuirurgicos(); //En caso de modificar el ancho de la pantalla
        if (carouselContenedor3.scrollLeft < tamMax3) {
            moverIzqCards(carouselContenedor3, anchoCard3 /* x numCards a mover*/);
        }
    });

    
//---------------------------------------------------------------------------------------------------------------------

//--- INICIO FORMULARIO ----------------------------------------------------------------------------------------------

//-- ENVIAR CORREO -----------------------------------------------------------
async function enviarEmail(datos){ //Esta función se comunica con la API de php
    
    try {
        const response = await fetch("php/email.php", {
            method: "POST", // or 'PUT'
            body: datos,
        });
        if(response.ok){return await response.json()} //Si fue correcto --> devuelve una promesa
        else{return "ERROR"} //devuelve un error si fue incorrecto
    } catch (error) {
        return error;
    }
}
//-----------------------------------------------------------------------------

//--- Variables de la sección formulario
const formulario = document.querySelector('#formulario');
const emailRegex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
const numerosRegex = /^[0-9]$/; //Solo valida caracter NO PALABRAS
let presionado = false; //sirve para validar solo 1 vez los mensajes de error en cada input

formulario.addEventListener('submit', enviarFormulario);

formulario.addEventListener('input', validarTiempoReal);

formulario.addEventListener('click', ()=>{
    presionado = true; //Cambiaste de input --> valida
});

formulario.addEventListener("keydown", (e) =>{
    if(e.keyCode === 9){ //Tecla tab
        presionado = true; //Cambiaste de input --> valida
    }   
})

function enviarFormulario(e){
    e.preventDefault();

    //Obtener todos los inputs del form
    const datos = Object.fromEntries(new FormData(e.target));

    if(validarDatos(datos)){ //Si error existe --> no enviar form
        return;
    }

    crearModal(); //Modal en espera

    enviarEmail(new FormData(formulario)) //devuelve una promesa
        .then(response =>{
            //Muestra la info en el modal dependiendo de la respuesta
            if(response === "Correo enviado con exito") //Esta respuesta la devuelve la API PHP
            {respuestaModal("Enviado", "El correo se ha enviado exitosamente");}
            else{respuestaModal("Error", "El servicio no se encuentra disponible");}
        })
    
}

function validarDatos(datos){
    let error = false;

    //Recorrer todo el objeto para identificar TODOS los errores
    Object.entries(datos).forEach( ([key, valor]) =>{
        if(valor === '' && key !== "comentario"){
            crearSpan(key, "Dato requerido *");
            error = true
        }
        if(key === 'email' && valor !== ''){
            
            if(!emailRegex.test(valor)){
                crearSpan(key, "Correo no válido *");
                error = true;
            }
        }
        if(key === "telefono" && valor.length < 10 && valor !== ""){
            crearSpan(key, "Formato a 10 dígitos *")
            error = true;
        }
    });

    return error;
}


function validarTiempoReal(e){

    //Si el input de escritura es telefono, solo aceptar numeros
    if(e.target.id === "telefono"){
        recortarAnumeros(e)
    }

    /*
    Al escribir muchas veces EN UN MISMO INPUT intentará validar
    el mensaje de error. Esto solo es necesario una vez cada que escribe
    en un input
    */
    if(!presionado) return; //Estas escribiendo muchas veces en un mismo input, no valides

    const actual = e.target;
    const padre = actual.parentNode;
    const last = padre.lastElementChild;

    //El mensaje de error siempre estará al final en un SPAN
    if(last.tagName ==="SPAN"){

        //Si es el input de telefono --> no quitar mensaje si no presiona numeros
        if(actual.id === "telefono" && !soloNumeros(e.data)){
            return;
        }
        //Remueve mensaje de error cuando escribe
        last.remove();
        // console.log("Comprobacion de variable presionado");
    }

    presionado = false; //Asegura de convertir a falso para no validar de nuevo el input actual
}

function crearSpan(key, texto){

    //Obtiene al padre del input en cuestion
    const padre = document.querySelector(`#${key}`).parentNode;

    //Si no es un SPAN --> crear SPAN (el error)
    if(padre.lastElementChild.tagName !== "SPAN"){
        const span = document.createElement("span");
        span.textContent = texto;
        /**
         * 1 obtener el input el cual su id es el mismo que el key del objeto
         * 2 insertar despues del input el span con el error
         */
        document.querySelector(`#${key}`).insertAdjacentElement("afterend", span);
    }else{
        //Si hay un SPAN, actualiza su texto. Si existe SPAN siempre será el último elemento
        padre.lastElementChild.textContent = texto;
    }
}

function recortarAnumeros(e){
    if(!(soloNumeros(e.data))){
        //Si la tecla presionada no es de un numero --> recortala
        e.target.value = e.target.value.slice(0, e.target.value.length - 1); //e.target indica el input en cuestión 
    }
}

function soloNumeros(caracter){
    return numerosRegex.test(caracter);
}


//-- CREAR MODAL --------------------------------

function crearModal(){
    //Crea el fondo negro
    const modal = document.createElement("div");
    modal.classList.add("modal");

    //Crea el contenedor de la informacion
    const modalCuerpo = document.createElement("div");
    modalCuerpo.classList.add("modal__cuerpo");

    //Crea el titulo
    const header = document.createElement("p");
    header.classList.add("modal__header");
    header.textContent = "Procesando"

    //crea el contenedor del spinner
    const skchase = document.createElement("div");
    skchase.classList.add("sk-chase");

    //crea los circulos del spinner
    for(let i=0; i<6; i++){
        const chasedot = document.createElement("div");
        chasedot.classList.add("sk-chase-dot");
        skchase.appendChild(chasedot);
    }

    //Inseta dentro del modal
    modal.appendChild(modalCuerpo);
    modalCuerpo.appendChild(header);
    modalCuerpo.appendChild(skchase);

    //inserta en el DOM
    document.querySelector("#contacto").insertAdjacentElement("afterend",modal);

    //Animación para el contenedor de la informacion
    setTimeout(() => {
        modalCuerpo.style.transform = "translateY(0)";
    }, 10);

}

function respuestaModal(titulo, texto){
    //Elimina el spinner
    document.querySelector(".sk-chase").remove();
    document.querySelector(".modal__header").textContent = titulo;
    
    //Crea el parrafo de respuesta
    const respuesta = document.createElement("p");
    respuesta.classList.add("modal__respuesta");
    respuesta.textContent = texto;

    //Crea el boton para cerrar el modal
    const cierre = document.createElement("button");
    cierre.classList.add("modal__cerrar");
    cierre.textContent = "Cerrar";
    cierre.onclick = ()=>{cerrarModal()};

    //Inserta la respuesta despues del titulo
    document.querySelector(".modal__header").insertAdjacentElement("afterend",respuesta);
    respuesta.insertAdjacentElement("afterend",cierre); //inserta el boton despues de la respuesta
}

function cerrarModal(){
    //Animación para cerrar modal
    document.querySelector(".modal__cuerpo").style.transform = "translateY(-200%)";

    //Pequeño retraso para cerrar el modal sin afectar la linea anterior
    setTimeout(() => {
        document.querySelector(".modal").remove();
    }, 500);
    formulario.reset(); //formatea los datos
}

//-- Fin Modal ---------------------------------------

//-- Menú desplegable ---------------------------------------

const activador = document.querySelector(".desplegable__activate");

const whatsApp = document.querySelector(".desplegable__link--whatsApp");

activador.addEventListener('click', muestraContactos);

function muestraContactos(){
    whatsApp.classList.toggle("desplegable__link--aparece");
    activador.classList.toggle("desplegable__activate--rotate");
}



