window.onload = function(){

    //Utilizo setTimeout y le introduzco una funcion anonima junto a los milisegundos:
    setTimeout(function(){
        window.open("https://www.google.es", "", "width=400, height=400");
    }, 3000);


    //Dentro de una función definida por mi, pasados 3 segundos desde la apertura de google:
    setTimeout(carlos3, 6000);

    function carlos3() {
        //window.open("https://cifpcarlos3.es/es", "width=200, height=400");
        window.open("https://cifpcarlos3.es/es", "", "width=200,height=400");
    }

    

}