export function historiaCap1(respuesta) {
    let historia
    switch (respuesta[0]) {
        case "a": {
            historia = `
||El auto se acerca y ve tu seña, cuando frena ves que es un grupo de 
||turistas con musica un poco extraña con el volumen satudaro por lo que no 
||vas a entender bien lo que dice. Apagan la muscia y te dicen:
||-Vil du at vi skal ta deg til nærmeste by?
`;
            
            return historia
        }
        case "b": {
            historia = `
||Saludas al auto y este frena, te subes y le aumentas el volumen a la musica.
||Ya saben lo que deben hacer...
`;
            return historia
        }
        case "c": {
            historia = `
||¿Que necesidad de hacer eso?
||Por tu mala actitud se vajan dos personas del auto y te mandan a dormir
||(Aca no te voy a decir como).
`;
            
            return historia
        }
        case "d": {
            historia = `
||Dejas pasar el auto y notas algo extraño, mas adelante este empieza a 
||retroceder y frena cerca tuyo. Cuando te acercas mas notas que este no tiene 
||conductor, pero esta encendio y con la llave puesta, hay dos discos.
`;
            
            return historia
        }
        case "e": {
            historia = `
||El auto frena y se baja una persona que se pone a elegir entre dos.
||Finalmente se decide pero no te elige.
`;
            return historia
        }
    }
}
//------------------------------------------------------------------------------
export function historiaCap2(respuesta) {
    let historia
    switch (respuesta[0]) {
        case "a": {
            historia = `
||El conductor mira hacia atras y un pasajero te dice:
||-"Lo que quiere decir es que si quieres que te llevemos al pueblo
||mas cercano"
`;
            return historia
        }
        case "b": {
            historia = `
||Al parecer no los entiendes y tampoco puedes hablar asi que alguien de  
||atras te dice:
||-"Lo que quiere decir es que si quieres que te llevemos al pueblo
||mas cercano"
`;
            return historia
        }
        case "c": {
            historia = `
||Pones la musica y te pones en marcha en tu mision, frenas y ves dos objetos 
||misteriosos a los ojos de cualquier persona, menos a dos incluyendote.
`;
            return historia
        }
        case "d": {
            historia = `
||LLamas a Pepe y de dices que ya estan en camino, que puede comenzar.
||El conductor esta hambriento e intentas calmarlo diciendole que si hace todo
||bien no tendra mas hambre en su vida.
`;
            return historia
        }
        case "e": {
            historia = `
||Se acerca un taxi, frena, baja y te observa con deseo. Te elige.
`;
            return historia
        }
    }
}
//------------------------------------------------------------------------------
export function historiaCap3(respuesta) {
    let historia
    switch (respuesta[0]) {
        case "a": {
            historia = `
||Te subes al auto y luego de arrancar prenden la musica nuevamente.
||Luego de un largo camino llegan a una enorme casa a las afueras de un pueblo, 
||cuando estan por estacionar el conductor dice:
||-Bli med oss i huset vårt, du er invitert til å spise.
`;
            return historia
        }
        case "b":
        case "c":
            historia = `
||Te subes al auto y luego de arrancar prenden la musica nuevamente.
||Luego de un largo camino llegan a una enorme casa a las afueras de un pueblo, 
||cuando estan por estacionar el 'Traductor te dice' te dice:
||-¿Quieres acompañarnos a comer?
`;
            return historia
        case "d": 
            historia = `
||Al parecer no tienes muchas intenciones de subirte con ellos asi que los 
||dejas ir.
||Sigues caminando por la carretera cuando ves a lo lejos un taxi... En la 
||carretera
`;
            return historia
        case "e": 
            historia = `
||Ya estan todos invitados a comer y los que se queden comeran postre...
`;
            return historia
    }
}
//------------------------------------------------------------------------------
export function historiaCap4(respuesta) {
    let historia
    switch (respuesta[0]) {
        case "a": {
            historia = `
||Luego de terminar la comida, sientes un dolor de estomago inmenso, te 
||diriges a uno de los baño a largar todo. Al finalizar, el dolor sigue pero no 
||hay mas, alguien golpea la puerta:
||-Er du ok?
`; 
            return historia
        }
        case "b": {
            historia = `
||Luego de terminar la comida, sientes un dolor de estomago inmenso y te 
||diriges a uno de los baño a largar todo. Al finalizar, el dolor sigue pero no
||hay mas, alguien golpea la puerta:
||-¿Te falta mucho?
`;
            return historia
        }
        case "c": {
            historia = `
||Mientras caminas por el pueblo en busca de algun medio par ir a tu casa ves a 
||lo lejos un taxi conocido.
||Es Pepe, tu amigo de la infancia que al parecer llego a este pueblo pero no 
||sabes por que.
`;
            return historia
        }
        case "d":
            historia = `
||El taxi freno y la cara del conductor se te hace parecida. Tienes su 
||nombre en la punta de la lengua y cuando estas a punto de preguntarselo este 
||saca un objeto extraño y te apunta con el. No es nada parecido a un arma pero 
||aun asi da miedo. De repente te duele la cabeza tan fuerte que no aguantas
||y te desmayas.
`;
            return historia
        case "e":
            historia = `
||El taxi freno igualmente y bajo corrio a abrazarte, es Pepe tu amigo de 
||la infancia que no ves hace mucho tiempo. Te abraza extrañamente durante un 
||largo rato y cuando te suelta te empieza a hablar pero no escuchas nada.
||De repente te duele la cabeza tan fuerte que no aguantas y te desmayas.
`;
            return historia
            case "f":
            historia = `
||Todos se estan preparando para el plato principal, y los que no quieran mas,
||postre seran...
`;
            return historia
    }
}
//------------------------------------------------------------------------------
export function historiaCap5(respuesta) {
    let historia
    switch (respuesta[0]) {
        case "a":
            historia = `
||Al no escuchar nada se va y te deja que sigas en el baño.
||Pasa el tiempo mientras vas recuperando la compostura. Escuchas un ruido raro 
||en el comedor, como si estubieran moviendo muebles.
`;
            return historia
        
        case "b":
            historia = `
||Al escuchar esto se va y te deja que sigas en el baño.
||Pasa el tiempo mientras vas recuperando la compostura. Escuchas un ruido raro 
||en el comedor, como si estubieran moviendo muebles.
`;
            return historia
        
        case "c":
            historia = `
||Al caminar sientes un golpe en la cabeza que te deja inconciente... 
||Al parecer no puedes hacer nada.
`;
            return historia
        
        case "d":
            historia = `
||LLegas a tu casa y preparas junto con el Traductor la cena.
||Al terminar esperas a que entren a los baños para abrir la puerta a Pepe con
||los paquetes, juntos preparan el plato principal...
`;
            return historia
        
        case "e":
            historia = `
||Nuevos invitados llegan y la entrada se perdieron.
||Aun faltan mas asi que los mandas a buscar los suficientes para poder 
||disfrutar compartiendo con mas gente.
`;
            return historia
        
        case "f":
            historia = `
||Te uso varias veces antes de llegar a una casa enorme, que casa mas hermosa.
`;
            return historia
    }
}
//------------------------------------------------------------------------------
export function historiaCap6(respuesta) {
    let historia
    switch (respuesta[0]) {
        case "a":
            historia = `
||Observas a alguien tirando sal en el piso de lo que antes era el
||comedor, pero ahora esta vacio. En tu vista se te cruza el conductor,
||le da un cuchillo al que estaba poniendo la sal y este empieza a hacer
||marcas en el piso. Al ver todo esto quedas impactado y sigues mirando un
||poco mas cuando alguien mas trae una especie de asiento que
||definitivamente no era uno de los que estaban usando antes.
||Te das la vuelta y observas una ventana como tu unica alternativa,
||en el baño se encuentran unos objetos que talvez podrias usar:
`
            return historia
    
        case "b": 
            historia = `
||Cuando esta casi todo servido dejas al Traductor con los comensales y sales   
||afuera con Pepe y lo acompañas a cazar los ingredientes faltantes.
`
            return historia
    }
}
//------------------------------------------------------------------------------
export function historiaCap7(respuesta){
    let historia
    switch (respuesta[0]) {
        case "a":
            historia = `
||En silencio te pones a atar la ropa entre si para formar una soga
||larga, atas un extremo en la canilla y el otro lo tiras por la
||ventanilla. Mientras bajas escuchas que se abre la puerta del baño e
||inmediatamente se desata la soga hecha de ropa y caes contra el suelo,
||por suerte estabas lo suficientemente bajo y la caida solo te saco
||todo el aire.
`
            return historia
    
        case "b":
            historia = `
||Te pones a pensar que puedes hacer con el cepillo
||-Tirarlo por la ventana 
||-Cepillarse los dientes
||-Usarlo como navaja
||-Tantas cosas...
||Pero de tanto pensar se te paso el tiempo.
||Alguien abre la puerta repentinamente y sientes un fuerte golpe en la cabeza 
||que te duerme instantaneamente.
`
            return historia
        
        case "c": 
            historia = `
||En serio...
||¿Que pretendias conseguir?
||Salir afuera con un peinado que los deje perplejos por tu bulleza y te dejen 
||ir sin mas. O acaso querias usarlo como cuchillo... ¿Sabes que? Ni siquiera 
||te voy a explicar por que, pero de la nada te desmallas ):<
`
            return historia
        
        case "d":
            historia = `
||Voy a suponer que tenias una gran idea de lo que hacer con un jabon...
||UN JABON... Por dios...
||Intentas tragartelo por que seguro eso querias,
||pero terminas intoxicado y te desmallas...
`
            return historia
        
        case "x":
            historia = `
||Al salir del baño sientes un golpe fuerte en la cabeza te desmaya 
||innmediatamente...
`
            return historia
    }
}
//------------------------------------------------------------------------------
export function historiaCap8(respuesta) {
    let historia
    switch (respuesta[0]) {
        case "a": 
            historia = `
||Mientras corres como nunca antes miras una vez atras y observas que
||en todas las ventanas sale algo rojo que se van haciendo cada vez
||mas grande. Al llegar donde hay mas gente te tranquilizas y tomas mas
||aire. Ves un taxi.
`
            return historia            
        case "b": 
            historia = `
||Te alejas en silencio hasta pueblo, por suerte no te persiguio nadie, el 
||pueblo parece estar vacio... Cansado te tiras al piso mirando al cielo, este 
||se pone rojo... Pero parace que no puedes dejar de mirar el cielo rojo...
`
            return historia
        case "c": 
            historia = `
||¿Por que? Literalmente sigues al lado de la casa, aun te pueden escuchar. 
||Mejor voy a cambiar tu opcion a quedarte durmiendo en el piso.
`
            return historia
        case "d": 
            historia = `
||El postre esta en camino mientras el plato principal esta siendo todo un 
||exito, a todos les gusto tanto que estan sin palabras.
`
            return historia
        case "e": 
            historia = `
||Te despiertas y estas atado en una silla enfrete de alguien en tu mismas 
||condiciones, a tu alrededor ves gente dormida tambien atada pero con la boca 
||tapada, un humo rojo sale de la nada cuando te das cuenta de que en el piso 
||hay una extraña marca hecha con sal. Un hombre con cabeza de pajaro y el 
||torso pintado de rojo se acerca a ustedes dos con una bebida extraña de color 
||verde, mientras piensa a quien darsela, les da a elegir a ambos.
`
            return historia
        case "x": 
            historia = `
||Cuando despiertas te encuentras atado en una especie de asiento muy incomodo.
||Estas atado y con la boca tapada, no se ve nada mas que un humo rojo y 
||siluetas. Estas siluetas parecen mas personas atadas formando un circulo, en 
||el centro tambien hay dos atadas en sillas, ademas hay una parada con algo 
||extraño en la cabeza que se parece como un ave. Es tan extrañamente grande 
||que dudas que sea el craneo de un ave, parece otra cosa.
`
            return historia
    }
}
//------------------------------------------------------------------------------
export function historiaCap9(respuesta) {
    let historia
    switch (respuesta[0]) {
        case "a": 
            historia = `
||Al subirte reconoces al taxista y resulta ser un amigo de la infancia. El 
||tambien te reconoce y cuando estaba apunto de decirte algo, mira tu rostro y 
||entiende que estas en aprietos. Arranca rapidamente y te lleva a tu casa. 
||Cuando salen del pueblo te dice "No se en que te metiste esta vez ni como 
||llegaste hasta este lugar pero puedo notar que esto es serio ¿Puedes decirme 
||que sucede?
`
            return historia            
        case "b": 
            historia = `
||El taxi estaba ocupado igualmente asi no lo hubieras podido usar...
||Sigues caminando cuando de repente todo se pone rojo, todo es tan rojo que no 
||puedes ver figuras, solo rojo.
`
            return historia
        case "c": 
            historia = `
||Una vez terminado el plato principal te dirijes al postre, un postre tan pero 
||tan rico que te deja la boca babeando antes de probarlo, asi que te dirijes
||volando a probarlo.
`
            return historia
        case "d": 
            historia = `
||Nuevamente te volvio a usar pero con mas gente, pobre gente...
`
            return historia
        case "e": 
            historia = `
||Luego de unos movimientos extraños el hombre pajaro empieza a ingerirle una 
||extraña bebida a uno de los del centro y este empieza a contorcionarse, 
||cuando se detiene rompe la soga en la que esta atado y salta contra el de
||adelante suyo, pero antes de que termine te desmayas nuevamente.
`
            return historia
        case "f": 
            historia = `
||Intentas hacer fuerza para desatarte pero del esfuerzo la vista se te empieza 
||a nublar y no eres conciente de tu al, mas que de unos ruidos graves.
||Cuando recuperas la compostura ves en el centro un charco de sangre
||y una figura extraña que se camufla apenas en el rojo. Cuando termina empieza 
||hacer otra vez ese ruido grave, pero esta vez aturde y el color rojo empieza 
||a esparcirce por todos lados.
`
            return historia
        case "g":
            historia = `
||Decides tomar y el otro rechazó, asi que el hombre pajaro te lo da de
||beber, te sorprende que el sabor sea tan rico pese a su pesima presentacion 
||y te abre el apetito.
`
            return historia
        case "h":
            historia = `
||Rechazas la bebida pero el otro la acepta, luego de tomarla empieza a 
||contorcionarse mientras te mira fijo. No sabes por que pero eso te da
||mucho mas miedo que del hombre pajaro.
`
            return historia
    }
}
//------------------------------------------------------------------------------
export function historiaCap10(respuesta) {
    let historia
    switch (respuesta[0]) {
        case "a": 
            historia = `
||"Se ve que fue demasiado si nisiquiera puedes decirme nada"
||Luego de un largo viaje llegan a tu casa, estas por vajarte para ir
||a buscar el dinero cuando te dice: "No tienes porque pagarme es
||suficiente con haberte ayudado :)"
`
            return historia            
        case "b": 
            historia = `
||Luego de escuchar tu historia lo unico que pudo decir es:
||¿Que?.
||Al completar el largo viaje llegan a tu casa, estas por vajarte para ir
||a buscar el dinero cuando te dice: "No tienes porque pagarme es
||suficiente con haberte ayudado :)"
`
            return historia
        case "c": 
            historia = `
||Ya llegaste y tienes el postre delante tuyo, era tan rico que te comiste dos 
||¿Quieres ir a por el tercero?
`
            return historia
        case "d": 
            historia = `
||Parece que no te va a usar mas ¿Acaso no te quiere?
`
            return historia
        case "e": 
            historia = `
||Abres los ojos y te encuentras en el cielo, ¿Cayendo? ¿Volando?
||Al final eso da igual por que ya estas llegando a tu destino. El postre esta 
||tan cerca que se te cae la baba de solo pensar en probarlo.
`
            return historia
    }
}
//------------------------------------------------------------------------------
export function historiaCap11(respuesta) {
    let historia
    switch (respuesta[0]) {
        case "a": 
            historia = `
||"Cierto...Como no te veo hace tanto se me habia olvidado que eras mudo"
||Luego de saludarlo y entrar a tu casa el auto se va.
||Vas a tu baño a lavarte la cara, te sorprende que todo este como lo dejaste y 
||te vas a acostar a dormir...
||...
||...
||...
||Justo antes de dormirte piensas. "¿Por que la puerta estaba sin llave?"
`
            return historia            
        case "b": 
            historia = `
||"Nos vemos"
||Al abrir la puerta te encuentras que esta cerrada con llave, al pasar esta
||situacion se te olvido usarla antes, asi que la sacas debajo de una piedra y 
||abres la puerta. al entrar ves todo desordenado por el tiempo que la dejaste.
||Al estar tan exsausto por limpiar, te duermes sin querer encima de la ropa 
||sucia en el lavadero del sotano por unos minutos.
||Te despiertas con una gota de agua que te cae del techo. Empiezas a subir las 
||escaleras cuando escuchas unos pasos en tu casa. Por las dudas que te hallan 
||perseguido tomas un cuchillo de la cocina y te diriges a tu habitacion hacia 
||donde van los pasos...
`
            return historia
        case "c": 
            historia = `
||Te dirijes a buscar el dinero para pagarle cuando te acuerdas que dejaste las 
||llaves debajo de una roca. Esta no esta...
||La llave no esta...
||Tampoco la tienes en ningun bolsillo...
||La puerta esta abierta...
||La abres y notas un charco de sangre que viene de tu habitacion. Te acercas y 
||ves dos cuerpos, uno en tu cama y el otro en el suelo.
||No hay nada mas en el piso que sangre.
||Y todo se apaga.
`
            return historia
        case "d": 
            historia = `
||Esperas a que el tercer postre llegue y lo comes desde atras 
||para mas disfrute.
||Tu mision a terminado, y ahora puedes volar tranquilamente...
`
            return historia
        case "e":
            let carita = respuesta[3]
            historia = `
||Al final volviste al mismo lugar... 
`  
            if (carita > 0) {
                return historia.concat(`|| :)`)
            }
            return historia.concat(`|| :(`)
        case "f": 
            historia = `
||¿En serio creias que sin hacer nada la historia avanzaria?...
||Tienes razon ¡GANASTE, FELICIDADES!
||Por desbloquear este final te recompensare con este secreto
||Completa todos los finales.
||Si ya lo hiciste trata de unir todas las historias. Mejor dicho, La Historia.
`
            return historia
        case "g":
            historia = `
||Terminaste todo, acabaste con tu hambre innsasciable, definitivamente no 
||tendras que buscar nada mas, solo descansar... o mejor dicho
`
            return historia
    }
}