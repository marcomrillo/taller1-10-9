function obtenerNombre(codigoNave){

    let nombrePiloto=codigoNave.split(":");
    return(`el nombre del piloto es:${nombrePiloto[1]}(backtip)`);

}

console.log(obtenerNombre("ARQ255:juan"));
let nombre=obtenerNombre("ARQ255:juan");
console.log(nombre);