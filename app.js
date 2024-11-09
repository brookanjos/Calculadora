let numeros = [];
let acumulador = "";

function adicao() {
    document.getElementById("campoEntrada").value += "+";
    adicaoo = true;
    if (acumulador != "") {
        numeros.push(parseInt(acumulador));
    }
    acumulador = "";
    console.log(numeros);
}

function subtracao() {
    document.getElementById("campoEntrada").value += "-";
    subtracaoo = true;
    if (acumulador != "") {
        numeros.push(parseInt(acumulador));
    }
    acumulador = "";
    console.log(numeros);
}

function multiplicacao() {
    document.getElementById("campoEntrada").value += "*";
    multiplicacaoo = true;
    if (acumulador != "") {
        numeros.push(parseInt(acumulador));
    }
    acumulador = "";
    console.log(numeros);
}

function divisao() {
    document.getElementById("campoEntrada").value += "/";
    if (acumulador != "") {
        numeros.push(parseInt(acumulador));
    }
    acumulador = "";
    console.log(numeros);
}

function resultado() {
    numeros.push(parseInt(acumulador));
    if (adicaoo == true) {
        soma = numeros.reduce(function (accumulator, value) {
            return accumulator + value
        }, 0);
    }
    else {
        if (subtracaoo == true) {
            soma = numeros.reduce(function (accumulator, value) {
                return accumulator - value;
            });
        }
        else {
            if (multiplicacaoo == true) {
                soma = numeros.reduce(function (accumulator, value) {
                    return accumulator * value;
                }, 1);
            }
            else {
                soma = numeros.reduce(function (accumulator, value) {
                    return accumulator / value;
                });
            }
        }
    }
    acumulador = "";
    adicaoo = false;
    subtracaoo = false;
    multiplicacaoo = false;
    numeros = [];
    numeros.push(parseInt(soma))
    document.getElementById("campoEntrada").value = soma;
    console.log(numeros);
}

function adicionarNumero(numero) {
    acumulador += numero;
    const campoEntrada = document.getElementById("campoEntrada");
    if (campoEntrada.value === "0") {
        campoEntrada.value = numero;
    } else {
        campoEntrada.value += numero;
    }
    console.log(numeros);
    console.log(`acumulador: ${acumulador}`);
}

function limparCampo() {
    document.getElementById("campoEntrada").value = "";
    numeros = [];
    adicaoo = false;
    subtracaoo = false;
    multiplicacaoo = false;
}


