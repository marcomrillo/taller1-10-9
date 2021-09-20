function matricularPadawan(nombre,planeta,edad,estatura,clasificarPadawan){

let padawan={
    nombre:nombre,
    planeta:planeta,
    edad:edad,
    estatura:estatura
}
clasificarPadawan(padawan.edad)
}   
matricularPadawan("juan","tatooine",14,178,function(edad){
    if(edad>=15){
        let mensaje=(" usted debe ingresar a manejo del sable de luz")
        console.log(mensaje)
     }else{
         let mensaje=(" usted debe ingresar a manejo de la fuerza")
         console.log(mensaje)
         }
})

/*function clasificarPadawan (){
    if(edad>=15){
       let mensaje=(nombre+"de"+planeta+" usted debe ingresar a manejo del sable de luz")
       (mensaje,true);
    }else{
        let mensaje=(nombre+"de"+planeta+" usted debe ingresar a manejo de la fuerza")
        (mensaje,false);
        }
    }
matricularPadawan(padawan,(mensaje,bandera) => bandera ?  console.log("matriculando a sable de luz") : console.log("matriculando a uso de la fuerza")
)
}*/