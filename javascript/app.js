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


// //-- FIN CAROUSEL -----------------------------------------------

//     let carouselContenedor = document.querySelector(".carousel__container");
//     let anchoCard;
//     let tamMax;

//     function actualizarInfo() {
//         anchoCard = document.querySelector(".card").offsetWidth + 16; //Se suma el ancho de la card + margin
//         tamMax = (document.querySelectorAll(".card").length * anchoCard) - document.querySelector(".carousel__container").clientWidth;
//     }

//     document.querySelector(".carousel__boton--prev").addEventListener("click", () =>{
//         actualizarInfo(); //En caso de modificar el ancho de la pantalla
//         if (carouselContenedor.scrollLeft > 0) {
//             moverIzqCards(carouselContenedor, -anchoCard ); //El negativo lo mueve a la derecha
//         }
//     });

//     document.querySelector(".carousel__boton--next").addEventListener("click", ()=>{
//         actualizarInfo(); //En caso de modificar el ancho de la pantalla
//         if (carouselContenedor.scrollLeft < tamMax) {
//             moverIzqCards(carouselContenedor, anchoCard /* x numCards a mover*/);
//         }
//     });

//     function moverIzqCards(elem, unit) {
//         let recorrido = elem.scrollLeft; //Cuanto se ha movido el carousel

//         //Mueve el carousel sumandole el ancho de la card
//         elem.scrollLeft = ((unit) + recorrido);
//     }



