import json
import shutil
from pathlib import Path


MAPPING = {
    61: {
        "name": "Protección Caótica",
        "description": "Mediante este hechizo, el sacerdote crea un aura centelleante de luz giratoria que rodea a la criatura escogida.\n\nEsta aura protectora dificulta los ataques cuerpo a cuerpo contra el receptor al proporcionarle +1 a la Clase de Armadura.\n\nContra ataques a distancia o con conjuros dirigidos al receptor, la Protección Caótica es más efectiva: ofrece +2 a la CA y +2 a las tiradas de salvación correspondientes.\n\nAdemás, existe la posibilidad de que proyectiles o conjuros dirigidos sean desviados o reflejados por la energía caótica del escudo.\n\nPara que un conjuro cuente como dirigido directamente al receptor, debe afectar sólo a ese sujeto; conjuros de área que incluyan al receptor no se consideran dirigidos.\n\nEl componente material es una carta de juego usada por un pícaro de alineamiento caótico.",
    },
    62: {
        "name": "Encantar Persona o Mamífero",
        "description": "Este hechizo afecta a una sola persona o mamífero sobre el que es lanzado.\n\nLa criatura considera al lanzador como un amigo y aliado digno de confianza.\n\nEl término persona incluye cualquier bípedo humano, semihumano o humanoide de tamaño humano o menor.\n\nEl hechizo no permite controlar al objetivo como un autómata, pero cualquier palabra o acción del lanzador se interpretará de la manera más favorable.\n\nUna tirada de salvación exitosa rompe el efecto; la duración depende de la Inteligencia del objetivo, con comprobaciones periódicas señaladas en la tabla original.\n\nSi el lanzador daña al encantado o si se lanza un disipar magia con éxito sobre el objetivo, el encanto se rompe automáticamente.\n\nEste hechizo, usado junto con amistad animal, puede mantener a un animal cerca de la base del lanzador si éste debe ausentarse.",
    },
    63: {
        "name": "Crear Símbolo Sagrado",
        "description": "Al pronunciar las palabras de este hechizo aparece de la nada un símbolo sagrado apropiado para la deidad del sacerdote.\n\nEl objeto aparece en las manos del sacerdote y puede utilizarse como componente para otros conjuros o para propósitos como repeler no muertos.\n\nEl símbolo puede entregarse a un sacerdote de menor nivel de la misma deidad.\n\nEl símbolo sagrado creado es un objeto permanente.",
    },
    64: {
        "name": "Curar Heridas Moderadas",
        "description": "Con este hechizo, el sacerdote coloca su mano sobre el cuerpo del sujeto y cura 1d10+1 puntos de daño.\n\nCriaturas incorpóreas, no vivas o extraplanares no pueden ser curadas por este efecto.\n\nLa reversión del hechizo, causar heridas moderadas, inflige 1d10+1 puntos de daño si el sacerdote logra tocar a la víctima.",
    },
    65: {
        "name": "Detectar Encantamiento",
        "description": "Este hechizo permite al sacerdote detectar si una criatura está bajo la influencia de un encanto u otro control similar (hipnosis, sugestión, posesión, etc.).\n\nLa criatura objetivo puede intentar una tirada de salvación contra el conjuro; si la supera, el lanzador no obtiene información sobre esa criatura.\n\nEl lanzador tiene una probabilidad por nivel (5% por nivel) de identificar el tipo exacto de influencia cuando detecta un efecto.\n\nHasta 10 criaturas diferentes pueden ser examinadas antes de que el hechizo decaiga.\n\nLa reversión, encanto indetectable, oculta por completo encantamientos en una criatura durante 24 horas.",
    },
    66: {
        "name": "Festín de Disensión",
        "description": "Este hechizo debe ser lanzado por un sacerdote mientras prepara la comida para una comida.\n\nAfecta una cantidad de alimento (10 libras por nivel del lanzador) y cualquiera que coma la comida encantada queda sujeto a los efectos del hechizo.\n\nCinco rondas después de comer, los afectados hacen una tirada de salvación; los que fracasan se vuelven rápidamente irritables y hostiles entre sí, llegando incluso a insultos y violencia.\n\nEl efecto dura el tiempo indicado y, una vez terminado, los personajes recuperan la conciencia normal sin recordar por qué estaban tan enfadados.",
    },
    67: {
        "name": "Aprovechar Fuerza Divina",
        "description": "Al lanzarse este hechizo, el cuerpo del sacerdote vibra y brilla al convertirse en recipiente del poder de su dios.\n\nEl lanzador puede elegir aumentar una característica (Fuerza, Destreza, Constitución o Carisma) en +1 por cada tres niveles (por ejemplo +1 a nivel 3, +2 a nivel 6, etc.).\n\nSolo una característica puede aumentarse y el efecto dura la duración del hechizo.\n\nCuando el hechizo termina, el sacerdote queda exhausto y debe descansar durante 4d6 turnos (una tirada de Constitución exitosa reduce este tiempo a la mitad).\n\nLos componentes materiales son el símbolo sagrado del sacerdote y un frasco de agua bendita por el sumo sacerdote de la fe.",
    },
    68: {
        "name": "Diablillo de Polvo",
        "description": "Este hechizo permite a un sacerdote conjurar un elemental de aire débil: un diablillo de polvo de CA 4, 2 HD, velocidad 180 pies/rd., 1 ataque por 1d4 puntos de daño.\n\nAparece como un pequeño torbellino que puede moverse según las órdenes del sacerdote, pero se disipa si se separa del lanzador más de 30 yardas.\n\nSu viento apaga antorchas y pequeñas llamas y puede cegar temporalmente si levanta polvo, además de forzar tiradas de concentración a hechiceros que intenten conjurar mientras están dentro de la nube.\n\nCriaturas nativas del Plano Elemental del Aire pueden dispersar fácilmente al diablillo.",
    },
    69: {
        "name": "Percepción Emocional",
        "description": "Este hechizo permite al lanzador percibir el estado emocional y el nivel de determinación de una o más unidades militares.\n\nEl sacerdote debe tener línea de visión al conjunto objetivo y, al lanzar el hechizo, conoce instantáneamente la clasificación y el estado de moral del grupo (ej.: firme, de élite, etc.).\n\nEl componente material es el símbolo sagrado del sacerdote.",
    },
    70: {
        "name": "Fascinar",
        "description": "Con este hechizo un sacerdote puede fascinar a una audiencia que entienda plenamente su idioma.\n\nLos afectados deben superar una salvación o prestar al lanzador su atención total, ignorando el entorno.\n\nEl efecto dura mientras el sacerdote hable, hasta un máximo de una hora, y termina si es atacado o deja de hablar.\n\nCriaturas con 4 o más niveles/HD o Sabiduría 16+ son inmunes; además, razas o religiones hostiles tienen +4 a la tirada de salvación.",
    },
    71: {
        "name": "Barrera Etérea",
        "description": "La barrera etérea protege contra el paso de criaturas extradimensionales (etéreas, en fase o que usen puerta dimensional o caminar en sombras).\n\nEl sacerdote crea cuadrados de 10x10 pies por nivel que pueden disponerse libremente para bloquear el paso en el Borde Etéreo.\n\nEl hechizo no impide teleportación, portales ni el paso de criaturas astrales, y algunos monstruos pueden optar por entrar por medios normales.\n\nPuede lanzarse cooperativamente por varios sacerdotes; los niveles se suman para determinar el área total y la duración depende del lanzador de mayor nivel implicado.\n\nEl componente material es un compuesto especial de tierras raras y plomo (valor mínimo por aplicación).",
    },
    72: {
        "name": "Detectar Trampas",
        "description": "Al lanzar detectar trampas, el sacerdote percibe trampas ocultas, mecánicas o mágicas, en la dirección que esté mirando.\n\nEl hechizo revela la naturaleza general de la trampa (mecánica o mágica), pero no muestra su efecto exacto ni cómo desactivarla; la inspección cercana puede dar pistas sobre el desencadenante.\n\nEl hechizo no detecta peligros naturales ni trampas ya desarmadas.",
    },
    73: {
        "name": "Trampa de Fuego",
        "description": "Cualquier objeto que pueda cerrarse (libro, caja, botella, cofre, ataúd, puerta, cajón, etc.) puede quedar encantado con una trampa de fuego.\n\nAl abrir el objeto, la trampa estalla en un radio de cinco pies desde el centro, forzando tiradas de salvación contra el conjuro.\n\nEl daño es de 1d4 puntos más 1 punto por nivel del lanzador (la mitad si se supera la salvación). Bajo el agua, la trampa inflige la mitad del daño y crea una gran nube de vapor; el objeto encantado no resulta dañado por la explosión.\n\nEl componente material son bayas de acebo.",
    },
    74: {
        "name": "Hoja de Llama",
        "description": "Con este hechizo, el lanzador crea un rayo llameante que surge de su mano y se maneja como una cimitarra.\n\nSi impacta en combate cuerpo a cuerpo, inflige 1d4+4 puntos de daño; criaturas no muertas o especialmente vulnerables al fuego reciben un bono de daño adicional.\n\nNo funciona bajo el agua.\n\nAdemás del símbolo sagrado del lanzador, se requiere una hoja de sumac como componente material.",
    },
    75: {
        "name": "Cofre Travieso",
        "description": "Con este hechizo, el lanzador puede encantar un cofre, libro u otro objeto inanimado de hasta 10'x10'x10'.\n\nCuando cualquier criatura distinta del lanzador se acerca a menos de tres pies, el objeto brota apéndices y se aleja rápidamente, repitiendo el proceso hasta que el encantamiento sea anulado o el objeto sea sometido o destruido.\n\nEl objeto puede desarrollar pies, alas o aletas según convenga, pero solo se moverá por espacios abiertos y no puede atacar.\n\nEl encantamiento termina si el lanzador lo anula, el objeto es destruido o es restringido durante 2-5 rondas consecutivas.\n\nLos componentes materiales son una pata de rana seca, una pluma y una escama de pez.",
    },
    76: {
        "name": "Baya Bendita",
        "description": "Al lanzar baya bendita sobre un puñado de bayas recién recogidas, 2d4 de ellas se vuelven mágicas.\n\nCada baya permite a una criatura hambrienta del tamaño aproximado de un humano recuperar la sensación de haber comido una comida completa, o curar 1 punto de daño físico, hasta un máximo de 8 puntos curados en 24 horas.\n\nLa reversión, baya podrida, produce bayas envenenadas que infligen 1 punto de daño de veneno si se ingieren (sin salvación).\n\nEl componente material es el símbolo sagrado del lanzador pasado sobre las bayas seleccionadas.",
    },
    77: {
        "name": "Calentar Metal",
        "description": "Este hechizo hace que el metal ferroso (hierro, aleaciones de hierro, acero) se vuelva extremadamente caliente.\n\nEn las primeras rondas el metal se calienta y resulta incómodo; en rondas intermedias provoca ampollas y daño, y en las rondas centrales se vuelve abrasador, causando daño por contacto según la tabla original.\n\nArmaduras mágicas pueden resistir con una tirada de salvación de objeto; resistencia al fuego o protección contra fuego anula los efectos.\n\nEste hechizo no funciona bajo el agua.\n\nPor cada dos niveles del lanzador se puede afectar el metal equivalente al equipo de una criatura de tamaño humano (aprox. 50 libras).",
    },
    78: {
        "name": "Alabarda Infernal",
        "description": "Este hechizo encanta un arma en proceso de forja para que sea especialmente brutal en combate.\n\nEl arma debe ser de calidad exquisita (valor mínimo de 50,000 cobre) y estar siendo forjada al lanzarse el hechizo.\n\nEn una tirada natural de 18-20, se tira d10 para determinar efectos críticos (sangrado, aturdimiento, mutilación, etc.).\n\nLos efectos y sus consecuencias se resuelven según la tabla del hechizo; pueden acumularse.",
    },
    79: {
        "name": "Vacilación",
        "description": "Las criaturas afectadas vacilan antes de ejecutar sus acciones, lo que modifica su iniciativa en +4 (en la ronda siguiente a la del lanzamiento).\n\nEl hechizo afecta de 2 a 8 HD o niveles de criaturas; criaturas de 4 o más HD solo afectan a una, como indica la regla.\n\nLos objetivos reciben tiradas de salvación; los que fallan aplican el modificador durante un número de rondas igual al nivel del lanzador.\n\nEl componente material es un fragmento de caparazón de tortuga.",
    },
    80: {
        "name": "Inmovilizar Persona",
        "description": "Este hechizo inmoviliza rígidamente hasta cuatro humanos, semihumanos o humanoides de tamaño humano o menor durante al menos seis rondas (la duración es de 2 rondas por nivel del lanzador; requiere nivel 3).\n\nEl efecto se centra en un punto seleccionado por el lanzador y afecta a las personas dentro del área que él elija.\n\nLos objetivos reciben tiradas de salvación con penalizadores según el número de personas afectadas (menos objetivos implican penalizadores mayores).\n\nLos muertos vivientes son inmunes; criaturas inmovilizadas no pueden moverse ni hablar, aunque permanecen conscientes y pueden usar habilidades que no requieran movimiento o habla.\n\nEl componente material es un pequeño trozo recto de hierro.",
    },
    81: {
        "name": "Idea",
        "description": "Este hechizo estimula la mente del sacerdote para experimentar un destello de entendimiento.\n\nEn términos de juego, el DJ recuerda al jugador del sacerdote un hecho u observación olvidados u omitidos.\n\nSi no existen hechos olvidados, el DJ puede, a su discreción, ofrecer información nueva relevante para la situación.\n\nEl recordatorio debe ser útil pero no desbalancear la partida.\n\nEl componente material es una moneda de oro.\n\nEste hechizo solo puede lanzarse una vez cada seis horas.",
    },
    82: {
        "name": "Vigilia de Hierro",
        "description": "Este hechizo permite al sacerdote ignorar hambre, sed y condiciones climáticas extremas durante un período prolongado.\n\nMientras dura, no necesita comida ni bebida y es inmune a exposición, deshidratación, frío o calor dañinos; no obstante, fenómenos catastróficos pueden dañarle.\n\nPuede meditar en lugar de dormir para mantener la vigilancia, con un -1 a los chequeos de sorpresa.\n\nAl terminar la vigilia debe alimentarse y descansar; si no hay comida o agua, debe hacer chequeos de Constitución o correr el riesgo de entrar en coma y morir.",
    },
    83: {
        "name": "Conocer Alineamiento",
        "description": "Este hechizo permite al sacerdote leer con precisión el aura de alineamiento de una criatura u objeto alineado (los objetos no alineados no revelan nada).\n\nEl lanzador debe permanecer inmóvil y concentrarse un asalto; una salvación exitosa del objetivo impide que el lanzador obtenga información.\n\nEl hechizo tiene una reversión que oculta alineamientos durante 24 horas.",
    },
    84: {
        "name": "Mensajero",
        "description": "Este hechizo invoca a una criatura diminuta (de tamaño T) de inteligencia al menos animal para actuar como mensajero.\n\nEl sacerdote puede atraer al animal con comida y, si falla la tirada de salvación, el animal acepta llevar un mensaje simple o un objeto pequeño hasta el lugar indicado durante la duración del hechizo.\n\nAl acabar la duración, el animal vuelve a su actividad normal.",
    },
    85: {
        "name": "Lectura Mental",
        "description": "Versión sacerdotal sensible del ESP que detecta pensamientos superficiales de criaturas en alcance y permite sondear más profundamente la mente de un solo objetivo.\n\nRevela el tipo de criatura y, en un 20% de los casos, su clase; la calidad de la información depende de la inteligencia del objetivo.\n\nSi se usa en interrogatorio, el objetivo obtiene la salvación con -2; si la supera, resiste el efecto.",
    },
    86: {
        "name": "Momento",
        "description": "Este hechizo determina el 'momento ideal' para ejecutar una acción mientras el hechizo esté activo.\n\nLa acción debe realizarla un aliado diferente al sacerdote; el sacerdote indica el instante correcto, otorgando un +4 (20%) a la probabilidad de éxito de esa acción.\n\nEl hechizo solo puede afectar una acción por asalto y requiere concentración continua del sacerdote.",
    },
    87: {
        "name": "Música de las Esferas",
        "description": "El sacerdote crea tonos y armonías de tal belleza que embelesan a los oyentes, impidiéndoles atacar al sacerdote si fallan su tirada de salvación.\n\nLos afectados se vuelven más susceptibles a conjuros de encanto y sufren -3 a las salvaciones contra ellos.\n\nEl efecto termina si el sacerdote realiza una acción hostil contra un afectado.",
    },
    88: {
        "name": "Transferencia Mística",
        "description": "Hechizo cooperativo que permite a un sacerdote recibir hechizos de otro sacerdote de la misma fe.\n\nMientras el hechizo esté activo, un hechizo dirigido puede canalizarse a través de la transferencia mística hacia el receptor, quien debe lanzarlo inmediatamente o pasarlo a otro con transferencia activa.\n\nEl conjuro transferido conserva el alcance, área y potencia del lanzador original.",
    },
    89: {
        "name": "Oscurecimiento",
        "description": "Este hechizo hace surgir una niebla vaporosa que reduce la visibilidad a 2d4 pies durante la duración (4 rondas por nivel).\n\nEl área afectada crece según el nivel del lanzador (10'x10' por nivel).\n\nUna ráfaga fuerte de viento puede reducir la duración significativamente.\n\nEl hechizo no funciona bajo el agua.",
    },
    90: {
        "name": "Producir Llama",
        "description": "Una llama brillante surge de la palma del lanzador, igual de luminosa que una antorcha.\n\nLa llama puede hurlarse como proyectil (alcance 40 yardas) e inflige 1d4+1 puntos de daño al impactar; además, puede encender materiales combustibles.\n\nEl lanzador puede arrojar hasta una llama por nivel, y puede apagar la llama voluntariamente; el hechizo no funciona bajo el agua.",
    },
    91: {
        "name": "Reagrupar",
        "description": "Este hechizo permite que una unidad objetivo realice inmediatamente una comprobación de moral (rally) durante la Fase de Magia en lugar de esperar la fase de Rally.\n\nSi el sacerdote es de nivel 12 o superior, la unidad recibe +1 a la tirada.\n\nEl sacerdote debe tener línea de visión ininterrumpida con la unidad; el componente es una réplica en miniatura de un estandarte consumida en la tirada.",
    },
    92: {
        "name": "Resistir Ácido y Corrosión",
        "description": "Este hechizo otorga mejor resistencia frente a ácidos, corrosivos y sustancias cáusticas.\n\nMildas corrosiones no dañan al sujeto; ataques más intensos causan la mitad de daño.\n\nEl sujeto también recibe +3 a las salvaciones adecuadas, reduciendo el daño según el resultado.",
    },
    93: {
        "name": "Resistir Fuego/Resistir Frío",
        "description": "Este hechizo endurece el cuerpo del receptor para soportar calor o frío elegidos por el lanzador.\n\nConfiere +3 a las salvaciones contra esos elementos y reduce el daño a la mitad con salvación fallida y a una cuarta parte con salvación exitosa.\n\nDura 1 ronda por nivel del sacerdote.",
    },
    94: {
        "name": "Restaurar Fuerza",
        "description": "El hechizo elimina debilidad o agotamiento no naturales y devuelve al sujeto su fuerza y resistencia normales.\n\nEs útil contra efectos como toque de debilitamiento o fatiga, pero no repara lesiones físicas permanentes ni pérdida de fuerza por causas naturales.",
    },
    95: {
        "name": "Santificar",
        "description": "Hechizo cooperativo que crea una atmósfera beneficiosa en un área determinada.\n\nSeguidores de la deidad ganan +2 a salvaciones contra miedo y encantamiento; seguidores de alineamiento similar pero otra fe ganan +1.\n\nUndead son más fáciles de expulsar para sacerdotes en terreno santificado.\n\nLa duración depende del nivel del lanzador y de colaboradores.\n\nLos componentes son el símbolo sagrado y tierra tomada de un templo existente.",
    },
    96: {
        "name": "Silencio (radio 15')",
        "description": "Al lanzar este hechizo, reina el silencio total en el área afectada: conversaciones y conjuros con componentes verbales quedan imposibles.\n\nPuede centrarse en un objeto o criatura; si es involuntario, la criatura recibe una salvación.\n\nEl hechizo dura 2 rondas por nivel del sacerdote.",
    },
    97: {
        "name": "Retardar Veneno",
        "description": "Cuando se lanza sobre un individuo envenenado antes de que el veneno haga efecto, ralentiza notablemente los efectos del veneno durante la duración del hechizo, esperando permitir una cura posterior.\n\nLos componentes incluyen el símbolo sagrado y un brote de ajo que debe aplicarse sobre la herida o ingerirse si el veneno fue por ingestión.",
    },
    98: {
        "name": "Encantar Serpientes",
        "description": "Este hechizo crea un patrón hipnótico que hace que serpientes cesen la actividad y se balanceen semierguidas.\n\nLa duración varía según el estado de las serpientes y si están enfadadas o no; el lanzador puede encantar serpientes hasta un total de puntos de golpe igual a los suyos.\n\nTambién funciona contra criaturas ofidioides sujetas a resistencia mágica.",
    },
    99: {
        "name": "Ablandar Tierra y Piedra",
        "description": "Este hechizo ablanda tierra o piedra natural en el área: tierra húmeda se vuelve lodo, tierra seca se vuelve arena suelta y la piedra se transforma en arcilla manejable.\n\nPuede afectar un área de 10 pies cuadrado por nivel hasta cierta profundidad.\n\nNo afecta piedra trabajada ni material mágico.\n\nEl componente material es un poco de barbotina (arcilla) de un alfarero maestro.",
    },
    100: {
        "name": "Hablar con Animales",
        "description": "Este hechizo permite al sacerdote comprender y comunicarse con animales normales o gigantes no mindless.\n\nEl sacerdote puede preguntar y recibir respuestas, aunque la cooperación no está garantizada y las respuestas pueden ser cortas o evasivas.\n\nEs distinto de hablar con monstruos: solo funciona con criaturas animales normales o gigantes.",
    },
    101: {
        "name": "Martillo Espiritual",
        "description": "Invocando a su deidad, el lanzador crea un campo de fuerza con forma de martillo que golpea a los oponentes según la concentración del sacerdote.\n\nCada asalto puede atacar al mismo objetivo o cambiar a otro dentro del alcance; acierta como el lanzador y hace daño equivalente a un martillo de guerra más un bono mágico por niveles.\n\nEl martillo desaparece cuando se interrumpe la concentración; puede verse afectado por disipar magia y resistencia mágica.",
    },
    102: {
        "name": "Tropezar",
        "description": "Este hechizo se lanza sobre un objeto ordinario (soga, palo, enredadera) de modo que al cruzarlo las criaturas que fallen la salvación caen y pueden resultar aturdidas o recibir daño si corren.\n\nSolo afecta a criaturas que realmente crucen el objeto; criaturas enormes suelen no verse afectadas.\n\nNo funciona bajo el agua.",
    },
    103: {
        "name": "Deformar Madera",
        "description": "El sacerdote hace que un volumen de madera se curve y deforme, destruyendo su forma y fortaleza.\n\nPuede inutilizar armas de madera, asas o piezas estructurales y dañar barcos o puertas; la madera encantada requiere un lanzador de mayor nivel para afectar.\n\nExiste un hechizo inverso para enderezar la madera.",
    },
    104: {
        "name": "Puño Acuático",
        "description": "Conjura un pseudópodo coherente de agua desde una masa de agua adecuada que puede golpear o constrictir a objetivos siguiendo las órdenes del sacerdote.\n\nEl pseudópodo usa el THAC0 del lanzador y causa daño según nivel; puede estrangular y causar daño adicional por asalto.\n\nSolo puede dañarse con armas mágicas, fuego o frío y se desvanece ante ciertos conjuros que alteran el agua.",
    },
    105: {
        "name": "Retirarse",
        "description": "Este hechizo altera el flujo del tiempo para el sacerdote: mientras los demás experimentan un asalto, el sacerdote puede pasar dos o más asaltos pensando u observando.\n\nDurante la retirada puede memorizar o lanzar únicamente ciertos tipos de conjuros (divinación y cura sobre sí mismo).\n\nCualquier ataque exitoso sobre el sacerdote rompe el efecto.",
    },
    106: {
        "name": "Vigilia de Wyvern",
        "description": "Un halo insustancial parecido a un wyvern protege un área; cualquier criatura que entre puede sufrir parálisis por una ronda por nivel si falla su salvación.\n\nLa vigilancia dura hasta ocho horas sin intrusiones que activen el efecto, y su presencia puede detectarse con distintas probabilidades según la iluminación.",
    },
    107: {
        "name": "Zona de la Verdad",
        "description": "Este hechizo impide que las criaturas dentro de su área pronuncien mentiras deliberadas; las atrapadas reciben una tirada de salvación.\n\nLos afectados pueden evitar responder o ser evasivos, pero no pueden decir mentiras conscientes mientras permanezcan en la zona.\n\nLos componentes incluyen el símbolo sagrado y una gema falsa.",
    },
    108: {
        "name": "Acelerar Curación",
        "description": "Duplica la tasa de curación natural del afectado por 1-4 días: recupera 2 puntos por día de descanso normal o 6 por día en cama.\n\nNo afecta a pociones u otras curaciones mágicas.",
    },
    109: {
        "name": "Adaptación",
        "description": "Hechizo versátil con dos variantes: en batalla otorga a una unidad la capacidad de luchar en un tipo de terreno como si fuera su terreno favorito por varios turnos; en preparación avanzada y junto a un lugar de culto, la adaptación perdura hasta el siguiente ocaso.\n\nRequiere componentes y, en su segunda variante, niveles altos del lanzador.",
    },
    110: {
        "name": "Animar Muertos",
        "description": "Crea esqueletos o zombis a partir de cadáveres que obedecen órdenes simples del lanzador.\n\nEl sacerdote puede animar una criatura por nivel de experiencia; las formas animadas persisten hasta ser destruidas o expulsadas.\n\nRequiere componentes como sangre, carne y polvo de hueso; su uso es moralmente reprobable en muchas culturas.",
    },
    111: {
        "name": "Ventana Astral",
        "description": "Aparece una 'ventana' fija en el aire a través de la cual el sacerdote puede ver el Plano Astral.\n\nPuede enfocar sujetos concretos nombrándolos; la ventana permite ver la zona mostrada y desaparecerá si el lanzador se aleja demasiado.\n\nPasar a través de la ventana tiene una probabilidad baja y limitada por nivel o HD.",
    },
    112: {
        "name": "Invocar Relámpago",
        "description": "Con un tormenta en la zona, el lanzador puede llamar rayos de relámpago hasta un bolt por turno, cada uno causando 2d8 más 1d8 por nivel de lanzador.\n\nEl punto de impacto afecta en un radio de 10 pies; la salvación reduce el daño a la mitad.\n\nSolo funciona al aire libre y con condiciones meteorológicas apropiadas.",
    },
    113: {
        "name": "Caltrops",
        "description": "Permite plantar caltrops mágicos en el terreno que dañan a unidades que lo atraviesen.\n\nExisten versiones para infantería y caballería; las áreas y el daño varían según la versión.\n\nEl lanzador puede terminar el efecto cuando lo desee; los caltrops mágicos no pueden barrerse.",
    },
    114: {
        "name": "Elegir Futuro",
        "description": "En el asalto siguiente al lanzamiento, la criatura afectada realiza dos tiradas para un ataque, iniciativa o salvación y elige la que prefiera.\n\nLos componentes incluyen dos granos de arena y un pétalo de rosa.",
    },
    115: {
        "name": "Luz Continua",
        "description": "Similar a una luz, pero tan brillante como la luz del día y permanente hasta ser anulada por oscuridad mágica o disipar magia.\n\nPuede cegar a criaturas y consume lentamente el material sobre el que se lanza.",
    },
    116: {
        "name": "Controlar Animal",
        "description": "Permite al sacerdote forzar a un animal a obedecer comandos simples si falla su salvación; el control dura 1 ronda por nivel.\n\nComandos suicidas permiten otra salvación; animales mágicos o monstruos son inmuebles.\n\nDruidas rehuirán su uso.",
    },
    117: {
        "name": "Crear Campamento",
        "description": "Genera sirvientes invisibles que montan un campamento completo para el grupo: limpian el área, levantan tiendas, encienden fuego y preparan comida en 4-16 rondas.\n\nEl campamento queda camuflado para reducir la detección, y el hechizo tiene reverso para desmontar y limpiar el lugar.",
    },
    118: {
        "name": "Crear Alimentos y Agua",
        "description": "Causa la aparición de comida nutritiva y agua; cada pie cúbico sustenta tres humanos o un caballo por un día.\n\nLa comida se estropea en 24 horas salvo que se aplique purificar comida y agua.\n\nLa cantidad creada depende del nivel del sacerdote.",
    },
    119: {
        "name": "Curar Ceguera o Sordera",
        "description": "Tocando a la criatura afectada, el sacerdote puede curar permanentemente algunas formas de ceguera o sordera no causadas por daño físico irreversible.\n\nLa reversión inflige ceguera o sordera mediante toque si el objetivo falla la salvación.",
    },
    120: {
        "name": "Curar Enfermedad",
        "description": "Permite al lanzador curar la mayoría de las enfermedades al tocar a la criatura; la recuperación puede tardar desde un turno hasta varios días según la enfermedad.\n\nA niveles altos puede curar licantropía si se lanza pronto.\n\nNo evita reinfección si el sujeto se expone de nuevo.",
    },
    321: {
        "name": "El Gran Círculo",
        "description": "Hechizo cooperativo poderoso usado por varios sacerdotes para purificar y defender un terreno; genera un halo dorado que daña a no-muertos y seres malvados dentro del área y proporciona efectos de limpieza para construir santuarios. Requiere varios lanzadores y tiempo largo de invocación.",
    },
    322: {
        "name": "Transmutar Agua en Polvo",
        "description": "Convierte el agua presente en el área en un polvo seco e inerte (1 cu. yd./nivel). El polvo puede volverse lodo si vuelve a contacto con agua; criaturas nativas del Plano del Agua son severamente dañadas si fallan su salvación. Componentes: polvo de diamante y concha marina.",
    },
    323: {
        "name": "Transporte por Plantas",
        "description": "Permite al lanzador entrar en una planta viva y salir de otra de la misma especie a cualquier distancia en una sola ronda. Ambas plantas deben estar vivas; existe un pequeño riesgo de desviación aleatoria. Componentes: toque a la planta y concentración.",
    },
    324: {
        "name": "Girar Madera",
        "description": "Emite ondas de fuerza que empujan y desplazan objetos de madera en la dirección indicada; piezas pequeñas pueden quebrarse. Afecta un camino largo según nivel y dura 1 ronda por nivel. No mueve objetos clavados firmemente.",
    },
    325: {
        "name": "Muro de Espinas",
        "description": "Crea una barrera densa de espinas afiladas que infligen daño a quienes la atraviesen (8 pts base más AC/espesor) y es resistente al fuego normal. La barrera puede formarse en múltiples orientaciones y dura 1 turno por nivel.",
    },
    326: {
        "name": "Invocar Tiempo",
        "description": "Convoca condiciones meteorológicas apropiadas al clima y estación local; la duración y el área varían según el lanzamiento. No otorga control total y varias casters pueden amplificar la fuerza del fenómeno.",
    },
    327: {
        "name": "Torbellino",
        "description": "Crea un ciclón violento que arrastra y daña criaturas en su radio; puede levantarlas y mantenerlas suspendidas, causándoles daño continuo. El lanzador debe concentrarse para dirigirlo; si se pierde el control, el tornado se vuelve errático.",
    },
    328: {
        "name": "Palabra de Retorno",
        "description": "Transporta al sacerdote instantáneamente a su santuario designado cuando pronuncia la palabra de retorno. Transporta también una cantidad limitada de peso por nivel. Riesgo acumulativo al viajar entre planos.",
    },
    329: {
        "name": "Envejecer Dragón",
        "description": "Permite ajustar la edad (y por tanto el poder) de un dragón por intervalos según el nivel del lanzador; los dragones pueden salvar con penalizador para resistir. Cambios temporales pueden ser letales si el dragón sufre daño durante la transformación.",
    },
    330: {
        "name": "Animar Roca",
        "description": "Imbuye una masa de piedra con movimiento y voluntad limitada para atacar o ejecutar una orden simple. El volumen animable depende del nivel; el objeto usa el ataque del lanzador y tiene puntos de golpe por pie cúbico.",
    },
    331: {
        "name": "Caparazón Antimineral",
        "description": "Crea un campo que impide la entrada de criaturas minerales o constructs y objetos animados por magia; no bloquea no-muertos ni materia inanimada no animada. Se desplaza con el lanzador y dura 1 turno por nivel.",
    },
    332: {
        "name": "Hechizo Astral",
        "description": "Proyecta el cuerpo astral del sacerdote al Plano Astral, dejando el cuerpo físico atrás. Permite viajar entre planos y regresar si la conexión (cordón plateado) permanece intacta. Puede proyectar a varios colegas si se realiza en círculo.",
    },
    333: {
        "name": "Aliento de Vida",
        "description": "Una poderosa exhalación curativa que puede erradicar una enfermedad a gran escala en una comunidad y curar masivamente a los afectados por la plaga declarada por el lanzador. No cura aflicciones mágicas como la licantropía.",
    },
    334: {
        "name": "Bastón Cambiante",
        "description": "Convierte un bastón preparado en una criatura tipo treant enorme que protege y obedece al lanzador durante un número de turnos igual a su nivel. Requiere un bastón especialmente preparado y ritual previo.",
    },
    335: {
        "name": "Carro de Sustarre",
        "description": "Invoca un gran carro llameante tirado por caballos ígneos desde el Plano del Fuego. El vehículo transporta al lanzador y hasta siete acompañantes y causa daño a quienes se acerquen demasiado. Dura 12 horas.",
    },
    336: {
        "name": "Confusión",
        "description": "Sembrar desorientación entre varias criaturas, forzándolas a acciones erráticas según una tabla o a vagar sin rumbo. Afecta a varios objetivos y dura 1 ronda por nivel; permite salvación para evitar el efecto.",
    },
    337: {
        "name": "Convocar Elemental de Aire o Agua",
        "description": "Invoca un elemental de aire o agua para servir al lanzador; la potencia del elemental varía según tiradas de probabilidad. El elemental ve al sacerdote como aliado y obedece sin necesidad de concentración prolongada.",
    },
    338: {
        "name": "Convocar Elemental de Tierra",
        "description": "Llama a un elemental de tierra para ayudar al lanzador. La potencia y HD del elemental varían; obedece al invocador hasta ser destruido, enviado o disuelto por la duración.",
    },
    339: {
        "name": "Controlar Tiempo",
        "description": "Permite cambiar las condiciones meteorológicas locales por horas; afecta precipitación, temperatura y viento en un área grande. Requiere tiempo y la magia es más efectiva en manos de lanzadores especializados en clima.",
    },
    340: {
        "name": "Doom Arrollador",
        "description": "Convoca una masa arrolladora de insectos y artrópodos que se desplaza por el terreno causando daño por picaduras y mordiscos. La plaga se mantiene por varias rondas y puede dispersarse por viento o fuego.",
    },
    341: {
        "name": "Ojo del Vidente",
        "description": "Crea un orbe flotante que observa áreas lejanas; transmite imágenes al lanzador durante 1 minuto por nivel. El orbe es sutil y puede ser detectado con dificultad por magia de detección.",
    },
    342: {
        "name": "Mano Silenciosa",
        "description": "Genera una mano espectral que manipula objetos pequeños sin hacer ruido, ideal para abrir cerraduras o robar discretamente. La mano desaparece si recibe daño.",
    },
    343: {
        "name": "Llama Embrujada",
        "description": "Invoca una llama azul que no consume combustible y puede adherirse a un objetivo para causar daño prolongado. No es visible a distancia por observadores casuales.",
    },
    344: {
        "name": "Niebla Camufladora",
        "description": "Genera una niebla espesa que confunde la vista y distorsiona sonidos, proporcionando cobertura y dificultando las tiradas de ataque a distancia dentro del área.",
    },
    345: {
        "name": "Sello del Guardián",
        "description": "Traza un sello mágico sobre una puerta o cofre que causa daño y alarma si criaturas no autorizadas intentan abrirlo. El sello puede ser detectado y disipado con magia apropiada.",
    },
    346: {
        "name": "Susurro de los Antiguos",
        "description": "Permite al lanzador escuchar ecos del pasado en un lugar determinado; revela eventos importantes ocurridos allí, sujetos a la interpretación del DM.",
    },
    347: {
        "name": "Cordón de Protección",
        "description": "Crea una línea mágica que protege contra entradas hostiles: criaturas que la crucen sufren penalizadores y deben salvar para evitar efectos nocivos temporales.",
    },
    348: {
        "name": "Plantar Sombras",
        "description": "Hace brotar sombras sólidas que actúan como barreras y pueden sujetar a criaturas; ideal para ralentizar avances enemigos. Las sombras son vulnerables a la luz intensa.",
    },
    349: {
        "name": "Onda Curativa",
        "description": "Emite una ola de energía restauradora que cura a aliados en un cono frontal; la eficiencia depende del nivel del lanzador y no revive a los muertos.",
    },
    350: {
        "name": "Lengua de Bestia",
        "description": "Permite entender y comunicarse con animales durante una hora por nivel, facilitando el entrenamiento, el rastreo y la negociación con criaturas no inteligentes.",
    },
    351: {
        "name": "Mirada Paralizadora",
        "description": "Inflige miedo y parálisis temporales con una mirada dirigida; los objetivos pueden salvar para evitar quedar inmovilizados por varias rondas.",
    },
    352: {
        "name": "Puerta de Sombra",
        "description": "Abre una puerta interdimensional hacia una sombra cercana; permite paso instantáneo pero con riesgo de pérdida de orientación y ligeras distorsiones temporales.",
    },
    353: {
        "name": "Campo de Zumbido",
        "description": "Genera un campo de energía que interfiere con conjuros de concentración y comunicaciones mágicas dentro de su área por un número limitado de rondas.",
    },
    354: {
        "name": "Lazo de Raíces",
        "description": "Hace surgir raíces que atrapan y enredan a criaturas en el suelo, reduciendo movilidad e infligiendo daño por estrangulamiento si no logran liberarse.",
    },
    355: {
        "name": "Oído del Bosque",
        "description": "Sintoniza al lanzador con los sonidos naturales de un bosque; permite detectar intrusos, identificar especies y oír señales a grandes distancias.",
    },
    356: {
        "name": "Espejismo Menor",
        "description": "Crea ilusiones visuales simples para distraer o engañar; no engaña a criaturas que pasen exitosamente una tirada de salvación contra ilusiones.",
    },
    357: {
        "name": "Capa de Niebla",
        "description": "Envuelve al objetivo en una nube que reduce la visibilidad y concede ventaja a las acciones furtivas; la nube se disipa con el tiempo o por viento fuerte.",
    },
    358: {
        "name": "Toque Glacial",
        "description": "Un golpe gélido que reduce temporalmente la velocidad y causa daño por frío; superficies húmedas pueden congelarse bajo el efecto del conjuro.",
    },
    359: {
        "name": "Rastro Ancestral",
        "description": "Revela huellas y rastros antiguos en el terreno, incluso aquellas que han sido borradas por el paso del tiempo, facilitando el seguimiento y la investigación histórica.",
    },
    360: {
        "name": "Manto de Estrellas",
        "description": "Crea un manto protector con motas de luz que reducen el daño de impactos críticos y confieren una ligera regeneración por turno durante la noche.",
    },
    361: {
        "name": "Pulso Arcano",
        "description": "Emite una descarga de energía mágica que interrumpe conjuros en curso y puede desactivar dispositivos mágicos menores temporalmente.",
    },
    362: {
        "name": "Creciente de Sombras",
        "description": "Una media luna de oscuridad sólida que corta la luz y daña a criaturas sensibles a la oscuridad; ideal para emboscadas nocturnas.",
    },
    363: {
        "name": "Bendecir Armas",
        "description": "Imbuye armas cercanas con energía sagrada, aumentando el daño contra no-muertos y otorgando precisión adicional durante la duración.",
    },
    364: {
        "name": "Murmullos del Viento",
        "description": "Envía mensajes cortos mediante corrientes de aire que solo oyen los receptores predefinidos; útil para comunicación sigilosa.",
    },
    365: {
        "name": "Pies de Pluma",
        "description": "Reduce el ruido y el impacto al andar del objetivo, ideal para infiltración; también reduce daño por caídas pequeñas.",
    },
    366: {
        "name": "Corazón de Piedra",
        "description": "Otorga resistencia física temporal y un aumento en la salvación contra miedo y efectos mentales fuertes.",
    },
    367: {
        "name": "Visión de la Marea",
        "description": "Permite al lanzador ver corrientes submarinas, criaturas ocultas y estructuras sumergidas como si fueran diurnas y claras.",
    },
    368: {
        "name": "Corte Relámpago",
        "description": "Un ataque de energía que atraviesa armaduras ligeras, infligiendo daño eléctrico adicional a objetivos con conductividad.",
    },
    369: {
        "name": "Ancla Astral",
        "description": "Fija temporalmente la posición astral del lanzador o un aliado, evitando desplazamientos forzosos por teletransporte o efectos similares.",
    },
    370: {
        "name": "Barrera Resonante",
        "description": "Crea una barrera que refleja parte de la energía sonora y vibratoria, protegiendo contra ataques sónicos y trampas basadas en vibración.",
    },
    371: {
        "name": "Ráfaga Curativa",
        "description": "Pequeña explosión de energía que cura heridas leves en aliados cercanos y calma hemorragias; no restaura miembros perdidos.",
    },
    372: {
        "name": "Rastro Ilusorio",
        "description": "Deja un rastro ilusorio que confunde perseguidores, haciéndoles creer que el grupo tomó una dirección diferente.",
    },
    373: {
        "name": "Nudo Protector",
        "description": "Un lazo mágico que ata objetos o puertas, reforzando cerraduras y dificultando rupturas por fuerza bruta.",
    },
    374: {
        "name": "Llama Sanadora",
        "description": "Llama tenue que cura quemaduras y purifica heridas; su uso repetido puede acelerar la recuperación de tejidos superficiales.",
    },
    375: {
        "name": "Velo de Ilusión",
        "description": "Permite ocultar temporalmente la presencia del lanzador mediante una ilusión visual y olfativa que engaña a observadores casuales.",
    },
    376: {
        "name": "Puño de Roca",
        "description": "Convoca un enorme puño de piedra que golpea a un objetivo seleccionado, causando daño contundente masivo y alterando el terreno.",
    },
    377: {
        "name": "Suspiro del Bosque",
        "description": "Evoca un susurro natural que calma criaturas agresivas y puede inducir sueño ligero a bestias menores; funciona mejor en zonas boscosas.",
    },
    378: {
        "name": "Mapa Viviente",
        "description": "Crea una proyección temporal del terreno circundante que se actualiza en tiempo real, útil para orientación y planificación táctica.",
    },
    379: {
        "name": "Sello de Silencio",
        "description": "Coloca un sello en un área que suprime sonidos y habla, impidiendo comunicación verbal dentro de su radio durante la duración.",
    },
    380: {
        "name": "Tempestad Interior",
        "description": "Desata una tormenta personal que envuelve al lanzador, dañando a enemigos cercanos y otorgando protección contra ataques a distancia.",
    },
    381: {
        "name": "Nudo de Sombras",
        "description": "Conjura sombras que se enroscan alrededor de un objetivo, reduciendo su movilidad y dificultando acciones que requieran destreza.",
    },
    382: {
        "name": "Bendición de la Lámpara",
        "description": "Otorga a una fuente de luz propiedades mágicas que ahuyentan criaturas sensibles a la luz y revelan ilusiones cercanas.",
    },
    383: {
        "name": "Pilar del Guardián",
        "description": "Erige una columna de piedra animada que protege un punto y ataca a quienes se aproximen, obedeciendo órdenes simples del lanzador.",
    },
    384: {
        "name": "Pasos Silentes",
        "description": "Hace que los movimientos del objetivo no dejen rastro sonoro ni huellas visibles durante la duración del conjuro.",
    },
    385: {
        "name": "Voz de la Marea",
        "description": "Permite comunicarse con criaturas marinas y llamar a ayuda de fauna acuática local por un breve periodo.",
    },
    386: {
        "name": "Círculo Restaurador",
        "description": "Dibuja un círculo que lentamente regenera heridas y purifica venenos menores de quienes se encuentren dentro.",
    },
    387: {
        "name": "Quemadura Etérea",
        "description": "Inflige daño etéreo que atraviesa protecciones físicas, siendo especialmente efectivo contra criaturas parcialmente incorpóreas.",
    },
    388: {
        "name": "Lazo Mental",
        "description": "Establece un vínculo telepático breve entre aliados cercanos, permitiendo intercambio de pensamientos simples.",
    },
    389: {
        "name": "Cosecha Nocturna",
        "description": "Acelera el crecimiento y la maduración de plantas en una parcela pequeña, útil para cultivos y rituales vegetales.",
    },
    390: {
        "name": "Rugido Elemental",
        "description": "Emite un estruendo elemental que aturde a criaturas y puede desestabilizar focos mágicos de baja potencia.",
    },
    391: {
        "name": "Capa de Carbón",
        "description": "Cubre la piel u objeto con una película negra que oculta huellas y reduce la detección por rastreadores.",
    },
    392: {
        "name": "Somnolencia Serena",
        "description": "Induce sueño ligero a criaturas no resistentes, creando oportunidades para evitar confrontaciones o capturar prisioneros.",
    },
    393: {
        "name": "Foco de Claridad",
        "description": "Concentra la mente del objetivo, eliminando confusión y mejorando la concentración para acciones complejas por tiempo limitado.",
    },
    394: {
        "name": "Marea de Hielo",
        "description": "Despliega una ola congelante que ralentiza y daña a enemigos en su avance; superficies quedarán resbaladizas.",
    },
    395: {
        "name": "Redención Menor",
        "description": "Reduce temporalmente la malignidad de espíritus menores, facilitando su negociación o recolección sin violencia.",
    },
    396: {
        "name": "Eco Lúgubre",
        "description": "Crea ecos que confunden a enemigos en la percepción del espacio, propagando sonidos falsos y distrayendo guardias.",
    },
    397: {
        "name": "Pétalo Cortante",
        "description": "Lanza una lluvia de pétalos afilados que cortan y causan sangrado leve en un área concentrada.",
    },
    398: {
        "name": "Fuerza Compartida",
        "description": "Permite redistribuir parte de la vitalidad entre aliados, transfiriendo puntos temporales para equilibrar bajas críticas.",
    },
    399: {
        "name": "Mapa de Corrientes",
        "description": "Revela corrientes de energía mágica bajo la superficie local, útil para encontrar fuentes de poder y evitar trampas arcanas.",
    },
    400: {
        "name": "Ascensión del Héroe",
        "description": "Otorga un aumento temporal de capacidades físicas y mentales, inspirando a aliados cercanos y mejorando proezas heroicas por varios minutos.",
    },
    401: {
        "name": "Llama Conmutada",
        "description": "Convierte una llama común en una llama mágica que arde sin consumirse y puede aplicar efectos elementales menores al contacto.",
    },
    402: {
        "name": "Barrera de Ceniza",
        "description": "Levanta una barrera de ceniza que obstaculiza la visión y quema ligeramente a quien la atraviese; útil contra avanzadas rápidas.",
    },
    403: {
        "name": "Toque de Serenidad",
        "description": "Calma emociones violentas y reduce la hostilidad por un breve periodo; funciona mejor con criaturas humanoides.",
    },
    404: {
        "name": "Vínculo de Almas",
        "description": "Crea un lazo empático entre dos aliados que permite compartir sensaciones y coordinar acciones con mejor sincronía.",
    },
    405: {
        "name": "Hoja de Bruma",
        "description": "Materializa una cuchilla de niebla que corta como acero pero desaparece con la luz intensa; ideal para ataques furtivos.",
    },
    406: {
        "name": "Guardia Silvestre",
        "description": "Convoca espíritus menores del bosque que patrullan un área y alertan sobre criaturas hostiles.",
    },
    407: {
        "name": "Onda Saneadora",
        "description": "Emite una onda curativa que alivia heridas superficiales y alivia el dolor, mejorando la movilidad momentáneamente.",
    },
    408: {
        "name": "Tormenta de Fantasmas",
        "description": "Invoca apariciones menores que hostigan y distraen a los enemigos, reduciendo su moral y concentración.",
    },
    409: {
        "name": "Capa de Inercia",
        "description": "Añade masa al objetivo para reducir la velocidad de empujes y arrollamientos, ideal para fijar posiciones.",
    },
    410: {
        "name": "Rayo Purificador",
        "description": "Un rayo de luz que disipa corrupción menor y puede dañar a criaturas con alineamientos malignos.",
    },
    411: {
        "name": "Manto de Humo",
        "description": "Cubre al lanzador con humo denso que oculta su figura y dificulta la puntería enemiga.",
    },
    412: {
        "name": "Punta Fluvial",
        "description": "Concentra agua en una lanza líquida que puede ser lanzada con fuerza para herir y empujar objetivos.",
    },
    413: {
        "name": "Trampa de Escarcha",
        "description": "Dispara hielo que se adhiere al suelo, creando zonas resbaladizas y dañando a los que las atraviesan.",
    },
    414: {
        "name": "Ecos del Pasado",
        "description": "Reproduce fragmentos de conversaciones o sonidos antiguos en un lugar, útil para distracciones o investigación.",
    },
    415: {
        "name": "Velo Reparador",
        "description": "Cubre un objeto o persona con un velo que acelera la curación superficial y protege contra corrosión menor.",
    },
    416: {
        "name": "Efusión de Fuego",
        "description": "Una ráfaga concentrada de fuego que puede encender materiales inflamables y causar daño por quemadura.",
    },
    417: {
        "name": "Senda Iluminada",
        "description": "Ilumina un camino invisible sólo para aliados, evitando emboscadas y señales externas.",
    },
    418: {
        "name": "Anillo del Vigía",
        "description": "Crea un anillo que observa y alerta sobre acercamientos hostiles, pudiendo también transmitir señales simples.",
    },
    419: {
        "name": "Lazo de Llama",
        "description": "Aturde y enciende ligeramente a un objetivo con un lazo de fuego ritual; adecuado contra criaturas vulnerables al calor.",
    },
    420: {
        "name": "Marea de Tierras",
        "description": "Levanta o hunde tramos de terreno en una onda que puede bloquear rutas y crear cobertura instantánea.",
    },
    421: {
        "name": "Susurro Etéreo",
        "description": "Envía un mensaje breve a través del plano etéreo que sólo puede ser escuchado por el receptor designado.",
    },
    422: {
        "name": "Piedra de Anclaje",
        "description": "Fija objetos móviles a un punto del terreno con vínculos mágicos, evitando desplazamientos no deseados.",
    },
    423: {
        "name": "Aura de Valor",
        "description": "Confiere coraje temporal a aliados cercanos, reduciendo efectos de miedo y mejorando la resistencia moral.",
    },
    424: {
        "name": "Candado Arcano",
        "description": "Sella una cerradura con energía mágica que sólo se abre con la llave o palabra correcta; resistente a apertura forzada.",
    },
    425: {
        "name": "Toque Eterno",
        "description": "Imprime una marca mágica que permite rastrear a la criatura marcada a través de distancias moderadas por un tiempo limitado.",
    },
    121: {
        "name": "Detectar Espíritus",
        "description": "Esta divinación revela la presencia de espíritus incorpóreos o entidades no corpóreas (fantasmas, espectros, wraiths, proyecciones astrales, objetos poseídos, espíritus de la naturaleza) en un camino de 10x60 pies.\n\nDetectar un espíritu no concede por sí mismo comunicación ni facultad de atacarlo.\n\nEl componente material es un colgante de cobre pequeño valorado en al menos 20 gp.",
    },
    122: {
        "name": "Dictar",
        "description": "Versión mejorada de command que afecta hasta 6 criaturas dentro de un cubo de 20 pies: el lanzador dicta una orden de hasta una docena de palabras y los objetivos que fallen su salvación intentan obedecerla por la duración.\n\nLos sujetos que no entienden el idioma quedan inmunes; órdenes confusas o suicidas otorgan bonificaciones a la tirada de salvación o efectos especiales según el DM.",
    },
    123: {
        "name": "Disipar Magia",
        "description": "Este hechizo tiene la capacidad de neutralizar o anular magias y efectos similares en su área: puede eliminar conjuros, interrumpir hechizos en curso o destruir pociones mágicas.\n\nLa probabilidad de disipar depende de la diferencia de niveles entre el efecto y el lanzador; un 20 siempre tiene éxito y un 1 siempre falla.\n\nNo afecta artefactos y ciertos efectos pueden ser resistentes según el DM.",
    },
    124: {
        "name": "Barrera Antimonstruo Eficaz",
        "description": "Previene que monstruos de 2 o menos HD entren en el área afectada (con salvación para evitarlos).\n\nEl área es un cubo cuyo lado es 10 pies por nivel del lanzador; monstruos presentes al lanzar el hechizo no quedan atrapados, pero no pueden volver a entrar.\n\nComponentes: símbolo sagrado y una pizca de sal.",
    },
    125: {
        "name": "Control de Emociones",
        "description": "Hechizo con dos usos: protege al sacerdote ocultando sus emociones reales o induce una emoción específica en los sujetos (valor, miedo, amistad, odio, esperanza, desesperanza, felicidad, tristeza) con efectos mecánicos variados.\n\nLa versión que afecta a otros permite imponer una reacción emocional con salvación del objetivo; la versión de protección otorga bonificaciones a salvaciones contra varios conjuros.",
    },
    126: {
        "name": "Detección Extradimensional",
        "description": "Detecta espacios extradimensionales o bolsillos (como rope trick, bolsas mágicas, agujeros portables) en un camino de 10x60 pies en la dirección que el sacerdote esté mirando.\n\nNo revela tamaño ni fuente exacta y puede obstruirse por muros de cierto grosor o material.",
    },
    127: {
        "name": "Fingir Muerte",
        "description": "Pone a un individuo voluntario en un estado catatónico indistinguible de la muerte: inmóvil y sin sensaciones externas, aunque consciente internamente.\n\nProtege contra veneno, parálisis o drenaje de energía mientras dura; el efecto termina cuando el sacerdote lo decide o se agota la duración.",
    },
    128: {
        "name": "Caminar sobre Fuego",
        "description": "Permite a uno o más seres resistir fuegos no mágicos de hasta 2,000 °F (incluso lava), confiriendo además +2 a salvaciones contra fuego mágico y reduciendo el daño a la mitad.\n\nNo es acumulativo con resistir fuego y requiere componentes valiosos como polvo de rubí.",
    },
    129: {
        "name": "Fortificar",
        "description": "Prepara un área como posición defensiva: levanta diques, muros de piedra y obstáculos según el terreno, proporcionando cobertura y penalidades al movimiento de los atacantes.\n\nLas fortificaciones son permanentes salvo erosión o demolición; el componente es un caparazón de caracol con polvo de diamante.",
    },
    130: {
        "name": "Glifo de Protección",
        "description": "Inscripción mágica que protege o actúa como trampa sobre una zona u objeto; la condición del glifo determina quién activa sus efectos.\n\nPuede causar daño, parálisis, ceguera u otros efectos según lo configurado y permanece hasta ser descargado o disipado.\n\nRequiere incienso y, para áreas grandes, polvo de diamante.",
    },
    131: {
        "name": "Mano Auxiliar",
        "description": "Crea una imagen espectral de una mano que, durante hasta 1 hora por nivel, puede buscar y guiar a un personaje descrito físicamente dentro de un radio de 5 millas; la criatura no está obligada a seguirla.\n\nLa mano no puede luchar ni interactuar físicamente más allá de señalar el camino.",
    },
    132: {
        "name": "Inmovilizar Animal",
        "description": "Inmoviliza de 1 a 4 animales normales o gigantes (no monstruos) en un cubo de 40 pies; la duración es de 2 rondas por nivel y cada animal recibe una salvación, con penalizadores según el número de objetivos.\n\nExiste un límite de peso por nivel para los animales afectados.",
    },
    133: {
        "name": "Contener Veneno",
        "description": "Versión mejorada de slow poison que detiene el avance del veneno durante días en lugar de horas.\n\nDebe lanzarse durante la fase de inicio del veneno para ser efectiva; repetir la aplicación retrasa el efecto pero existe una pequeña probabilidad acumulativa de fallo.\n\nComponentes: símbolo sagrado y ajo.",
    },
    134: {
        "name": "Purga de Invisibilidad",
        "description": "Hace visibles a las criaturas invisibles que entren en el área encantada; conjuros y pociones de invisibilidad no funcionan dentro del área y algunos efectos naturales de invisibilidad quedan anulados mientras dure la purga.\n\nEl área y la duración pueden incrementarse mediante lanzamiento cooperativo.",
    },
    135: {
        "name": "Conocer Costumbres",
        "description": "Otorga conocimiento general de las costumbres, leyes y etiqueta social de una tribu o aldea, proporcionando una bonificación de +1 a las reacciones con miembros locales.\n\nRequiere la presencia de un miembro conocedor y puede fallar si éste supera su salvación.",
    },
    136: {
        "name": "Línea de Protección",
        "description": "Hechizo cooperativo que crea un campo de fuerza lineal entre dos anclajes (símbolos o sacerdotes).\n\nEl campo causa daño a las criaturas que lo cruzan (1d3 o 1d8 contra no muertos/evil) y puede ser estacionario o móvil (los sacerdotes pueden caminar manteniéndolo).\n\nRequiere alineación y croziers o estandartes.",
    },
    137: {
        "name": "Localizar Objeto",
        "description": "Ayuda a localizar un objeto conocido o familiar dentro del alcance; el lanzador gira hasta sentir que apunta hacia el objeto.\n\nFunciona con objetos comunes y se bloquea por plomo; requiere el uso de una pieza de magnetita.",
    },
    138: {
        "name": "Vestidura Mágica",
        "description": "Encanta la vestimenta del lanzador otorgándole protección equivalente al menos a malla y mejorando su AC con un bono según niveles (duración limitada).\n\nSi se usa con otra armadura, solo se aplica la mejor protección.",
    },
    139: {
        "name": "Fundirse en la Piedra",
        "description": "Permite al sacerdote fundirse con un bloque de piedra lo bastante grande para ocultar su cuerpo y hasta 100 libras de equipo; permanece consciente pero aislado sensorialmente.\n\nSi la piedra se destruye o el efecto termina mientras ocupa menos espacio del necesario, el lanzador sufre daño o puede morir.",
    },
    140: {
        "name": "Leer Memoria",
        "description": "Permite al sacerdote leer la memoria de un sujeto, experimentándola con la misma intensidad; la duración de la visión es fraccionaria del tiempo real.\n\nEl sujeto recibe una salvación; memorias muy antiguas piden salvaciones adicionales.\n\nEl hechizo consume Constitución temporalmente y requiere un componente de tela con hilos de oro.",
    },
    141: {
        "name": "Magia Errática",
        "description": '''La magia errática solo puede lanzarse sobre un mago.

Hace que el siguiente conjuro que lance el mago sea elegido al azar entre sus conjuros memorizados de igual o menor nivel.

Así, si un mago afectado tiene cuatro conjuros memorizados de 1er nivel (por ejemplo: armor, feather fall, jump y sleep) y trata de lanzar sleep, el DM determina aleatoriamente cuál de los cuatro se efectúa. El mago solo tiene un 25% de probabilidad de lanzar el conjuro deseado.

Solo los conjuros actualmente memorizados son candidatos al intercambio. Si el mago solo tiene un conjuro memorizado, la magia errática no tiene efecto y el conjuro se lanza normalmente.

El conjuro equivocado funciona con normalidad. Si, por ejemplo, el mago intenta levitar a un compañero y resulta un web, el compañero queda atrapado en las redes y sufre las consecuencias normales. Si el objetivo del conjuro deseado estaba en alcance pero el efecto sustituido no lo está, el conjuro falla y se borra de la memoria del lanzador.

El mago realiza los componentes verbales y somáticos del conjuro que intentaba lanzar y no descubre el resultado equivocado hasta que aparece. Además, el componente material del conjuro resultante (si lo hubiese) desaparece. Los magos objetivo de la magia errática tienen derecho a una tirada de salvación contra conjuros para evitar el efecto.''',
    },
    142: {
        "name": "Lectura del Momento",
        "description": '''Este conjuro permite al sacerdote determinar el "tono del ahora": la fuerza o circunstancia predominante en ese instante.

Al lanzarlo, el sacerdote genera una serie de números aleatorios y estudia el patrón; en términos de juego, el DM comunica al jugador del sacerdote una palabra o frase corta (máximo cinco palabras) que describe la situación (por ejemplo: "peligro inminente", "paz y tranquilidad", "traición").

El comentario del DM puede ser críptico, pero debe ser exacto y ofrecer información útil. La lectura siempre se aplica personalmente al sacerdote y a quienes estén en su inmediata cercanía; la definición de "cercanía" la decide el DM según las circunstancias.

Una lectura contamina lecturas posteriores durante un periodo corto: si un sacerdote vuelve a lanzar este conjuro en menos de 12 horas, la segunda lectura dará el mismo resultado que la primera. Sin embargo, otro sacerdote que lance el conjuro dentro de 12 horas recibe una lectura precisa.

Componente material: un juego de 36 pequeñas fichas de hueso pulido con runas numéricas; no se consumen.''',
    },
    143: {
        "name": "Protección contra el Plano Negativo",
        "description": '''Este conjuro confiere protección parcial contra no muertos ligados al Plano Negativo (sombras, wights, wraiths, espectros, vampiros) y frente a armas o conjuros que drenan niveles.

La protección abre un canal hacia el Plano de la Energía Positiva que puede contrarrestar un ataque de energía negativa. Si una criatura protegida es golpeada por tal ataque, recibe una tirada de salvación contra muerte mágica; si la salva, las energías se cancelan con un destello de luz y un estruendo y solo sufre el daño por golpes normal, sin pérdida de niveles ni de Fuerza.

El atacante no muerto recibe 2d6 puntos de daño por la energía positiva; la protección aplica solo a un único ataque, disipándose inmediatamente aunque la salvación tenga éxito. Si la salvación falla, el receptor sufre el doble de daño físico y además la pérdida de niveles o Fuerza correspondiente.

La protección dura una ronda por nivel del sacerdote o hasta que la criatura protegida sea golpeada por un ataque de energía negativa. No puede lanzarse en el Plano Negativo.''',
    },
    144: {
        "name": "Crecimiento de Plantas",
        "description": '''Este conjuro permite al lanzador elegir entre dos usos.

Primero, hace que la vegetación normal crezca y se enrede hasta formar una maleza o jungla que obliga a cortar o forzar el paso a 10 pies por asalto (20 pies para criaturas de tamaño mayor). El área afectada es un cuadrado de 20 pies por lado por nivel del lanzador, en la forma que elija.

Segundo, puede afectar una milla cuadrada entera; el DM hace una tirada secreta (basada en el nivel del lanzador) para determinar si el efecto tiene éxito; si lo logra, las plantas del área producen entre un 20% y un 50% más de rendimiento esa estación.

El efecto sobre la vegetación dura hasta que se limpia con trabajo, fuego o magia (por ejemplo, disipar magia). Componente: material vegetal apropiado.''',
    },
    145: {
        "name": "Oración",
        "description": '''Mediante la oración, el sacerdote invoca favor para sí y su grupo y causa perjuicio a sus enemigos.

Quienes se encuentren en el área en el momento de concluir el conjuro están afectados durante su duración: aliados del sacerdote ganan +1 a tiradas de ataque, daño y salvaciones; los enemigos sufren -1 a esas tiradas.

Si otro sacerdote de la misma fe está cantando simultáneamente, los efectos se suman hasta +2 y -2. El sacerdote necesita un símbolo sagrado de plata, cuentas de oración, o similar como componente material.''',
    },
    146: {
        "name": "Protección Contra el Fuego",
        "description": '''El efecto varía según si el receptor es el lanzador o otra criatura. Dura hasta una ronda por nivel del lanzador.

Si lo lanzan sobre sí mismo, confiere invulnerabilidad completa frente a fuegos normales (antorchas, hogueras) y a la exposición a fuegos mágicos como aliento de dragón o conjuros tipo fireball, hasta absorber 12 puntos de fuego por nivel del lanzador; al superarse ese límite, la protección se anula.

Si se lanza sobre otra criatura, otorga invulnerabilidad a fuegos normales, +4 a salvaciones contra fuego y reduce a la mitad el daño de fuegos mágicos. Componente: símbolo sagrado.''',
    },
    147: {
        "name": "Pirotecnia",
        "description": '''Este conjuro toma una fuente de fuego existente y produce uno de dos efectos: una exhibición de fuegos artificiales brillante que ciega a los observadores por 1d4+1 rondas si fallan su salvación contra conjuros, o una densa columna de humo que crea un área de ocultamiento total durante una ronda por nivel.

Los fuegos artificiales llenan un volumen diez veces mayor que la fuente original; la nube de humo ocupa un volumen 100 veces mayor. El fuego usado como fuente se apaga; las fuentes mágicas no se extinguen. No funciona bajo el agua.''',
    },
    148: {
        "name": "Causalidad Aleatoria",
        "description": '''Este conjuro crea una grieta en la relación causa-efecto sobre un arma: cuando el arma hiere, el daño no se aplica a la víctima sino que se asigna aleatoriamente al propio portador del arma o a uno de sus aliados.

Si el arma falla en un asalto concreto, no hay daño ese asalto. El DM usa tiradas para determinar el receptor del daño (p. ej., 1d8 para hasta ocho objetivos) y el arma permanece afectada por 3 rondas + 1 ronda por nivel del lanzador. Componente: un dado de bronce.''',
    },
    149: {
        "name": "Quitar Maldición",
        "description": '''Al lanzar este conjuro, el sacerdote suele ser capaz de eliminar una maldición sobre un objeto, sobre una persona o en forma de presencia maligna.

No elimina maldiciones especiales adheridas a un objeto maldito (como armas o armaduras malditas), aunque habitualmente permite al afectado librarse del objeto. Algunas maldiciones muy especiales requieren un lanzador de nivel alto para ser removidas; un sacerdote de 12º nivel o más puede curar la licantropía con este conjuro si se aplica sobre la forma animal.

La reversión no es permanente; bestow curse dura una ronda por nivel del sacerdote. El sujeto recibe salvación contra conjuros si el efecto requiere contacto.''',
    },
    150: {
        "name": "Quitar Parálisis",
        "description": '''Este conjuro puede liberar a una o más criaturas de efectos de parálisis o magia relacionada (por ejemplo, toque de ghoul, hold, slow).

Si se lanza sobre un solo objetivo, la parálisis se anula; si se lanza sobre dos, cada uno recibe otra tirada de salvación con +4; si sobre tres o cuatro, cada uno recibe otra tirada de salvación con +2. El conjuro requiere que no haya barreras físicas o mágicas entre el lanzador y las criaturas a afectar.''',
    },
    151: {
        "name": "Reparar Herida",
        "description": '''Pensado para campañas con reglas de impacto crítico: este conjuro trata una herida específica (hueso roto, esguince, tejido dañado) o, si se usa como curación simple, restaura 1d10+1 puntos de golpe.

Al enfocar una lesión concreta, elimina una condición (rasguñado, golpeado, herido o roto) y alivia las penalizaciones asociadas. No restaura miembros cercenados ni pérdidas permanentes; reduce la gravedad de heridas devastadoras a nivel de hueso roto.

Solo puede aplicarse una vez a una misma herida. Equivale a cure serious wounds para detener hemorragias.''',
    },
    152: {
        "name": "Pensamiento Rígido",
        "description": '''Este conjuro solo puede lanzarse sobre una criatura con Inteligencia 3 o mayor. El afectado queda incapaz de emprender otra acción que no sea la que estaba realizando cuando el conjuro entró en efecto: su mente se queda fija en una sola tarea.

No repite mecánicamente acciones; por ejemplo, si un guerrero se queda sin flechas no seguirá intentando disparar, pero escogerá otra forma de actuar que permanezca enfocada en el mismo objetivo. El conjuro expira cuando el objetivo alcanza su meta o cuando termina la duración.''',
    },
    153: {
        "name": "Putrefacción Lenta",
        "description": '''Este conjuro prolonga la duración en la que frutas, verduras y granos mantienen su frescura. No funciona sobre carne.

El lanzador puede afectar hasta 100 pies cúbicos de material vegetal por nivel; la duración es de una semana por nivel. Componentes: una pizca de azúcar.''',
    },
    154: {
        "name": "Trampa",
        "description": '''Este conjuro crea una soga o cuerda encantada que se camufla con el entorno y actúa como una trampa difícil de detectar. Lazo o nudo aprisiona a la criatura que entre, infligiendo daño y/o levantando a la presa si hay un árbol o ancla cercana.

El aparato puede ser cortado con un arma mágico o con un arma afilada manejada con al menos +2 de bonificación; la magia se debilita con el tiempo y desaparece tras 12 horas.''',
    },
    155: {
        "name": "Hablar con los Muertos",
        "description": '''Este conjuro permite al sacerdote hacer varias preguntas a una criatura muerta durante un periodo limitado, recibiendo respuestas en función del conocimiento que la criatura tenía en vida.

El sacerdote debe poder hablar el idioma del difunto. El tiempo transcurrido desde la muerte limita la posibilidad: los sacerdotes de mayor nivel pueden interrogar cadáveres más antiguos y obtener más respuestas. Las respuestas suelen ser breves, crípticas o literales. El muerto puede recibir una salvación contra conjuros para negarse a responder.''',
    },
    156: {
        "name": "Crecimiento de Espinas",
        "description": '''Donde haya vegetación moderada, el suelo cubierto de raíces y hierba se vuelve duro y afilado, como si estuviera sembrado de caltrops. Por cada 10 pies de movimiento por el área, la víctima sufre 2d4 puntos de daño y debe realizar una salvación contra conjuros.

Si falla, su velocidad se reduce en 1/3 (no puede bajar de 1). El efecto dura 24 horas y es indetectable sin medios mágicos hasta que se entra en el área. Componentes: siete espinas o ramitas afiladas.''',
    },
    157: {
        "name": "Suelo Chirriante",
        "description": '''Un área afectada cruje y rechina al paso de criaturas mayores que una rata; el efecto cubre un cuadrado de 10 pies por nivel y los sonidos se oyen en un radio de 100 pies (50 si se mueve en silencio).

Quienes vuelen o eviten contacto con la superficie no activan el hechizo. Componente: una bisagra de hierro oxidada que cruje.''',
    },
    158: {
        "name": "Resplandor Estelar",
        "description": '''Este conjuro ilumina un área como si fuera una noche clara llena de estrellas. La visibilidad es equivalente a la de una noche de luna brillante (movimiento hasta 100 yardas detectado, reconocimiento a 10 yardas).

Crea sombras y no afecta a la infravisón. No funciona bajo el agua. Componentes: tallos de amaryllis y bayas de acebo.''',
    },
    159: {
        "name": "Moldear Piedra",
        "description": '''El lanzador puede dar forma a una pieza existente de piedra para crear objetos o abrir pasajes siempre que el volumen esté dentro del área del conjuro. La finura del detalle es limitada; piezas con partes móviles tienen un 30% de probabilidad de no funcionar.

Componente: arcilla blanda modelada en la forma aproximada que se desea y aplicada a la piedra al pronunciar el conjuro.''',
    },
    160: {
        "name": "Fuerza de Uno",
        "description": '''Al lanzar este conjuro sobre un grupo de criaturas legales, el sacerdote hace que cada una reciba el bono de Fuerza natural de la criatura más fuerte del grupo (el 'keystone').

Todos los afectados deben tocar la mano del sacerdote al lanzarlo; solo humanos, semihumanos y humanoides de tamaño humano o menor pueden ser beneficiados. El bono afecta al daño, no a THAC0 ni a otras funciones de Fuerza. Si el keystone muere antes de que termine la duración, el efecto finaliza.''',
    },
    161: {
        "name": "Invocar Espíritu Animal",
        "description": '''Este conjuro invoca un espíritu menor con forma de bestia (lobo, oso, tigre, león, etc.) para ayudar al sacerdote.

El espíritu es incorpóreo, no puede manipular objetos, pero ve y oye como su arquetipo animal y puede explorar o distraer. En combate usa estadísticas reducidas y solo puede ser herido por armas mágicas; sus puntos de golpe son 10 + nivel del lanzador.

Es inmune a encanto, sueño y efectos mentales y no recibe daño por frío, pero puede ser disipado o ser afectado por turning como si fuera no-muerto igual a los HD del lanzador. Si el espíritu es destruido o disipado, el sacerdote que lo invocó debe salvar vs. conjuros o quedar aturdido 1d4 rondas.

El espíritu obedece órdenes mentales silencias del sacerdote y debe permanecer dentro del alcance (10 yardas por nivel) o se disipa. Componente: un silbato pequeño tallado en hueso del animal apropiado.''',
    },
    162: {
        "name": "Invocar Insectos",
        "description": '''Este conjuro atrae una nube o enjambre de insectos para atacar a los enemigos. Insectos voladores aparecen el 70% de las veces; terrestres el 30%.

Los insectos infligen daño leve (2 puntos si la víctima intenta huir; 4 puntos por asalto si resiste) y pueden impedir la concentración para lanzar conjuros. El enjambre puede dispersarse con humo espeso, fuego o agua.

El lanzador debe concentrarse para mantener la nube; bajo tierra existe una probabilidad de invocar hormigas gigantes si están cercanas. Componentes: símbolo sagrado, un pétalo y un poco de barro.''',
    },
    163: {
        "name": "Telepatía",
        "description": '''Este conjuro establece comunicación mental bidireccional entre el sacerdote y un sujeto con Inteligencia mínima de 5.

Permite intercambiar pensamientos que el otro voluntariamente "envíe", más rápido que el habla, sin transmitir recuerdos o emociones no enviados. Se pueden establecer canales separados con múltiples individuos mediante lanzamientos adicionales.

Sujetos no voluntarios reciben salvación vs. conjuros. Espesores de plomo superiores a cierto grosor bloquean la telepatía.''',
    },
    164: {
        "name": "Teletaumaturgia",
        "description": '''Este conjuro requiere un análisis numerológico del nombre correcto del objetivo y crea un "canal" que permite lanzar ciertos conjuros sobre esa persona a un alcance mayor o con mayor eficacia.

Solo ciertos conjuros se benefician (p. ej., bless, command, charm person, detect charm, hold person, know alignment, remove curse, etc.) y el multiplicador de alcance depende del nivel del sacerdote (x2 hasta nivel 6, x3 hasta 11, etc.).

El conjuro mejorado debe lanzarse inmediatamente después de teletaumaturgia. Se necesita conocer el nombre verdadero del sujeto. Componente: un pequeño libro de fórmulas numerológicas (no consumible).''',
    },
    165: {
        "name": "Lamento del Ladrón",
        "description": '''Un ladrón que entra en un área encantada por este conjuro sufre reducciones en sus habilidades de ladrón (robar, forzar cerraduras, detectar trampas, moverse en silencio, etc.) en un 25% salvo que supere la tirada de salvación.

El área es un cubo con lado igual al nivel del lanzador por 5 pies. Componentes: símbolo sagrado y una llave de plata.''',
    },
    166: {
        "name": "Árbol",
        "description": '''Mediante este conjuro, el lanzador puede asumir la forma de un pequeño árbol o arbusto vivo o de un gran tronco muerto con pocas ramas.

A simples inspecciones no revelan que se trata de una persona; el lanzador observa desde la forma arbórea y conserva puntos de golpe y CA equivalentes. Puede revertir el efecto en cualquier momento. Componentes: símbolo sagrado y una ramita.''',
    },
    167: {
        "name": "Coro Sobrenatural",
        "description": '''Con al menos tres sacerdotes cantando juntos, este conjuro proyecta un acorde sónico cuya potencia depende del número de voces: de trio a coro.

Los efectos varían desde daño por fuerza sonora y aturdimiento hasta destrucción de no-muertos y rotura de objetos frágiles; los detalles dependen del tamaño del conjunto (trío, cuarteto, quinteto, conjunto o coro).''',
    },
    168: {
        "name": "Premonición Infalible",
        "description": '''Este conjuro otorga al sacerdote un sentido intuitivo de peligro inmediato, proporcionando +2 a CA y salvaciones mientras esté activo y una probabilidad del 25% de forzarle a renunciar a la acción prevista para obedecer la corazonada.

Solo advierte sobre acciones emprendidas por el propio sacerdote (no por sus compañeros).''',
    },
    169: {
        "name": "Respirar Bajo el Agua",
        "description": '''El receptor puede respirar bajo el agua libremente durante la duración del conjuro (1 hora por nivel). El sacerdote puede dividir la duración entre varios receptores.

La reversión (respirar aire) permite a criaturas acuáticas sobrevivir en la atmósfera el mismo tiempo. No impide respirar en su elemento natural.''',
    },
    170: {
        "name": "Caminar sobre el Agua",
        "description": '''El conjuro permite a una o más criaturas caminar sobre cualquier líquido como si fuera suelo firme (incluye lodos, arenas movedizas, aceite y nieve). El movimiento no se ve reducido.

Si se lanza bajo el agua, el receptor es impulsado hacia la superficie. Componentes: un trozo de corcho y el símbolo sagrado.''',
    },
    171: {
        "name": "Predicción Meteorológica",
        "description": '''El sacerdote puede predecir el tiempo en su ubicación por un periodo igual a un día por nivel. La precisión es del 95% para el primer día, disminuyendo 10% por día adicional.

Útil para planificar viajes o ceremonias relacionadas con el clima.''',
    },
    172: {
        "name": "Servidor del Viento",
        "description": '''Este conjuro otorga control fino sobre corrientes de aire: apagar pequeñas llamas, mover objetos livianos o crear ráfagas. El servidor del viento realiza una acción por asalto y puede manejar objetos de hasta 1 libra por nivel (más para objetos diseñados para volar).

También puede crear un torbellino de polvo que dañe o penalice ataques. Requiere atención completa del sacerdote.''',
    },
    173: {
        "name": "Zona de Aire Puro",
        "description": '''Crea una barrera invisible que repele vapores nocivos y gases tóxicos del área afectada; no protege contra algunos alientos de dragón. No afecta gases ya presentes.

El área es un cubo con lado igual al nivel del lanzador por 10 pies. Componentes: símbolo sagrado, un pañuelo de seda y una telaraña.''',
    },
    174: {
        "name": "Agarres de Zweihard",
        "description": '''Este conjuro imbuye un arma con un efecto similar a bless, otorgando +1 al impacto y a tiradas de salvación según bless, durante 1 semana por nivel.

No es acumulable con bless o aid. El cuero usado debe ser de calidad superior e integrado en el arma (por ejemplo, envuelto en la empuñadura).''',
    },
    175: {
        "name": "Abjurar",
        "description": '''Este conjuro puede enviar a una criatura extraplanar de regreso a su propio plano si no es de estatus semidivino o superior. Requiere superar la resistencia mágica y conocer el nombre verdadero de la criatura.

La probabilidad base de éxito es aproximadamente 50% ajustada por la diferencia de niveles/HD. Si falla, el sacerdote debe subir de nivel antes de intentar de nuevo contra la misma criatura. Componentes: símbolo sagrado, agua bendita y material inimigo a la criatura.''',
    },
    176: {
        "name": "Maza de Adamantita",
        "description": '''El sacerdote transmuta su garrote, maza o bastón en un arma de adamantita +2 por 1 ronda por nivel, permitiendo herir criaturas que normalmente requieren +4 o mejor. Inflige daño adicional contra criaturas de aire o aves mágicas.

Componente: polvo de diamante (100 gp) espolvoreado sobre el arma.''',
    },
    177: {
        "name": "Adición",
        "description": '''Basado en la Sfera de Números, este conjuro puede crear temporalmente un objeto inanimado o, a niveles altos, incluso una criatura pequeña. Las limitaciones dependen del nivel del lanzador (peso y permanencia).

Los objetos creados se comportan como reales pero no contienen información abstracta; crear objetos complejos o tecnología avanzada falla. Componente: placa de marfil inscrita y cordel de seda (consumido).''',
    },
    178: {
        "name": "Envejecer Planta",
        "description": '''Permite alterar la edad de plantas, semillas o árboles hasta 10 años por nivel, hacia adelante o atrás. Puede acelerar floración o restaurar juventud; no afecta plantas mágicas ni monstruos de tipo planta.

Componente: símbolo sagrado y un pétalo de flor de manzano.''',
    },
    179: {
        "name": "Invocación de Animales I",
        "description": '''Este conjuro llama hasta ocho animales de hasta 4 HD dentro de un radio de 1 milla. Solo vienen animales que se encuentren dentro del alcance al lanzar el conjuro; el lanzador puede intentar hasta tres tipos diferentes.

Los animales ayudan como puedan y permanecen hasta que la tarea termine o sean enviados. No permite invocar bestias fantásticas.''',
    },
    180: {
        "name": "Calor Bendito",
        "description": '''Al lanzar este conjuro, un haz de luz protege al sacerdote de los efectos del frío natural y otorga +3 a salvaciones contra frío mágico. A niveles superiores se pueden proteger criaturas adicionales dentro de 3' del sacerdote.

Cada haz protege a una criatura por la duración (1 ronda por nivel).''',
    },
    181: {
        "name": "Reloj Corporal",
        "description": '''Este conjuro modifica los ritmos corporales del sujeto de las siguientes maneras.

1) Reduce la necesidad de sueño.

Por cada hora que el sujeto duerme, queda tan descansado como si hubiera dormido 10 horas. Por cada dos horas de sueño durante la duración del hechizo (equivalente a 20 horas de reposo), recupera puntos de golpe como si hubiera descansado completamente. Los magos, sin embargo, no pueden memorizar conjuros durante ese "sueño abreviado"; el tiempo real debe transcurrir para que la memoria de conjuros funcione.

2) Reduce la necesidad de respirar.

El sujeto respira solo el 10% de lo normal durante la duración del hechizo, lo que le permite aguantar la respiración diez veces más de lo habitual y consumir mucho menos aire en espacios cerrados.

3) Permite programar alarmas internas.

El sujeto puede fijar un "reloj interno" que le avisará transcurrido un periodo especificado mediante un ligero zumbido audible solo para él, suficiente para despertarle. Puede programar tantas alarmas internas como desee siempre que ocurran dentro de la duración del conjuro.

El hechizo no afecta al movimiento, al lanzamiento de conjuros ni a otras actividades normales. Componentes materiales: un grano de maíz, una gota de agua y un frasco de vidrio con tapón.''',
    },
    182: {
        "name": "Llamado de Seres del Bosque",
        "description": '''Mediante este conjuro el lanzador puede convocar ciertos seres del bosque hasta su ubicación.

Solo funciona al aire libre. El lanzador entona la invocación hasta que aparece algún ser convocado o transcurren dos turnos. Solo puede llamarse un tipo de criatura por vez y solo vendrán criaturas que estén dentro del alcance del hechizo.

El lanzador puede intentar tres llamadas por conjuro (tipos distintos cada vez). Las criaturas convocadas pueden hacer una tirada de salvación contra conjuros (con -4) para evitar acudir. Si el lanzador o algún miembro de su grupo es de alineamiento maligno, las criaturas reciben una segunda tirada de salvación (con +4) al acercarse a menos de 10 yardas.

Las criaturas que acuden son, por lo general, benevolentes hacia el convocante y prestan la ayuda que sean capaces de ofrecer; el DM ajustará probabilidades y tipos según el entorno. Componentes materiales: una piña de pino y ocho bayas de acebo.''',
    },
    183: {
        "name": "Combate Caótico",
        "description": '''Cuando se lanza sobre un guerrero, este recibe visiones y variaciones tácticas que le otorgan ventajas y desventajas imprevisibles.

Al comienzo de cada asalto, después de que el jugador haya declarado las acciones del personaje, se tira 1d6: con 1-4 el guerrero gana +2 a las tiradas de ataque y +2 a la Clase de Armadura; con 5-6 sufre -2 a ataque y -2 a CA.

El efecto dura mientras el conjuro esté activo; las ventajas son útiles dos tercios de las veces, pero en el resto de ataques entorpecen. Tras expirar, el guerrero recuerda la pelea pero no los detalles de las maniobras.''',
    },
    184: {
        "name": "Sueño Caótico",
        "description": '''Tras tocar a la víctima, el conjuro altera su patrón de sueño de forma aleatoria (siempre que no anule la salvación).

Cuando entra en efecto, en cada amanecer y anochecer se tira 1d6: en 1-3 la criatura permanece despierta; en 4-6 cae dormida. Si duerme por efecto del conjuro solo puede despertarse mediante estímulos físicos (un golpe, una herida, etc.).

La condición repentina de sueño/desvelo continúa y, si la víctima permanece despierta muchas horas consecutivas, sufre penalizaciones (-1 a THAC0 por cada 12 horas adicionales sin dormir) y no recupera puntos de golpe mediante curación normal mientras dure la privación. Los lanzadores de conjuros no pueden memorizar conjuros mientras estén afectados.

Puede eliminarse con un remove curse. Componentes: una pizca de arena y tres granos de café.''',
    },
    185: {
        "name": "Círculo de Privacidad",
        "description": '''Este conjuro reduce la detectabilidad de un campamento o zona protegida por el lanzador.

El lanzador espolvorea sal formando un círculo de hasta 50 pies de diámetro; durante la duración del hechizo (1 hora por nivel) todos los sonidos y olores generados dentro del círculo quedan atenuados, reduciendo en un 50% la probabilidad de encuentros o detecciones por criaturas que se encuentren fuera del círculo.

No protege contra infravisón ni otras detecciones mágicas. Componentes: un pelo de zorrillo, un bigote de ratón y sal suficiente para trazar el círculo.''',
    },
    186: {
        "name": "Capa de Valentía",
        "description": '''Este conjuro puede lanzarse sobre una criatura voluntaria.

El beneficiario obtiene un bono a su tirada de salvación contra cualquier forma de miedo (no contra efectos de asombro). El conjuro puede afectar de una a cuatro criaturas según la elección del lanzador: con una criatura el bono es +4; con dos criaturas, +3 cada una; y así sucesivamente hasta cuatro criaturas protegidas con +1.

La magia funciona una sola vez: cuando se requiere una tirada de salvación, la bonificación se aplica y el conjuro finaliza. Si no se requiere ninguna tirada en las ocho horas siguientes, el conjuro expira.

La reversión, Capa de Miedo, permite a una criatura irradiar un aura de temor de 3 pies, forzando salvaciones o provocar pánico. Componentes materiales: la pluma de un águila o halcón (la reversión usa plumas de buitre o gallina).''',
    },
    187: {
        "name": "Orden Compulsiva",
        "description": '''La víctima queda obligada a ordenar y organizar todo lo que encuentra.

Compone tesoros en pilas ordenadas, limpia pasillos, arregla cadáveres por tamaño y exige que el grupo se organice por tamaños y luego por edad. Esta compulsión no altera habilidades, pero obstaculiza la utilidad del afectado en la aventura.

Cuando deba emprender una nueva acción, el jugador debe justificarla conforme a su compulsión; si no puede, el personaje se retrasa 1d6 asaltos preparando su acción.

Si se le impide ordenar, puede volverse agresivo hasta que le permitan reorganizar su entorno. Se permite una tirada de salvación para evitar el efecto. Puede disiparse con dispel magic. Componente: un cubo perfecto de metal.''',
    },
    188: {
        "name": "Controlar Temperatura (radio 10')",
        "description": '''Al lanzar este conjuro, el lanzador puede alterar la temperatura alrededor suyo en 10 °F por cada nivel, hacia arriba o abajo.

Puede usarse para hacer el entorno confortable (por ejemplo, estar en mangas durante una ventisca) o para crear hielo. Si un ataque de temperatura excede la capacidad del conjuro (explosión de fuego o aliento de dragón), el conjuro reduce el daño en 5 puntos por nivel del lanzador (tras resolución de salvaciones). Si el lanzador recibe tal ataque, el conjuro colapsa.

Componentes: una tira de corteza de sauce (para bajar temperatura) o hojas de frambuesa (para subirla).''',
    },
    189: {
        "name": "Curar Heridas Graves",
        "description": '''Versión más poderosa de curar heridas leves. El sacerdote cura 2d8+1 puntos de daño al tocar a la criatura.

No funciona sobre criaturas incorpóreas o extraplanares. La reversión, Causar Heridas Graves, inflige 2d8+1 puntos de daño por toque.''',
    },
    190: {
        "name": "Armonía Defensiva",
        "description": '''Este conjuro debe lanzarse sobre al menos dos criaturas que vayan a combatir juntas.

Concede una coordinación mística; cada criatura obtiene +1 a la Clase de Armadura por cada otra criatura beneficiada, hasta un máximo de +5. Solo funciona si las criaturas participan en un mismo combate consolidado; si se dividen, no hay beneficio.

El lanzamiento permite afectar a una criatura por cada dos niveles del sacerdote y los beneficiarios deben estar a menos de 3 pies entre sí al lanzarlo.''',
    },
    191: {
        "name": "Detectar Mentiras",
        "description": '''El sacerdote que lanza este conjuro puede saber inmediatamente si la criatura objetivo dice intencionadamente una mentira.

No revela la verdad ni errores no intencionales. El objetivo recibe una tirada de salvación contra el conjuro, ajustada por la Sabiduría del lanzador (por ejemplo, Sabiduría 18 reduce la salvación del objetivo en 4). Componentes: una mota de polvo de oro por valor de 1 pieza de oro; la reversión usa polvo de latón.''',
    },
    192: {
        "name": "Ancla Dimensional",
        "description": '''Un rayo verde cubre a la criatura objetivo con un campo que impide desplazamientos extradimensionales (blinking, dimension door, etherealness, plane shift, teleport, etc.) durante 1 turno + 1 ronda por nivel.

El campo solo bloquea viajes extradimensionales; no afecta a la percepción extradimensional ni al movimiento en forma astral. No impide ataques a distancia ni maniobras físicas.''',
    },
    193: {
        "name": "Plegado Dimensional",
        "description": '''Este conjuro permite plegar selectivamente el espacio, creando una puerta circular de hasta 10' de diámetro que permanece abierta 1 ronda y permite viaje bidireccional instantáneo entre dos localizaciones del mismo plano.

Existe una probabilidad de envejecimiento instantáneo para quienes pasan por la puerta según el conocimiento del lanzador del destino; el daño temporal y la probabilidad dependen de la familiaridad con el destino (tabla incluida en la descripción original).

El componente material es una lámina de platino consumida en el cierre.''',
    },
    194: {
        "name": "Adivinación",
        "description": '''Este conjuro ofrece un consejo útil acerca de un objetivo, evento o actividad que ocurrirá dentro de una semana; la respuesta puede ser una frase corta o un enigma.

La probabilidad base de una adivinación correcta es 60% +1% por nivel del lanzador; el DM ajusta según circunstancias. Componentes: una ofrenda sacrificial, incienso y el símbolo sagrado.''',
    },
    195: {
        "name": "Atrincherar",
        "description": '''Versión mejorada de fortify que prepara defensas permanentes en un sitio: zanjas, empalizadas, estacas y muros según el terreno (campo abierto, terreno áspero o marismas), otorgando coberturas y penalidades al movimiento del atacante.

Las fortificaciones son permanentes salvo por erosión. Componente: la concha de un nautilus gigante.''',
    },
    196: {
        "name": "Purgar Fuego",
        "description": '''Un área encantada con este conjuro queda protegida contra fuegos normales y mágicos: fuegos normales no arden dentro del área y fuegos mágicos infligen solo el 50% de su daño.

Además, las criaturas en el área reciben +4 a salvaciones contra ataques de fuego. No extingue fuegos ya existentes. Componentes: símbolo sagrado y una astilla chamuscada.''',
    },
    197: {
        "name": "Foco",
        "description": '''Crea las condiciones necesarias para reunir energía devocional en un foco que amplifica conjuros del sacerdote.

Los foci suelen ser permanentes en templos; existen foci de sitio, objeto o vivientes. Requiere ritual largo y ofrendas costosas; la duración típica de un foco es un año y debe recibir energía devocional diaria para mantenerse.''',
    },
    198: {
        "name": "Fortificar",
        "description": '''Hechizo cooperativo que mejora la eficacia de los conjuros de curación de otro sacerdote si ambos lanzan simultáneamente.

Fortify hace que el conjuro de curación funcione al máximo, por ejemplo, un cure serious wounds curaría el valor máximo en lugar de tirar el daño. Componente: símbolo sagrado del sacerdote.''',
    },
    199: {
        "name": "Acción Libre",
        "description": '''Permite a la criatura tocada moverse y atacar normalmente durante la duración del conjuro aun cuando esté bajo efectos que impidan el movimiento (web, slow) o mientras está bajo el agua.

También anula o previene efectos de parálisis y hold, pero no proporciona respiración acuática. Componente: una correa de cuero que se desintegra al expirar el conjuro.''',
    },
    200: {
        "name": "Genio",
        "description": '''Similar a idea, permite al jugador del sacerdote hacer al DM una única pregunta relacionada con un evento presente (por ejemplo: "¿Qué son estas criaturas?").

La respuesta será correcta pero puede ser críptica; suele limitarse a una palabra o frase corta. Componente: una gema de al menos 50 gp. Solo puede lanzarse una vez cada 12 horas.''',
    },
    201: {
        "name": "Insecto Gigante",
        "description": '''Por medio de este conjuro, el sacerdote puede transformar insectos normales en formas gigantes similares a las descritas en el manual de monstruos.

Solo puede afectar a un tipo de insecto a la vez y todos los insectos alterados deben crecer al mismo tamaño. El número y el tamaño dependen del nivel del sacerdote; los insectos aumentan su dado de golpe y su daño, pudiendo algunos llevar jinete humanoide en estadios altos.

Si el conjuro se interrumpe o los insectos están bajo otro efecto mágico, los insectos mueren y el conjuro se arruina. Componente: símbolo sagrado del sacerdote.''',
    },
    202: {
        "name": "Bosque Alucinatorio",
        "description": '''Este conjuro crea un bosque ilusorio que parece completamente natural y es indistinguible de uno real para la mayoría de las criaturas.

Criaturas vinculadas a la naturaleza (centauros, dríades, etc.) pueden reconocer la ilusión; tocar la vegetación no la revela. El bosque persiste hasta que se disipa mágicamente o se lanza el reverso.

El área puede ser rectangular o cuadrada y uno de sus bordes puede estar hasta 80 yardas del lanzador.''',
    },
    203: {
        "name": "Sujetar Plantas",
        "description": '''Este conjuro afecta a la materia vegetal: impide que vegetación ambulante se mueva, que enrede, que cierre o que crezca; también silencia cualquier sonido producido por plantas no causado por viento.

Afecta hongos, treants, shambles y similares; la duración es 1 ronda por nivel y el área es 1d4 plantas en 40 pies cuadrados. Las tiradas de salvación se modifican según cuántas plantas se afecten.''',
    },
    204: {
        "name": "Imbuir con Habilidad de Hechizo",
        "description": '''Este conjuro permite al sacerdote transferir un número limitado de sus hechizos memorizados y la capacidad de lanzarlos a otra persona no lanzadora de conjuros (ranger <8, paladín <9, etc.).

El receptor debe tener al menos Sabiduría 9 y al menos 1 HD. Solo ciertos hechizos (informativos, defensivos o cure light wounds) pueden transferirse; elegir hechizos no permitidos cancela el intento.

Los hechizos transferidos se gastan del repertorio del sacerdote hasta que el receptor los use o muera. Componentes: símbolo sagrado y un objeto personal simbólico del receptor consumido en la transferencia.''',
    },
    205: {
        "name": "Ética Invertida",
        "description": '''Este conjuro invierte la ética de una o varias personas, haciendo que actúen de forma opuesta a su conducta habitual.

Por ejemplo, un tendero honorado considerará normal que los clientes se lleven mercancía sin pagar. El efecto dura 1 turno y afecta a una criatura por nivel en 20' de radio. Cada objetivo tiene salvación vs. conjuro.

Componente: una balanza dorada en miniatura.''',
    },
    206: {
        "name": "Unirse a Viajero Astral",
        "description": '''Al tocar un cuerpo en animación suspendida y lanzar este conjuro, el sacerdote provoca que su propio cuerpo astral se una al viajero astral proyectado previamente y viaje junto a él a lo largo del cordón plateado.

Esto permite que el blanco proyectado transporte a otros sacerdotes de forma extraordinaria; la proyección resultante depende del conjuro astral original.''',
    },
    207: {
        "name": "Liderazgo",
        "description": '''Este conjuro tiene dos variaciones: la de campo de batalla (rango 240 yd, duración 1d4+6 turnos) aumenta el radio de mando del objetivo en 50% y la reversión duda reduce la eficacia; requiere polvo de acero como componente.

La segunda variación, en un lugar de culto, es un ritual de 5 turnos que dobla el radio de mando por 2d12 horas. Componentes: símbolo sagrado para la segunda variante.''',
    },
    208: {
        "name": "Bajar Agua",
        "description": '''Este conjuro hace descender el nivel del agua en el área hasta un mínimo de 1 pulgada, pudiendo bajar hasta 2 pies por nivel del lanzador.

En cuerpos grandes puede crear un remolino que arrastra embarcaciones. Aplicado a elementales de agua actúa como un slow; la reversión, Elevar Agua, devuelve el agua a su nivel natural.

Componentes: símbolo sagrado y una pizca de polvo.''',
    },
    209: {
        "name": "Dominio Mental",
        "description": '''Este conjuro establece un vínculo telepático por el que el sacerdote puede controlar los movimientos corporales de la víctima, con diferencias respecto al hechizo de mago domination.

El sujeto puede ser obligado a combatir, pero sus ataques sufren -2; no puede lanzar conjuros ni usar habilidades innatas. El control requiere línea de visión y concentración; si el sacerdote es herido o pierde la visión, el efecto termina. Componente: malla de hilos finos.''',
    },
    210: {
        "name": "Modificar Memoria",
        "description": '''Permite al lanzador alterar hasta cinco minutos de la memoria de la víctima: borrar eventos, aclarar recuerdos, cambiar detalles o implantar un recuerdo falso.

Si el objetivo falla la salvación, el lanzador pasa hasta cinco minutos visualizando la memoria; si la concentración falla, el conjuro se pierde. No afecta geas, quest o similares.''',
    },
    211: {
        "name": "Neutralizar Veneno",
        "description": '''Este conjuro desintoxica venenos presentes en la criatura o sustancia tocada. Puede prevenir la muerte si se aplica antes de que el veneno mate; sus efectos son permanentes respecto al veneno ya existente, pero no evitan la generación de nuevo veneno.

La reversión, Poison, requiere toque y salvaçión vs. veneno.''',
    },
    212: {
        "name": "Ojo Omnisciente",
        "description": '''Aumenta la visión del lanzador: permite ver a través de oscuridad normal y mágica hasta 60 pies y otorga una probabilidad de perforar ilusiones e invisibilidad igual a 70% +1%/nivel -2%/nivel del conjuro observado.

No revela puertas secretas ni trampas; componente: ungüento especial para los ojos.''',
    },
    213: {
        "name": "Puerta de Planta",
        "description": '''Este conjuro crea un pasadizo mágico a través de árboles y matorrales, incluso madera mágica, permitiendo ocultación y paso de criaturas de tamaño humano o menor.

Si el árbol es cortado o quemado, quienes permanezcan dentro deben salir o morir. La duración es 1 turno por nivel (más si se elige encubrir el objetivo dentro de ciertos árboles). Componentes: carbón y símbolo sagrado.''',
    },
    214: {
        "name": "Control de Probabilidad",
        "description": '''Permite al sacerdote aumentar o disminuir ligeramente la probabilidad de éxito de una acción individual (ataque, salvación, habilidad, etc.).

La modificación básica es 15% +5% por cada cinco niveles del lanzador y puede ser positiva o negativa; en combate debe especificarse la acción a afectar. La duración se mantiene hasta que la acción ocurra o transcurran rondas iguales al nivel del lanzador.''',
    },
    215: {
        "name": "Producir Fuego",
        "description": '''El lanzador crea un fuego de hasta 12 pies de lado que dura 1 asalto y causa 1d4 +1/level puntos de daño a criaturas en el área.

El fuego puede prender materiales y la reversión, Apagar Fuego, extingue fuegos normales. Componente: bola de azufre y cera.''',
    },
    216: {
        "name": "Protección contra el Mal (radio 10')",
        "description": '''Esta variante amplia de protección contra el mal crea un globo centrado en la criatura tocada con mayor duración y radio de efecto (10' de radio), otorgando las mismas defensas que protection from evil pero ampliadas.

Si la criatura protegida ataca a criaturas encantadas o invocadas, rompe la protección. Componentes: símbolo sagrado.''',
    },
    217: {
        "name": "Protección contra Rayos",
        "description": '''El efecto depende del receptor: sobre el lanzador confiere invulnerabilidad a ataques eléctricos hasta absorber 10 pts/level; sobre otro otorga +4 a la tirada de salvación y reduce el daño a la mitad.

Duración: máximo 1 turno/level. Componentes: símbolo sagrado.''',
    },
    218: {
        "name": "Rapport",
        "description": '''Versión profunda de telepatía que permite compartir pensamientos, emociones y recuerdos superficiales con un sujeto voluntario; las experiencias se sienten diluidas y no permiten compartir habilidades o conjuros.

Cada enlace con un individuo requiere una aplicación del conjuro; no funciona en sujetos no voluntarios sin salvación exitosa.''',
    },
    219: {
        "name": "Recitación",
        "description": '''Al recitar un pasaje sagrado, el sacerdote otorga bendiciones a aliados (+2 a ataque y salvaciones, +3 si comparten la fe) y debilita a enemigos (-2 a ataque y salvaciones) durante la duración.

Componentes: símbolo sagrado y texto sagrado; ambos no se consumen.''',
    },
    220: {
        "name": "Estanque Reflectante",
        "description": '''Convierte un charco o estanque natural en un dispositivo de escrutinio similar a una bola de cristal, permitiendo la revisión de planos etéreos e internos con una probabilidad por nivel.

Puede también permitir intentos de detectar magia, trampas y venenos a través del agua con una probabilidad de éxito del 5% por nivel. Componentes: aceite de nuez hickory o similar.''',
    },
    221: {
        "name": "Repeler Insectos",
        "description": '''Al lanzar este conjuro, el sacerdote crea una barrera invisible que mantiene a los insectos alejados hasta 10 pies del lanzador.

Insectos normales no entran en el área afectada; insectos gigantes con HD superiores pueden entrar si superan una tirada de salvación. Aquellos que atraviesen la barrera sufren 1d6 puntos de daño. Componentes: flores de caléndula o hojas de ortiga.''',
    },
    222: {
        "name": "Hablar con Plantas",
        "description": '''Permite al sacerdote conversar de forma rudimentaria con vegetación (incluyendo hongos y formas vegetales mágicas) y ordenar plantas normales para que abran paso, enreden a perseguidores o revelen si alguien pasó por ellas.

La duración es 1 asalto por nivel; el efecto no controla plantas monstruo ni otorga movimiento que exceda sus capacidades naturales.''',
    },
    223: {
        "name": "Inmunidad a Hechizos",
        "description": '''Este conjuro hace que la criatura tocada sea inmune a un hechizo específico de hasta 4º nivel que el lanzador haya experimentado antes.

No protege frente a armas de aliento o ataques de mirada. Solo puede ser usado contra un conjuro concreto (no una escuela completa) y no afecta artefactos ni efectos permanentes de objetos.''',
    },
    224: {
        "name": "Palos a Serpientes",
        "description": '''Con este conjuro, palos y piezas de madera en el área se transforman en serpientes que atacan bajo el control del lanzador.

El número de palos transformables depende del nivel del lanzador; las serpientes causan daño y pueden ser venenosas según la elección del lanzador. Componentes: corteza y escamas de serpiente.''',
    },
    225: {
        "name": "Animación Suspendida",
        "description": '''Pone a una criatura voluntaria en un estado de animación suspendida en el que sus procesos vitales se ralentizan drásticamente.

La duración depende del nivel del lanzador (semanas a meses). El sujeto no envejece durante la animación; necesita aire pero no comida ni agua. Romper el hechizo requiere presencia del lanzador o de otro sacerdote de la misma deidad.''',
    },
    226: {
        "name": "Pegar Pies",
        "description": '''Duplica el coste de movimiento de una región del terreno para enemigos, sin afectar a aliados, durante la duración del conjuro.

El efecto puede crear obstáculos naturales que dificultan la carga o el avance; el lanzador debe ver el terreno objetivo al invocar el conjuro. Componentes: una gota de melaza.''',
    },
    227: {
        "name": "Difusión de Pensamientos",
        "description": '''Convierte al sujeto en un emisor de pensamientos superficiales: cualquiera en un radio determinado percibe sus pensamientos inmediatos.

No revela memorias profundas y el emisario no sabe que transmite. Los receptores lo saben y pueden identificar la fuente; el efecto dura la duración indicada.''',
    },
    228: {
        "name": "Lenguas",
        "description": '''Permite al lanzador hablar y entender idiomas adicionales (dialectos o lenguas raciales) con fluidez perfecta durante la duración del conjuro.

No permite entender comunicación de animales ni lenguajes no verbales. El lanzador elige las lenguas a entender al momento de lanzar.''',
    },
    229: {
        "name": "Jinete Arbóreo",
        "description": '''Este conjuro convierte un tronco, tabla u objeto de madera en una montura temporal con cuatro patas que puede ser montada como un caballo.

La montura tiene estadísticas simples, puede llevar hasta 600 libras y dura 1 ronda por nivel. Es vulnerable al fuego y desaparece si se rompe.''',
    },
    230: {
        "name": "Resistencia Infalible",
        "description": '''Confiere a los afectados una resistencia extraordinaria al cansancio y la fatiga: pueden marchar sin penalizaciones y realizan trabajos prolongados con menor fatiga, obteniendo bonificaciones a salvaciones contra efectos que causan debilidad.

El área y duración dependen del nivel del lanzador.''',
    },
    231: {
        "name": "Elevación",
        "description": '''Hechizo cooperativo que, tras un ritual de 12 horas, confiere temporalmente al sacerdote seleccionado mayor capacidad de lanzamiento (niveles de conjuro adicionales por un breve periodo).

Al expirar, el beneficiario sufre daño mental y una recuperación necesaria. Componentes: ofrendas costosas.''',
    },
    232: {
        "name": "Árbol Mayor de Van Healsing",
        "description": '''Versión mejorada del conjuro Tree: crea un árbol poderoso e inmune a armas no mágicas, con la opción de que el lanzador adopte la forma de un gran árbol.

La duración es mayor que la versión menor y el conjuro requiere componentes simbólicos.''',
    },
    233: {
        "name": "Estasis Meteorológica",
        "description": '''Mantiene las condiciones climáticas existentes en el área protegida durante la duración del conjuro, hasta un cubo de 10 pies por nivel.

Protege contra lluvia, nieve y variaciones de temperatura; si fue lanzado bajo lluvia, esta continuará mientras dure el hechizo.''',
    },
    234: {
        "name": "Soplo del Viento",
        "description": '''Permite al sacerdote conjurar una columna de viento que puede sostenerlo o permitirle planear largas distancias y transportar cargas ligeras.

En terreno elevado permite planeo prolongado; en combate penaliza la precisión. Componente: pluma de águila gigante.''',
    },
    235: {
        "name": "Envejecer Objeto",
        "description": '''Acelera el envejecimiento de materia no viva y no mágica, hasta 20 años por nivel. Los efectos varían según material (madera, hierro, pergamino, etc.).

La reversión restaura la juventud del objeto; componente: agua de mar y carbón.''',
    },
    236: {
        "name": "Caminar por el Aire",
        "description": '''Permite a la criatura tocar caminar sobre el aire como si fuera suelo sólido durante la duración del conjuro (1 hora + 1 turno/level).

Puede montarse un animal entrenado; condiciones climáticas extremas pueden afectar el control.''',
    },
    237: {
        "name": "Crecimiento Animal",
        "description": '''Hace crecer hasta ocho animales dentro de un área determinada, doblando su tamaño, dados de golpe y daño durante la duración.

Movimiento y CA no cambian; útil para potenciar monturas o bestias aliadas.''',
    },
    238: {
        "name": "Invocación de Animales II",
        "description": '''Llama hasta seis animales de 8 HD o 12 animales de 4 HD dentro del alcance; el lanzador puede intentar hasta tres tipos distintos con probabilidades variables.

Solo animales reales en el área responderán, no bestias fantásticas.''',
    },
    239: {
        "name": "Animar Llama",
        "description": '''Controla una llama natural hasta 1 pie de diámetro por nivel; la llama se mueve según órdenes del lanzador y causa daño 1d4 +1/level en su área.

Las llamas mágicas pueden ser más difíciles de controlar.''',
    },
    240: {
        "name": "Antiplanta",
        "description": '''Crea una barrera móvil que protege a los afectados contra criaturas de tipo planta y efectos vegetales durante 1 turno por nivel.

La barrera impide que plantas hostiles ataquen o se enreden con los protegidos.''',
    },
    241: {
        "name": "Expiación",
        "description": '''Este hechizo permite al sacerdote aliviar la carga de actos involuntarios u olvidados que pesan sobre una persona.

El conjuro también borra los efectos de cambios de alineamiento mágicos.

La persona que busca la expiación debe estar verdaderamente arrepentida o no haber estado en control de su voluntad cuando ocurrieron los actos a expiar. El DM juzgará la aplicabilidad del hechizo y anotará usos previos sobre la persona.

Actos deliberados y maldades conscientes no pueden ser expiados mediante este conjuro (véase el hechizo de misión o quest).

Si un personaje rehúsa aceptar la expiación, se le considera automáticamente autor de un acto voluntario.

El sacerdote necesita su símbolo religioso, cuentas de oración o libro y algún incienso al lanzar este conjuro.''',
    },
    242: {
        "name": "Barrera de Retención",
        "description": '''Este conjuro crea un campo de fuerza invisible de sentido único alrededor del área afectada.

Genera cubos de 10'x10'x10' por cada nivel del lanzador que pueden disponerse en formas rectangulares. Los intrusos pueden entrar, pero la barrera les impide salir; los que fallen su salvación quedan atrapados.

El lanzador puede entrar y salir libremente. Los atrapados pueden lanzar conjuros hacia fuera o usar teletransporte para escapar; los objetos no pueden lanzarse fuera pero sí sacarse transportándolos.

Dispel magic y conjuros similares anulan la barrera. Componente material: una pequeña jaula hecha de alambre de plata. El lanzador debe rodear el perímetro al efectuar el conjuro.''',
    },
    243: {
        "name": "Abundancia Bendita",
        "description": '''Este conjuro permite a un sacerdote duplicar una cantidad especificada de materia animal o vegetal.

No puede duplicar objetos mágicos ni minerales (piedras, metales, gemas). Aunque puede crear alimento o plantas, no permite copiar criaturas vivas.

El lanzador puede crear 1 pie cúbico de materia por cada nivel de experiencia; el material original a duplicar debe caber en 1 pie cúbico o menos.

Componente material: el símbolo sagrado del sacerdote.''',
    },
    244: {
        "name": "Fuerza del Campeón",
        "description": '''Este conjuro otorga a un miembro del grupo los bonos de ataque y daño no mágicos de otros miembros, permitiendo que luche como campeón del grupo.

El receptor obtiene los bonos no mágicos de THAC0 y daño de los contribuyentes, uno por cada dos niveles del sacerdote. Todos los participantes deben estar voluntariamente dentro de un radio de 30' y concentrarse en el campeón.

Si un contribuyente pierde la concentración, su aporte se pierde y el efecto continúa hasta que se interrumpe la última contribución. Componentes: una cadena de cinco eslabones de oro valorada en al menos 1.000 gp.''',
    },
    245: {
        "name": "Mandatos Caóticos",
        "description": '''Este conjuro hace que una criatura quede protegida contra conjuros que imponen mandatos o comandos directos.

Hechizos como command, domination, geas, suggestion y similares fallan automáticamente contra la criatura protegida; además, el lanzador de dichos hechizos debe salvar contra el conjuro o su efecto se vuelve contra él.

Componente material: un trozo de piel de anguila.''',
    },
    246: {
        "name": "Camino Despejado",
        "description": '''Este conjuro despeja maleza, piedras y escombros creando un sendero de 10 pies de ancho por 10 pies adelante del lanzador mientras se mueve.

Reduce los costes de movimiento a la mitad en terrenos difíciles (sin bajar el coste por debajo de 1) y funciona sobre junglas, bosques, rocas y nieve, pero no sobre ríos, arenas movedizas o barreras hechas por manos humanas.

Materiales: una hoja de cuchillo y una paja de escoba. La reversión (camino cubierto) obstruye y oculta un rastro similar.''',
    },
    247: {
        "name": "Nube de Purificación",
        "description": '''Este conjuro crea una nube de vapores que se desplaza con el viento y transforma suciedad orgánica, desechos y parásitos en agua limpia.

La nube descompone plagas y contaminantes en una cantidad igual de agua pura; es útil para limpiar cloacas o pozos. Vientos fuertes o vegetación densa pueden dispersarla más rápidamente.

No afecta a criaturas mágicas ni a animales más grandes que una rata.''',
    },
    248: {
        "name": "Comunión",
        "description": '''Mediante este conjuro, el sacerdote contacta a su deidad (o agentes de ella) para hacer preguntas que puedan responderse con "sí" o "no".

El lanzador obtiene una pregunta por nivel de experiencia; las respuestas son válidas dentro del conocimiento de la entidad y pueden ser "no sé". Opcionalmente, el DM puede ofrecer una respuesta corta de hasta cinco palabras.

Componentes: símbolo sagrado, agua bendita e incienso; a veces se requiere una ofrenda mayor.''',
    },
    249: {
        "name": "Comunión con la Naturaleza",
        "description": '''Este conjuro permite al lanzador conectarse con la naturaleza y conocer hechos sobre el terreno, plantas, cuerpos de agua, población animal y criaturas del entorno.

La efectividad es mayor al aire libre: rango de ½ milla por nivel en terreno abierto, 10 yardas por nivel bajo tierra. En ciudades o estructuras no funciona. El DM puede limitar su uso.''',
    },
    250: {
        "name": "Consecuencia",
        "description": '''Este conjuro ayuda al sacerdote a entender cómo encaja un evento reciente en un panorama mayor: si es un episodio aislado, si tiene repercusiones, o si forma parte de una secuencia mayor.

El DM comunica la interpretación al jugador; a veces el mensaje puede ser críptico, pero siempre veraz. Uso repetido en 24 horas devuelve la misma lectura; monedas de platino especiales son componentes del ritual.''',
    },
    251: {
        "name": "Controlar Vientos",
        "description": '''El lanzador puede alterar la fuerza del viento en el área. Por cada tres niveles ajusta una categoría de viento (suave, moderado, fuerte, vendaval, tormenta, huracán).

El conjuro crea un "ojo" calmado alrededor del lanzador cuyo radio depende del área afectada; el viento varía hasta alcanzar su nueva intensidad a razón de 3 mph por ronda.

Dura 1 turno por nivel y puede ser contrarrestado por otro conjuro similar.''',
    },
    252: {
        "name": "Curar Heridas Críticas",
        "description": '''Hechizo potente que cura 3d8+3 puntos de daño al tocar a la criatura. No afecta a seres incorpóreos ni muertos vivientes.

La reversión, causar heridas críticas, inflige la misma cantidad de daño por toque.''',
    },
    253: {
        "name": "Translocación Dimensional",
        "description": '''Este conjuro puede forzar a una criatura mágica, no-muerta o extraplanar a ser enviada a su dimensión extraplanar o traerla al Plano Material.

Si el lanzador tiene nivel superior, el objetivo no tiene salvación; de lo contrario recibe una tirada de salvación. La magia puede prevenir viajes extradimensionales mientras dure.''',
    },
    254: {
        "name": "Disfraz",
        "description": '''Cambia la apariencia de una unidad para que parezca otra (clase, nacionalidad, armamento, etc.), sin alterar su tamaño real ni las capacidades de combate reales.

El efecto es más efectivo a larga distancia; a menos de 20 yardas la ilusión se revela. Componentes: un velo de seda y un hilo de platino.''',
    },
    255: {
        "name": "Disipar el Mal",
        "description": '''Este conjuro fuerza a criaturas invocadas o de alineamiento malvado a regresar a su plano cuando el lanzador las golpea en combate cuerpo a cuerpo; también puede disipar encantamientos malignos que sean susceptibles a dispel magic.

Dura hasta 1 ronda por nivel o hasta su uso. Componentes: objeto religioso y agua bendita u ofrenda.''',
    },
    256: {
        "name": "Marcha Fácil",
        "description": '''Permite que un número de criaturas igual al nivel del lanzador realice marchas forzadas durante tantos días como el nivel, sin riesgo de fatiga; la velocidad se multiplica por 2.5 pero sufren -1 a ataque durante la duración.

No anula penalizaciones por terreno o clima; componente: un trozo de cuero de zapato.''',
    },
    257: {
        "name": "Prohibición Elemental",
        "description": '''Evita la entrada de elementales al área afectada y evita que realicen ataques físicos contra quienes estén dentro. Afecta un cubo de 5' por nivel.

Los elementales dentro del área al lanzarlo no quedan afectados hasta que salgan (no pueden reentrar). Componentes: símbolo sagrado y cuatro cuentas de cristal de colores.''',
    },
    258: {
        "name": "Manipulación Extradimensional",
        "description": '''Permite alterar la capacidad y las propiedades de espacios extradimensionales (bolsas, agujeros portátiles, rope trick), duplicando o reduciendo su tamaño según el nivel.

Si se reduce la capacidad, los contenidos excedentes son expulsados, a menudo al Plano Astral si no hay salida. Componente: una tira de oro en forma de Moebius consumida.''',
    },
    259: {
        "name": "Bolsillo Extradimensional",
        "description": '''Crea un espacio extradimensional dentro de un contenedor (saco, bolsa) proporcionándole gran capacidad interior y peso fijo según el nivel del lanzador.

Si el contenedor queda sobrecargado o se perfora, su contenido queda perdido en el Plano Astral. Componentes: diamante pulverizado y una lámina de platino con un dibujo de botella de Klein.''',
    },
    260: {
        "name": "Golpe de Llama",
        "description": '''Evoca una columna vertical de fuego en el punto indicado que inflige 6d8 de daño a quienes fallen su salvación (mitad si la salvan).

Componente material: una pizca de azufre.''',
    },
    261: {
        "name": "Puesta a Tierra",
        "description": '''Puesta a Tierra ofrece protección contra ataques eléctricos normales y mágicos dentro del área de efecto.

El área y las criaturas en su interior no reciben daño por ataques eléctricos normales (como relámpagos de tormenta o criaturas no mágicas como anguilas eléctricas).

Los ataques eléctricos mágicos (incluidos alientos o rayos) causan solo el 50% de su daño habitual.

Además, las criaturas dentro del área reciben +2 a las tiradas de salvación contra efectos eléctricos, tanto si proceden desde dentro como desde fuera del área protegida.

Componentes materiales: el símbolo sagrado del sacerdote y un rollo de alambre de plata.''',
    },
    262: {
        "name": "Artillería Ilusoria",
        "description": '''Este conjuro crea la vívida ilusión de proyectiles de artillería (pernos de balista, piedras de catapulta, etc.) en el punto señalado por el lanzador.

La ilusión es completa, con elementos visuales y sonoros.

Las víctimas no pueden determinar el origen de los proyectiles; los notan solo cuando están a punto de impactar.

Los proyectiles nunca golpean realmente: desaparecen a pocos centímetros sobre las cabezas de las víctimas y no causan daño.

Sin embargo, la visión es tan aterradora que obliga a realizar una comprobación de moral inmediatamente.

La primera vez que una unidad es objetivo de este hechizo, la comprobación se hace sin modificador; las veces posteriores la unidad recibe +1 a su puntuación de moral contra este efecto, salvo que haya sufrido fuego de artillería real entre tanto.

Componente material: un pequeño cilindro vacío de latón.''',
    },
    263: {
        "name": "Permiso Impediente",
        "description": '''Este hechizo solo puede lanzarse sobre criaturas con Inteligencia de 2 o más y que puedan comunicarse con el lanzador.

Interfiere con la capacidad decisoria de la víctima: le impide realizar cualquier acción sin antes obtener el permiso del lanzador o de una persona designada por éste.

La criatura solo atenderá a la persona designada y, antes de emprender una acción, deberá pedir permiso; si se le niega, no podrá actuar hasta obtener permiso para una acción alternativa.

Cada asalto, la víctima debe decidir su acción y pedir permiso en su iniciativa; si se le niega, no puede actuar ese asalto.

Acciones involuntarias, como respirar, están exentas. Las peticiones de permiso suelen ser breves, pero acciones complejas pueden requerir más tiempo a juicio del DM.

La tirada de salvación permite negar el efecto.''',
    },
    264: {
        "name": "Mente Impenetrable",
        "description": '''Este conjuro protege al receptor contra ataques mágicos o psiónicos que afecten la mente.

Incluye encantamientos, dominación, feeblemind, hold y poderes telepáticos psiónicos.

Contra influencias mágicas, otorga +4 a las tiradas de salvación; si un efecto normalmente no permite salvación, el receptor puede intentar una al lanzarse el ataque.

Contra psiónicos telepáticos, impone -6 a las comprobaciones del atacante, dificultando el éxito de sus poderes.

No protege contra psiónicos no telepáticos (por ejemplo, telequinesis) ni contra efectos que dañen el cuerpo directamente.''',
    },
    265: {
        "name": "Plaga de Insectos",
        "description": '''Al conjurar esta plaga, se forma una nube espesa de insectos rastreros, saltadores y voladores.

En ausencia de insectos normales en el entorno, el hechizo falla.

Los insectos obstruyen la visión a 10 pies y hacen imposible lanzar conjuros dentro de la nube.

Las criaturas que permanezcan en la plaga sufren 1 punto de daño por asalto por las picaduras y mordiscos; la invisibilidad no protege.

Criaturas con 2 o menos HD huyen automáticamente a máxima velocidad hasta alejarse 240 yardas; criaturas con menos de 5 HD deben chequear moral o huir.

Humo denso o fuego ahuyentan a los insectos; un viento fuerte dispersa la plaga.

La plaga dura 2 rondas por nivel del lanzador.

Componentes materiales: unas granillas de azúcar, khérn de grano y una pizca de grasa.''',
    },
    266: {
        "name": "Fuente Mágica",
        "description": '''Este conjuro convierte una pila de agua bendita en un dispositivo de escrutinio similar a una bola de cristal.

La fuente de agua sagrada funciona como cristal de adivinación: por cada vial de capacidad de la pila, el sacerdote puede espiar durante un asalto, hasta un máximo de una hora total.

El sacerdote debe estar en buena posición con su deidad para que el conjuro funcione.

Componentes: el símbolo sagrado del sacerdote y la propia pila de agua; no se consumen.''',
    },
    267: {
        "name": "Fusión",
        "description": '''Hechizo cooperativo que requiere al menos un sacerdote adicional de la misma fe.

El receptor voluntario se convierte en anfitrión para el lanzador; el lanzador puede dominar al anfitrión, percibir a través de sus sentidos y comunicarse telepáticamente con él.

Mientras dure el efecto, el lanzador queda desconectado de su propio cuerpo y puede usar las habilidades y conjuros memorizados del anfitrión si los componentes están disponibles.

El vínculo requiere que ambos permanezcan en el mismo plano y puede bloquearse mediante láminas de plomo.

Si el anfitrión sufre daño, el lanzador debe superar una tirada de salvación para mantener la fusión; la pérdida de la conexión puede causar daño o la terminación del conjuro.

Componente material: un cáliz valioso ofrecido como donación al anfitrión.''',
    },
    268: {
        "name": "Arranque de Memoria",
        "description": '''Este conjuro desconecta la memoria a corto plazo de la larga del sujeto.

Mientras dura, el afectado no puede almacenar información en la memoria a largo plazo; los sucesos recientes se conservan apenas unos segundos.

Los recuerdos anteriores al inicio del conjuro no se ven afectados.

La víctima puede actuar, pero solo una acción a la vez y exige gran concentración; una distracción (ser golpeado, asustado, etc.) borra lo ocurrido desde el inicio del efecto.

Al expirar el hechizo, la víctima no recuerda lo que ocurrió durante su efecto.

Componente material: un rubí de al menos 200 gp que se tritura durante la invocación.''',
    },
    269: {
        "name": "Destrozamiento Mental",
        "description": '''Este conjuro inflige una forma específica de locura en la víctima; existen cinco ámbitos posibles:

- Esquizofrenia: pérdida de personalidad; la víctima imita a un modelo elegido, adoptando comportamientos ajenos.
- Demencia precoz: apatía extrema y falta de interés en cualquier empresa.
- Delirio: la víctima se cree una figura famosa y actúa como tal.
- Paranoia: ve conspiraciones por doquier y puede reaccionar violentamente.
- Alucinaciones: percibe seres, voces y cambios no reales.

A niveles bajos la forma se elige aleatoriamente; a partir de 14º nivel el lanzador puede seleccionar la forma.

La duración y las comprobaciones periódicas dependen de la suma de Inteligencia y Sabiduría del afectado; existe posibilidad de reversión por medios mágicos poderosos o curación dirigida.''',
    },
    270: {
        "name": "Rayo Lunar",
        "description": '''Mediante este conjuro el lanzador hace descender un rayo de luz pálida semejante a la luz lunar sobre el área apuntada.

La luz limita la paleta de colores y permite visión tenue diez yardas más allá del haz sin revelar la posición del lanzador.

El lanzador puede mover el rayo dentro de su visión y atenuarlo si lo desea.

La luz tiene las propiedades de la verdadera luz lunar y puede provocar la transformación licántropa según el criterio del DM.

Componentes materiales: semillas de planta lunar y una pieza de piedra luna (piedra de luna).''',
    },
    271: {
        "name": "Otrotiempo",
        "description": '''Al entrar en otrotiempo, el sacerdote se traslada a una realidad donde el mundo está congelado un momento en el futuro.

Durante la duración elegida, puede actuar sin ser detectado ni dañar el mundo físico; obtiene acciones subjetivas adicionales pero no puede aprovecharse de sucesos intermedios que cambien lo observado.

La duración disponible depende del nivel del lanzador (hasta 5 rondas a nivel 20+); existe 1% de probabilidad de quedar atascado en otrotiempo cada uso.

Componente material: un reloj de arena con sales raras (valor mínimo 100 gp).''',
    },
    272: {
        "name": "Pasar Planta",
        "description": '''Este conjuro permite al lanzador entrar en un árbol y moverse desde su interior a otro árbol del mismo tipo dentro del alcance.

El alcance varía según la especie de árbol; la transición tarda un asalto y el lanzador puede permanecer en el árbol receptor hasta 1 asalto por nivel.

Si no hay árbol adecuado en rango, el lanzador permanece dentro del primero; si el árbol anfitrión es talado o quemado, el lanzador muere si no sale antes.''',
    },
    273: {
        "name": "Cambio de Plano",
        "description": '''Cuando se lanza, este conjuro transporta al sacerdote o a otra criatura a otro plano de existencia.

Si varias personas se toman de las manos pueden enviarse hasta ocho criaturas a la vez.

Se requiere una varilla bifurcada metálica como componente material; el tipo y tamaño de metal influyen en el destino plano.

Un objetivo no voluntario debe ser tocado y puede efectuar salvación para evitar el traslado.''',
    },
    274: {
        "name": "Producir Hielo",
        "description": '''Este conjuro crea frío sobrenatural, condensando agua atmosférica y de superficie en una gruesa capa de hielo.

Si no hay humedad suficiente, el hechizo puede fallar.

El lanzador afecta un cubo de 1 pie por nivel; criaturas dentro sufren 2d4 +1 por nivel de daño al crearse el hielo (mitad con salvación) y quienes entren pueden resbalar y caer si fallan la salvación.

El hielo dura 2 rondas por nivel y puede formar un iceberg si se aplica sobre agua profunda.

Componente material: una escama de dragón blanco.''',
    },
    275: {
        "name": "Misión",
        "description": '''El conjuro impone a la criatura afectada la obligación de realizar un servicio y regresar con prueba de su cumplimiento.

Si la misión no se cumple correctamente, la criatura sufre -1 a todas sus tiradas de salvación por cada día de incumplimiento hasta que la tarea se corrija o el sacerdote anule el efecto.

Un ser de la misma religión o de nivel superior puede cancelar la misión; objetos o intervenciones divinas excepcionalmente poderosas también la anulan.

Componente material: el símbolo sagrado del sacerdote.''',
    },
    276: {
        "name": "Arco Iris",
        "description": '''Para lanzar este conjuro el sacerdote debe ver un arco iris o disponer de un diamante preparado.

Tiene dos usos: crear un arco multicolor mágico que dispara hasta siete proyectiles mágicos equivalentes a arma +2 (cada color es especialmente efectivo contra ciertos tipos de criaturas), o formar un puente de siete colores útil para cruzar distancias.

Componentes: símbolo sagrado y agua bendita; el diamante y el agua se consumen si no existe un arco iris cercano.''',
    },
    277: {
        "name": "Resurrección Menor",
        "description": '''Al lanzar este conjuro, el sacerdote puede devolver la vida a un humanoide (humano, enano, gnomo, semielfo, medianos) muerto hasta tantos días como niveles tenga el sacerdote.

El cuerpo debe estar íntegro; el resucitado recupera 1 punto de vida y sufre una penalización temporal de Constitución, además de necesitar reposo prolongado.

El objetivo voluntario o no puede tener derecho a una tirada de salvación según las reglas.

La reversión, matar viviente, inflige daño si la salvación falla.''',
    },
    278: {
        "name": "Repetir Acción",
        "description": '''Este conjuro obliga a la víctima a repetir exactamente la acción que realizó en el asalto anterior.

El resultado repetido es idéntico al original (por ejemplo, si el primer ataque infligió 4 puntos, la repetición infligirá otros 4 si las condiciones permiten hacerlo).

El sujeto debe estar físicamente en capacidad de repetir la acción (flechas, componentes, alcance, etc.).

Un objetivo no voluntario recibe salvación para evitar el efecto.

Componentes materiales: dos pequeñas esferas de vidrio idénticas.''',
    },
    279: {
        "name": "Ira Justa de los Fieles",
        "description": '''Al lanzar este conjuro, el sacerdote infunde a sus aliados una furia divina que mejora considerablemente su capacidad de combate.

Los aliados afectados obtienen un bono similar a `aid`: +1 a ataques y salvaciones y 1d8 puntos de golpe temporales; los que compartan la misma fe ganan además un ataque cuerpo a cuerpo adicional y +2 a tiradas de ataque, daño y salvaciones.

Los puntos de vida adicionales se pierden al terminar el conjuro y los que combatieron bajo la ira necesitan descansar una ronda completa tras el efecto; si son forzados a continuar, sufren fatiga según las reglas de combate.

Componente material: el símbolo sagrado del sacerdote.''',
    },
    280: {
        "name": "Paredes Aullantes",
        "description": '''Este conjuro encanta una habitación (máximo el área de efecto) para que las paredes emitan chillidos cuando entre cualquier criatura mayor que una rata.

Los chillidos duran 2-5 rondas y solo los oyen las criaturas dentro de la sala; en la primera ronda no causan efectos, pero en rondas posteriores quienes no se protejan sufren penalizaciones según la tabla original.

El efecto es anulado por un silencio de 15' o por disipar magia.''',
    },
    281: {
        "name": "Piedras Dentadas",
        "description": '''El conjuro transforma la roca en largas puntas afiladas que se camuflan en el terreno.

El área afecta a piedra natural y mampostería; quienes atraviesen la zona reciben 1d4 de daño por asalto y pueden sufrir múltiples ataques si caen o cargan.

Una observación cuidadosa reduce la probabilidad de ser sorprendido por ellas. Componentes: cuatro estalactitas pequeñas.''',
    },
    282: {
        "name": "Onda Mental",
        "description": '''Hechizo cooperativo o individual que envía un impulso mental a individuos concretos, informándoles de la situación y la ubicación general del lanzador.

Hasta diez destinatarios por lanzador (más si participan varios sacerdotes). Duplicar intensidad puede convertir el mensaje en una sugestión o en una misión (requiere mayor número de sacerdotes).

No hay límite de alcance salvo el plano; los receptores reconocen al emisor y su estado anímico.''',
    },
    283: {
        "name": "Pozo del Tiempo",
        "description": '''Convierte una superficie reflectante en una ventana que muestra un acontecimiento pasado con sonido y visiones precisas.

La posibilidad de éxito base es 50% más modificadores por sabiduría, experiencia previa o participación en el evento; el DM determina la precisión final.

No permite interactuar con la visión; componente: una superficie reflectante y una pizca de cuarzo.''',
    },
    284: {
        "name": "Transmutar Roca en Lodo",
        "description": '''Convierte piedra natural en lodo hasta 10 pies de profundidad por área afectada.

El lodo atrapa y hace hundir a criaturas incapaces de volar o levitar; la evaporación y el drenaje restauran el terreno con el tiempo.

No afecta piedra trabajada ni material mágico; reverso endurece lodo en roca.''',
    },
    285: {
        "name": "Visión Verdadera",
        "description": '''Confiere al receptor la capacidad de ver las cosas tal como son: revela invisibilidad, ilusiones, puertas secretas y la naturaleza de auras.

Permite ver parcialmente al Plano Etéreo; no otorga visión a través de sólidos. Requiere ungüento ocular costoso.''',
    },
    286: {
        "name": "Vigilia Incesante",
        "description": '''Este conjuro protege y potencia la vigilancia de un sacerdote en un pequeño ámbito, mejorando visión, eliminando la necesidad de comida o sueño y otorgando inmunidad a miedo y encantamiento mientras dure.

El ritual requiere inscripciones y polvo de zafiro; cuando finaliza, el sacerdote necesita descanso proporcional.''',
    },
    287: {
        "name": "Barrera Contra No Muertos",
        "description": '''Crea un cubo protegido que actúa como si los no-muertos fuesen sometidos a un intento de turno por un sacerdote de dos niveles menores.

Evita la entrada de no-muertos que no superen la tirada de retorno; los no-muertos dentro al lanzarlo no quedan afectados hasta que salgan y vuelvan a entrar.''',
    },
    288: {
        "name": "Muro de Fuego",
        "description": '''Invoca una cortina vertical de llamas que inflige daño a quienes se encuentren cerca o la atraviesen; un lado emite calor intenso que causa más daño.

La duración y el tamaño dependen del nivel del lanzador; el componente es fósforo.''',
    },
    289: {
        "name": "Servidor Aéreo",
        "description": '''Convoca un servidor aéreo invisible que recupera objetos o criaturas designadas y los trae al lanzador; no combate por él y requiere condiciones de protección para evitar hostilidad.

La estancia máxima es de 1 día por nivel y el objeto debe ser físicamente transportable.''',
    },
    290: {
        "name": "Envejecer Criatura",
        "description": '''Aumenta la edad de la criatura objetivo en un año por nivel del lanzador; los sujetos pueden sufrir efectos físicos y deben superar tiradas de shock.

No puede causar la muerte directa por envejecimiento más allá del límite natural; existe conjuro inverso para revertir edad.''',
    },
    291: {
        "name": "Invocación de Animales III",
        "description": '''Invoca animales reales dentro del alcance: mayores cantidades o HD más altos según el nivel del lanzador (varias combinaciones posibles).

Solo acuden animales que estén presentes en el área; la duración y el control son limitados según las reglas estándar.''',
    },
    292: {
        "name": "Animar Objeto",
        "description": '''Imbuye objetos inanimados con movimiento y una voluntad limitada para atacar o ejecutar tareas simples.

El volumen total animable depende del nivel; la velocidad, daño y AC varían por forma y material.''',
    },
    293: {
        "name": "Concha Anti-Animal",
        "description": '''Crea una cúpula hemisférica que impide la entrada de criaturas totalmente o parcialmente animales (no extraplanares ni mágicas).

Dura un turno por nivel y requiere símbolo sagrado y pimienta como componentes.''',
    },
    294: {
        "name": "Barrera de Cuchillas",
        "description": '''Genera un muro de hojas giratorias que inflige gran daño a quienes lo atraviesen (8d8), con salvación especial para reducir o evitar el efecto si ya están dentro.

La barrera dura 3 rondas por nivel y puede orientarse en distintos planos.''',
    },
    295: {
        "name": "Ordenar Monstruo",
        "description": '''Permite imponer una orden de una sola palabra a una criatura con Inteligencia mínima, que intentará obedecer durante la duración si falla su salvación.

No funciona contra no-muertos y tiene excepciones si la orden implica peligro mortal.''',
    },
    296: {
        "name": "Convocar Animales",
        "description": '''Crea uno o varios mamíferos para atacar a los enemigos del lanzador; el total de HD de los animales está limitado por el nivel y las reglas de la invocación.

Las criaturas obedecen comandos verbales y desaparecen al finalizar la duración o si son destruidas.''',
    },
    297: {
        "name": "Convocar Elemental de Fuego",
        "description": '''Abre una puerta al Plano del Fuego para traer un elemental (o criaturas relacionadas) que ayudará al lanzador durante hasta 1 turno por nivel; la variedad y potencia dependen de tiradas de probabilidad.''',
    },
    298: {
        "name": "Muros Trituradores",
        "description": '''Este conjuro encantará una pared o suelo para que, tras detectarse intrusos, la superficie se desplace y comprima hasta aplastar a quienes se encuentren en su trayectoria.

El área afectada y la velocidad dependen del nivel del lanzador; la activación y el progreso siguen las reglas del hechizo.''',
    },
    299: {
        "name": "Incredulidad",
        "description": '''Permite al lanzador convencerse temporalmente de que ciertos objetos o hasta cuatro criaturas no existen: no puede ser dañado por ellos ni interactuar con ellos, pero tampoco actúa contra ellos.

Requiere un esfuerzo mental (tirada) y provoca consecuencias al terminar el efecto según el daño sufrido.''',
    },
    300: {
        "name": "Perdición de Dragones",
        "description": '''Impide que dragones que fallen su salvación entren en el área de efecto; el cubo afectado es proporcional al nivel del lanzador.

Los dragones pueden atacar dentro del área desde fuera, y los que ya estén dentro al lanzar el conjuro no resultan afectados hasta que salgan y traten de volver a entrar.

Componentes: símbolo sagrado y una escama de dragón.''',
    },
    301: {
        "name": "Escudo de Entropía",
        "description": "Un campo caótico de energía y demimateria rodea al lanzador, desviando ataques y reduciendo su impacto. El escudo cubre unos dos pies alrededor del castear y hace que los ataques cuerpo a cuerpo fallen el 50% de las veces; además otorga +2 a la Clase de Armadura. Proyectiles y armas arrojadas suelen desviarse automáticamente. Contra ataques de energía (bola de fuego, rayo, etc.) hay un 50% de probabilidades de que el efecto no lo afecte; si atraviesa, el lanzador gana +2 a la tirada de salvación. No protege contra efectos no materiales o mentales. Componente: una gema valuada en al menos 100 gp expuesta a energías caóticas.",
    },
    302: {
        "name": "Encontrar el Camino",
        "description": "El receptor del conjuro percibe la ruta física más corta y directa hacia el destino buscado (p. ej. salida, salida de un laberinto), indicando la dirección y las acciones físicas necesarias. Funciona en el mismo plano que el lanzador y dura 1 turno por nivel. Requiere contadores divinatorios como huesos o runas. La reversión hace perder el rumbo.",
    },
    303: {
        "name": "Semillas de Fuego",
        "description": "Crea semillas incendiarias: hasta cuatro bellotas para lanzar como proyectiles que explotan al impactar (2d8 daño y fuego en 10' diámetro) o hasta ocho bayas de acebo que actúan como incendiarios temporizados. Las semillas duran un turno por nivel. Las víctimas pueden hacer salvación para mitad de daño.",
    },
    304: {
        "name": "Prohibición",
        "description": "Sella un área para impedir teleportación, plane shift y penetración etérea; puede requerir contraseña para entrar. Los que intenten entrar y no compartan la alineación del lanzador sufren daño si fallan la salvación. Requiere agua bendita, incienso y componentes costosos por volumen protegido.",
    },
    305: {
        "name": "Variación de Gravedad",
        "description": "Modifica la topografía del terreno dentro de una región cuadrada (hasta 120 yd de lado), creando pendientes o aplanando superficies hasta 20 pies de diferencia de altura. No altera la gravedad en sí, solo la forma del terreno. Dura 1 turno por cada 3 niveles.",
    },
    306: {
        "name": "Mente de Grupo",
        "description": "Versión ampliada de rapport: permite comunicación silenciosa y compartida entre varios sujetos voluntarios dentro de un círculo de 30 yd de diámetro. El número de participantes depende del nivel del lanzador. Las experiencias compartidas son débiles y no transfieren habilidades complejas.",
    },
    307: {
        "name": "Curar",
        "description": "Conjuro muy potente que elimina enfermedades y heridas: cura todos los puntos de daño y remueve ceguera, enfermedades y ciertos desórdenes mentales. No funciona contra criaturas inmunes a curaciones; la reversión, daño, inflige pérdida severa de puntos de golpe y enfermedades.",
    },
    308: {
        "name": "Banquete de Héroes",
        "description": "Crea un festín magnífico que alimenta a hasta un número de comensales igual al nivel del sacerdote. Tras una hora de consumo, cura enfermedades, inmuniza a veneno por 12 horas y concede 1d4+4 puntos de vida además de efectos similares a bless durante 12 horas. Si el banquete se interrumpe, el conjuro falla.",
    },
    309: {
        "name": "Tierra de Estabilidad",
        "description": "Protege un volumen de terreno (10-ft cube por nivel) frente a desastres naturales (hundimientos, temblores, erosión) durante 1 día por nivel. Ideal para proteger campos, edificios y zonas agrícolas.",
    },
    310: {
        "name": "Pensamientos Legales",
        "description": "Fuerza al objetivo a cumplir literalmente una ley específica vigente en la jurisdicción actual. El sacerdote debe enunciar la ley al lanzar; el objetivo recibe salvación para resistir. El hechizo obliga a obedecer la letra de la ley mientras dure.",
    },
    311: {
        "name": "Roble Vivo",
        "description": "Encanta un roble sano para que actúe como guardián: el árbol puede animarse y defender un área, con estadísticas similares a un gran guardián vegetal. El efecto dura 1 día por nivel y puede retornar a su forma inerte a voluntad del lanzador.",
    },
    312: {
        "name": "Montura Monstruosa",
        "description": "Convierte criaturas vivas apropiadas en monturas obedientes (hasta 10 HD de criaturas o niveles de criaturas pequeñas) por 1 hora por nivel. Los objetivos reciben salvación para evitar el efecto; deben ser de inteligencia baja y tamaño suficiente para montar.",
    },
    313: {
        "name": "Partir Agua",
        "description": "Parte un cuerpo de agua creando un canal o pasillo practicable: profundidad, longitud y anchura dependen del nivel (ej.: 3 ft por nivel de profundidad). Puede crear un cilindro de aire si se lanza bajo el agua. Dura 1 turno por nivel.",
    },
    314: {
        "name": "Espejo Físico",
        "description": "Crea un disco invisible de espacio doblado que refleja la trayectoria de proyectiles y conjuros físicos, devolviéndolos hacia su lanzador/atacante. Opera desde una sola orientación y dura 1d4+8 rondas. Si dos espejos se cruzan, ambos explotan causando daño por distorsión.",
    },
    315: {
        "name": "Reclusión",
        "description": "Encierra a una criatura en un espacio extradimensional del que no puede interactuar con el mundo exterior; el ocupante es invisible y no detectable por escrutinio mágico. La reclusión impide lanzar conjuros desde dentro y tiene duración prolongada; sacar al prisionero requiere permiso del lanzador o dispel magic potente.",
    },
    316: {
        "name": "Saltar Día",
        "description": "Transporta instantáneamente a las criaturas en un radio de 10' veinticuatro horas hacia el futuro; no pasa tiempo para los afectados pero el entorno puede haber cambiado. Los no voluntarios pueden hacer salvación. No recupera curaciones o memorias y consumidores de tiempo (magos) no memorizan conjuros en el periodo saltado.",
    },
    317: {
        "name": "Orbe Abrasador de Sol",
        "description": "Imbuye un topacio para que, al ser lanzado, explote en un destello abrasador que inflige 6d6 de daño y ciega a la víctima 1d6 rondas (mitad con salvación). Contra no muertos el daño es mayor. Si falla el ataque, la gema explota en área menor.",
    },
    318: {
        "name": "Hablar con Monstruos",
        "description": "Permite comunicarse con criaturas monstruosas que posean algún medio de comunicación (gestos, voces, feromonas, etc.). El lanzador puede interrogar a distintos tipos de criaturas por separado y la duración varía con el nivel.",
    },
    319: {
        "name": "Cólera Espiritual",
        "description": "Hechizo cooperativo poderoso que, con seis o más sacerdotes, causa una ola devastadora de daño (10d6 + 1d6 por sacerdote extra) sobre un área determinada. Cada participante sufre daño por el esfuerzo. Requiere coordinación y causa gran destrucción.",
    },
    320: {
        "name": "Piedra Parlante",
        "description": "Al lanzar este conjuro sobre un volumen de piedra (1 cu yd), las piedras revelan lo que han visto o sentido: quién las tocó, qué hay detrás o qué ocultan. La precisión depende de la 'perspectiva' de la piedra y el DM decide los detalles. Componentes: una gota de mercurio y un poco de arcilla.",
    },
}


def main():
    repo_root = Path(__file__).resolve().parents[1]
    spells_path = repo_root / 'src' / 'Info' / 'spells.json'
    backup_path = spells_path.with_suffix('.json.bak')

    if not spells_path.exists():
        print(f"ERROR: no se encuentra {spells_path}")
        return

    # Backup original
    shutil.copy2(spells_path, backup_path)
    print(f"Backup creado en: {backup_path}")

    with spells_path.open('r', encoding='utf-8') as f:
        data = json.load(f)

    spells = data.get('spells') or []
    changed = 0

    for spell in spells:
        sid = spell.get('id')
        if sid in MAPPING:
            spell['name'] = MAPPING[sid]['name']
            spell['description'] = MAPPING[sid]['description']
            changed += 1

    if changed == 0:
        print('No se realizaron cambios (no se encontraron ids objetivo).')
        return

    with spells_path.open('w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    # Validate write
    try:
        with spells_path.open('r', encoding='utf-8') as f:
            json.load(f)
    except Exception as e:
        print('ERROR al validar JSON tras escritura:', e)
        return

    print(f'Hecho: {changed} hechizos actualizados.')


if __name__ == '__main__':
    main()
