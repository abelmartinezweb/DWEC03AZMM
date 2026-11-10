window.onload = function () {

    //Cadena de entrada: "holaaaa mundo" se transforma en "hol4a?mundo"
    //Cadena de entrada: "aaabbcaaaa" se transforma en "3a2bc4a"

    let cadena = "holaaaa mundo";
    let cadena2 = "aaabbcaaaa";
    let num = false;
    let contador = 1;



    //FUNCION PARA COMPRIMIR CADENAS:
    function compresion(cad) {
        //Creamos la cadena vacía para usarla después:
        let nuevaCadena = "";

        //Recorremos la cadena como un array para ir comprobando si algun caracter es un digito del 0 al 9
        for (let index = 0; index < cad.length; index++) {
            if (cad.charAt(index) >= "0" && cad.charAt(index) <= "9") {
                //Si es así lanza un error y sale del bucle, ya no nos sirve la cadena
                num = true; //Esto indicaría que es true que haya detectado un numero, para usarlo posteriormente en la ejecucion del algoritmo
                document.write("ERROR: La cadena contiene números!!");
                //Sale del bucle si encuentra un numero.
                break;
            }
        }

        //Si num es false (no habria detectado un numero anteriormente) entonces ejecutamos los siguientes bloques:
        if (!num) {
            //Reemplazamos los espacios por el signo de cierre de interrogación:
            cad = cad.replaceAll(" ", "?");
        }

        //Recorremos el string como un array, caracter por caracter:
        for (let index = 0; index < cad.length; index++) {
            //Si el caracter actual es igual al siguiente y desigual a "?" sumamos 1 al contador que de serie vale 1:
            if (cad.charAt(index) == cad.charAt(index + 1) && cad.charAt(index) != "?") {
                contador++;
                //Si no es igual a la siguiente iteracion entramos en el else:
            } else {
                //Si el contador es 1, significa que ese caracter no ha tenido repeticiones:
                if (contador == 1) {
                    //La nuevaCadena es lo que ya tenga almacenado mas el caracter sin numero, por que no tiene repeticiones consecutivas:
                    nuevaCadena = nuevaCadena.concat(cad.charAt(index));
                    //En caso contrario de que el contador sea 1, significaria que almenos tiene una repeticion consecutiva
                } else {
                    //Se añade a la nueva cadena el numero del contador al caracter repetido:
                    nuevaCadena = nuevaCadena.concat(contador + cad.charAt(index));
                }
                //Reseteamos el contador para que no se vaya acumulando su valor en cada iteración:
                contador = 1;
            }

        }
        //Retornamos la nueva cadena:
        return nuevaCadena;


    }

    //FUNCION PARA DESCOMPRIMIR CADENAS:
    function descompesion(cad) {
        //Creamos la cadena vacía para usarla después:
        let nuevaCadena = "";

        //Recorremos la cadena:
        for (let index = 0; index < cad.length; index++) {
            //Si el caracter de la iteracion es igual a "?", lo reemplazamos por un espacio " "
            if (cad.charAt(index) == "?") {
                nuevaCadena = nuevaCadena.concat(" ");
                //Si no es así, buscamos que sea un numero:
            } else if (cad.charAt(index) >= 0 && cad.charAt(index) <= 9) {
                //Si es un numero, recorremos el valor de ese numero para crear la letra el numero de veces que indique ese numero desde el 1:
                for (let index1 = 1; index1 < cad.charAt(index); index1++) {
                    //Concatenamos la letra las veces que indique el número desde el 1:
                    nuevaCadena = nuevaCadena.concat(cad.charAt(index + 1));

                }
            } else {
                //Si no es numero ni "?" concatenamos el caracter normal:
                nuevaCadena = nuevaCadena.concat(cad.charAt(index));
            }





        }
        //Retornamos la nueva cadena:
        return nuevaCadena;
    }
    //Imprimimos el resultado de la funcion de compresión:
    document.write(compresion("aaabbcaaaa") + "<br>");
    document.write(descompesion(compresion("aaabbcaaaa")));

}