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
            }, 300);
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

    const slides = document.querySelectorAll('.carousel__slide');


    let slideActual = 0;
    let slidesTotal = slides.length - 1 ;


    function siguienteImagen(){

        slideActual = slideActual === slidesTotal ? 0 : slideActual+1;

        moverCarousel(slides, 100, slideActual);
    }

    function moverCarousel(carousel, tamX, posicionActual){
        carousel.forEach( (slide, i) => {
            slide.style.transform = `translateX(${(tamX * (i-posicionActual))}%)`;
        } )
    }

    function reproducirSlides(){
        setInterval(() => {
            siguienteImagen();
        }, 3500);
    }


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

    
//--------------------------------------------------------------------------------------



