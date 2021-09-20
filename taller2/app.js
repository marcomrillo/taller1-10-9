function robarPlano(id,depegarNave){

    if(id>0 && id<=10){
        let mensaje="nos robamos el plano" +id;
        depegarNave(mensaje,true);
    }else{
        let mensaje="nos robamos un plano fake";
        depegarNave(mensaje,false);
    }

}
robarPlano(15,(mensaje,bandera) => bandera ?  console.log("DESPEGANDO...") : console.log("quedate ahi...")
)