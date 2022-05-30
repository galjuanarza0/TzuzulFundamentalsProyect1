import {
    historiaCap1,
    historiaCap2,
    historiaCap3,
    historiaCap4,
    historiaCap5,
    historiaCap6,
    historiaCap7,
    historiaCap8,
    historiaCap9,
    historiaCap10,
    historiaCap11
} from "./historia.js";
import {
    opcionesCap1,
    opcionesCap2,
    opcionesCap3,
    opcionesCap4,
    opcionesCap5,
    opcionesCap6,
    opcionesCap7,
    opcionesCap8,
    opcionesCap9,
    opcionesCap10,
    opcionesCap11
} from "./opciones.js"
export function opcionesCap0() {
        let opciones = [
        [
        ["hacer seña para que el auto te lleve a casa", "a"],
        ["saludar", "b"],
        ["tirarle una piedra", "c"],
        ["dejarlo pasar", "d"],
        ["quedarse quieto", "e"],
        ["nada", "f"]
        ],
            [1, 1, 1, 1, 1, 11]]
        return opciones
}
export function menu(bienvenida) {
    if (bienvenida) {
        console.log(`
||---------BIENVENIDO A //RITUALS//----------
||--Esta aventura esta llena de misterios----
||--e incógnitas que deberas resolver.-------
||--presta mucha atencion a tus pasos por que
||--todo puede cambiar, o no...--------------
    `)
    }
    let seguir = false
    while (!seguir) {
        let comenzar = prompt("||--Escribe 'RITUALS' para empezar:")
        if (comenzar == "RITUALS") {
            seguir = true
        }
    }
}
/**
 * 
 * @param {array} opciones del capitulo
 * @param {array} respuesta anterior del usuario
 * @returns nueva respuesta
 */
export function quest(opciones,respuesta) {
    for (const opcion in opciones[0]) {
        console.log("||", (Number(opcion) + 1) + ".", opciones[0][opcion][0])
        }
    let respondido = false
    while (!respondido) {
        let answer = prompt("||...")
        for (let i = 0; i < opciones[0].length; i++) {
            const opcion = opciones[0][i][0]
            if (answer == opcion) {
                let cap = opciones[1][i], char = opciones[0][i][1]
                let mudo = esMudo(opciones[0][i], respuesta[2])
                let carita = emocion(opciones[0][i], respuesta[3])
                respuesta = [char, cap, mudo, carita]
                return respuesta
            }
        }
        console.log("||Escribe correctamente")
    }
}
/**
 * 
 * @param {function} obtener funcion - numerCap
 * @param {array} respuesta y conjunto de variables
 * @returns historia | opciones
 */
export function selectCap(obtener,respuesta) {
    return  eval(obtener + respuesta[1])(respuesta)
}

export function Final(opciones) {
    if (opciones == "||Volar" || opciones == "||FIN") {
        return true
    }
    return false
}
function esMudo(respuesta,mudo) {
    if (respuesta.includes("mudo")) {
        return 1
    }
    if (respuesta.includes("noMudo")) {
        return 2
    }
    return mudo
}
function emocion(respuesta,carita) {
    if (respuesta.includes(":)")){
    return carita+1
    }
    if (respuesta.includes(":(")) {
    return carita-1
    }
    return carita
}

export function seguirJugando() {
    console.log("||¿Quieres volver a jugar? SI/NO")
    while (true) {
        let seguir = prompt("||...")
        if (seguir == "SI") {
            return true
        }
        if (seguir == "NO") {
            return false
        }
    }
    
}