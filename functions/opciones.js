export function opcionesCap1(respuesta) {
    let opciones
    switch (respuesta[0]) {
        case "a":
            opciones = [
                [["asentir con la cabeza", "a"],
                 ['"no entiendo"', "a","noMudo"],
                 ["quedarse callado", "b","mudo"]],
                [3, 2, 2]
            ];
            return opciones;
        case "b":
            opciones = [
                [["llamar", "d"]],
                [2]
            ];
            return opciones;
        case "c":
            opciones = [
                [["despertar", "e"],
                 ['DEPERTAR', "e"]],
                [8, 8]
            ];
            return opciones;
        case "d":
            opciones = [
                [["disco 1", "c"],
                 ['disco 2', "c"]],
                [2, 2]
            ];
            return opciones;
        case "e":
            opciones = [
                [[":)", "e"],
                 [":(", "e"]],
                [2, 2]
            ];
            return opciones;
    }
}
//------------------------------------------------------------------------------
export function opcionesCap2(respuesta) {
    let opciones
    switch (respuesta[0]) {
        case "a":
            opciones = [
                [['"si, por favor"', "c"],
                 ['"no gracias, prefiero quedarme"', "d"]],
                [3, 3]
            ];
            return opciones;
        case "b": 
            opciones = [
                [["asentir con la cabeza", "b"],
                 ["negar con la cabeza", "d"]],
                [3,3]
            ];
            return opciones;
        case "c":
            opciones = [
                [["objeto 1", "d"],
                 ['objeto 2', "d"]],
                [5, 5]
            ];
            return opciones;
        case "d":
            opciones = [
                [["invitar", "e"]],
                [3]
            ];
            return opciones;
        case "e":
            opciones = [
                [[":)", "f"],
                 [":(", "f"]],
                [5, 5]
            ];
            return opciones;
    }
}
//------------------------------------------------------------------------------
export function opcionesCap3(respuesta) {
    let opciones
    let mudo = respuesta[2]
    switch (respuesta[0]) {
        case "a":
        case "b":
            opciones = [
                [["asentir con la cabeza", "a"],
                 ["negar con la cabeza", "c"]],
                [4,4]
            ];
            if (mudo == 1) {
                opciones[0][0].pop()
                opciones[0][0].push("b")
            }
            return opciones;
        case "c":
            opciones = [
                [['"con mucho gusto"', "b"],
                 ['"no gracias"', "c"]],
                [4, 4]
            ];
            return opciones;
        case "d":
            opciones = [
                [["hacerle seña", "d"],
                 ["dejarlo pasar","e"]],
                [4]
            ];
            return opciones;
        case "e":
            opciones = [
                [["comer", "f"]],
                [4]
            ];
            return opciones;
    }
}
//------------------------------------------------------------------------------
export function opcionesCap4(respuesta) {
    let opciones
    let mudo = respuesta[2]
    switch (respuesta[0]) {
        case "a":
        case "b":
            opciones = [
                [['asentir con la cabeza', "a"],
                 ['negar con la cabeza', "a"],
                 ["salir del baño","x"]],
                [5, 5,7]
            ];
            if (mudo == 2) {
                opciones = [
                    [['"ya salgo"', "x"],
                    ['"aun no termino"', "a"]],
                    [7, 5]
                ];
            }
            return opciones;
        case "c":
            opciones = [
                [['ir a saludarlo', "c"],
                 ['ignorarlo', "c"]],
                [5, 5]
            ];
            return opciones;
        case "d":
        case "e":
            opciones = [
                [["...", "x"],
                 ["...", "x"],
                 ["...", "x"]],
                [8, 8, 8]
            ];
            return opciones;
        case "f":
            opciones = [
                [["faltan", "e"]],
                [5]
            ];
            return opciones;
    }
}
//------------------------------------------------------------------------------
export function opcionesCap5(respuesta) {
    let opciones
    switch (respuesta[0]) {
        case "a":
        case "b":
            opciones = [
                [['mirar por la cerradura', "a"],
                 ['salir a ver que sucede', "x"]],
                [6,7]
            ];
            return opciones;
        case "c":
            opciones = [
                [["...", "x"],
                 ["...", "x"],
                 ["...","x"]],
                [8,8,8]
            ];
            return opciones;
        case "d":
            opciones = [
                [["sal", "b"],
                 ["sillas", "b"],
                 ["sogas","b"]],
                [6,6,6]
            ];
            return opciones;
        case "e":
            opciones = [
                [["plato principal", "d"]],
                [8]
            ];
            return opciones;
        case "f":
            opciones = [
                [[":)", "d"],
                 [":(", "d"]],
                [9,9]
            ];
            return opciones;
    }
}
//------------------------------------------------------------------------------
export function opcionesCap6(respuesta) {
    let opciones
    switch (respuesta[0]) {
        case "a":
            opciones = [
                [["ropa sucia", "a"],
                 ["cepillo", "b"],
                 ["peine", "c"],
                 ["jabon", "d"]],
                [7, 7, 7, 7]
            ]
            return opciones;
        case "b":
            opciones = [
                [["pimienta","c"],
                 ["cebollas","c"],
                 ["papas","c"]],
                [9,9,9]
            ]
            return opciones;
    }
}
//------------------------------------------------------------------------------
export function opcionesCap7(respuesta) {
    let opciones
    let mudo = respuesta[2]
    switch (respuesta[0]) {
        case "a":
            opciones = [
                [["levantate y corre","a"],
                 ["alejate en silencio","b"],
                 ["llama un taxi","c"]],
                [8,8,8]
            ]
            if (mudo == 1) {
                opciones[0].pop()
                opciones[1].pop()
            }
            return opciones
        case "b":
            opciones = [
                [["...", "x"],
                 ["...", "x"],
                 ["...","x"]],
                [8,8,8]
            ]
            return opciones;
        case "c":
            opciones = [
                [["no","x"],
                 ["puedes","x"],
                 ["hacer", "x"],
                 ["nada","x"]],
                [8,8,8,8]
            ]
            return opciones;
        case "d":
            opciones = [
                [["jabon","x"],
                 ["JABON","x"]],
                [8,8]
            ]
            return opciones;
        case "x":
            opciones = [
                [["seguir","x"]],
                [8]
            ]
            return opciones;
    }
}
//------------------------------------------------------------------------------
export function opcionesCap8(respuesta) {
    let opciones
    switch (respuesta[0]) {
        case "a":
            opciones = [
                [["hacerle seña","a"],
                 ["dejarlo pasar","b"]],
                [9,9]
            ]
            return opciones
        case "b":
            opciones = [
                [["rojo", "e"],
                 ["rojo", "e"],
                 ["rojo","e"]],
                [10,10,10]
            ]
            return opciones;
        case "c":
            opciones = [
                [["abrir los ojos","e"],
                 ["despertar","e"],
                 ["desdormir", "e"]],
                [10,10,10]
            ]
            return opciones;
        case "d":
            opciones = [
                [["postre","c"]],
                [9]
            ]
            return opciones;
        case "e":
            opciones = [
                [["tomar", "g"],
                 ["no tomar","h"]],
                [9,9]
            ]
            return opciones
        case "x":
            opciones = [
                [["no hacer nada", "g"],
                 ["forcejear","h"]],
                [9,9]
            ]
            return opciones;
    }
}
//------------------------------------------------------------------------------
export function opcionesCap9(respuesta) {
    let opciones = [
        [["volar", "e"]],
        [10]
    ]
    switch (respuesta[0]) {
        case "a":
            let mudo = respuesta[2]
            opciones = [
                [["...", "a"],
                ["contar la historia a detalle", "b","noMudo"]],
                [10,10]
            ]
            if (mudo == 1) {
                opciones[0].pop()
                opciones[1].pop()
            }
            return opciones
        case "b":
            opciones = [
                [["rojo", "e"],
                 ["rojo", "e"],
                 ["rojo","e"]],
                [10,10,10]
            ]
            return opciones;
        case "c":
            opciones = [
                [["comer","c"],
                 ["c o m e r","c"],
                 ["COMER", "c"]],
                [10,10,10]
            ]
            return opciones;
        case "d":
            opciones = [
                [[":)", "d"],
                 [":(","d"]],
                [10,10]
            ]
            return opciones;
        case "e":
            return opciones;
        case "f":
            opciones[0][0].shift()
            opciones.unshift("mas")
            return opciones;
        case "g":
            opciones[0][0].shift()
            opciones.unshift("ayuda")
            return opciones;
    }
}
//------------------------------------------------------------------------------
export function opcionesCap10(respuesta) {
    let opciones
    switch (respuesta[0]) {
        case "a":
        case "b":
            let mudo = respuesta[2]
            opciones = [
                [['"gracias Pepe"', "b"],
                 ['"te pagare igual"', "c"],
                 ['...',"a"]],
                [11,11,11]
            ]
            if (mudo == 1) {
                opciones[0].shift()
                opciones[0].shift()
                opciones[1].shift()
                opciones[1].shift()
            }
            if (mudo == 2) {
                opciones[0].pop()
                opciones[1].pop()
            }
            return opciones;
        case "c":
            opciones = [
                [["si","d"],
                 ["claro que si","d"],
                 ["POR SUPUESTO QUE SI", "d"]],
                [11,11,11]
            ]
            return opciones;
        case "d":
            opciones = [
                [[":)", "e"],
                 [":(","e"]],
                [11,11]
            ]
            return opciones;
        case "e":
            opciones = [
                [["hambre", "g"]],
                [11]
            ]
            return opciones;
    }
}
//------------------------------------------------------------------------------
export function opcionesCap11(respuesta) {
    let fin = "||FIN"
    if (respuesta == "g") {
        fin = "||VOLAR"
    }
    return fin
}