import obtenerProvinciasSegunMeridiano from './model.js';

function chequearParametros(parametros) {
    const tieneDosDigitos = parametros[0].length == 2;
    
    if(tieneDosDigitos) {
        const parametroNumerico = Number(parametros[0]);
        return parametroNumerico;
    }

    return tieneDosDigitos;
}

function main() {
    const parametrosIngresados = process.argv.slice(2);
    const parametroChequeado = chequearParametros(parametrosIngresados);

    if(!parametroChequeado) {
        console.log("Parámetros inválidos");
    } else {
        const resultado = obtenerProvinciasSegunMeridiano(parametroChequeado);
        console.log(resultado);
    }
}

main();