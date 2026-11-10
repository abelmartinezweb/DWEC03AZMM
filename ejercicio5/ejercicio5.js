window.onload = function(){

    console.log(screen);

    console.log(navigator);

    console.log(location);

    //Almaceno los elementos de html mediante el ID de cada uno:
    let tipo = document.getElementById("tipo");
    let resolucion = document.getElementById("resolucion");
    let orientacion = document.getElementById("orientacion");
    let idioma = document.getElementById("idioma");
    let protocolo = document.getElementById("protocolo");

    //Creo una variable para cada dato donde guardar el resultado de los datos sobre el usuario que queremos extraer:
    let tipoDato;
    //Mediante screen.width sacamos si es un dispositivo u otro:
    if (screen.width < 768) tipoDato = "Movil";
    if (screen.width >= 768 && screen.width < 1024) tipoDato = "Tablet";
    if (screen.width >= 1024) tipoDato = "Escritorio";

    //Utilizamos screen de nuevo para sacar el ancho y el alto, para la resolucion:
    let resolucionDato = `${screen.width}x${screen.height}`;

    //Sacamos la orientación con los mismo atributos de screen:
    let orientacionDato;
    if(screen.width>= screen.height) orientacionDato = "Horizontal";
    if(screen.width< screen.height) orientacionDato = "Vertical";

    //Sacamos el idioma con el objeto navigator y el atributo language:
    //Además solo extraemos el primer y segundo caracter:
    let idiomaDato = navigator.language[0] + navigator.language[1];

    //Sacamos el protocolo de la web con el objeto location y el atributo protocol:
    let protocoloDato = location.protocol;

    //Imprimimos el dato obtenido en cada elemento html mediante innerHTML:
    tipo.innerHTML = tipoDato;
    resolucion.innerHTML = resolucionDato;
    orientacion.innerHTML = orientacionDato;
    idioma.innerHTML = idiomaDato;
    protocolo.innerHTML = protocoloDato;


    

}