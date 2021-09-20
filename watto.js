

/*function pagar(ventas=2,comision=1500000,salario=3500000) {
    let pago= salario+((comision-0,05)*ventas);
console.log("total del salario"+(pago))
}
pagar();*/

/*function pagar(numeroVentas,costoComision,salarioBase){

    let valorComision=numeroVentas*costoComision;
    let salarioBruto=salarioBase+valorComision;
    let descuentos=salarioBruto*0.05;
    let salarioTotal=salarioBruto-descuentos;

    return salarioTotal

}*/

let pagar=(numeroVentas,costoComision,salarioBase)=>{

    let valorComision=numeroVentas*costoComision;
    let salarioBruto=salarioBase+valorComision;
    let descuentos=salarioBruto*0.05;
    let salarioTotal=salarioBruto-descuentos;

    return salarioTotal

}



 