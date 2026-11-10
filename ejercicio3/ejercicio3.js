window.onload = function(){

    //Extraemos el elemento del html que contendrá el texto en un idioma u en otro a partir del nombre de la etiqueta:
    let titulo = document.getElementsByTagName("h1");
    

    //Si el atributo "idioma" del objeto localstorage no es "es" o "en" entra al bloque:
    if (localStorage.idioma != "ES".toLowerCase() && localStorage.idioma != "EN".toLowerCase()) { //Tambien podría valer esto, aunque me daba errores con el null: !localStorage.idioma && localStorage.idioma != null
        //Creo un contador que me sevirá para enviar el error todas las veces que no sean los inputs esperados
        //menos la primera vez:
        let contador = 0;
            do {
                //Si el contador es mayor que cero manda el error, es decir, todas las repeticiones erroneas, pero la primera no:
                if (contador > 0) {
                    //Error:
                    alert("Error: ¡Debes escribir \"ES\" o \"EN\"!");
                }
                //Pedimos el idioma con prompt:
                let idioma = prompt("¿En qué idioma quieres la web? ¿Inglés(EN) o español(ES)?");
                //Lo guardamos en el atributo idioma de localStorage:
                localStorage.idioma = idioma;
                //Sumamos 1 a contador, para saber que la siguiente vez ya habría que imprimir el error:
                contador++;
                //El bucle se repite mientras no sea "es" o "en"
            } while (localStorage.idioma != "ES".toLowerCase() && localStorage.idioma != "EN".toLowerCase());

            
        }

        //Si es "es":
        if (localStorage.idioma == "ES".toLowerCase()) {

            //Pongo el cero como un array por que el getElementsByTagname devuelve un array con todos los elementos:
            titulo[0].innerHTML = "Hola, buenas tardes"; 
        //Si es "en"    
        }else if (localStorage.idioma == "EN".toLowerCase()) {
            //Pongo el cero como un array por que el getElementsByTagname devuelve un array con todos los elementos:
            titulo[0].innerHTML = "Hello, good afternoon"; 
        }

        
        
        
        
        
        
        
}