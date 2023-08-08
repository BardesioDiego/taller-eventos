  function saludar(){
        alert("Hola!")
    }

    addEventListener('DOMContentLoaded', inicio);
function inicio() {
    document.getElementById('saludo').addEventListener('click', presionoClick);}

    function presionoClick() {
        alert('Hola! Soy el div');
    }
