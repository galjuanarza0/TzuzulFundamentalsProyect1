//Ejecutar con deno

import {
    menu,
    quest,
    selectCap,
    opcionesCap0,
    Final,
    seguirJugando
} from "./functions/menu.js"

let game = true
menu(true)
while (game) {
    
    let opciones = opcionesCap0()
    let historia =  `
||Estas en medio de la carretera y se acerca un auto, hay varias 
||opciones para hacer:
`
    let respuesta = [0, 0, 0, 0]
    while (game) {
        console.log(historia);
        if (Final(opciones)) {
            game = false
            console.log(opciones)
            continue
        }
        respuesta = quest(opciones,respuesta)
        opciones = selectCap("opcionesCap",respuesta)
        historia = selectCap("historiaCap", respuesta)
    }
    game = seguirJugando()
    if (game){menu(false)}
}
console.log("fin del juego")