import "/src/assets/css/styles.scss";
import "./register.css"
import * as bootstrap from 'bootstrap';
import { insertMainHeader } from "/src/components/common/header/header";
import { insertMainFooter } from "/src/components/common/footer/footer";



window.addEventListener( "load", async() =>{
    
    insertMainHeader( document.getElementById("header") );    
    insertMainFooter( document.getElementById("footer") );

    
    const registerForm = document.getElementById("contact-form");

    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault(); // Evitar el envío del formulario
        e.stopPropagation(); // Detener la propagación del evento, significa que no se ejecutarán otros event listeners asociados a este evento
        registerForm.classList.add('was-validated'); // Agregar clase para mostrar estilos de validación
        
    }); 


});
 