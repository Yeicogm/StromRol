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
    426: {
        "name": "Senda de Brisa",
        "description": "Crea una corriente de aire que acelera el movimiento de aliados a lo largo de una ruta definida, reduciendo su cansancio temporalmente.",
    },
    427: {
        "name": "Luz de Farol",
        "description": "Genera una luz orientadora que sólo ven aliados designados; puede marcar caminos seguros y señales predefinidas.",
    },
    428: {
        "name": "Corte de Ceniza",
        "description": "Una onda dirigida de ceniza que daña y ciega temporalmente a criaturas expuestas; se dispersa con viento fuerte.",
    },
    429: {
        "name": "Barrido Terrestre",
        "description": "Provoca un temblor menor que desequilibra y derriba a enemigos en un área, útil para romper formaciones.",
    },
    430: {
        "name": "Susurro de Héroes",
        "description": "Invoca voces ancestrales que inspiran a los presentes, otorgando pequeños bonos a la moral y la resolución.",
    },
    431: {
        "name": "Muro de Vapor",
        "description": "Erige una pared de vapor caliente que impide el paso y quema levemente a los que intentan cruzarla.",
    },
    432: {
        "name": "Caricia de Marea",
        "description": "Una corriente curativa suave que restaura vitalidad menor y alivia fatiga en quienes se bañan en ella.",
    },
    433: {
        "name": "Grito de Guerra",
        "description": "Un clamor que añade ferocidad temporal a aliados cercanos, aumentando daño corporal por breves instantes.",
    },
    434: {
        "name": "Perdón Espiritual",
        "description": "Quita rencores menores y atempera ánimos, facilitando reconciliaciones y reduciendo agravios en contactos sociales.",
    },
    435: {
        "name": "Hoja de Viento",
        "description": "Forma una cuchilla de aire cortante que puede alcanzar a objetivos a distancia y cortar telas y cuerdas finas.",
    },
    436: {
        "name": "Ancla de Luz",
        "description": "Fija un punto de luz que repele sombras y criaturas de la oscuridad, manteniendo el área iluminada por la duración.",
    },
    437: {
        "name": "Rastro Resplandeciente",
        "description": "Deja un rastro luminoso que sólo los aliados pueden seguir, ideal para guiarlos en la oscuridad.",
    },
    438: {
        "name": "Puño Ígneo",
        "description": "Convoca una mano envuelta en llamas que golpea a un objetivo, causando daño por fuego y posible combustión.",
    },
    439: {
        "name": "Lento Reversal",
        "description": "Invierte temporalmente flujos menores (como corrientes o mecanismos) durante unos momentos controlados.",
    },
    440: {
        "name": "Bendición de la Hoja",
        "description": "Imbuye una arma cortante para que cause daño adicional contra criaturas de cierto tipo por la duración.",
    },
    441: {
        "name": "Recoveco Espectral",
        "description": "Crea un pequeño refugio etéreo donde las heridas sanan ligeramente más rápido y las mentes se calman.",
    },
    442: {
        "name": "Círculo de Silencio",
        "description": "Establece un área donde el sonido es absorbido; útil para proteger rituales o realizar acciones silenciosas.",
    },
    443: {
        "name": "Sello de Miedo",
        "description": "Marca un objetivo con un sello que incrementa la probabilidad de que sufra miedo ante estímulos inesperados.",
    },
    444: {
        "name": "Cascada de Brillos",
        "description": "Una lluvia de chispas que deslumbra y distrae, reduciendo la precisión de los atacantes por la duración.",
    },
    445: {
        "name": "Velo de Acebo",
        "description": "Crea un camuflaje natural que confunde la vista y el olfato, ideal para emboscadas en bosque.",
    },
    446: {
        "name": "Marcha Imperturbable",
        "description": "Confiere paso firme y resistencia a fatiga al grupo que avanza, útil en largas marchas o terreno difícil.",
    },
    447: {
        "name": "Punto de Anulación",
        "description": "Genera un punto pequeño donde la magia menor queda temporalmente neutralizada; funcional para desactivar trampas arcanas.",
    },
    448: {
        "name": "Mirada de Obsidiana",
        "description": "Un rayo oscuro que hiere la mente y puede dejar visiones perturbadoras a víctimas que fallen su salvación.",
    },
    449: {
        "name": "Brote de Vida",
        "description": "Acelera la regeneración de plantas y vida menor en un área, aumentando explosiones de crecimiento natural.",
    },
    450: {
        "name": "Corona del Guardián",
        "description": "Otorga a un líder temporal atributos que inspiran a sus seguidores, mejorando defensa y coordinación por la duración.",
    },
    451: {
        "name": "Senda de Recuperación",
        "description": "Marca un sendero que acelera la recuperación de heridas y fatiga a quienes lo sigan durante varios minutos.",
    },
    452: {
        "name": "Llama de Guía",
        "description": "Una llama pequeña que sólo ve el lanzador y sus aliados designados, útil para evitar perderse en la oscuridad.",
    },
    453: {
        "name": "Mordisco del Viento",
        "description": "Un golpe cortante de aire que inflige daño cortante ligero y puede desgarrar velos y telas finas.",
    },
    454: {
        "name": "Barrera Peregrina",
        "description": "Crea una barrera portátil que protege del frío y la radiación leve durante viajes largos.",
    },
    455: {
        "name": "Canto del Bosquecillo",
        "description": "Atrae fauna pequeña y amortigua el combate en el área, facilitando la captura de criaturas o la negociación.",
    },
    456: {
        "name": "Toque de Piedra",
        "description": "Convierte temporalmente la piel del objetivo en una coraza pétrea, aumentando su armadura natural.",
    },
    457: {
        "name": "Esfera de Aislamiento",
        "description": "Encierra un punto en una burbuja que bloquea comunicaciones mágicas y físicas menores por la duración.",
    },
    458: {
        "name": "Clarividencia Local",
        "description": "Proporciona visión remota de un lugar cercano y eventos recientes, útil para vigilancia de corto alcance.",
    },
    459: {
        "name": "Aliento de Fuego Menor",
        "description": "Exhala una pequeña llamarada que prende objetos combustibles y causa daño ígneo reducido.",
    },
    460: {
        "name": "Rediente Vital",
        "description": "Restaura una parte de la energía vital del objetivo, curando heridas superficiales y reanimando a cansados.",
    },
    461: {
        "name": "Muro de Hojas",
        "description": "Levanta una pantalla de follaje denso que bloquea la vista y reduce el daño de proyectiles.",
    },
    462: {
        "name": "Susurros del Viento",
        "description": "Envía mensajes cortos a través del viento que sólo pueden ser escuchados por el receptor deseado.",
    },
    463: {
        "name": "Espejo Rápido",
        "description": "Crea una réplica ilusoria momentánea del lanzador que distrae a los atacantes y absorbe un golpe.",
    },
    464: {
        "name": "Llaga Curativa",
        "description": "Aplica una curación profunda que sella heridas y reduce la probabilidad de infección durante días.",
    },
    465: {
        "name": "Cadenas de Niebla",
        "description": "Forman cadenas vaporosas que ralentizan y sujetan a las criaturas que las atraviesan.",
    },
    466: {
        "name": "Hoja Lunar",
        "description": "Una hoja de luz lunar que daña a criaturas sensibles al brillo solar y corta con precisión mágica.",
    },
    467: {
        "name": "Bendición del Manantial",
        "description": "Purifica pequeñas fuentes de agua y proporciona propiedades curativas leves a quienes beben.",
    },
    468: {
        "name": "Canción de Vigilia",
        "description": "Mantiene a un grupo alerta, reduciendo la probabilidad de ser sorprendido y mejorando percepciones.",
    },
    469: {
        "name": "Aro de Protección",
        "description": "Crea un aro alrededor del lanzador que dispersa ataques menores y reduce daño físico entrante.",
    },
    470: {
        "name": "Marca de Paso",
        "description": "Deja marcas sutiles que solo el lanzador o sus aliados pueden seguir, útil para guiar grupos.",
    },
    471: {
        "name": "Desvanecimiento",
        "description": "Reduce la visibilidad del objetivo, haciéndolo más difícil de detectar tanto visual como mágicamente.",
    },
    472: {
        "name": "Llama Sanadora",
        "description": "Una variante menor que cura quemaduras y acelera la regeneración de tejidos superficiales.",
    },
    473: {
        "name": "Ojo del Navegante",
        "description": "Permite detectar corrientes de viento y obstáculos en rutas aéreas, útil para pilotos y viajeros.",
    },
    474: {
        "name": "Trampa de Sombras",
        "description": "Crea una zona donde las sombras se vuelven tangibles y atrapan a los incautos que pasen.",
    },
    475: {
        "name": "Cántico de Fortaleza",
        "description": "Un canto inspirador que fortalece la resistencia y la moral de los aliados cercanos durante la batalla.",
    },
    476: {
        "name": "Velo de Aurora",
        "description": "Envuelve al objetivo en luces cambiantes que confunden sensores y reducen la probabilidad de detección mágica.",
    },
    477: {
        "name": "Golpe Abisal",
        "description": "Canaliza presión y oscuridad en un golpe que hiere profundamente y puede empujar al enemigo hacia atrás.",
    },
    478: {
        "name": "Eco Sanador",
        "description": "Una resonancia que restaura energía y calma dolores, ideal tras combates breves para recuperación inmediata.",
    },
    479: {
        "name": "Rastro Fantasma",
        "description": "Crea huellas ilusorias que distraen y desorientan a perseguidores, haciendo creer que el grupo tomó otra dirección.",
    },
    480: {
        "name": "Manto de Ceniza",
        "description": "Cubre un área con una capa gris que reduce visibilidad y asfixia levemente a criaturas pequeñas si permanecen dentro.",
    },
    481: {
        "name": "Luz de Esperanza",
        "description": "Una luz reconfortante que repele miedos menores y cura el desaliento, mejorando la moral del grupo.",
    },
    482: {
        "name": "Toque de Escarcha",
        "description": "Congela ligeramente la superficie de contacto, ralentizando movimientos y causando daño por frío gradual.",
    },
    483: {
        "name": "Flecha de Bruma",
        "description": "Dispara una flecha hecha de niebla compacta que atraviesa coberturas ligeras y deja un rastro para seguimiento.",
    },
    484: {
        "name": "Sello de Tranquilidad",
        "description": "Marca un área con energía que evita peleas y calma a criaturas dentro, salvo que sean muy hostiles.",
    },
    485: {
        "name": "Guardia Lunar",
        "description": "Invoca figuras de luz lunar que vigilan un perímetro y alertan al lanzador de intrusos.",
    },
    486: {
        "name": "Corriente Vital",
        "description": "Canaliza energía vital hacia un aliado, acelerando recuperación de heridas menores y fatiga.",
    },
    487: {
        "name": "Tridente de Niebla",
        "description": "Materializa tres puntas de niebla sólida que pueden lanzarse para inmovilizar o herir a objetivos.",
    },
    488: {
        "name": "Barrera de Púas",
        "description": "Levanta una defensa punzante que daña a quien intente cruzarla y protege flancos vulnerables.",
    },
    489: {
        "name": "Silencio Profundo",
        "description": "Extiende un silencio denso que bloquea sonidos y silencio mágico en una zona limitada.",
    },
    490: {
        "name": "Manantial de Aliento",
        "description": "Un flujo de aire vivificante que refresca y restaura pequeñas cantidades de energía a quienes lo inhalen.",
    },
    491: {
        "name": "Cúpula Protectora",
        "description": "Crea una cúpula translúcida que reduce daño elemental entrante y actúa como refugio temporal.",
    },
    492: {
        "name": "Onda de Confusión",
        "description": "Emite una onda que desordena a criaturas cercanas, causando errores de orientación y acciones involuntarias.",
    },
    493: {
        "name": "Pacto Silvestre",
        "description": "Establece un acuerdo temporal con la flora local para obtener ayuda en forma de cobertura o alimentos.",
    },
    494: {
        "name": "Luz Anclada",
        "description": "Fija una luz que no puede ser extinguida fácilmente por medios naturales durante la duración.",
    },
    495: {
        "name": "Brisa Curativa",
        "description": "Una brisa suave que alivia heridas menores y calma venenos leves, mejorando la recuperación.",
    },
    496: {
        "name": "Trampa de Espinas",
        "description": "Coloca un área cubierta de espinas mágicas que hieren y ralentizan a los que la pisan.",
    },
    497: {
        "name": "Visión Compartida",
        "description": "Permite a aliados ver a través de los ojos del lanzador por un breve periodo, facilitando coordinación.",
    },
    498: {
        "name": "Canto de Curación",
        "description": "Una melodía que restaura salud lentamente a todos los oyentes amistosos dentro de su alcance.",
    },
    499: {
        "name": "Lanza Terrestre",
        "description": "Hace surgir una aguja de tierra que atraviesa la armadura ligera y deja al objetivo expuesto.",
    },
    500: {
        "name": "Emblema del Protector",
        "description": "Imprime un símbolo místico en el objetivo que reduce daño recibido y atrae ayuda menor durante la duración.",
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
    501: {
        "name": "Sujecion de No Muertos",
        "description": "Al lanzarlo, el hechizo inmoviliza a 1d3 no muertos cuyos Dados de Golpe totales sean iguales o inferiores al nivel del lanzador.\n\nUn solo hechizo no puede afectar a más de tres no muertos.\n\nPara lanzarlo, el mago apunta a un punto dentro de alcance y los tres no muertos más cercanos a ese punto se hallan dentro del área, siempre que estén en el campo de visión y dentro del alcance del conjuro.\n\nLos no muertos sin intelecto (esqueletos, zombies o ghouls) quedan automáticamente afectados.\n\nA otras formas de no muertos se les permite una tirada de salvación para negar el efecto.\n\nSi el hechizo tiene éxito, los no muertos quedan inmóviles durante la duración del conjuro.\n\nEl componente material es una pizca de azufre y ajo en polvo.",
    },
    507: {
        "name": "Cabaña Diminuta de Leomund",
        "description": "Al lanzar este hechizo, el mago crea una esfera opaca e inmóvil de fuerza del color deseado a su alrededor.\n\nLa mitad de la esfera sobresale del suelo y el hemisferio inferior atraviesa el suelo.\n\nHasta siete criaturas de tamaño humano pueden caber dentro del campo con su creador y pueden entrar y salir libremente de la cabaña sin dañarla, pero si el lanzador sale de ella, el hechizo se disipa.\n\nLa temperatura dentro de la cabaña es de 21 °C (70 °F) si la temperatura exterior está entre -18 y 38 °C (0 y 100 °F).\n\nUna temperatura exterior inferior a 0 °F o superior a 100 °F reduce o aumenta, respectivamente, la temperatura interior grado a grado.\n\nLa cabaña diminuta también protege de los elementos: lluvia, polvo, tormentas de arena y similares.\n\nLa cabaña resiste cualquier viento inferior a la fuerza de un huracán sin sufrir daño, pero un viento mayor la destruye.\n\nEl interior de la cabaña es un hemisferio; el lanzador puede iluminarla tenuemente a voluntad o apagar la luz cuando lo desee.\n\nAunque el campo de fuerza es opaco desde fuera, es transparente desde dentro.\n\nProyectiles, armas y la mayoría de efectos de conjuros atraviesan la cabaña sin afectarla, aunque estos no pueden ver a los ocupantes desde el exterior.\n\nLa cabaña puede ser disipada.\n\nEl componente material es una pequeña cuenta de cristal que se hace añicos cuando expira la duración del hechizo o la cabaña es disipada.",
    },
    508: {
        "name": "Signo Menor de Sellado",
        "description": "Mediante este hechizo, el lanzador crea una protección mágica con dos efectos principales: en primer lugar, afecta a una puerta o a un objeto que se abra (un cofre, por ejemplo) como si fuera un hechizo de retener portal, manteniéndolo cerrado con seguridad.\n\nEn segundo lugar, si la entrada protegida se abre por la fuerza mediante cualquier medio, mágico o físico, el signo no solo se destruye, sino que además golpea a la criatura ofensorainfligiendo 1d8 puntos de daño +1 punto de daño por nivel del lanzador.\n\nLa duración de este hechizo es de un día por nivel del lanzador o hasta que se descargue, lo que ocurra primero.\n\nLa forma exacta de energía la elige el lanzador al crear el signo menor: ácido, frío, fuego, electricidad o disrupción sónica son opciones habituales.\n\nEl signo no se oculta ni se disimula de ninguna manera y suele ser bastante visible en el objeto o portal que protege.\n\nEl lanzador no puede especificar criaturas o condiciones particulares para el funcionamiento del signo menor; funciona contra cualquier criatura que intente atravesarlo (excepto criaturas extraplanares de 6 DG o más y magos de nivel superior al del lanzador, que pueden ignorarlo como si no existiera).\n\nEl signo no puede ser disipado por conjuros de nivel inferior como 'abrir', pero el lanzador puede eliminarlo a su elección, dando fin al conjuro, o puede ser anulado por un hechizo 'borrar' lanzado por un mago de nivel igual o superior al del lanzador original.\n\nEl componente material para un signo menor puede ser una pizca de polvo de diamante (frío), rubí (fuego), esmeralda (ácido), perla (disrupción sónica) o zafiro (electricidad), según el tipo de energía que el mago desee.\n\nEl valor de la gema debe ser de al menos 100 po.",
    },
    515: {
        "name": "No Deteccion",
        "description": "Al lanzar este hechizo, el mago hace que la criatura u objeto tocado sea indetectable para conjuros de adivinación como clariaudiencia, clarividencia, localizar objeto, percepción extrasensorial y conjuros de detección.\n\nTambién impide su localización mediante objetos mágicos como bolas de cristal o medallones de percepción extrasensorial.\n\nNo afecta al conjuro 'conocer alineamiento' ni a la capacidad de seres inteligentes o de alto nivel para detectar criaturas invisibles.\n\nSi se intenta una adivinación, el lanzador de no detección debe realizar una tirada de salvación contra conjuros.\n\nSi tiene éxito, la adivinación falla.\n\nEl componente material del hechizo es una pizca de polvo de diamante por valor de 300 po.",
    },
    516: {
        "name": "Caballo Fantasma",
        "description": "Al lanzar este hechizo, el mago crea una criatura cuasi-real de tipo caballo.\n\nLa montura solo puede ser cabalgada por el mago que la creó o por cualquier persona para la que el mago la cree específicamente.\n\nUn caballo fantasma tiene cabeza y cuerpo negros, crin y cola grises, y cascos insustanciales de color humo que no producen sonido.\n\nSus ojos son de color lechoso.\n\nNo combate, pero todos los animales normales la rehúyen y solo los monstruosos la atacarán.\n\nLa montura tiene una Clase de Armadura 2 y 7 puntos de golpe, más 1 por nivel del lanzador.\n\nSi pierde todos sus puntos de golpe, el caballo fantasma desaparece.\n\nUn caballo fantasma se mueve a una velocidad de movimiento 4 por nivel del lanzador, hasta un máximo de 48.\n\nPosee lo que parece ser una silla y un bocado con riendas.\n\nSoporta el peso del jinete, más hasta 10 libras por nivel del lanzador.\n\nEstas monturas obtienen ciertos poderes según el nivel del mago que las crea:\n\n**Nivel 8:** Capacidad de pasar por terreno arenoso, fangoso o pantanoso sin dificultad.\n\n**Nivel 10:** Capacidad de caminar sobre el agua como si fuera suelo firme y transparente.\n\n**Nivel 12:** Capacidad de viajar por el aire como si fuera tierra firme, de modo que se pueden cruzar abismos y similares sin necesidad de puente.\n\nTen en cuenta, sin embargo, que la montura no puede despegar y volar por sí sola con facilidad; el desplazamiento debe ser entre puntos de altitud similar.\n\n**Nivel 14:** Capacidad de actuar como un pegaso; vuela a una velocidad de 48 por asalto a orden del jinete.\n\nLas habilidades de una montura incluyen las de niveles inferiores; por tanto, una montura de nivel 12 posee las habilidades de nivel 8, 10 y 12.",
    },
    517: {
        "name": "Proteccion Contra Amorfos",
        "description": "Esta abjuración se asemeja a los hechizos de protección contra insectos o contra el mal, pero en este caso el lanzador queda protegido de los ataques de cualquiera de los diversos monstruos amorfos, incluidos limos, jaleas, oozes, puddings, cubos y rastreadores serpenteantes.\n\nPara calificar como criatura amorfa, el monstruo debe tener un cuerpo amorfo o fluido, atacar mediante ácidos o secreciones de algún tipo, y ser nativo del Plano Material Primario (a diferencia de elementales extraplanares y criaturas similares).\n\nEl monstruo no soporta el contacto de la barrera que rodea al personaje protegido, y sus ataques naturales fallan automáticamente.\n\nSi el monstruo posee un ataque innato a distancia de cualquier tipo, estos también fallan.\n\nSi el personaje protegido ataca al monstruo, o si fuerza la barrera contra él, el hechizo termina y deja de estar protegido.\n\nEl componente material es una mezcla de sales raras esparcida en un pequeño círculo alrededor del personaje a proteger.",
    },
    518: {
        "name": "Proteccion Contra el Mal, Radio 10'",
        "description": "El globo de protección de este hechizo es idéntico en todos los aspectos al de un hechizo de protección contra el mal, salvo que abarca un área mucho mayor y su duración es superior.\n\nEl efecto se centra en la criatura tocada y se desplaza con ella.\n\nCualquier criatura protegida dentro del círculo puede romper la guardia contra monstruos encantados o invocados atacándolos cuerpo a cuerpo.\n\nSi una criatura demasiado grande para caber en el área del hechizo es la beneficiaria del mismo, el hechizo actúa como un hechizo normal de protección contra el mal solo para esa criatura.\n\nPara completar este hechizo, el lanzador debe trazar un círculo de 20 pies de diámetro usando plata en polvo.\n\nEl componente material para el reverso es hierro en polvo.",
    },
    520: {
        "name": "Pagina Secreta",
        "description": "Al lanzarlo, el hechizo de página secreta altera el contenido real de una página para que parezca algo completamente diferente.\n\nAsí, un mapa puede transformarse en un tratado sobre el bruñido de bastones de ébano.\n\nEl texto de un conjuro puede alterarse para mostrar una página de un libro de cuentas o incluso otra forma de conjuro.\n\nSobre la página secreta se pueden lanzar hechizos de confuso de idiomas y runas explosivas, pero un hechizo de comprensión de idiomas no puede revelar el contenido de la página secreta.\n\nEl lanzador puede revelar el contenido original pronunciando una palabra de mando, examinando la página real y devolviéndola después a su forma de página secreta.\n\nEl lanzador también puede eliminar el hechizo repitiendo dos veces la palabra de mando.\n\nQuienes detecten la tenue magia de una página con este hechizo ocultando su verdadero contenido pueden intentar disipar magia, pero si fallan, la página queda destruida.\n\nUn hechizo de visión verdadera no revela el contenido a menos que se lance combinado con un hechizo de comprensión de idiomas.\n\nUn hechizo borrar puede destruir la escritura.\n\nLos componentes materiales son escamas de arenque en polvo y esencia de fuego fatuo o de boggart.",
    },
    521: {
        "name": "Sigilo de la Serpiente Sepia",
        "description": "Al lanzar este hechizo, aparece un pequeño símbolo escrito en el texto de cualquier obra escrita.\n\nAl leerlo, la llamada serpiente sepia cobra vida y ataca a la criatura viva más cercana (pero no ataca al mago que lanzó el hechizo).\n\nSu ataque se realiza como si fuera un monstruo con Dados de Golpe iguales al nivel del mago que lanzó el hechizo.\n\nSi impacta con éxito, la víctima queda envuelta en un campo de fuerza ambarino y centelleante, congelada e inmovilizada hasta que sea liberada, ya sea a orden del lanzador, mediante un hechizo exitoso de disipar magia, o hasta que haya transcurrido un tiempo igual a 1d4 días + 1 día por nivel del lanzador.\n\nHasta entonces, nada puede alcanzar a la víctima, mover la fuerza centelleante que la rodea ni afectarla de ningún otro modo.\n\nLa víctima no envejece, no pasa hambre, no duerme ni recupera conjuros en ese estado.\n\nNo es consciente de su entorno.\n\nSi la serpiente sepia falla su objetivo, se desvanece en un destello de luz parda, con un fuerte ruido y una nube de humo color pardo grisáceo de 10 pies de diámetro que dura un asalto.\n\nEl hechizo no puede detectarse mediante observación normal, y detectar magia solo revela que todo el texto es mágico.\n\nUn disipar puede eliminarlo; un borrar destruye toda la página de texto.\n\nPuede combinarse con otros hechizos que oculten o alteren textos.\n\nLos componentes del hechizo son ámbar en polvo por valor de 100 po, una escama de cualquier serpiente y una pizca de esporas de hongo.",
    },
    522: {
        "name": "Lentificar",
        "description": "El hechizo de lentificar hace que las criaturas afectadas se muevan y ataquen a la mitad de su ritmo habitual.\n\nAnula un hechizo de apresurar o equivalente, pero no afecta de otro modo a criaturas mágicamente aceleradas o ralentizadas.\n\nLas criaturas ralentizadas sufren una penalización a la Clase de Armadura de +4, una penalización al ataque de -4, y se anulan todos los bonificadores de Destreza en combate.\n\nLa magia afecta a un número de criaturas igual al nivel del lanzador, si están dentro del área de efecto elegida por el mago (es decir, un volumen cúbico de 40 pies centrado donde indique el lanzador).\n\nLas criaturas se ven afectadas desde el centro del hechizo hacia fuera.\n\nEl componente material de este hechizo es una gota de melaza.",
    },
    524: {
        "name": "Fuerza Espectral",
        "description": "El hechizo de fuerza espectral crea una ilusión en la que se incluyen ilusiones de sonido, olor y calor.\n\nPor lo demás, es similar al hechizo de fuerza fantasmal mejorada.\n\nEl hechizo dura tres asaltos tras cesar la concentración.",
    },
    526: {
        "name": "Sugestion",
        "description": "Cuando el mago lanza este hechizo, influye en las acciones del destinatario elegido mediante la emisión de unas pocas palabras (frases o una o dos oraciones) que sugieren un curso de acción deseable para el lanzador.\n\nLa criatura influida debe, por supuesto, poder entender la sugerencia del mago: debe hablarse en un idioma que el receptor del conjuro comprenda.\n\nLa sugerencia debe formularse de manera que la acción parezca razonable; pedirle a la criatura que se apuñale, se lance sobre una lanza, se arroje a las llamas o cualquier otra acción obviamente dañina anula automáticamente el efecto del hechizo.\n\nSin embargo, sugerir que un charco de ácido es en realidad agua pura y que un rápido chapuzón resultaría refrescante es otra cuestión.\n\nInstar a un dragón rojo a dejar de atacar al grupo del mago para que el dragón y el grupo puedan jointly saquear un rico tesoro en otro lugar es igualmente un uso razonable del poder del hechizo.\n\nEl curso de acción de una sugerencia puede prolongarse durante un tiempo considerable, como en el caso del dragón rojo mencionado.\n\nTambién pueden especificarse las condiciones que activarán una acción especial; si la condición no se cumple antes de que el hechizo expire, la acción no se llevará a cabo.\n\nSi el objetivo supera su tirada de salvación, el hechizo no surte efecto.\n\nTen en cuenta que una sugerencia muy razonable provoca que la tirada de salvación se realice con una penalización (como -1, -2, etc.) a discreción del Dungeon Master.\n\nLos no muertos no son susceptibles a la sugerencia.\n\nLos componentes materiales de este hechizo son una lengua de serpiente y un trozo de panal o una gota de aceite dulce.",
    },
    528: {
        "name": "Toque Vampirico",
        "description": "Cuando el lanzador toca a un oponente en combate cuerpo a cuerpo con una tirada de ataque exitosa, el oponente pierde 1d6 puntos de golpe por cada dos niveles del lanzador, hasta un drenaje máximo de 6d6 para un lanzador de nivel 12.\n\nEl hechizo se consume cuando se realiza un toque exitoso o transcurre un turno.\n\nLos puntos de golpe se suman al total del lanzador, y los puntos de golpe que excedan su total normal se tratan como puntos de golpe adicionales temporales.\n\nCualquier daño sufrido por el lanzador se resta primero de los puntos de golpe temporales.\n\nTras una hora, cualquier punto de golpe extra por encima del total normal del lanzador se pierde.\n\nLa criatura que perdió originalmente puntos de golpe mediante este hechizo puede recuperarlos mediante curación mágica o normal.\n\nLas criaturas no muertas no se ven afectadas por este hechizo.",
    },
    530: {
        "name": "Respiracion Acuatica",
        "description": "El beneficiario de un hechizo de respiración acuática es capaz de respirar agua libremente durante la duración del hechizo.\n\nEl lanzador puede tocar a más de una criatura con un solo lanzamiento; en ese caso la duración se divide entre el número de criaturas tocadas.\n\nEl reverso, respiración de aire, permite a las criaturas que respiran agua sobrevivir cómodamente en la atmósfera durante una duración equivalente.\n\nEl componente material del hechizo es una caña corta o un trozo de paja.",
    },
    534: {
        "name": "Forma de Espectro",
        "description": "Al lanzar este hechizo, el mago y todo su equipo se vuelven insustanciales.\n\nEl lanzador solo es vulnerable a ataques mágicos o especiales, incluidos los de armas +1 o superiores, o los de criaturas que de otro modo pueden afectar solo a quienes son golpeados por armas mágicas.\n\nLa mayoría de no muertos ignorarán a un individuo en forma de espectro, creyendo que es un espectro o un fantasma, aunque un liche o un no muerto especial pueden salvar contra conjuros con una penalización de -4 para reconocer el hechizo.\n\nEl mago puede atravesar pequeños agujeros o aberturas estrechas, incluso simples grietas, con todo lo que lleva o sostiene en las manos, mientras el hechizo persista.\n\nTen en cuenta, no obstante, que el lanzador no puede volar sin magia adicional.\n\nNinguna forma de ataque es posible en forma de espectro, excepto contra criaturas que existan en el Plano Etéreo, donde todos los ataques (en ambas direcciones) son normales.\n\nUn hechizo exitoso de disipar magia obliga al mago en forma de espectro a recuperar su forma normal.\n\nEl lanzador puede finalizar el hechizo con una sola palabra.\n\nLos componentes materiales del hechizo son un trozo de gasa y un hilo de humo.",
    },
    540: {
        "name": "Excavar",
        "description": "Un hechizo de excavar permite al lanzador excavar 125 pies cúbicos de tierra, arena o barro por asalto (es decir, un agujero cúbico de cinco pies de lado).\n\nEn asaltos posteriores el lanzador puede ampliar un agujero existente o iniciar uno nuevo.\n\nEl material extraído de la excavación se dispersa de forma uniforme alrededor del foso.\n\nSi el mago continúa hacia abajo más allá de 20 pies en tierra, hay un 15 % de probabilidad de que el foso colapse.\n\nEsta comprobación se realiza por cada cinco pies excavados más allá de los 20 pies.\n\nLa arena tiende a colapsar después de 10 pies, el barro se desborda y colapsa después de cinco pies, y las arenas movedizas se rellenan tan rápido como se excavan.\n\nCualquier criatura al borde (a menos de un pie) de un foso debe superar una prueba de Destreza o caer al agujero.\n\nLas criaturas que se mueven rápidamente hacia un foso excavado justo ante ellas deben realizar una tirada de salvación contra conjuros para evitar caer dentro.\n\nCualquier criatura en un foso en proceso de excavación puede trepar fuera a un ritmo que decida el DM.\n\nUna criatura atrapada en un foso que colapsa debe realizar una tirada de salvación contra muerte para evitar quedar enterrada; si lo logra, escapa del foso.",
    },
    541: {
        "name": "Puerta Dimensional",
        "description": "Mediante un hechizo de puerta dimensional, el mago se transfiere al instante hasta 30 yardas de distancia por nivel de experiencia.\n\nEsta forma especial de teletransporte no admite error, y el mago siempre llega exactamente al punto deseado, ya sea simplemente visualizando el área (dentro de la distancia de transferencia del hechizo, por supuesto) o indicando una dirección como, por ejemplo, \"300 yardas en línea recta hacia abajo\", o \"hacia arriba al noroeste, ángulo de 45 grados, 420 yardas\". Si el mago llega a un lugar ya ocupado por un cuerpo sólido, permanece atrapado en el Plano Astral.\n\nSi se indican distancias y el lanzador no tiene apoyo bajo sus pies (es decir, en el aire), sufrirá una caída y el daño correspondiente a menos que recurra a medios mágicos adicionales.\n\nTodo lo que el mago lleva o carga, sujeto a un peso máximo igual a 500 libras de materia inerte o la mitad de esa cantidad de materia viva, se transfiere con el lanzador.\n\nLa recuperación tras usar un hechizo de puerta dimensional requiere un asalto.",
    },
    542: {
        "name": "Emocion",
        "description": "Al lanzar este hechizo, el mago puede crear una única reacción emocional en las criaturas objetivo.\n\nLas siguientes son típicas:\n\n1. **Coraje:** Esta emoción vuelve berserks a las criaturas afectadas, que luchan con un bonificador de +1 a la tirada de ataque, infligen +3 puntos de daño y ganan temporalmente 5 puntos de golpe.\n\nLos receptores luchan sin escudo y sin importar su supervivencia, sin comprobar nunca la moral.\n\nEste hechizo contrarresta (y es contrarrestado por) el miedo.\n\n2. **Miedo:** Las criaturas afectadas huyen presas del pánico durante 2d4 asaltos.\n\nContrarresta (y es contrarrestado por) el coraje.\n\n3. **Amistad:** Las criaturas afectadas reaccionan de forma más positiva (por ejemplo, la tolerancia se convierte en buena voluntad).\n\nContrarresta (y es contrarrestado por) el odio.\n\n4. **Felicidad:** Este efecto crea alegría y una sensación de satisfacción, sumando +4 a todas las tiradas de reacción y haciendo improbable un ataque salvo que las criaturas sufran una provocación extrema.\n\nContrarresta (y es contrarrestado por) la tristeza.\n\n5. **Odio:** Las criaturas afectadas reaccionan de forma más negativa (por ejemplo, la tolerancia se convierte en neutralidad negativa).\n\nContrarresta (y es contrarrestado por) la amistad.\n\n6. **Esperanza:** El efecto de la esperanza es subir la moral, las tiradas de salvación, las tiradas de ataque y el daño causado en +2.\n\nContrarresta (y es contrarrestado por) la desesperanza.\n\n7. **Desesperanza:** Las criaturas afectadas se someten a las demandas de cualquier oponente: rendirse, marcharse, etc.\n\nEn caso contrario, hay un 25 % de probabilidad de que no hagan nada en un asalto y un 25 % de probabilidad de que den media vuelta o se retiren.\n\nContrarresta (y es contrarrestado por) la esperanza.\n\n8. **Tristeza:** Crea infelicidad y una tendencia a la introspección melancólica.\n\nEsta emoción penaliza las tiradas de sorpresa en -1 y suma +1 a las tiradas de iniciativa.\n\nContrarresta (y es contrarrestado por) la felicidad.\n\nTodas las criaturas en el área en el instante en que se lanza el hechizo se ven afectadas a menos que superen tiradas de salvación contra conjuros, ajustadas por Sabiduría.\n\nEl hechizo se mantiene mientras el mago continúe concentrándose en proyectar la emoción elegida.\n\nAquellos que fallen la salvación contra el miedo deben realizar una nueva tirada de salvación si regresan al área afectada.",
    },
    546: {
        "name": "Runas Explosivas",
        "description": "Al trazar estas runas místicas sobre un libro, mapa, pergamino u objeto similar que contenga información escrita, el mago impide que personas no autorizadas lean su material.\n\nLas runas explosivas son difíciles de detectar: hay un 5 % de probabilidad por nivel de experiencia en uso de magia del lector; los ladrones solo tienen un 5 % de probabilidad.\n\nPero la detección de trampas mediante hechizo o dispositivo mágico siempre encuentra estas runas.\n\nAl leerlas, las runas explosivas detonan, causando 6d4 + 6 puntos de daño al lector, que no obtiene tirada de salvación.\n\nUna cantidad igual, o la mitad si se realizan tiradas de salvación, la sufre cada criatura dentro del radio de la explosión.\n\nEl mago que lanzó el hechizo, así como cualquier persona a la que indique, pueden leer la escritura protegida sin activar las runas.\n\nDel mismo modo, el mago puede eliminar las runas cuando lo desee.\n\nOtros solo pueden eliminarlas con un hechizo exitoso de disipar magia o borrar.\n\nLas runas explosivas, por lo demás, duran hasta que el hechizo se active.\n\nEl objeto sobre el que se coloquen las runas se destruye cuando tiene lugar la explosión, a menos que no esté normalmente sujeto a destrucción por fuego mágico (consulta las tiradas de salvación de objetos en la Guía del Dungeon Master).",
    },
    557: {
        "name": "Fuerza Mejorada",
        "description": "Al lanzar este hechizo, el mago puede dotar a una criatura de fuerza sobrehumana.\n\nA diferencia del hechizo de fuerza de nivel 2, la fuerza mejorada permite al beneficiario del hechizo ignorar las restricciones de raza o clase sobre su puntuación máxima de Fuerza, alcanzando posiblemente puntuaciones de hasta 25.\n\nLa cantidad exacta de fuerza ganada varía según el grupo de clase del beneficiario: **Guerrero | 1d8+4 (máx 25) | Sacerdote | 1d6+4 (máx 23) | Pícaro | 1d6+4 (máx 23) | Mago | 1d4+4 (máx 21)**\n\nCuenta cada tramo porcentual de fuerza excepcional como un punto; la ganancia de fuerza progresa como 18, 18/01, 18/51, 18/76, 18/91, 18/00, 19, y así sucesivamente.\n\nIncluso si el beneficiario no es un guerrero, obtiene todos los beneficios de una categoría de Fuerza excepcional; por ejemplo, si un ladrón con Fuerza 14 ganase 7 puntos, poseería una Fuerza de 18/76 durante la duración del hechizo.\n\nAdemás de los bonificadores de ataque y daño, mayor probabilidad de abrir puertas o doblar barrotes y mayor capacidad de carga, el beneficiario del hechizo puede obtener temporalmente la capacidad de lanzar rocas como un gigante de Fuerza equivalente, como se muestra a continuación:\n\n| Fuerza | Tipo de gigante | Alcance | Daño |\n|--------|------------------|---------|------|\n| 19 | Gigante de las colinas | 80 yardas | 1d6 |\n| 20 | Gigante de las piedras | 100 yardas | 1d8 |\n| 21 | Gigante de escarcha | 100 yardas | 1d8 |\n| 22 | Gigante de fuego | 120 yardas | 1d8 |\n| 23 | Gigante de las nubes | 140 yardas | 1d10 |\n| 24 | Gigante de las tormentas | 160 yardas | 1d12 |\n| 25 | Titán | 200 yardas | 1d20 |\n\nCuando el hechizo termina, el beneficiario queda sumido en un intenso agotamiento; no puede hacer nada excepto descansar durante 1d3 turnos completos para recuperar su fuerza.\n\nEl componente material es un pelo de gigante.",
    },
    562: {
        "name": "Mascara de Muerte",
        "description": "Al lanzar este hechizo, un mago puede modificar los rasgos de un cadáver para que parezca ser otra persona.\n\nEl lanzador debe poseer un retrato fidedigno del individuo a duplicar, o debe tener una imagen mental clara de la persona basada en experiencia personal.\n\nSi se lanza animar muertos sobre el cuerpo, este puede ser animado para convertirse en un zombie que se parezca exactamente a la persona copiada.\n\nEl doble es un autómata sin mente, no obstante, con todas las características de un zombie normal.\n\nEste hechizo puede lanzarse sobre una criatura que ya se haya convertido en zombie.\n\nEl mago debe tocar con éxito al zombie en combate, a menos que el zombie esté controlado por el lanzador.\n\nEl componente material de este hechizo es una gota de sangre de doppelganger.",
    },
    563: {
        "name": "Masamorfosis",
        "description": "Al lanzar este hechizo sobre criaturas voluntarias de tamaño humano o menor, hasta 10 de tales criaturas por nivel del lanzador pueden transformarse mágicamente en árboles de cualquier tipo.\n\nAsí, un grupo de criaturas puede aparecer como un arboleda, un bosquecillo o un huerto.\n\nAdemás, estas criaturas masamorfeas pueden ser atravesadas e incluso tocadas por otras criaturas sin que estas descubran su verdadera naturaleza.\n\nTen en cuenta, sin embargo, que los golpes a los árboles-criatura causan daño y la sangre se hace visible.\n\nLas criaturas a transformar deben encontrarse dentro del área de efecto del hechizo y las criaturas no voluntarias no se ven afectadas.\n\nLas criaturas afectadas permanecen inmóviles pero conscientes, sujetas a las necesidades normales de sueño y capaces de ver, oír y sentir mientras el hechizo esté vigente.\n\nEl hechizo persiste hasta que el lanzador ordene que cese o hasta que se lance un hechizo de disipar magia sobre las criaturas.\n\nLas criaturas que queden en este estado durante períodos prolongados quedan expuestas a insectos, clima, enfermedades, fuego y otros peligros naturales.\n\nEl componente material de este hechizo es un puñado de virutas de corteza del tipo de árbol en el que se convertirán las criaturas.",
    },
    569: {
        "name": "Esfera Resiliente de Otiluke",
        "description": "Al lanzar este hechizo, el resultado es un globo de fuerza centelleante que envuelve a la criatura objetivo, si es lo bastante pequeña para caber dentro del diámetro de la esfera y falla su salvación contra conjuros.\n\nLa esfera resiliente contiene a su objetivo durante la duración del hechizo y no es susceptible de daño de ningún tipo, salvo por una vara de cancelación, una varita de negación, o un conjuro de desintegrar o disipar magia.\n\nEstos lo destruyen sin causar daño al objetivo.\n\nNada puede atravesar la esfera, ni hacia dentro ni hacia fuera, aunque el objetivo puede respirar con normalidad.\n\nEl objetivo puede forcejear, pero lo único que ocurre es un movimiento de la esfera.\n\nEl globo puede moverse físicamente, tanto por personas externas al globo como por los forcejeos de quienes están dentro.\n\nLos componentes materiales del hechizo son una pieza hemisférica de diamante (o material gema duro y transparente similar) y una pieza hemisférica a juego de goma arábiga.",
    },
    570: {
        "name": "Asesino Fantasmal",
        "description": "Al lanzar este hechizo, el mago crea la ilusión de lo más temible imaginable para la víctima, simplemente dando forma a los miedos del subconsciente de la víctima en algo que su mente consciente pueda visualizar: la bestia más horrible.\n\nSolo el beneficiario del hechizo puede ver al asesino fantasmal (el lanzador solo ve una forma sombría), pero si consigue impactar, el sujeto muere de miedo.\n\nLa bestia ataca como un monstruo de 4 Dados de Golpe.\n\nEs invulnerable a todos los ataques y puede atravesar cualquier barrera.\n\nUna vez lanzado, persigue sin descanso al sujeto, pues solo existe en la mente de este.\n\nLas únicas defensas contra un asesino fantasmal son intentar no creer (lo cual puede intentarse solo una vez), matar o dejar inconsciente al mago que lanzó el hechizo, o dejar inconsciente al objetivo del hechizo durante toda su duración.\n\nPara no creer en el asesino, el sujeto debe declarar específicamente el intento y luego realizar una tirada de Inteligencia.\n\nEsta tirada tiene una penalización de -1 por cada cuatro niveles del lanzador.\n\nSe aplican modificadores especiales a este ataque: Si está sorprendido, la tirada se modifica -2; si el sujeto ha sido atacado previamente por este hechizo, la tirada se modifica +1; si el sujeto es un ilusionista, la tirada se modifica +2; si lleva un yelmo de telepatía, la tirada se modifica +3; también se aplican la resistencia a la magia, los bonificadores contra el miedo y los ajustes de Sabiduría.\n\nLa resistencia a la magia se comprueba primero para determinar la operatividad del hechizo, y luego el bonificador de miedo/Sabiduría se aplica como un menos a la tirada de dado para igualar o sacar menos que la Inteligencia.\n\nSi el sujeto de un ataque de asesino fantasmal tiene éxito en no creer y lleva un yelmo de telepatía, la bestia puede volverse contra el mago, que deberá entonces dejar de creer en ella o quedar sujeto a su ataque y sus posibles efectos.\n\nSi el sujeto ignora al asesino para realizar otras acciones, como atacar al lanzador, el asesino puede, a criterio del DM, obtener bonificadores al impactar (por ataques flanqueados o por la espalda, etc.).\n\nHechizos como eliminar miedo y capa de valentía, lanzados después de que el asesino haya atacado, conceden otra tirada para dejar de creer en el efecto.",
    },
    572: {
        "name": "Polimorfar a Otro",
        "description": "El hechizo de polimorfar a otro es una magia poderosa que altera por completo la forma y habilidad, y tal vez la personalidad y mentalidad, del beneficiario.\n\nPor supuesto, aunque una criatura con menor Inteligencia puede ser polimorfada en forma de algo con mayor Inteligencia, no obtendrá la capacidad mental de esa criatura.\n\nLa operación inversa (polimorfar a una criatura de mayor Inteligencia en una de Inteligencia significativamente menor) da como resultado una criatura mucho más inteligente de lo que su aspecto llevaría a creer.\n\nLa criatura polimorfada debe superar una tirada de shock sistémico (consulta la Tabla 3) para ver si sobrevive al cambio.\n\nTras esto, debe realizar una tirada especial de Inteligencia para ver si conserva su personalidad (ver más adelante).\n\nLa criatura polimorfada adquiere las capacidades físicas de la criatura en la que se ha transformado, conservando su propia mente.\n\nLa forma incluye la Clase de Armadura natural (la debida a la dureza de la piel, pero no la debida a la rapidez, naturaleza mágica, etc.), las capacidades de movimiento físico (caminar, nadar, volar con alas, pero no desplazamiento entre planos, parpadeo, teletransporte, etc.) y rutinas de ataque (garra/garra/mordisco, descenso, zarpazo, constricción, pero no petrificación, armas de aliento, drenaje de energía, etc.).\n\nLos puntos de golpe y las tiradas de salvación no cambian respecto a la forma original.\n\nNo se pueden adoptar formas incorpóreas.\n\nLos cambiadores de forma naturales (licántropos, doppelgangers, druidas de alto nivel, etc.) se ven afectados durante un solo asalto y pueden entonces volver a su forma normal.\n\nSi muere, la criatura polimorfada revierte a su forma original (sigue muerta, sin embargo).\n\nTen en cuenta que la mayoría de las criaturas suelen preferir su propia forma y no aceptarán de buen grado el riesgo de ser sometidas a este hechizo.\n\nPuesto que clase y nivel no son atributos de forma, las habilidades derivadas de cualquiera de ellos no se pueden obtener mediante este hechizo, ni se pueden especificar puntuaciones de característica exactas.\n\nCuando el polimorfismo ocurre, el equipo de la criatura, si lo hay, se funde en la nueva forma (en campañas especialmente desafiantes, el DM puede permitir que dispositivos protectores, como un anillo de protección, sigan funcionando eficazmente).\n\nLa criatura conserva sus habilidades mentales, incluyendo el uso de conjuros, asumiendo que la nueva forma permita completar los componentes verbales y somáticos adecuados y se disponga de los componentes materiales.\n\nLas criaturas no acostumbradas a una nueva forma pueden ser penalizadas a criterio del DM (por ejemplo, -2 a las tiradas de ataque) hasta que practiquen lo suficiente para dominarla.\n\nCuando ocurre el cambio físico, hay una probabilidad base del 100 % de que la personalidad y mentalidad del sujeto cambie a la de la nueva forma (es decir, una tirada de 20 o menos en 1d20).\n\nPor cada punto de Inteligencia del sujeto, resta 1 de la probabilidad base en 1d20.\n\nAdemás, por cada Dado de Golpe de diferencia entre la forma original y la forma que asume, suma o resta 1 (según si la forma polimorfada tiene más Dados de Golpe [o niveles] o menos Dados de Golpe [o niveles] que la original, respectivamente).\n\nLa probabilidad de asunción de la personalidad y mentalidad de la nueva forma se comprueba a diario hasta que el cambio se produce.\n\nUn sujeto que adquiere la mentalidad de la nueva forma se ha convertido efectivamente en la criatura cuya forma se asumió y queda bajo el control del DM hasta que se recupere mediante un hechizo de deseo o magia similar.\n\nUna vez que tiene lugar este cambio definitivo, la criatura adquiere la gama completa de capacidades mágicas y especiales de la nueva forma.\n\nEjemplo: Si un orco de 1 DG e Inteligencia 8 es polimorfado en un dragón blanco con 6 DG, por ejemplo, hay un 85 % de probabilidad (20 - 8 Inteligencia + 5 niveles de diferencia = 17 sobre 20 = 85 %) de que se convierta en uno en todos los aspectos, pero en cualquier caso tendrá las capacidades físicas y mentales del dragón.\n\nSi no asume la personalidad y mentalidad de un dragón blanco, sabe lo que antes sabía también.\n\nEl mago puede usar un hechizo de disipar magia para devolver a la criatura polimorfada a su forma original, lo que requiere una tirada de shock sistémico.\n\nAquellos que han perdido su individualidad y son devueltos a su forma mantienen la creencia de que en realidad son la criatura polimorfada e intentan volver a esa forma.\n\nAsí, el orco que llega a creer que es un dragón blanco, al ser devuelto a su forma de orco, mantiene con firmeza que en realidad es un dragón blanco polimorfado con forma de orco.\n\nSus compañeros seguramente lo considerarán loco.\n\nEl componente material de este hechizo es un capullo de oruga.",
    },
    573: {
        "name": "Polimorfar a Si Mismo",
        "description": "Al lanzar este hechizo, el mago puede asumir la forma de cualquier criatura, salvo las incorpóreas, desde tan pequeña como un reyezuelo hasta tan grande como un hipopótamo.\n\nAdemás, el mago obtiene su modo físico de locomoción y respiración.\n\nNo se requiere tirada de shock sistémico.\n\nEl hechizo no concede otras capacidades de la nueva forma (ataque, magia, movimiento especial, etc.) ni tampoco existe el riesgo de cambio de personalidad y mentalidad.\n\nCuando el polimorfismo ocurre, el equipo del lanzador, si lo tiene, se funde en la nueva forma (en campañas especialmente desafiantes, el DM puede permitir que dispositivos protectores, como un anillo de protección, sigan funcionando eficazmente).\n\nEl lanzador conserva todas sus habilidades mentales, incluyendo el uso de conjuros, asumiendo que la nueva forma permita completar los componentes verbales y somáticos adecuados y se disponga de los componentes materiales.\n\nUn lanzador no acostumbrado a una nueva forma puede ser penalizado a criterio del DM (por ejemplo, -2 a las tiradas de ataque) hasta que practique lo suficiente para dominarla.\n\nAsí, un mago transformado en búho podría volar, pero su visión seguiría siendo humana; un cambio a una masa negra permitiría el desplazamiento bajo puertas o a lo largo de pasillos y techos, pero no las capacidades ofensivas (ácidas) ni defensivas de la masa.\n\nNaturalmente, la fuerza de la nueva forma es suficiente para permitir un movimiento normal.\n\nEl lanzador puede cambiar de forma tantas veces como desee durante la duración del hechizo, necesitando un asalto por cada cambio.\n\nEl mago conserva sus propios puntos de golpe, tiradas de ataque y tiradas de salvación.\n\nEl mago puede finalizar el hechizo en cualquier momento; cuando regresa voluntariamente a su forma y pone fin al hechizo, recupera 1d12 puntos de golpe.\n\nEl mago también regresará a su forma al morir o cuando el efecto sea disipado, pero en esos casos no se restauran puntos de golpe.",
    },
    578: {
        "name": "Monstruos de Sombra",
        "description": "Un mago que lanza el hechizo de monstruos de sombra usa material del Plano de las Sombras para dar forma a ilusiones semirreales de uno o más monstruos.\n\nLos Dados de Golpe totales del monstruo o monstruos de sombra así creados no pueden superar el nivel de experiencia del mago; por tanto, un mago de nivel 10 puede crear una criatura con 10 DG, dos con 5 DG, etc.\n\nTodos los monstruos de sombra creados por un mismo hechizo deben ser del mismo tipo.\n\nEl total real de puntos de golpe de cada monstruo es el 20 % del total de puntos de golpe que tendría normalmente.\n\nPara determinar esto, tira los DG apropiados y multiplica los puntos de golpe por 0,2.\n\nCualquier resto menor que 0,4 se descarta (en el caso de monstruos con 1 DG o menos, esto indica que el monstruo no se creó con éxito); las puntuaciones entre 0,4 y 1 se redondean al alza hasta 1 punto de golpe.\n\nQuienes contemplen los monstruos de sombra pueden intentar no creer como en las ilusiones normales, aunque hay una penalización de -2 al intento.\n\nLos monstruos de sombra actúan como los monstruos reales respecto a la Clase de Armadura y formas de ataque.\n\nQuienes creen en los monstruos de sombra sufren daño real por sus ataques.\n\nLas formas especiales de ataque como petrificación o drenaje de niveles no ocurren realmente, pero un sujeto que crea que son reales reaccionará en consecuencia.\n\nAquellos que superen tiradas de salvación verán los monstruos de sombra como imágenes transparentes superpuestas a formas sombrías vagas.\n\nEstos tienen Clase de Armadura 10 e infligen solo el 20 % del daño cuerpo a cuerpo normal (mordisco, zarpazo, arma, etc.), descartando el daño fraccionario menor de 0,4 como se hizo con los puntos de golpe.\n\nEjemplo: Un grifón monstruo de sombra ataca a una persona que sabe que solo es cuasi-real.\n\nEl monstruo golpea con dos ataques de zarpas y un mordisco, impactando como un monstruo de 7 DG.\n\nLos tres ataques impactan y se tiran los dados de daño normales, multiplicados por 0,2 por separado, redondeando al alza o baja, y luego se suman para obtener el daño total.\n\nAsí, si los ataques obtienen 4, 2 y 11 puntos, entonces se inflige un total de 4 puntos de daño (4 × 0,2 = 0,8 [redondeado a 1], 2 × 0,2 = 0,4 [redondeado a 1], 11 × 0,2 = 2,2 [redondeado a 2].\n\nLa suma es 1 + 1 + 2 = 4).",
    },
    580: {
        "name": "Niebla Solida",
        "description": "Al lanzar este hechizo, el mago crea una masa ondulante de vapores brumosos similar a un hechizo de muro de niebla.\n\nEl lanzador puede crear menos vapor si lo desea, siempre que se forme una masa rectangular o cúbica de al menos 10 pies de lado.\n\nLa niebla oculta toda visión, normal y de infrarrojos, más allá de dos pies.\n\nSin embargo, a diferencia de la niebla normal, solo un viento muy fuerte puede desplazar estos vapores, y cualquier criatura que intente moverse a través de la niebla sólida avanza a una velocidad de un pie por cada punto de movimiento 1 por asalto.\n\nUn hechizo de ráfaga de viento no puede afectarla.\n\nUna bola de fuego, un golpe flameante o un muro de fuego pueden quemarla en un solo asalto.\n\nLos componentes materiales del hechizo son una pizca de guisantes secos en polvo combinados con polvo de pezuña animal.",
    },
    581: {
        "name": "Piel de Piedra",
        "description": "Al lanzar este hechizo, la criatura afectada obtiene una inmunidad virtual a cualquier ataque de corte, golpe, proyectil o similar.\n\nIncluso una espada de filo no puede afectar a una criatura protegida por piel de piedra, ni una roca lanzada por un gigante, el ataque de una serpiente, etc.\n\nSin embargo, los ataques mágicos de hechizos como bola de fuego, misil mágico, rayo y similares surten sus efectos normales.\n\nEl hechizo bloquea 1d4 ataques, más un ataque por cada dos niveles de experiencia del lanzador.\n\nEste límite se aplica independientemente de las tiradas de ataque (impacto o fallo) y de si el ataque fue físico o mágico.\n\nPor ejemplo, un hechizo de piel de piedra lanzado por un mago de nivel 9 protegería de cinco a ocho ataques.\n\nUn grifón atacante reduciría la protección en tres por asalto; cuatro misiles mágicos contarían como cuatro ataques además de infligir su daño normal.\n\nLos componentes materiales del hechizo son granito y polvo de diamante por valor de 50 po espolvoreado sobre la piel del beneficiario.",
    },
    585: {
        "name": "Ultravision",
        "description": "Una versión mejorada del hechizo de infrarrojos, ultravision permite al beneficiario del hechizo ver perfectamente en la oscuridad normal, luz de estrellas o luz de luna hasta el alcance total de su visión diurna sin obstáculos (consulta el capítulo 13 del Manual del Jugador).\n\nEn entornos subterráneos, el hechizo permite al beneficiario ver hasta 90 pies en la oscuridad no mágica.\n\nLa oscuridad mágica, niebla o humo son menos efectivos de lo normal contra un personaje que usa ultravision: el hechizo permite al beneficiario ver al menos 30 pies en la oscuridad mágica y al menos 10 pies en cualquier tipo de atmósfera vaporosa, brumosa o humeante.\n\nLa ultravision no permite al beneficiario detectar criaturas invisibles y no funciona en presencia de fuentes de luz intensas.\n\nEl componente material para este hechizo es un ágata negra valorada en al menos 50 po.",
    },
    586: {
        "name": "Mala Suerte",
        "description": "Con este hechizo, el mago salvaje crea un patrón negativo en las fuerzas aleatorias que rodean a una criatura.\n\nA la criatura se le permite una tirada de salvación; si tiene éxito, el hechizo falla.\n\nSi falla la salvación, el azar cae en un patrón desafortunado.\n\nCualquier acción que implique azar (es decir, cada vez que una tirada de dado afecte al personaje) realizada por la víctima durante los siguientes 2-20 asaltos requiere dos intentos separados; siempre se aplica el peor resultado.\n\nLa víctima tira dos veces para ataques, daños, salvaciones, etc., usando siempre la peor tirada de dado.\n\nUna piedra de la suerte o dispositivo mágico similar anulará la mala suerte.\n\nSin embargo, hacerlo impide que el objeto mágico funcione durante 2d10 asaltos.\n\nEl componente material es un trozo de espejo roto.",
    },
    589: {
        "name": "Muro de Fuego",
        "description": "El hechizo de muro de fuego trae consigo un cortinón inmóvil de fuego mágico de color centelleante, violeta o azul rojizo.\n\nEl hechizo crea una sábana opaca de llamas de hasta un cuadrado de 20 pies por nivel del lanzador, o un anillo con un radio de hasta 10 pies + 5 pies por cada dos niveles de experiencia del mago.\n\nEn cualquiera de las dos formas, el muro de fuego tiene 20 pies de altura.\n\nEl muro de fuego debe lanzarse de modo que sea vertical respecto al lanzador.\n\nUn lado del muro, elegido por el lanzador, emite ondas de calor que infligen 2d4 puntos de daño a las criaturas en un radio de 10 pies y 1d4 puntos a las situadas a 20 pies.\n\nAdemás, el muro inflige 2d6 puntos de daño, más 1 punto de daño por nivel del lanzador, a cualquier criatura que lo atraviese.\n\nLas criaturas especialmente vulnerables al fuego pueden sufrir daño adicional, y los no muertos siempre sufren el doble del daño normal.\n\nTen en cuenta que atrapar a una criatura en movimiento con un muro de fuego recién creado es difícil; una salvación exitosa permite a la criatura esquivar el muro, mientras que su velocidad y dirección de movimiento determinan en qué lado del muro creado queda.\n\nEl muro de fuego se mantiene mientras el mago se concentre en mantenerlo, o un asalto por nivel de experiencia del mago, en caso de que no desee concentrarse en él.\n\nEl componente material del hechizo es fósforo.",
    },
    591: {
        "name": "Ojo del Mago",
        "description": "Al emplear este hechizo, el mago crea un órgano sensorial invisible que le envía información visual.\n\nEl ojo del mago se desplaza a 30 pies por asalto si observa el área de adelante como lo haría una persona (es decir, mirando principalmente al suelo), o 10 pies por asalto si examina también el techo y las paredes, además del suelo de adelante.\n\nEl ojo del mago puede ver con infrarrojos hasta 10 pies y con visión normal hasta 60 pies de distancia en áreas bien iluminadas.\n\nEl ojo del mago puede desplazarse en cualquier dirección mientras dure el hechizo.\n\nPosee sustancia y una forma que puede ser detectada (por ejemplo, mediante un hechizo de detectar invisibilidad).\n\nLas barreras sólidas impiden el paso del ojo del mago, aunque puede atravesar un espacio no menor que el agujero de un ratón pequeño (una pulgada de diámetro).\n\nUsar el ojo requiere que el mago se concentre.\n\nSin embargo, si su concentración se rompe, el hechizo no termina: el ojo simplemente se vuelve inerte hasta que el mago vuelva a concentrarse, sujeto a la duración del hechizo.\n\nLos poderes del ojo no pueden mejorarse mediante otros hechizos u objetos.\n\nEl lanzador queda sujeto a cualquier ataque basado en la mirada que encuentre el ojo.\n\nUn disipar exitoso lanzado sobre el mago o el ojo finaliza el hechizo.\n\nCon respecto a la ceguera, oscuridad mágica, etc., el ojo del mago se considera un órgano sensorial independiente del lanzador.\n\nEl componente material del hechizo es un poco de pelo de murciélago.",
    },
    593: {
        "name": "Agua Aerea",
        "description": "El hechizo de agua aérea convierte un líquido normal, como agua o soluciones a base de agua, en una sustancia menos densa y respirable.\n\nAsí, si el mago quisiera entrar en un lugar sumergido, daría un paso en el agua, lanzaría el hechizo y se hundiría hacia abajo en un globo de agua burbujeante.\n\nÉl y cualquier compañero en el área de efecto del hechizo pueden moverse libremente y respirar como si el agua burbujeante fuera aire.\n\nEl globo se centra en el lanzador y se desplaza con él.\n\nLas criaturas que respiran agua evitan una esfera (o hemisferio) de agua aérea, aunque las inteligentes pueden entrar si son capaces de moverse por medios distintos a la natación.\n\nNinguna criatura que respire agua puede respirar en un área afectada por este hechizo.\n\nSolo hace falta pronunciar una palabra para activar la magia, por lo que puede lanzarse bajo el agua.\n\nEl hechizo no filtra ni elimina partículas sólidas de materia.\n\nEl componente material del hechizo es un pequeño puñado de sales alcalinas o de bromo.",
    },
    594: {
        "name": "Crecimiento Animal",
        "description": "Al lanzar este hechizo, el mago hace que todos los animales designados, hasta un máximo de ocho, dentro de un área de 20 pies cuadrados, crezcan hasta el doble de su tamaño normal.\n\nLos efectos de este crecimiento son Dados de Golpe duplicados (con mejora de las tiradas de ataque) y daño duplicado en combate.\n\nEl hechizo dura un asalto por cada nivel de experiencia del mago que lo lanza.\n\nSolo los animales naturales, incluidas las formas gigantes, pueden verse afectados por este hechizo.\n\nEl reverso, encoger animal, reduce a la mitad el tamaño del animal y reduce igualmente los Dados de Golpe, el daño de ataque, etc.\n\nEl componente de ambas versiones del hechizo es una pizca de hueso en polvo.",
    },
    597: {
        "name": "Mano Interpuesta de Bigby",
        "description": "El hechizo de mano interpuesta de Bigby crea una mano mágica de tamaño humano a titánico que aparece entre el lanzador del hechizo y su oponente elegido.\n\nEsta mano incorpórea se mueve entonces para permanecer entre ambos, sin importar lo que haga el lanzador o cómo intente el oponente rodearla.\n\nNi la invisibilidad ni el polimorfismo engañan a la mano una vez que una criatura ha sido elegida.\n\nLa mano no persigue a un oponente.\n\nEl tamaño de la mano lo determina el mago, y puede ir desde el tamaño humano (5 pies) hasta el tamaño de un titán (25 pies).\n\nProporciona cobertura al lanzador frente al oponente seleccionado, con todos los ajustes de combate pertinentes.\n\nPosee tantos puntos de golpe como el lanzador a plena salud y tiene una CA de 20.\n\nCualquier criatura que pese menos de 2000 libras e intente pasar junto a la mano ve reducida a la mitad su velocidad de movimiento normal.\n\nSi el oponente original muere, el lanzador puede designar un nuevo oponente para la mano.\n\nEl lanzador puede ordenar a la mano salir de la existencia en cualquier momento.\n\nEl componente material del hechizo es un guante suave.",
    },
    600: {
        "name": "Cono de Frio",
        "description": "Cuando se lanza este hechizo, causa un área en forma de cono de frío extremo, que se origina en la mano del mago y se extiende hacia fuera en un cono de cinco pies de largo y un pie de diámetro por nivel del lanzador.\n\nDrena calor y causa 1d4+1 puntos de daño por nivel de experiencia del mago.\n\nPor ejemplo, un mago de nivel 10 lanzaría un cono de frío de 10 pies de diámetro y 50 pies de largo, causando 10d4+10 puntos de daño.\n\nSu componente material es un cono muy pequeño de cristal o vidrio.",
    },
    602: {
        "name": "Contactar con Otro Plano",
        "description": "Cuando se lanza este hechizo, el mago envía su mente a otro plano de existencia para recibir consejo e información de los seres de allí.\n\nComo estos poderes resenten tal contacto, solo se obtienen respuestas breves (el DM responde a todas las preguntas con \"sí\", \"no\", \"quizá\", \"nunca\", \"irrelevante\", etc.).\n\nCualquier pregunta formulada es respondida por el poder durante la duración del hechizo.\n\nEl personaje puede contactar con un plano elemental o con algún plano más alejado.\n\nPor cada dos niveles de experiencia del mago, puede formularse una pregunta.\n\nEl contacto con mentes muy alejadas del plano del mago aumenta la probabilidad de que el lanzador enloquezca o muera, pero la probabilidad de que el poder conozca la respuesta, así como la probabilidad de que el ser dé la respuesta correcta, también aumentan al trasladarse a planos distantes.\n\nUna vez alcanzados los Planos Exteriores, la Inteligencia del poder contactado determina los efectos.\n\nLa tabla aleatoria adjunta está sujeta a cambios del DM, desarrollo de seres PNJ extraplanares, etc.\n\nSi se produce locura, surge en cuanto se formula la primera pregunta.\n\nEsta condición dura una semana por cada alejamiento del plano contactado (consulta la GDM o el Campaign Setting de Planescape), hasta un máximo de 10 semanas.\n\nHay un 1 % de probabilidad por plano de que el mago muera antes de recuperarse, salvo que se le lance un hechizo de quitar maldición.\n\nUn mago superviviente puede recordar la respuesta a la pregunta.\n\nEn raras ocasiones, esta adivinación puede ser bloqueada por la acción de ciertos poderes menores o superiores.\n\n| Plano | Locura | Conocimiento | Veracidad |\n|-------|--------|--------------|-----------|\n| Plano elemental | 20 % | 55 % (90 %) | 62 % (75 %) |\n| Plano interior | 25 % | 60 % | 65 % |\n| Plano astral | 30 % | 65 % | 67 % |\n| Plano exterior, Int 19 | 35 % | 70 % | 70 % |\n| Plano exterior, Int 20 | 40 % | 75 % | 73 % |\n| Plano exterior, Int 21 | 45 % | 80 % | 75 % |\n| Plano exterior, Int 22 | 50 % | 85 % | 78 % |\n| Plano exterior, Int 23 | 55 % | 90 % | 81 % |\n| Plano exterior, Int 24 | 60 % | 95 % | 85 % |\n| Plano exterior, Int 25 | 65 % | 98 % | 90 % |\n\n* Por cada punto de Inteligencia por encima de 15, el mago reduce la probabilidad de locura en un 5 %.\n\n** Si el ser no conoce una respuesta y no se cumple la probabilidad de veracidad, el ser dará enfáticamente una respuesta incorrecta.\n\nSi se cumple la probabilidad de veracidad, el ser contestará \"desconocido\".\n\nLos porcentajes entre paréntesis corresponden a preguntas relativas al plano elemental apropiado.\n\n**Regla opcional:** El DM puede permitir contactar con un Plano Exterior específico (consulta el Campaign Setting de Planescape).\n\nEn este caso, la diferencia de alineamiento entre el lanzador y el plano contactado altera la Inteligencia máxima con la que se puede contactar: cada diferencia de alineamiento moral o ético reduce en 1 la Inteligencia máxima que se puede contactar.\n\nPor ejemplo, un lanzador legal bueno de nivel 18 podría contactar con el Monte Celestia (un plano legal bueno) en la línea \"Inteligencia 20\", o con el Elíseo (un plano neutral bueno) en la línea \"Inteligencia 19\".",
    },
    604: {
        "name": "Ancla Dimensional",
        "description": "Cuando un mago lanza este hechizo, un rayo verde surge de su mano extendida y golpea sin error a una criatura dentro de su línea de visión y del alcance del hechizo, cubriendo al sujeto con un campo esmeralda centelleante que bloquea por completo el viaje corporal extradimensional.\n\nLas formas de movimiento vedadas por el ancla dimensional incluyen parpadeo, puerta dimensional, eterealidad, puerta, faseo, desplazamiento entre planos, laberinto, caminar entre sombras, teletransporte y habilidades similares de tipo conjuro o psiónicas.\n\nEl campo persiste durante un turno más un asalto por nivel del lanzador y no tiene otro efecto que bloquear el viaje extradimensional.\n\nEl ancla dimensional no interfiere con el movimiento de criaturas en forma astral, ni bloquea la percepción o formas de ataque extraplanares, como la mirada de un basilisco.",
    },
    607: {
        "name": "Dominacion",
        "description": "El hechizo de dominación permite al lanzador controlar las acciones de cualquier persona hasta que el hechizo finalice por la Inteligencia del sujeto (consulta el hechizo de encantar persona).\n\nLos elfos y medio elfos resisten este encantamiento como resisten todos los hechizos de tipo carisma.\n\nCuando se lanza el hechizo, el sujeto debe realizar una tirada de salvación contra conjuros con una penalización de -2, pero se aplican los ajustes de Sabiduría.\n\nEl fallo significa que el mago ha establecido un vínculo telepático con la mente del sujeto.\n\nSi comparten un idioma común, el mago puede generalmente forzar al sujeto a actuar como el mago desea, dentro de los límites de la estructura corporal y Fuerza del sujeto.\n\nTen en cuenta que el lanzador no recibe información sensorial directa del sujeto.\n\nLos sujetos resisten este control, y aquellos obligados a tomar acciones contrarias a su naturaleza reciben una nueva tirada de salvación con un bonificador de +1 a +4, dependiendo del tipo de acción requerida.\n\nObviamente, las órdenes autodestructivas no se llevan a cabo.\n\nUna vez establecido el control, no hay límite para el alcance al que puede ejercerse, siempre que el lanzador y el sujeto estén en el mismo plano.\n\nUn hechizo de protección contra el mal puede impedir que el lanzador ejerza el control o use el vínculo telepático mientras el sujeto esté así protegido, pero no puede impedir que se establezca la dominación.",
    },
    608: {
        "name": "Sueno",
        "description": "El hechizo de sueño permite al lanzador, o a un mensajero tocado por el lanzador, enviar mensajes a otros en forma de sueños.\n\nAl comenzar el hechizo, el lanzador debe nombrar al destinatario o identificarlo por algún título que no deje dudas sobre su identidad.\n\nCuando el lanzador completa el hechizo, la persona que envía el conjuro cae en un sueño profundo similar a un trance y proyecta al instante su mente hacia el destinatario.\n\nEl remitente entra entonces en el sueño del destinatario y entrega el mensaje, a menos que el destinatario esté mágicamente protegido.\n\nSi el destinatario está despierto, el remitente del mensaje puede optar por permanecer en el sueño-trance.\n\nSi el remitente es perturbado durante este tiempo, el hechizo se cancela de inmediato y el remitente sale del trance.\n\nEl paradero y las actividades actuales del destinatario no pueden aprenderse mediante este hechizo.\n\nEl remitente no es consciente de su propio entorno ni de las actividades a su alrededor mientras está en trance.\n\nEstá totalmente indefenso, tanto física como mentalmente (es decir, siempre falla cualquier tirada de salvación) mientras está en trance.\n\nUna vez que se ha entrado en los sueños del destinatario, el remitente puede entregar un mensaje de cualquier longitud, que el destinatario recuerda perfectamente al despertar.\n\nLa comunicación es unidireccional; el destinatario no puede hacer preguntas ni ofrecer información, ni puede el remitente obtener información observando los sueños del destinatario.\n\nUna vez entregado el mensaje, la mente del remitente regresa al instante a su cuerpo.\n\nLa duración del hechizo es el tiempo necesario para que el remitente entre en el sueño del destinatario y entregue el mensaje.\n\nEl reverso de este hechizo, pesadilla, permite al lanzador enviar una visión aterradora y perturbadora al destinatario, a quien se le concede una tirada de salvación contra conjuros para evitar el efecto.\n\nLa pesadilla impide un sueño reparador y causa 1d10 puntos de daño.\n\nLa pesadilla deja al destinatario fatigado e incapaz de recuperar conjuros durante el día siguiente.\n\nUn hechizo de disipar el mal lanzado sobre el destinatario aturde al lanzador de la pesadilla durante un turno por nivel del clérigo que contrarresta este envío maligno.",
    },
    610: {
        "name": "Vision Falsa",
        "description": "Cuando se lanza este hechizo, el mago puede confundir cualquier intento de adivinar (mediante hechizo o dispositivo mágico) cualquier punto dentro del área de efecto del hechizo.\n\nPara usar el hechizo, debe ser consciente del intento de adivinación, aunque no es necesario conocer al adivinador ni su ubicación.\n\nAl lanzar el hechizo, el lanzador y todos los que desee dentro del radio del hechizo se vuelven indetectables a la adivinación.\n\nAdemás, el lanzador puede enviar el mensaje que desee, incluyendo visión y sonido, según el medio del método de adivinación.\n\nPara ello, el lanzador debe concentrarse en el mensaje que envía.\n\nUna vez rota la concentración, no se pueden enviar más imágenes, aunque el lanzador permanece indetectable durante la duración del hechizo.\n\nEl componente material para este hechizo es el polvo molido de una esmeralda valorada en al menos 500 po, que se esparce en el aire cuando se lanza el hechizo.",
    },
    616: {
        "name": "Lamentacion Lamentable de Leomund",
        "description": "Este hechizo artero distrae a las criaturas objetivo atrayéndolas a una discusión absorbente sobre temas de su interés.\n\nDurante los siguientes 11 asaltos se produce una cadena de respuestas, con tiradas de salvación adicionales como se describe más adelante.\n\nEstas respuestas son conversación (asaltos 1-3), posible confusión (asaltos 4-6) y luego furia o lamentación (asaltos 7-11).\n\nTodas las tiradas de salvación se ven afectadas por las Inteligencias de las criaturas, como se indica más adelante.\n\nLas criaturas objetivo deben ser capaces de comprender el idioma en el que habla el lanzador.\n\nAl lanzar el hechizo, el mago comienza una discusión sobre algún tema pertinente a la criatura o criaturas a las que se dirige.\n\nQuienes superen una tirada de salvación contra conjuros no se ven afectados.\n\nLas criaturas afectadas comienzan inmediatamente a conversar con el lanzador, de acuerdo o en desacuerdo, con suma cortesía.\n\nMientras el lanzador lo elija, puede mantener el hechizo conversando con el sujeto o sujetos.\n\nSi el lanzador es atacado o distraído de otro modo, las criaturas objetivo no lo notan.\n\nEl mago puede marcharse en cualquier momento tras el lanzamiento y los sujetos continúan como si el lanzador aún estuviera presente.\n\nMientras no sean atacadas, las criaturas ignoran todo lo demás a su alrededor, dedicando su tiempo a hablar y discutir con exclusión de otras actividades.\n\nSin embargo, cuando el lanzador se marcha, cada sujeto completa únicamente la fase del hechizo en la que se encuentra, y luego el hechizo se rompe.\n\nSi el lanzador mantiene el hechizo durante más de tres asaltos, cada criatura afectada puede realizar otra tirada de salvación contra conjuros.\n\nQuienes fallen la salvación se marchan confundidas durante 1d10+2 asaltos, manteniéndose lejos del lanzador.\n\nQuienes superen esta tirada de salvación continúan hablando y realizan tiradas de salvación en cada asalto en que continúe el hechizo, hasta el sexto asalto, para evitar el efecto de confusión.\n\nSi el hechizo se mantiene durante más de seis asaltos, cada sujeto debe superar una tirada de salvación contra conjuros para evitar entrar en furia, atacando a todos los demás sujetos del hechizo con intención de matar.\n\nEsta furia dura 1d4+1 asaltos.\n\nQuienes superen la salvación contra el efecto de furia se dan cuenta de que han sido engañados y caen al suelo, lamentando su necedad, durante 1d4 asaltos, a menos que sean atacados o perturbados de otro modo.",
    },
    619: {
        "name": "Tarro Magico",
        "description": "El hechizo de tarro mágico permite al lanzador trasladar su fuerza vital a un receptáculo especial (una gema o un cristal grande).\n\nDesde allí, el lanzador puede forzar un intercambio de fuerzas vitales entre el receptáculo y otra criatura, lo que permite al mago tomar y controlar el cuerpo de otra criatura, mientras la fuerza vital del anfitrión queda confinada en el receptáculo.\n\nEl receptáculo de fuerza vital especial debe estar dentro del alcance del hechizo respecto al cuerpo del mago en el momento del lanzamiento.\n\nLa fuerza vital del mago se desplaza al receptáculo en el asalto en que se completa el lanzamiento, sin permitir otras acciones.\n\nMientras esté en el tarro mágico, el lanzador puede detectar y atacar cualquier fuerza vital dentro de un radio de 10 pies por nivel (en el mismo plano); sin embargo, no puede determinar los tipos exactos de criatura ni las posiciones físicas relativas.\n\nEn un grupo de fuerzas vitales, el lanzador puede detectar una diferencia de cuatro o más niveles/DG y puede determinar si una fuerza vital es energía positiva o negativa.\n\nPor ejemplo, si dos luchadores de nivel 10 atacan a un gigante de las colinas y a cuatro ogros, el lanzador podría determinar que hay tres fuerzas vitales más fuertes y cuatro más débiles dentro del alcance, todas con energía vital positiva.\n\nEl lanzador podría intentar tomar el control de una criatura más fuerte o más débil, pero no tiene control sobre cuál será atacada exactamente.\n\nUn intento de tomar el control de un cuerpo anfitrión requiere un asalto completo.\n\nQueda bloqueado por un hechizo de protección contra el mal o barrera similar.\n\nSolo tiene éxito si el sujeto falla una tirada de salvación contra conjuros con un modificador especial (ver más adelante).\n\nLa tirada de salvación se modifica restando las puntuaciones combinadas de Inteligencia y Sabiduría del objetivo de las del mago (Inteligencia y DG en criaturas no humanas o no humanoides).\n\nEste modificador se suma (o se resta) a la tirada del dado (consulta la tabla en el libro).\n\nUna puntuación negativa indica que el mago tiene un total inferior al del objetivo; por tanto, el anfitrión tiene un bonificador a la salvación.\n\nSi no logra tomar el control del anfitrión, la fuerza vital del mago permanece en el tarro mágico.\n\nSi tiene éxito, la fuerza vital del lanzador ocupa el cuerpo anfitrión y la fuerza vital del anfitrión queda confinada en el receptáculo del tarro mágico.\n\nEl lanzador puede recurrir a conocimientos rudimentarios o instintivos de la criatura objetivo, pero no a sus conocimientos reales o adquiridos (es decir, el mago no conoce automáticamente el idioma ni los conjuros de la criatura).\n\nEl lanzador conserva sus propias tiradas de ataque, conocimiento y entrenamiento de clase, y cualquier ajuste debido a su Inteligencia o Sabiduría.\n\nSi el cuerpo anfitrión es humano o humanoide y se cuenta con los componentes materiales necesarios, el mago puede incluso usar sus conjuros memorizados.\n\nEl cuerpo anfitrión conserva sus propios puntos de golpe y capacidades y propiedades físicas.\n\nEl DM decide si son necesarias modificaciones adicionales; por ejemplo, puede haber torpeza o ineficiencia si el lanzador debe acostumbrarse a la nueva forma.\n\nEl alineamiento del anfitrión o del receptáculo es el de la fuerza vital que lo ocupa.\n\nEl lanzador puede desplazarse libremente del anfitrión al receptáculo si está dentro del alcance de 10 pies por nivel.\n\nCada intento de desplazamiento requiere un asalto.\n\nEl hechizo finaliza cuando el mago se desplaza del tarro a su propio cuerpo.\n\nUn hechizo exitoso de disipar magia lanzado sobre el anfitrión puede devolver al lanzador del tarro mágico al receptáculo e impedirle realizar cualquier ataque durante 1d4 asaltos más 1 asalto por nivel del lanzador del disipar.\n\nLa probabilidad base de éxito es del 50 %, más o menos un 5 % por nivel de diferencia entre los lanzadores.\n\nUn disipar mágico exitoso lanzado contra el receptáculo obliga al ocupante a volver a su propio cuerpo.\n\nSi el mago que lanzó el tarro mágico es forzado a volver a su propio cuerpo, el hechizo finaliza.\n\nSi el cuerpo anfitrión muere, el lanzador regresa al receptáculo, si está dentro del alcance, y la fuerza vital del anfitrión parte (es decir, muere).\n\nSi el cuerpo anfitrión muere más allá del alcance del hechizo, tanto el anfitrión como el lanzador mueren.\n\nCualquier fuerza vital sin lugar adonde ir se trata como muerta, a menos que sea recuperada mediante resurrección, reanimación o hechizo similar.\n\nSi el cuerpo del lanzador muere, su fuerza vital sobrevive si se encuentra en el receptáculo o en el anfitrión.\n\nSi el receptáculo es destruido mientras la fuerza vital del lanzador lo ocupa, el lanzador muere irremediablemente.",
    },
    622: {
        "name": "Niebla Mental",
        "description": "Una niebla mental es un bloque físico de niebla que permite al mago reducir la resistencia mental de sus víctimas.\n\nA las víctimas se les concede una tirada de salvación con una penalización de -2 para evitar los efectos.\n\nUna criatura víctima de la niebla mental sufre penalizaciones de -2 a todas las tiradas de salvación contra dos categorías de magia:\n\n- Todos los conjuros de las escuelas de **ilusión/fantasma** y **encantamiento/carisma** que afectan a la mente directamente.\n- Todos los conjuros de **nivel 1 a 5** que afectan a la mente directamente.\n\nPor ejemplo, *fuerza fantasmal* es un conjuro que afecta a la mente; *caballo fantasma* no.\n\nLa penalización a las tiradas de salvación opera de forma acumulativa con cualquier otra penalización.\n\nLas criaturas afectadas sufren la penalización **mientras permanezcan en la niebla y durante 2d6 asaltos después**.",
    },
    623: {
        "name": "Invocacion de Monstruos III",
        "description": "Este hechizo es muy parecido al hechizo de nivel 3 de invocación de monstruos I, salvo que este conjuro invoca 1d4 monstruos de nivel 3.\n\nEstos aparecen dentro del área de efecto del hechizo y atacan a los oponentes del lanzador, hasta que este les ordene cesar, expire la duración del hechizo o los monstruos sean derrotados.\n\nEstas criaturas no comprueban moralidad y desaparecen al morir.\n\nSi no hay oponente contra el que luchar, y el mago se comunica con ellos, los monstruos invocados pueden realizar otros servicios para el mago.\n\n**Componentes materiales:** una bolsa minúscula y una pequeña vela.",
    },
    624: {
        "name": "Sabueso Fiel de Mordenkainen",
        "description": "Mediante este hechizo, el mago invoca un sabueso fantasmal que solo él puede ver.\n\nPuede entonces ordenarle que actúe como guardián de un pasillo, habitación, puerta o espacio similar.\n\nEl sabueso fantasmal comienza de inmediato a ladrar con fuerza si cualquier criatura mayor que un gato se aproxima al lugar que custodia.\n\nPuede detectar criaturas invisibles y etéreas, lo que lo convierte en un excelente guardián.\n\nNo reacciona ante ilusiones que no sean al menos cuasi-reales.\n\nSi la criatura intrusa expone su espalda al sabueso, el perro realiza un ataque feroz como si fuera un monstruo de 10 Dados de Golpe, golpeando con 3d6 puntos de daño.\n\nPuede golpear incluso a criaturas afectadas únicamente por armas mágicas +3 o superiores.\n\nLas criaturas sin espalda (por ejemplo, jaleas ocres) no son atacadas.\n\nEl sabueso fiel no puede ser atacado, pero sí disipado.\n\nEl hechizo dura 1 hora + ½ hora por nivel del lanzador, pero una vez activado por un intruso, solo dura 1 asalto por nivel del lanzador.\n\nSi el lanzador se aleja más de 30 yardas del área custodiada, el hechizo finaliza.\n\n**Componentes materiales:** un silbato minúsculo de plata, un trozo de hueso y un hilo.",
    },
    625: {
        "name": "Pasamuros",
        "description": "Un hechizo de pasamuros permite al lanzador abrir un pasaje a través de paredes de madera, yeso o piedra, pero no de otros materiales.\n\nEl lanzador y cualquier acompañante pueden simplemente caminar a través de él.\n\nEl hechizo provoca una abertura de 5 pies de ancho × 8 pies de alto × 10 pies de profundidad.\n\nVarios de estos hechizos pueden combinarse para atravesar paredes gruesas.\n\nSi se disipa, el pasamuros se cierra alejándose del lanzador que lo disipó, expulsando a quienes estén en el pasaje.\n\n**Componente material:** una pizca de semillas de sésamo.",
    },
    628: {
        "name": "Agarre Oxidante",
        "description": "Permite al lanzador corroer metales ferrosos por el tacto.\n\n- Afecta a hierro, acero, mitral y adamantina.\n- El contacto fuerza al objeto a salvar contra desintegración o ser destruido.\n- Los objetos mágicos obtienen un bonificador a la salvación igual a su encantamiento.\n- **Armadura:** ataca la CA sin armadura; si falla, reduce la CA en 2d4.\n- **Armas:** debe impactar CA 4 (se aplica Destreza); se destruye si falla la salvación.\n- Debe tocarse, no ser golpeado como un monstruo de óxido.\n- **Criaturas metálicas** sufren 2d8+1 puntos de daño por impacto.\n- **Un toque por asalto.** Duración: 1 asalto/nivel.\n\n**Componente material:** una antena de monstruo de óxido.",
    },
    633: {
        "name": "Magia de Sombra",
        "description": "El hechizo de magia de sombra permite al mago obtener energía del Semiplano de las Sombras para lanzar un conjuro cuasi-real de evocación de mago de nivel 3 o inferior.\n\nPor ejemplo, este hechizo puede ser misil mágico, bola de fuego, rayo, etc., y surte efectos normales sobre las criaturas en el área de efecto si fallan sus tiradas de salvación contra conjuros.\n\nPor tanto, una criatura que falla la salvación contra una bola de fuego de magia de sombra debe realizar otra tirada de salvación.\n\nSi esta última tirada tiene éxito, la criatura sufre la mitad del daño normal de la bola de fuego; si la tirada no tiene éxito, la criatura sufre todo el daño normal de la bola de fuego.\n\nSi la primera tirada de salvación tiene éxito, se detecta la naturaleza de magia de sombra y solo se recibe el 20 % del daño obtenido (redondeando hacia abajo las fracciones por debajo de 0,4 y redondeando hacia arriba las fracciones de 0,4 o superiores).",
    },
    635: {
        "name": "Invocar Sombra",
        "description": "Al lanzar este hechizo, el mago conjura una sombra (consulta el Manual Monstruoso) por cada tres niveles de experiencia que haya alcanzado.\n\nEstos monstruos están bajo el control del lanzador y atacan a sus enemigos a orden de este.\n\nLas sombras permanecen hasta que son destruidas, rechazadas o expira la duración del hechizo.\n\nEl componente material de este hechizo es un trozo de cuarzo ahumado.",
    },
    637: {
        "name": "Teletransporte",
        "description": "Cuando se utiliza este hechizo, el mago se transporta al instante, junto con una cierta cantidad de peso adicional que se encuentre sobre él o siendo tocado por el lanzador, a un destino bien conocido.\n\nLa distancia no es un factor, pero el viaje entre planos no es posible mediante un hechizo de teletransporte.\n\nEl lanzador puede teletransportar un peso máximo de 250 libras, más 150 libras adicionales por cada nivel de experiencia por encima del 10 (un mago de nivel 13 puede teletransportar hasta 700 libras).\n\nSi el área de destino es muy familiar para el mago (dispone de una imagen mental clara gracias a la proximidad previa y al estudio del lugar), es poco probable que haya algún error al llegar, aunque el lanzador no tiene control sobre su orientación al llegar.\n\nÁreas menos conocidas (vistas solo mágicamente o desde lejos) aumentan la probabilidad de error.\n\nLas áreas desconocidas presentan un peligro considerable (consulta la tabla).\n\nTeletransportarse alto significa que el mago llega 10 pies por encima del suelo por cada 1 % por debajo de la probabilidad más baja de \"En el objetivo\"; esto podría llegar hasta 320 pies si el área de destino nunca fue vista.\n\nCualquier resultado bajo significa la muerte instantánea del mago si el área en la que se teletransporta es sólida.\n\nUn mago no puede teletransportarse a un área de espacio vacío; debe haber una superficie sólida, ya sea un suelo de madera, un suelo de piedra, suelo natural, etc.\n\nÁreas de fuertes energías físicas o mágicas pueden hacer que el teletransporte sea más peligroso o incluso imposible.",
    },
    638: {
        "name": "Resonancia Destructiva de Tenser",
        "description": "Cuando se lanza este hechizo, un fino haz de energía azul destructiva brota de la punta del dedo del lanzador y golpea cualquier objeto dentro del alcance.\n\nEl haz imparte una enorme cantidad de energía al objeto golpeado, provocando que explote espontáneamente.\n\nLos objetos grandes y masivos tienen más energía destructiva potencial que los objetos pequeños y ligeros, pero el mago debe mantener el haz sobre el objeto más grande durante más tiempo para provocar la detonación.\n\nEl haz tiene dos efectos principales: en primer lugar, el objeto golpeado es desintegrado si falla su tirada de salvación de objeto.\n\nEn segundo lugar, cualquier criatura cerca del objeto destruido sufre daño proporcional al peso del objeto detonado, más un daño de explosión de 1d6 puntos por cada dos niveles del lanzador.\n\nLas criaturas atrapadas dentro del radio de la explosión pueden intentar una tirada de salvación contra paralización para recibir la mitad del daño (1 punto por nivel del lanzador), pero el daño base de la explosión no admite salvación.\n\n| Peso | Tiempo de lanzamiento | Daño | Radio de explosión |\n|------|------------------------|------|---------------------|\n| 1-5 | Instantáneo | 1d8 | 2 pies |\n| 6-25 | Instantáneo | 1d12 | 3 pies |\n| 26-100 | 1 asalto | 1d20 | 5 pies |\n| 101-500 | 2 asaltos | 2d12 | 10 pies |\n| 501-2000 | 3 asaltos | 3d12 | 15 pies |\n\nLos objetos más masivos de 2000 libras son simplemente demasiado grandes para detonar.\n\nLa carne viva y los objetos o ítems encantados son inmunes a la resonancia destructiva, pero un mago podría optar por usar la resonancia destructiva de Tenser sobre un objeto llevado o usado por otra criatura.\n\nSin embargo, si lo hace, la víctima tiene derecho a una tirada de salvación contra conjuros para anular el haz por completo y evitar cualquier daño, y luego obtiene una salvación para recibir la mitad del daño contra el efecto de explosión incluso si el haz logra detonar su equipo.\n\nEl componente material para este hechizo es una pequeña esfera de oro finamente trabajada con un pequeño anillo extraíble que la rodea, el cual debe quitarse al lanzar el hechizo.",
    },
    639: {
        "name": "Veneno Vil de Vandarien",
        "description": "Al lanzar este hechizo inherentemente maligno, el mago conjura una pequeña cantidad de veneno mortal directamente sobre las hojas de cualquier arma u otra superficie dentro del área de efecto.\n\nEl hechizo crea una dosis por nivel del lanzador; una sola dosis basta para recubrir un arma de tamaño S como una daga o una punta de flecha, tres dosis recubren un arma de tamaño M, y cinco dosis recubren un arma de tamaño L.\n\nEl veneno permanece potente durante hasta una hora por nivel del lanzador, aunque una hoja envenenada solo permanece así durante 1d3 ataques exitosos antes de que el veneno se desgaste.\n\nLa potencia del veneno varía según el nivel del lanzador, como se muestra a continuación (consulta la tabla en el libro).\n\nSi un arma recubierta con el veneno vil de Vandarien impacta con éxito a una criatura, la víctima debe realizar una tirada de salvación contra veneno o sufrir la primera cifra de daño (si el lanzador fuera un mago de nivel 12, serían 25 puntos).\n\nNaturalmente, este es un daño adicional al causado por el arma que inyecta el veneno.\n\nIncluso si tiene éxito en la salvación, la víctima aún sufre una cantidad menor de daño, como se muestra en la segunda cifra.\n\nEn lugar de crear un veneno insinuativo (uno que se introduce al cuerpo a través de un corte), el mago puede conjurar el veneno como un veneno de contacto.\n\nPuede verse afectada una superficie de aproximadamente medio pie cuadrado por nivel del lanzador.\n\nUn pie cuadrado basta para recubrir un pomo, la empuñadura de una espada, el asa o cierre de un cofre, o un objeto de tamaño similar.\n\nEl veneno de contacto tiene los mismos efectos que el veneno insinuativo, pero la víctima obtiene un bonificador de +2 a sus salvaciones.\n\nLa toxicidad del veneno de contacto se desvanece al final de la duración del hechizo.\n\nEl componente material es una pequeña ampolla de veneno de serpiente gigante.",
    },
    640: {
        "name": "Rechazo de Von Gasik",
        "description": "Este poderoso hechizo está diseñado para impedir que lanzadores de conjuros no autorizados entren en un pasillo, puerta, ventana u otro punto de entrada.\n\nEl hechizo crea una barrera invisible que bloquea el área objetivo.\n\nCualquier no lanzador y los lanzadores específicamente nombrados por el mago pueden pasar libremente.\n\nTodos los demás lanzadores chocan contra la barrera invisible.\n\nLos miembros de clases con capacidades de lanzamiento de conjuros menores (paladines, exploradores y bardos) solo son bloqueados si el personaje tiene nivel suficiente para lanzar conjuros.\n\nEl mago puede proteger un área de hasta 20 pies cuadrados por cada nivel de su experiencia.\n\nPor tanto, un mago de nivel 12 puede proteger un área cuadrada de 240 pies de lado.\n\nEl área de efecto puede dividirse entre varios portales más pequeños, siempre que el área total no supere el límite del lanzador.\n\nCada portal debe estar dentro del alcance y a la vista del lanzador en el momento del lanzamiento.",
    },
    641: {
        "name": "Vortice",
        "description": "Un vórtice es una masa arremolinada de energía mágica, apenas controlable por el lanzador.\n\nEn el asalto de lanzamiento, un pequeño destello de luces llena el aire en la posición deseada.\n\nEn el segundo asalto, aparece un tornado multicolor de 7 pies de altura.\n\nA partir de ese momento, el lanzador debe mantener la concentración para que el vórtice permanezca.\n\nCada asalto, el lanzador puede mover el vórtice 60 pies.\n\nSin embargo, el control de la dirección no es perfecto.\n\nEl lanzador tiene control total sobre la distancia, pero solo puede sugerir la dirección deseada.\n\nEl lanzador tiene un 50 % de probabilidad de mover el vórtice en la dirección que desea; si la tirada de dado indica fallo, el vórtice se desplaza según el diagrama de dispersión de los proyectiles tipo granada.\n\nPor tanto, el vórtice suele moverse en la dirección general deseada, pero en ocasiones puede moverse a un lado o directamente hacia el lanzador.\n\nEl vórtice no puede atravesar objetos más grandes que su área de efecto (podría moverse a través de un arbolito, pero no de un roble antiguo) y será redirigido por estos, rebotando a lo largo de la línea general de movimiento.\n\nPor ejemplo, lanzado en un pasillo estrecho, el vórtice podría rebotar a lo largo del pasillo, botando de un lado a otro.\n\nEl vórtice está compuesto de energía mágica pura.\n\nLas criaturas no mágicas golpeadas por el vórtice sufren 1d4 puntos de daño por nivel del lanzador.\n\nLas criaturas mágicas y los lanzadores de conjuros sufren 1d6 puntos de daño por nivel del lanzador.\n\nLas criaturas golpeadas pueden realizar una tirada de salvación contra magia para recibir solo la mitad del daño.\n\nCada vez que se golpea a una criatura, hay un 5 % de probabilidad de que el vórtice explote en una oleada descontrolada.\n\nUsa la Tabla 2 para determinar los resultados de cualquier oleada descontrolada.\n\nSi el vórtice provoca una oleada descontrolada, el hechizo finaliza de inmediato.\n\nLos componentes materiales son una cinta de seda y un puñado de paja.",
    },
    642: {
        "name": "Muro de Fuerza",
        "description": "Un hechizo de muro de fuerza crea una barrera invisible en el lugar deseado por el lanzador, hasta el alcance del hechizo.\n\nEl muro de fuerza no puede moverse y no se ve afectado en absoluto por la mayoría de los hechizos, incluido disipar magia.\n\nSin embargo, un hechizo de desintegrar lo destruirá de inmediato, al igual que una vara de cancelación o una esfera de aniquilación.\n\nAsimismo, el muro de fuerza no se ve afectado por golpes, misiles, frío, calor, electricidad, etc.\n\nLos hechizos y armas de aliento no pueden atravesarlo en ninguna dirección, aunque puerta dimensional, teletransporte y efectos similares pueden sortear la barrera.\n\nEl mago puede, si lo desea, formar el muro en forma esférica con un radio de hasta 1 pie por nivel o en forma hemisférica abierta con un radio de 1,5 pies por nivel del lanzador.\n\nEl muro de fuerza debe ser continuo y sin romper cuando se forma; si su superficie es rota por cualquier objeto o criatura, el hechizo falla.\n\nEl lanzador puede finalizar el hechizo a voluntad.\n\nEl componente material para este hechizo es una pizca de polvo de diamante valorada en 5000 po.",
    },
    643: {
        "name": "Muro de Hierro",
        "description": "Cuando se lanza este hechizo, el mago hace que aparezca un muro vertical de hierro.\n\nEste muro puede usarse para sellar un pasaje o cerrar una brecha, ya que el muro se inserta en cualquier material circundante inerte si su área es suficiente para hacerlo.\n\nEl muro de hierro tiene ½ pulgada de grosor por nivel de experiencia del lanzador.\n\nEl mago puede crear un muro de hierro de hasta 15 pies cuadrados por nivel de experiencia; por tanto, un mago de nivel 12 puede crear un muro de hierro con un área de 180 pies cuadrados.\n\nEl mago puede duplicar el área del muro reduciendo a la mitad su grosor.\n\nSi el lanzador lo desea, el muro puede crearse verticalmente apoyado sobre una superficie plana, de modo que pueda volcarse para caer y aplastar a cualquier criatura bajo él.\n\nEl muro tiene un 50 % de probabilidades de caer en cualquier dirección.\n\nEsta probabilidad puede modificarse con una fuerza no inferior a 30 de Fuerza y 400 libras de masa: cada libra por encima de 400 o cada punto de Fuerza por encima de 30 altera la probabilidad en un 1 % a favor del lado más fuerte.\n\nLas criaturas con espacio para huir del muro que cae pueden hacerlo superando tiradas de salvación contra muerte.\n\nLas que fallan mueren.\n\nLas criaturas enormes y titánicas no pueden ser aplastadas por el muro.\n\nEl muro es permanente, a menos que sea disipado con éxito, pero está sujeto a todas las fuerzas a las que está sujeto un muro de hierro normal: óxido, perforación, etc.\n\nEl componente material de este hechizo es un pequeño trozo de chapa de hierro.",
    },
    647: {
        "name": "Flecha de Hueso",
        "description": "Al trazar runas de poder terrible sobre una flecha, virote, dardo o jabalina sencilla, el lanzador transforma el arma en un misil siniestro de hueso encantado y frío.\n\nEl mago puede entonces lanzar o disparar el arma de la forma habitual, o puede optar por entregársela a un compañero para que la use.\n\nSi el mago emplea la flecha de hueso él mismo, impacta con la TABLA de un guerrero de la mitad de su propio nivel y un bonificador de +3 a su tirada de ataque; si se la entrega a otro, la flecha de hueso solo confiere un bonificador de +1 al impacto.\n\nUna criatura golpeada por el arma debe realizar una tirada de salvación contra magia de la muerte o morir; incluso si tiene éxito, la víctima sufre el daño normal del misil, más una cantidad adicional de puntos igual al daño máximo del arma (por ejemplo, 1d6+6 para una flecha o jabalina, o 1d3+3 para un dardo).\n\nA diferencia del conjuro de muerte o del dedo de la muerte, la víctima puede ser devuelta de la muerte o resucitada de cualquier forma expeditiva.\n\nLa flecha de hueso no destruye directamente a los no muertos ni a las criaturas inertes.\n\nEn su lugar, la flecha inflige el daño normal más cuatro veces el máximo normal del misil (1d6+24 para una flecha, 1d3+12 para un dardo, etc.), o la mitad si la criatura objetivo supera su tirada de salvación.\n\nEl componente material es una esquirla de hueso en polvo mezclada con sangre de dragón negro.\n\nLa mezcla resultante se usa para pintar runas sobre el arma.\n\nSi la esquirla de hueso puede tomarse de los restos de un pariente cercano del objetivo (un hermano, progenitor o abuelo), la víctima recibe un",
    },
    651: {
        "name": "Conjurar Animales",
        "description": "El hechizo de conjurar animales permite al mago crear mágicamente uno o más mamíferos para que ataquen a sus oponentes.\n\nLos Dados de Golpe totales de los mamíferos no pueden superar el doble de su nivel, si se determinan al azar, o su nivel si se solicita un tipo de animal específico (consulta la Guía del Dungeon Master).\n\nAsí, un mago de nivel 12 podría conjurar al azar dos mamíferos con 12 Dados de Golpe, cuatro con 6 DG cada uno, seis con 4 DG cada uno, ocho con 3 DG cada uno, doce con 2 DG cada uno, o 24 con 1 DG cada uno.\n\nCuenta cada bonificador de +1 punto de golpe de una criatura como ½ DG; así, una criatura con 4+3 DG equivale a una criatura de 4½ DG.\n\nLos animales conjurados permanecen durante un asalto por cada nivel del mago conjurador, o hasta ser derrotados.\n\nSiguen las órdenes verbales del lanzador.\n\nLos animales conjurados atacan infaliblemente a los oponentes del mago, pero se resisten a ser utilizados para cualquier otro propósito.",
    },
    653: {
        "name": "Controlar el Clima",
        "description": "El hechizo de controlar el clima permite a un mago modificar el clima en el área local.\n\nEl hechizo afecta al clima durante 4d6 horas en un área de 4d4 millas cuadradas.\n\nRequiere un turno para lanzar el hechizo y un adicional de 1d4 turnos para que las condiciones meteorológicas se manifiesten.\n\nLas condiciones meteorológicas actuales las decide el DM, dependiendo del clima y la estación.\n\nLas condiciones meteorológicas tienen tres componentes: precipitación, temperatura y viento.\n\nEl hechizo puede cambiar estas condiciones según la tabla siguiente.\n\nLos títulos en mayúsculas representan las condiciones meteorológicas existentes.\n\nLos pequeños encabezados bajo cada título grande son las nuevas condiciones a las que el lanzador puede cambiar las existentes.\n\nAdemás, el lanzador puede controlar la dirección del viento.\n\nPor ejemplo, un día claro y cálido con viento moderado puede controlarse para volverse brumoso, caluroso y en calma.\n\nNo son posibles las contradicciones, por ejemplo niebla con viento fuerte.\n\nSolo pueden usarse varios hechizos de controlar el clima en sucesión.\n\nLos componentes materiales de este hechizo son incienso ardiente, restos de tierra y madera mezclados en agua.\n\nObviamente, este hechizo solo funciona en áreas donde existan condiciones climáticas adecuadas.",
    },
    654: {
        "name": "Niebla Mortifera",
        "description": "El lanzamiento de un hechizo de niebla mortífera crea un área de niebla sólida que tiene la propiedad adicional de ser altamente ácida.\n\nLos vapores son mortales para los seres vivos, por lo que la vegetación expuesta a ellos muere: el césped y plantas pequeñas similares en dos asaltos, los arbustos y matorrales en cuatro, los árboles pequeños en ocho y los árboles grandes en 16 asaltos.\n\nLa vida animal no inmune al ácido sufre daño según el tiempo de exposición a los vapores de una niebla mortífera, como sigue (consulta la tabla en el libro).\n\nLa niebla mortífera se asemeja en todo lo demás al hechizo de segundo nivel nube de niebla: vapores ondulantes que solo pueden moverse con un viento muy fuerte.\n\nCualquier criatura que intente moverse a través de la niebla mortífera avanza a una velocidad de 1 pie por unidad de velocidad normal de movimiento por asalto.\n\nUn hechizo de ráfaga de viento no puede afectarla, pero una bola de fuego, un golpe flameante o un muro de fuego pueden quemarla en un solo asalto.\n\nLos componentes materiales son una pizca de guisantes secos en polvo, pezuña animal en polvo y ácido fuerte de cualquier tipo (incluido vinagre muy destilado o cristales de ácido), que debe obtenerse de un alquimista.",
    },
    659: {
        "name": "Encantar un Objeto",
        "description": "Este es un hechizo que debe usar un mago que planea crear un objeto mágico.\n\nEl hechizo de encantar un objeto prepara el objeto para aceptar la magia.\n\nEl objeto debe superar las siguientes pruebas: 1) debe estar en estado sólido y sin daños; 2) el objeto debe ser de la mejor calidad posible, considerando su naturaleza, es decir, elaborado con el material de mayor calidad y con la mejor mano de obra; y 3) su coste o valor debe reflejar la segunda prueba, y en la mayoría de los casos el objeto debe tener un coste de materias primas superior a 100 po.\n\nCon respecto al requisito 3, no es posible aplicar esta prueba a objetos como cuerdas, artículos de cuero, tela y cerámica que normalmente no estén bordados, enjoyados, repujados, tallados o grabados.\n\nNo obstante, si ese trabajo o materiales pueden agregarse a un objeto sin debilitar o dañar sus funciones normales, estos son necesarios para que el objeto sea encantado.\n\nEl mago debe tener acceso a un taller o laboratorio, equipado adecuadamente y del que se pueda aislar la magia contaminante.\n\nCualquier objeto mágico no relacionado con el proceso de fabricación (como la mayoría de los dispositivos protectores) y dentro de 30 pies de los materiales es una fuente de magia contaminante y arruinará el proceso.\n\nEl objeto a preparar debe ser tocado por el lanzador.\n\nEste contacto debe ser constante y continuo durante el tiempo de lanzamiento, que es una base de 16 horas más 8d8 horas adicionales (dado que el mago nunca puede trabajar más de ocho horas al día, y ni la prisa ni ningún otro hechizo alterará el tiempo requerido de ninguna manera, esto significa en la práctica que el tiempo de lanzamiento para este hechizo es de dos días + 1d8 días).\n\nTodo el trabajo debe ser ininterrumpido, y durante los períodos de descanso el objeto encantado nunca debe estar a más de 1 pie de distancia del lanzador; si lo está, todo el hechizo se echa a perder y debe comenzar de nuevo.\n\nTen en cuenta que durante los períodos de descanso absolutamente no se puede realizar ninguna otra forma de magia, y el mago debe permanecer en silencio y aislado o el encantamiento se arruinará.\n\nAl final del hechizo, el lanzador sabrá que el objeto está listo para la prueba final.\n\nPronunciará entonces la sílaba mágica final, y si el objeto supera una tirada de salvación (exactamente la misma que la del mago) contra conjuros, el hechizo se completa.\n\nLos bonificadores de salvación del lanzador también se aplican al objeto, hasta +3.\n\nUn resultado de 1 en la tirada de 1d20 siempre resulta en un fallo, independientemente de las modificaciones.\n\nUna vez terminado el hechizo, el mago puede comenzar a colocar el hechizo deseado sobre el objeto.\n\nEl hechizo que planea colocar debe lanzarse en un plazo de 24 horas o el hechizo preparatorio se desvanecerá, y el objeto debe ser encantado de nuevo.\n\nCada hechizo lanzado posteriormente sobre un objeto que lleva un encantamiento requiere 2d4 horas por nivel de hechizo de la magia lanzada.\n\nUna vez más, durante el lanzamiento el objeto debe ser tocado por el mago, y durante los períodos de descanso siempre debe estar a 1 pie de su persona.\n\nEste procedimiento es válido para cualquier hechizo adicional colocado sobre el objeto, y cada hechizo sucesivo debe iniciarse dentro de las 24 horas siguientes al anterior, incluso si el hechizo previo falló.\n\nNinguna magia colocada sobre un objeto es permanente a menos que se use un hechizo de permanencia como toque final.\n\nEsto siempre tiene un riesgo del 5 % de drenar 1 punto de Constitución del mago que lanza el hechizo.\n\nAdemás, aunque es posible saber cuándo el hechizo básico (encantar un objeto) tiene éxito, no es posible saber si los lanzamientos sucesivos realmente funcionan, ya que cada uno debe realizar el mismo tipo de salvación que realizó el objeto mismo.\n\nNaturalmente, un objeto cargado (una vara, bastón, varita, jabalina de rayos, anillo de deseos, etc.) nunca puede hacerse permanente.\n\nLos dispositivos mágicos no pueden usarse para encantar un objeto ni lanzar magia sobre un objeto así preparado, pero los pergaminos pueden usarse para este propósito.\n\nLos materiales necesarios para este hechizo varían según la naturaleza del objeto encantado y la magia que se le lanzará.\n\nPor ejemplo, una capa de desplazamiento podría requerir las pieles de uno o más monstruos de desplazamiento, una espada destinada a matar dragones podría requerir la sangre y alguna otra parte del tipo o tipos de dragones contra los que será efectiva, y un anillo de estrellas fugaces podría requerir trozos de meteoritos y el cuerno de un kirin.\n\nEstos detalles específicos, así como otra información relativa a este hechizo, los decide el DM y deben descubrirse o investigarse en el juego.",
    },
    662: {
        "name": "Mordisco Ocular",
        "description": "Un hechizo de mordisco ocular permite al lanzador simplemente cruzar la mirada con una criatura y pronunciar una sola palabra para causar un efecto.\n\nEste ataque de mirada se añade a cualquier otro ataque permitido al mago.\n\nEl mago elige uno de los cuatro posibles ataques de mirada en el momento del lanzamiento, y este ataque no puede modificarse.\n\nPor ejemplo, un lanzador de nivel 12 que eligiera miedo tendría cuatro oportunidades de realizar ataques de mirada que causan miedo, una por cada asalto de la duración del hechizo.\n\nCualquier ataque de mirada se anula mediante una tirada de salvación exitosa contra conjuros, con ajustes de Sabiduría.\n\nLos cuatro efectos del hechizo son los siguientes:\n\n**Carisma:** El mago puede encantar a una sola persona o monstruo con la mirada y pronunciando una sola palabra.\n\nEl efecto es hacer que el sujeto encantado sea absolutamente leal y dócil con el lanzador, incluso hasta el punto del peligro personal.\n\nPor lo demás, es igual que un hechizo de encantar monstruo.\n\nTodas las criaturas que no sean humanos, semihumanos o humanoides salvan con bonificadores de +2.\n\n**Miedo:** El mago puede causar miedo con la mirada y pronunciando una sola palabra.\n\nEl sujeto huye aterrorizado durante 1d4 asaltos.\n\nDespués de esto, la criatura rehúsa enfrentarse al lanzador y se acobarda o huye hacia la cobertura más cercana si posteriormente se enfrenta al lanzador (50 % de probabilidad de cada uno).\n\nEste último efecto dura un turno por nivel del lanzador.\n\nEste ataque puede ser anulado por hechizos que contrarresten el miedo.\n\n**Enfermedad:** Este poder permite al lanzador simplemente mirar, pronunciar una palabra y causar un dolor repentino y fiebre que recorren el cuerpo del sujeto.\n\nLas criaturas con puntuaciones de característica funcionan a la mitad de su efectividad; otras solo infligen la mitad del daño con ataques físicos.\n\nEl movimiento se produce a la mitad del ritmo normal.\n\nEl sujeto permanece aquejado durante un turno por nivel del lanzador, tras lo cual todas sus capacidades vuelven al ritmo de un punto por turno de descanso completo o un punto por hora de actividad moderada.\n\nLos efectos no pueden ser anulados por un hechizo de curar enfermedad o sanar, pero un hechizo de quitar maldición o un disipar magia exitoso es eficaz.\n\nLas criaturas que no sean humanos, semihumanos o humanoides salvan con bonificadores de +2 contra este ataque.\n\n**Sueño:** El mago puede hacer que cualquier individuo caiga en un sueño comatoso mediante una mirada y una sola palabra, a menos que el sujeto supere su tirada de salvación contra conjuros.\n\nLas criaturas normalmente sujetas a un hechizo de sueño de nivel 1 salvan con penalizaciones de -2.\n\nUna criatura afectada debe ser sacudida o despertada de cualquier otra forma.\n\nEn todos los casos, el ataque de mirada tiene un factor de velocidad de 1.\n\nEste hechizo no afecta a ningún tipo de no muerto, ni se extiende más allá del plano ocupado por el lanzador.\n\nTen en cuenta que el lanzador está sujeto a los efectos de su mirada reflejada y se le concede cualquier tirada de salvación aplicable.\n\nEn el caso de una mirada de carisma reflejada, el lanzador queda paralizado hasta que se pase o sea contrarrestada.",
    },
    664: {
        "name": "Geas",
        "description": "Un hechizo de geas impone una orden mágica a una criatura (generalmente humana o humanoide) para llevar a cabo algún servicio, o para abstenerse de alguna acción o curso de actividad, según lo desee el lanzador.\n\nLa criatura debe ser inteligente, consciente, estar bajo su propia voluntad y ser capaz de comprender al lanzador.\n\nSi bien un geas no puede obligar a una criatura a suicidarse ni a realizar actos que probablemente resulten en muerte cierta, sí puede provocar casi cualquier otra línea de acción.\n\nLa criatura bajo geas debe seguir las instrucciones impartidas hasta que el geas se complete.\n\nEl incumplimiento hará que la criatura enferme y muera en un plazo de 1d4 semanas.\n\nLa desviación o tergiversación de las instrucciones provoca una pérdida correspondiente de puntos de Fuerza hasta que la desviación cese.\n\nUn geas puede deshacerse con un hechizo de deseo, pero un disipar ni un quitar maldición lo anularán.\n\nTu DM decidirá cualquier detalle adicional de un geas, pues su lanzamiento y cumplimiento son complicados, y un geas lanzado de forma incorrecta se ignora.",
    },
    667: {
        "name": "Signo Mayor de Sellado",
        "description": "Una forma más potente del signo menor de sellado, este hechizo permite al lanzador proteger un objeto o portal e impedir que cualquier otra criatura abra o atraviese el objeto o superficie sellada.\n\nEl signo mayor tiene varios efectos: en primer lugar, afecta a una puerta o a un objeto que se abra (un cofre, por ejemplo) como un hechizo de cierre mágico.\n\nSi se coloca en un corredor o arco abierto para impedir el paso, el signo mayor crea una barrera mágica que repele a todos los que intentan pasar.\n\nSegundo, el signo mayor refuerza enormemente la estructura física de cualquier puerta u objeto sobre el que se coloque, otorgando un bonificador de +6 a cualquier tirada de salvación del objeto y permitiendo que el objeto o puerta ignore 1 punto de daño por nivel del lanzador de cualquier ataque.\n\nPor ejemplo, un signo mayor lanzado por un mago de nivel 12 reduciría el daño de cualquier golpe o hechizo en 12 puntos, de modo que un luchador armado con una espada ancha (daño máximo de 8 puntos) nunca podría abrir a hachazos una puerta protegida por el signo.\n\nPor último, si la puerta u objeto protegido se fuerza o destruye por cualquier medio, el signo no solo se destruye, sino que además libera un hechizo sobre la criatura ofensora.\n\nEl hechizo contenido por el signo se introduce en la protección cuando se crea el signo mayor, y puede usarse de esta forma cualquier hechizo memorizado por el lanzador, desde una bola de fuego o un toque electrizante hasta un deseo o un polimorfismo muy desagradable.\n\nEl alcance del hechizo retributivo del signo es de 10 yardas por nivel del lanzador, por lo que es posible destruir la protección desde una distancia segura.\n\nEl signo se muestra a la vista, y la mayoría de los magos lo reconocerán por lo que es.\n\nEl lanzador no puede especificar criaturas o condiciones particulares para el funcionamiento del signo; este funciona contra cualquier criatura que intente atravesarlo, aunque el mago puede atravesar libremente su propio signo sin activarlo.\n\nEl signo mayor puede ser eliminado por el lanzador, dando así fin al hechizo, o puede ser anulado por un deseo limitado o un deseo lanzado por un mago de nivel igual o superior al del lanzador original; no puede ser disipado.\n\nEl componente material para un signo mayor es polvo de diamante por valor de al menos 1000 po.",
    },
    668: {
        "name": "Guardias y Protecciones",
        "description": "Este hechizo especial y poderoso se utiliza principalmente para defender la fortaleza del mago.\n\nLa protección resguarda una fortaleza de una planta, con una dimensión base de 400 pies × 400 pies.\n\nEl mago puede proteger un área de varias plantas reduciendo el área base proporcionalmente.\n\nLo siguiente ocurre en el área protegida al lanzar el hechizo:\n\n1. Todos los pasillos se vuelven brumosos; la visibilidad se reduce a 10 pies.\n\n2. Todas las puertas son cerradas mágicamente.\n\n3. Las escaleras están llenas de telarañas de arriba a abajo.\n\nEstas actúan como el hechizo de segundo nivel de telaraña, salvo que se regeneran en un turno si son destruidas.\n\n4. Donde hay elección de dirección (por ejemplo, un cruce o un pasillo lateral), funciona un hechizo menor de tipo confusión, de modo que existe un 50 % de probabilidad de que los intrusos crean que van en la dirección exactamente opuesta.\n\n5. Todo el área irradia magia.\n\nEl uso normal del hechizo de detectar magia se vuelve imposible para quienes tengan un nivel inferior al del lanzador y difícil para los demás.\n\n6. Una puerta por nivel de experiencia del mago queda cubierta por una ilusión para aparecer como si fuera una pared lisa.\n\n7. El mago puede colocar uno de los siguientes efectos mágicos adicionales:\n\n   A. Luzas danzantes en cuatro corredores.\n   B. Una boca mágica en dos lugares.\n   C. Una nube apestosa en dos lugares.\n   D. Una ráfaga de viento en un corredor o habitación.\n   E. Una sugestión en un lugar.\n\nTen en cuenta que los puntos 6 y 7 solo funcionan cuando el mago está totalmente familiarizado con el área del efecto del hechizo.\n\nUn disipar magia puede quitar un efecto, al azar, por lanzamiento.\n\nUn hechizo de quitar maldición no funcionará.\n\nLos componentes materiales del hechizo son incienso ardiente, una pequeña cantidad de azufre y aceite, un cordón anudado, una pequeña cantidad de sangre de umber hulk y una pequeña vara de plata.",
    },
    670: {
        "name": "Saber de Leyendas",
        "description": "El hechizo de saber de leyendas se usa para determinar información legendaria sobre una persona, lugar o cosa conocida.\n\nSi la persona o cosa está a mano, o si el mago se encuentra en el lugar en cuestión, la probabilidad de que el hechizo produzca resultados es mucho mayor y el tiempo de lanzamiento es solo de 1d4 turnos.\n\nSi solo se conoce información detallada sobre la persona, lugar o cosa, el tiempo de lanzamiento es de 1d10 días.\n\nSi solo se conocen rumores, el tiempo de lanzamiento es de 2d6 semanas.\n\nDurante el lanzamiento, el mago no puede realizar otras actividades aparte de la rutina: comer, dormir, etc.\n\nCuando se completa, la adivinación revela si hay material legendario disponible.\n\nA menudo revela dónde se encuentra este material, mediante nombre de lugar, rima o acertijo.\n\nA veces da cierta información sobre la persona, lugar o cosa (cuando el objeto del saber de leyendas está a mano), pero estos datos siempre están en alguna forma críptica (rima, acertijo, anagrama, cifra, signo, etc.).\n\nNaturalmente, un hechizo de saber de leyendas solo revela información si la persona, lugar o cosa es notable o legendaria.\n\nPor ejemplo, supongamos que Delsenora se topa con una espada extremadamente bien hecha.\n\nEsta irradia magia, pero al usar un hechizo de identificar, no logra obtener información.\n\nIncluso dársela a un luchador de confianza no sirvió, pues la espada no reveló ningún poder especial.\n\nFinalmente, lanza un hechizo de saber de leyendas con la esperanza de obtener más información.\n\nComo la espada está a mano, completa el hechizo en tres turnos.\n\nEn su mente llega el mensaje: \"Esta fue la espada de quien espera hasta el momento de mayor peligro de Albion, cuando volará de nuevo a su mano. Justa fue la mano que me entregó y justa fue la mano que me recuperó\".\n\nClaramente, Delsenora se da cuenta de que este debe ser un objeto muy poderoso, dado que su hechizo solo dio una respuesta críptica.\n\nPero, ¿quién es quien espera? ¿Y dónde está Albion? Para más información, Delsenora tendrá que lanzar más hechizos.\n\nPero ahora el proceso llevará mucho más tiempo, pues solo tiene las pistas más vagas que seguir.\n\nEl hechizo de saber de leyendas se lanza con incienso y tiras de marfil dispuestas en un rectángulo, pero algún objeto de valor para el lanzador debe sacrificarse además: una poción, pergamino mágico, objeto mágico, etc.",
    },
    671: {
        "name": "Transformacion Sombría de Lorloveim",
        "description": "Cuando se lanza este hechizo, el ilusionista transforma una criatura o una cantidad específica de materia inerte en sombra, volviéndola insustancial.\n\nAsí, una puerta podría convertirse en sombra y ser atravesada.\n\nLa cantidad máxima de materia inanimada que puede transformarse es de un pie cúbico por nivel del lanzador.\n\nA las criaturas no voluntarias se les concede una tirada de salvación para resistir la transformación sombría.\n\nLos objetos mágicos y los efectos mágicos de hechizos (como la mano contundente de Bigby o un muro de piedra) no pueden verse afectados.\n\nUna criatura transformada y todo su equipo se vuelven insustanciales.\n\nLa criatura puede atravesar pequeños agujeros, aberturas estrechas y las grietas más pequeñas.\n\nLa criatura no puede volar sin magia adicional.\n\nNinguna forma de ataque es posible en forma de sombra, excepto contra criaturas que existan en el Plano Etéreo.\n\nEn ese caso, todos los ataques son normales; sin embargo, la criatura sombría solo puede ser dañada por armas mágicas de +1 o superior o por criaturas capaces de afectar a quienes solo son golpeados por armas mágicas.\n\nLos hechizos y ataques especiales tienen efectos normales.\n\nLa mayoría de las criaturas no muertas ignorarán a una criatura en forma de sombra, creyendo que es un espectro o fantasma; sin embargo, los liches y los no muertos poderosos pueden salvar contra conjuros con una penalización de -4 para reconocer el hechizo.\n\nUn hechizo exitoso de disipar magia obliga a la criatura en forma de sombra a volver a su forma normal.",
    },
    672: {
        "name": "Bajar el Agua",
        "description": "El mago que lanza un hechizo de bajar el agua hace que el agua o fluido similar en el área de efecto se hunda.\n\nEl agua puede bajarse hasta 2 pies por cada nivel de experiencia del mago, hasta una profundidad mínima de 1 pulgada.\n\nEl agua se baja dentro de un área cuadrada cuyos lados son de 10 pies de longitud por nivel del lanzador.\n\nAsí, un mago de nivel 12 afecta a un volumen de 24 pies × 120 pies × 120 pies, un mago de nivel 13 a un volumen de 26 pies × 130 pies × 130 pies, y así sucesivamente.\n\nEn cuerpos de agua extremadamente grandes y profundos, como el océano profundo, el hechizo crea un torremelo que arrastra barcos y naves similares hacia abajo, poniéndolos en riesgo e impidiéndoles salir por movimiento normal durante la duración del hechizo.\n\nCuando se lanza sobre elementales de agua y otras criaturas basadas en agua, este hechizo actúa como un hechizo de lentificar: la criatura se mueve a la mitad de velocidad y realiza la mitad de los ataques cada asalto.\n\nNo tiene efecto sobre otras criaturas.\n\nEl componente material de este hechizo es una pequeña ampolla de polvo.\n\nSu reverso, subir el agua, hace que el agua o fluidos similares vuelvan a su nivel natural más alto: inundación de primavera, marea alta, etc.\n\nEsto puede hacer que los vados sean infranqueables, flotar barcos encallados e incluso arrasar puentes, a discreción del DM.\n\nAnula el bajar el agua y viceversa.\n\nEl componente material del hechizo de subir el agua es una pequeña ampolla de agua.",
    },
    673: {
        "name": "Sugestion en Masa",
        "description": "El hechizo de sugestión en masa permite al mago influir en las acciones de una o más criaturas elegidas de la misma forma que el hechizo de sugestión.\n\nPuede influirse en hasta una criatura por nivel de experiencia del lanzador, siempre que todas las criaturas objetivo estén dentro del alcance de 30 yardas.\n\nLos no muertos no son susceptibles a este hechizo.\n\nLa sugestión debe estar razonablemente redactada y comprendida por las criaturas, y debe ser la misma para todos los que la oigan.\n\nLas criaturas que superen con éxito la salvación contra conjuros no se ven afectadas.\n\nLas tiradas de salvación contra el hechizo sufren una penalización de -1, y si se trata de afectar a una sola criatura, su tirada de salvación sufre una penalización de -4.\n\nTen en cuenta que una sugestión en masa muy razonable puede hacer que la tirada de salvación se realice con una penalización adicional (como -1, -2, etc.), a discreción del DM.\n\nUna sugestión en masa puede continuar surtiendo efecto durante una duración considerable, a discreción del DM.\n\nTambién pueden especificarse las condiciones que desencadenarán una acción especial; si la condición no se cumple antes de que expire el hechizo, la acción no se llevará a cabo.\n\nLos componentes materiales de este hechizo son una lengua de serpiente y un trozo de panal o una gota de aceite dulce.",
    },
    676: {
        "name": "Lucubracion de Mordenkainen",
        "description": "Mediante este hechizo, el mago puede recordar al instante cualquier hechizo de nivel 1 a 5 que haya usado durante las últimas 24 horas.\n\nEl hechizo debe haber sido memorizado y realmente usado durante ese periodo.\n\nLa lucubración de Mordenkainen permite la recuperación de un solo hechizo.\n\nSi el hechizo recuperado requiere componentes materiales, estos deben ser proporcionados por el lanzador; el hechizo recuperado no se puede usar hasta que se disponga de los componentes materiales.",
    },
    677: {
        "name": "Mover Tierra",
        "description": "Cuando se lanza, el hechizo de mover tierra mueve tierra (arcilla, marga, arena) y sus otros componentes.\n\nAsí, se pueden derrumbar terraplenes, mover montículos, cambiar dunas, etc.\n\nSin embargo, en ningún caso pueden derrumbarse o moverse prominencias de roca.\n\nEl área a afectar dicta el tiempo de lanzamiento; por cada 40 yardas × 40 yardas de superficie y 10 pies de profundidad, se requiere un turno de tiempo de lanzamiento.\n\nEl área máxima que puede verse afectada es de 240 yardas × 240 yardas, lo que lleva cuatro horas.\n\nSi se van a mover elementos del terreno (en comparación con simplemente hundir márgenes o muros de tierra), es necesario que un elemental de tierra sea invocado a continuación para ayudar.\n\nTodo el lanzamiento de hechizos o invocaciones debe completarse antes de que se produzcan efectos.\n\nComo cualquier elemental de tierra invocado realizará la mayor parte de su trabajo bajo tierra, es poco probable que sea interceptado o interrumpido.\n\nSi esto ocurre, sin embargo, el movimiento de la tierra que requiere sus servicios debe detenerse hasta que el elemental vuelva a estar disponible.\n\nSi el elemental es destruido o despedido, el hechizo de mover tierra se limita a hundir márgenes o muros de tierra.\n\nEl hechizo no puede usarse para excavar túneles y suele ser demasiado lento para atrapar o enterrar criaturas; su uso principal es para excavar o rellenar fosos o para ajustar contornos del terreno antes de una batalla.\n\nLos componentes materiales de este hechizo son una mezcla de suelos (arcilla, marga, arena) en una pequeña bolsa y una hoja de hierro.\n\nNota: este hechizo no rompe violentamente la superficie del suelo.\n\nEn su lugar, crea crestas y vaguadas ondulantes, con la tierra reaccionando con fluidez glaciar hasta lograr el resultado deseado.\n\nLos árboles, las estructuras, las formaciones rocosas, etc., se ven relativamente poco afectados, salvo por cambios en la elevación y la topografía relativa.",
    },
    679: {
        "name": "Apartar Agua",
        "description": "Mediante un hechizo de apartar agua, el mago puede hacer que el agua o un líquido similar se separe, formando así un surco de 20 pies de ancho.\n\nLa profundidad y longitud del surco dependen del nivel del mago, y se crea un surco de 3 pies de profundidad por 10 yardas de longitud por nivel.\n\nPor ejemplo, a nivel 12 el mago apartaría el agua 36 pies de profundidad por 20 pies de ancho por 120 yardas de largo.\n\nEl surco permanece mientras dure el hechizo o hasta que el mago que lo lanzó decida poner fin a sus efectos.\n\nSi se lanza bajo el agua, este hechizo crea un cilindro de aire de longitud y diámetro apropiados.\n\nSi se lanza directamente sobre un elemental de agua u otra criatura basada en agua, la criatura recibe 4d8 puntos de daño y debe superar una tirada de salvación contra conjuros o huir presa del pánico durante 3d4 asaltos.\n\nLos componentes materiales del hechizo son dos pequeñas láminas de cristal o vidrio.",
    },
    680: {
        "name": "Ilusion Permanente",
        "description": "Cuando se lanza este hechizo, el mago crea una ilusión con elementos visuales, auditivos, olfativos y térmicos.\n\nEl hechizo puede crear la ilusión de cualquier objeto, criatura o fuerza, siempre que esté dentro de los límites del área de efecto del hechizo.\n\nAfecta a todas las criaturas que ven la ilusión, incluso hasta el punto de sufrir daño por caer en un foso ilusorio lleno de pinchos afilados.\n\nLas criaturas que intentan no creer en la ilusión obtienen una tirada de salvación contra conjuros y, si tienen éxito, la ven como lo que es y añaden bonificadores de +4 a las tiradas de salvación de sus compañeros, si este conocimiento puede comunicarse con eficacia.\n\nLas criaturas que no perciben el efecto del hechizo son inmunes hasta que se vuelven conscientes de él.\n\nLa ilusión permanente está sujeta, por supuesto, a un hechizo de disipar magia.\n\nEl componente material del hechizo es un poco de vellón.",
    },
    681: {
        "name": "Ilusion Programada",
        "description": "Este hechizo crea una ilusión de un evento u objeto que parece totalmente real en todo sentido, incluidos sonido, forma, olor y textura.\n\nLa ilusión puede incluso tener sonidos, olores y sensaciones táctiles específicos, pero no movimiento independiente.\n\nLa duración depende de la complejidad de la ilusión:\n\n- Una ilusión menor dura 10 minutos.\n- Una ilusión mayor dura 1 hora.\n- Una ilusión compleja dura 1 hora por nivel del lanzador.\n\nEl lanzador debe especificar los límites de la ilusión.\n\nPuede simular una escena completa, objeto o ser, pero debe ser realista en ese contexto.\n\nLas acciones pequeñas o los objetos en movimiento no pueden simularse a menos que se enumeren específicamente (como movimientos invisibles).\n\nEl nivel del lanzador determina la complejidad de la ilusión.",
    },
    683: {
        "name": "Repulsion",
        "description": "Cuando se lanza este hechizo, el mago puede hacer que todas las criaturas en la trayectoria del área de efecto se muevan directamente lejos de su persona.\n\nLa repulsión ocurre a la velocidad de la criatura que intenta moverse hacia el lanzador.\n\nLa criatura repelida continúa alejándose durante un asalto completo, incluso si esto la lleva más allá del alcance del hechizo.\n\nEl lanzador puede designar una nueva dirección cada asalto, pero el uso de este poder cuenta como la acción principal del lanzador en el asalto.\n\nEl lanzador puede, por supuesto, optar por hacer otra cosa en lugar de usar el ataque de repulsión.\n\nEl componente material de este hechizo es un par de pequeñas barras de hierro magnetizado unidas a dos estatuillas caninas pequeñas, una de marfil y otra de ébano.",
    },
    685: {
        "name": "Piedra a Carne",
        "description": "El hechizo de piedra a carne convierte cualquier tipo de piedra en carne.\n\nSi el objeto de piedra receptor estuvo anteriormente vivo, este hechizo restaura la vida (y las pertenencias), aunque la supervivencia de la criatura está sujeta a la tirada habitual de supervivencia al shock sistémico.\n\nCualquier criatura anteriormente viva, independientemente de su tamaño, puede devolverse así a la carne.\n\nLa piedra ordinaria puede convertirse en carne en un volumen de 9 pies cúbicos por nivel de experiencia del lanzador.\n\nDicha carne es inerte, sin fuerza vital, a menos que se disponga de una fuerza vital o energía mágica (por ejemplo, este hechizo convertiría un gólem de piedra en un gólem de carne, pero una estatua ordinaria se convertiría en un cuerpo).\n\nSi se lanza sobre piedra, el mago puede crear un cilindro de material carnoso de 1 a 3 pies de diámetro y hasta 10 pies de largo, permitiendo abrir un pasaje.\n\nLos componentes materiales son una pizca de tierra y una gota de sangre.\n\nEl reverso, carne a piedra, convierte carne de cualquier tipo en piedra.\n\nTodas las posesiones de la persona afectada también se convierten en piedra.\n\nEl sujeto previsto del hechizo recibe una tirada de salvación contra conjuros para evitar el efecto.\n\nSi una estatua creada por este hechizo sufre roturas o erosión, el ser (si alguna vez regresa a su estado carnoso original) tendrá daños, deformidades, etc., similares.\n\nEl DM puede permitir que tales daños sean reparados mediante varios hechizos clericales de alto nivel, como regenerar.\n\nLos componentes materiales del hechizo son cal, agua y tierra.",
    },
    686: {
        "name": "Magnetismo Superior",
        "description": "Cuando se lanza este hechizo, el mago designa un objeto inanimado de piedra, tierra o metal dentro del alcance del hechizo para que funcione como un potente imán, atrayendo todo el metal.\n\nEl objeto afectado no puede ser mayor que un cubo de 10 pies, aunque una sección de muro, suelo o techo de unos 10 pies cuadrados funcionará.\n\nUna vez magnetizado, el objeto ejerce una potente fuerza de atracción o repulsión (a elección del lanzador) contra objetos de metal ferroso.\n\nLos efectos varían según la proximidad de los objetos metálicos al centro del magnetismo, como se muestra a continuación (consulta la tabla en el libro).\n\nLa velocidad de movimiento representa la rapidez con que los objetos son atraídos o repelidos desde el centro del magnetismo.\n\nSi la criatura u objeto en cuestión es más pesado que el objeto magnetizado, es el objeto magnetizado el que se mueve en su lugar.\n\nLa fuerza efectiva es la atracción del magnetismo a esa distancia; el tamaño equivalente se refiere a tamaños de criatura, no de armas.\n\nUn personaje o criatura que lleva objetos metálicos sueltos o elementos como armas, escudos, yelmos, botones, etc., debe superar una prueba de Fuerza enfrentada (consulta opciones del jugador: combate y tácticas para obtener información sobre pruebas de característica enfrentadas) para conservar sus pertenencias y evitar que la magnetismo se las arranque de las manos.\n\nAsegurar un arma en su funda, sostener un objeto con ambas manos y otras precauciones pueden otorgar al personaje un +2 a +4 a su puntuación base de característica, a discreción del DM.\n\nLos personajes que llevan armaduras de metal deben intentar una prueba de Fuerza enfrentada para ignorar los efectos del magnetismo.\n\nSi el personaje falla la prueba de Fuerza de forma absoluta, pierde el equilibrio y vuela hacia o lejos del objeto a la velocidad completa indicada.\n\nSufre todo el daño de caída basado en la velocidad con la que golpea el objeto: 1d6 por cada 10 pies de velocidad de movimiento, o la mitad si supera la prueba de Fuerza pero es vencido por la tirada del magnetismo; en ese caso se mueve un pie por cada punto perdido.\n\nNuevamente, algunas precauciones o asistencia pueden ayudar a los personajes con armadura de hierro en sus pruebas de Fuerza.\n\nPara monstruos, compara el tamaño de la criatura con el tamaño efectivo del magnetismo.\n\nUn personaje con armadura que quede adherido a una superficie u objeto pierde cualquier bonificador de Destreza a la CA y no puede realizar ataques físicos.\n\nPuede intentar retorcerse fuera de su armadura para liberarse, utilizar un objeto mágico o usar poderes psiónicos si los tiene a su disposición.\n\nEl componente material de este hechizo es un pequeño imán de barra, doblado en forma de U y recubierto de mithril.",
    },
    688: {
        "name": "Transmutar Agua en Polvo",
        "description": "Cuando se lanza este hechizo, el área objetivo experimenta al instante un cambio de líquido a polvo pulverulento.\n\nTen en cuenta que si el agua ya está enlodada, el área de efecto se duplica, mientras que si se transmuta barro húmedo, el área de efecto se cuadruplica.\n\nSi el agua permanece en contacto con el polvo transmutado, el agua absorbe rápidamente este último, convirtiendo el polvo en barro limoso (si existe suficiente cantidad de agua para hacerlo); en caso contrario, empapa o humedece el polvo en consecuencia.\n\nSolo el líquido que esté efectivamente en el área de efecto en el momento del lanzamiento del hechizo se ve afectado.\n\nLos líquidos que son solo parcialmente agua se ven afectados solo en la medida del contenido real de agua; sin embargo, las pociones que contienen agua quedan inutilizadas.\n\nLas criaturas vivas no se ven afectadas, salvo las nativas del Plano Elemental del Agua.\n\nTales criaturas reciben tiradas de salvación contra conjuros.\n\nEl fallo inflige 1d6 puntos de daño por nivel del lanzador al sujeto, mientras que el éxito implica que la criatura recibe la mitad del daño.\n\nSolo una criatura de este tipo puede verse afectada por un solo lanzamiento de este hechizo, independientemente del tamaño de la criatura o del área de efecto del hechizo.\n\nEl reverso del hechizo es simplemente un hechizo de crear agua de gran potencia que requiere una pizca de polvo normal como componente material adicional.\n\nPara cualquier uso del hechizo, los demás componentes requeridos son polvo de diamante de al menos 500 po de valor y un poco de concha marina.",
    },
    689: {
        "name": "Fortitud Trollesca",
        "description": "Este poderoso hechizo imbuye al lanzador con la fortaleza física y resistencia de un troll.\n\nMientras el hechizo está vigente, el lanzador regenera 3 puntos de golpe por asalto hasta alcanzar su máximo normal.\n\nTambién obtiene la capacidad de un troll de ignorar desmembramientos, decapitaciones y otras lesiones terribles que normalmente lo incapacitarían o matarían (aunque perder un miembro puede impedir al lanzador realizar ciertas acciones, como correr, trepar y otras actividades); las hemorragias, heridas, ser reducido a puntos de golpe negativos y otros efectos que causan que la víctima pierda puntos de golpe de asalto en asalto son ignorados: el lanzador recupera en su lugar 3 puntos de golpe por asalto, hasta su máximo normal.\n\nSi el lanzador es reducido a menos de 0 puntos de golpe, queda incapacitado y debe realizar una tirada de shock sistémico o perder todos sus hechizos de nivel más alto.\n\nLa incapacitación dura solo hasta que su regeneración lo restaure a 1 punto de golpe o más; puede moverse, luchar y lanzar hechizos de nuevo tan pronto como su total de puntos de golpe sea positivo.\n\nLa fortitud trollesca no proporciona al lanzador ninguna defensa contra venenos letales, enfermedades ni otros efectos; el drenaje de niveles, el toque vampírico o la regeneración vampírica no pueden regenerarse, ya que esto representa daño a la fuerza vital de la víctima y no una lesión física.\n\nAdemás, el daño por fuego y por ácido no puede regenerarse.\n\nMientras el hechizo está vigente, el lanzador puede unir miembros seccionados simplemente manteniéndolos en su lugar, pero si el hechizo termina mientras un miembro (que ya se estaba moviendo hacia él) aún está separado de su cuerpo, sufre inmediatamente los efectos completos de la lesión.\n\nEl componente material de este hechizo es un jirón de carne seca del corazón de un troll que debe ser pulverizado hasta convertirse en polvo.\n\nEl polvo se espolvorea entonces sobre el lanzador.",
    },
    690: {
        "name": "Vision Verdadera",
        "description": "Cuando el mago emplea este hechizo, confiere al beneficiario la capacidad de ver todas las cosas como realmente son.\n\nEl hechizo penetra la oscuridad normal y mágica.\n\nLas puertas secretas se vuelven visibles.\n\nLa ubicación exacta de las cosas desplazadas es obvia.\n\nLas cosas invisibles se vuelven visibles.\n\nLas ilusiones y apariciones se ven a través.\n\nLos objetos polimorfados, cambiados o encantados son evidentes.\n\nLa forma real aparece translúcida superpuesta sobre la forma aparente: un dragón dorado polimorfado a forma humana aparecería humano con un dragón fantasmal superpuesto sobre la forma humana.\n\nA diferencia de la versión clerical de este hechizo, el beneficiario no puede determinar el alineamiento.\n\nEl beneficiario puede enfocar su visión para ver en el Plano Etéreo o en las áreas limítrofes de planos adyacentes.\n\nEl alcance de la visión conferida es de 60 pies.\n\nLa visión verdadera no penetra objetos sólidos; de ninguna manera confiere visión de rayos X o equivalente.\n\nAdemás, los efectos del hechizo no pueden mejorarse con magia.\n\nEl hechizo requiere un ungüento para los ojos hecho con polvo de un hongo muy raro, azafrán y grasa.\n\nCuesta no menos de 300 po por uso y debe envejecerse de 1d6 meses.",
    },
    691: {
        "name": "Velo",
        "description": "El hechizo de velo permite al mago cambiar al instante la apariencia de su entorno y grupo, o crear un terreno alucinatorio capaz de engañar incluso a las criaturas más astutas (a menos que posean el hechizo de visión verdadera, una gema de visión o una ayuda mágica similar).\n\nEl velo puede hacer que una habitación lujosa parezca una pocilga inmunda; incluso las impresiones táctiles se ajustan a la ilusión visual.\n\nDel mismo modo, un grupo podría hacerse parecer una banda mixta de brownies, pixies y hadas liderada por un treant.\n\nSi se crea un terreno alucinatorio, el tacto no lo hace desaparecer.",
    },
    694: {
        "name": "Tormenta Acida",
        "description": "Este hechizo mortífero desata una lluvia de gotas de ácido mágico gelatinoso.\n\nTodas las criaturas dentro del área de efecto quedan recubiertas por glóbulos de ácido pegajoso.\n\nEl ácido solo puede lavarse con vino, vinagre o mediante un disipar magia exitoso o hechizo similar.\n\nEl ácido permanece durante 1 asalto por nivel del lanzador y luego desaparece.\n\nLas criaturas recubiertas por el ácido sufren 1d4 puntos de daño cada asalto durante los asaltos 1-3, 1d6 puntos en cada uno de los asaltos 4-6 y 1d8 puntos en cada asalto posterior.\n\nLos personajes que superen con éxito la salvación contra conjuros durante el primer asalto sufren solo la mitad del daño del ácido durante los asaltos restantes.\n\nCuando el hechizo expira, no se inflige más daño.\n\nEl daño por ácido puede curarse por cualquier medio excepto la regeneración.\n\nEl componente material es una gota de ácido.",
    },
    695: {
        "name": "Destierro",
        "description": "Un hechizo de destierro permite al lanzador expulsar a una criatura extraplanar del plano natal del lanzador.\n\nEl efecto es instantáneo, y el sujeto no puede regresar sin una convocatoria especial o medio de salida de su plano al que fue desterrado.\n\nPueden desterrarse hasta 2 Dados de Golpe o niveles de criatura por nivel del lanzador.\n\nEl lanzador debe tanto nombrar el tipo de criatura o criaturas a expulsar como dar su nombre y título, si lo tiene.\n\nEn cualquier caso, la resistencia a la magia de la criatura debe ser superada para que el hechizo sea efectivo.\n\nLos componentes materiales del hechizo son sustancias dañinas, odiadas u opuestas a la naturaleza del sujeto o sujetos del hechizo.\n\nPor cada sustancia así incluida en el lanzamiento, la criatura sujeto pierde un 5 % de su resistencia a la magia y sufre una penalización de -2 a su tirada de salvación contra conjuros.\n\nPor ejemplo, si se usaran hierro, agua bendita, sunstone y una ramita de romero al lanzar un destierro contra un ser que odia esas cosas, su salvación contra el hechizo se realizaría con una penalización de -8 (cuatro sustancias por el factor de -2).\n\nObjetos especiales, como pelo de la cola de un ki-rin o plumas de couatl, también podrían añadirse para cambiar el factor a -3 o -4 por objeto.\n\nPor el contrario, pelo de un titán o muérdago bendecido por un druida podrían reducir el factor a -1 con respecto a la misma criatura.\n\nSi la criatura objetivo supera su tirada de salvación contra conjuros, el lanzador recibe una descarga de energía como retroalimentación, sufre 2d6 puntos de daño y queda aturdido durante un asalto.",
    },
    697: {
        "name": "Union Aterradora de Bloodstone",
        "description": "Cuando se emplea este poderoso hechizo, el mago transfiere su espíritu al cuerpo de una criatura no muerta, dominándola por completo.\n\nSi la criatura no muerta tiene inteligencia, se le concede una tirada de salvación contra conjuros para resistir la unión.\n\nSi la salvación tiene éxito, el espíritu del lanzador es forzado a volver a su propio cuerpo.\n\nEl mago debe realizar una tirada de shock sistémico; si falla, el mago sufre 5d6 puntos de daño.\n\nSi tiene éxito, el mago sufre la mitad de este daño.\n\nSi la salvación de la criatura falla, el nigromante une su esencia vital con la del no muerto.\n\nMientras está en el cuerpo de la criatura, el lanzador puede usar todos sus ataques especiales y habilidades innatas, excluyendo los hechizos memorizados por la criatura.\n\nEl cuerpo del mago permanece en coma, está sujeto a todos los ataques regulares y sufre daño normalmente.\n\nEl espíritu del mago puede viajar una distancia ilimitada desde su cuerpo físico siempre que permanezcan en el mismo plano de existencia.\n\nSi es inteligente, el no muerto poseído intenta continuamente expulsar al lanzador con amenazas mentales que solo el mago puede oír.\n\nLos pensamientos del no muerto son espantosos.\n\nDurante el primer minuto de cada hora de posesión, el lanzador debe superar una tirada de Inteligencia para conservar su cordura.\n\nLa tirada se modifica por la diferencia entre la Inteligencia de la criatura y la del lanzador.\n\nSi el no muerto tiene una puntuación superior, la diferencia se suma a la tirada del dado.\n\nSi el nigromante tiene una Inteligencia superior, la diferencia se resta de la tirada.\n\nSi la tirada tiene éxito, no ocurre nada y el lanzador puede continuar poseyendo al no muerto.\n\nSi la tirada de Inteligencia falla, el intelecto del mago degenera, convirtiéndolo en un maníaco homicida y delirante.\n\nSu espíritu es inmediatamente forzado a volver a su cuerpo, y debe intentar una tirada de shock sistémico con el daño ocurriendo según lo descrito arriba.\n\nEl lanzador permanece peligrosamente insano hasta que se use un hechizo de sanar o de deseo para restaurar su intelecto.\n\nEste hechizo puede ser muy útil combinado con el hechizo de máscara de muerte.\n\nCuando expira la duración del hechizo, el espíritu del nigromante regresa de inmediato a su cuerpo.",
    },
    698: {
        "name": "Encantar Plantas",
        "description": "El hechizo de encantar plantas permite al lanzador poner bajo su mando formas de vida vegetales y comunicarse con ellas.\n\nEstas plantas obedecen las instrucciones lo mejor que pueden.\n\nEl hechizo encanta plantas en un área de 30 pies × 10 pies.\n\nSi bien el hechizo no dota a la vegetación de nuevas habilidades, sí permite al mago ordenar a las plantas que usen lo que tengan para cumplir sus instrucciones.\n\nSi las plantas en el área de efecto tienen habilidades especiales o inusuales, estas se usan según lo ordenado por el mago.\n\nPor ejemplo, este hechizo generalmente puede duplicar los efectos del hechizo de nivel 1 de sacerdote de enredar, si el lanzador lo desea.\n\nLa tirada de salvación se aplica solo a plantas inteligentes y se realiza con una penalización de -4 a la tirada de dado.\n\nLos componentes materiales del hechizo son una pizca de humus, una gota de agua y una ramita u hoja.",
    },
    702: {
        "name": "Convocatoria Instantanea de Drawmij",
        "description": "Cuando se lanza este hechizo, el mago teletransporta algún objeto deseado desde prácticamente cualquier ubicación directamente a su mano.\n\nEl objeto único no puede ser más largo en ninguna dimensión que una espada, no puede pesar más que un escudo (unas ocho libras) y debe ser inerte.\n\nPara preparar este hechizo, el mago debe sostener en su mano una gema de no menos de 5000 po de valor y pronunciar todas las palabras de la conjuración excepto la última.\n\nEn algún momento en el futuro, debe triturar la gema y pronunciar la palabra final.\n\nEl objeto deseado es entonces transportado al instante a la mano derecha o izquierda del lanzador, según lo desee.\n\nEl objeto debe haber sido tocado previamente durante la recitación inicial y específicamente nombrado; solo ese objeto particular es convocado por el hechizo.\n\nDurante la recitación inicial, la gema queda mágicamente inscrita con el nombre del objeto a convocar.\n\nLa inscripción es invisible e ilegible, salvo mediante un hechizo de leer magia, para todos excepto el mago que lanzó la convocatoria.\n\nSi el objeto está en posesión de otra criatura, el hechizo no funciona y el lanzador sabe quién es el poseedor y aproximadamente dónde se encuentra cuando se lanza la convocatoria.\n\nPueden convocarse objetos desde otros planos de existencia, pero solo si tales objetos no están en posesión (no necesariamente en el agarre físico) de otra criatura.\n\nPor cada nivel de experiencia por encima del 14, el mago puede convocar un objeto deseado desde un plano más alejado del plano en el que se encuentra al lanzar el hechizo (un plano de distancia en el nivel 14, dos planos en el 15, etc.).\n\nAsí, un mago de nivel 16 podría lanzar el hechizo incluso si el objeto deseado estuviera en la segunda capa de uno de los Planos Exteriores, pero en el nivel 14 el mago solo podría convocar el objeto si no estuviera más lejos que uno de los Planos Internos, el Plano Etéreo o el Plano Astral (consulta el Campaign Setting de Planescape).\n\nTen en cuenta que las protecciones o barreras especiales, o los factores que bloquean los hechizos de teletransporte o desplazamiento entre planos, también pueden bloquear la operación de este hechizo.\n\nLos objetos en el cofre secreto de Leomund no pueden recuperarse usando este hechizo.\n\nNota: Si el objeto está marcado por el mago, puede convocarse desde cualquier lugar del mismo plano a menos que se apliquen condiciones locales especiales.\n\nAdemás, los detalles de la ubicación del objeto son más específicos, y el objeto es más fácilmente trazable con otros tipos de magia de adivinación.",
    },
    703: {
        "name": "Bidimensionalidad",
        "description": "Un hechizo de bidimensionalidad hace que el lanzador tenga solo dos dimensiones, altura y anchura, sin profundidad.\n\nAsí, es invisible cuando se coloca de costado.\n\nEsta invisibilidad solo puede detectarse mediante un hechizo de visión verdadera o métodos similares.\n\nAdemás, el mago bidimensional puede atravesar los espacios más finos siempre que tengan la altura adecuada: pasar por el espacio entre una puerta y su marco es algo sencillo.\n\nEl mago puede realizar todas las acciones con normalidad.\n\nPuede girarse y volverse invisible, moverse en ese estado, y aparecer de nuevo al asalto siguiente para lanzar un hechizo, desapareciendo en el asalto siguiente.\n\nTen en cuenta que, cuando está girado, el mago no puede ser afectado por ninguna forma de ataque, pero cuando es visible, está sujeto al doble del daño normal para una forma de ataque; por ejemplo, una puñalada infligiría 2d4 puntos de daño si alcanzara a un mago bidimensional.\n\nAdemás, el mago tiene una parte de su existencia en el Plano Astral cuando el hechizo está vigente, y está sujeto a la posible atención de criaturas de allí.\n\nSi es percibido, hay un 25 % de probabilidad de que el mago sea arrastrado por completo al Plano Astral por cualquier ataque de una criatura astral.\n\nTal ataque (y cualquier ataque posterior recibido en el Plano Astral) inflige daño normal.\n\nLos componentes materiales de este hechizo son una figura plana de marfil del lanzador (que debe ser de la mejor factura, filigreeada en oro, esmaltada y enjoyada, con un coste medio de 500 a 1000 po) y una tira de pergamino.\n\nA medida que se recita el hechizo, el pergamino recibe medio giro y se une por los extremos.\n\nLa figura se pasa entonces por el lazo de pergamino, y ambos desaparecen para siempre.",
    },
    704: {
        "name": "Dedo de Muerte",
        "description": "El hechizo de dedo de muerte apaga la fuerza vital de la víctima.\n\nSi tiene éxito, la víctima no puede ser devuelta de la muerte ni resucitada.\n\nAdemás, en sujetos humanos el hechizo inicia cambios en el cuerpo tales que, al cabo de tres días, el lanzador puede, mediante una ceremonia especial con un coste no inferior a 1000 po más 500 po por cada cuerpo, animar el cadáver como un zombi juju bajo el control del lanzador.\n\nLos cambios pueden revertirse antes de la animación mediante un deseo limitado o hechizo similar lanzado directamente sobre el cuerpo, y un deseo pleno restaura al sujeto a la vida.\n\nEl lanzador pronuncia el encantamiento de dedo de muerte, apunta con su dedo índice a la criatura a matar, y, a menos que la víctima supere una salvación contra conjuros, la muerte ocurre.\n\nUna criatura que salve con éxito aún recibe 2d8+1 puntos de daño.\n\nSi el sujeto muere por el daño, no se producen cambios internos y la víctima puede entonces ser revivida normalmente.",
    },
    705: {
        "name": "Jaula de Fuerza",
        "description": "Este poderoso hechizo permite al lanzador hacer aparecer un cubo de fuerza, pero se diferencia del objeto mágico del mismo nombre en un aspecto importante: la jaula de fuerza no tiene paredes sólidas de fuerza; tiene bandas alternas de fuerza con huecos de ½ pulgada entre ellas.\n\nAsí, es verdaderamente una jaula, en lugar de un espacio cerrado con paredes sólidas.\n\nLas criaturas dentro del área de efecto del hechizo quedan atrapadas y contenidas a menos que puedan atravesar las aberturas, y, por supuesto, todos los hechizos y armas de aliento pueden pasar por los huecos entre las barras de fuerza de la jaula.\n\nUna criatura con resistencia a la magia tiene un único intento de atravesar las paredes de la jaula.\n\nSi la prueba de resistencia tiene éxito, la criatura escapa.\n\nSi falla, la criatura queda enjaulada.\n\nTen en cuenta que una prueba exitosa no destruye la jaula, ni permite a otras criaturas (salvo familiares) huir con la criatura que escapa.\n\nLa jaula de fuerza también se diferencia del dispositivo protector de paredes sólidas, el cubo de fuerza, en que solo puede eliminarse mediante un hechizo de disipar magia o por la expiración del hechizo.\n\nMediante una preparación especial en el momento de la memorización, un hechizo de jaula de fuerza puede transformarse en un hechizo de cubo de fuerza.\n\nEl cubo creado tiene 10 pies de lado, y el hechizo se asemeja entonces al de un cubo de fuerza en todos los aspectos, salvo por las diferencias entre un hechizo lanzado y la magia de un objeto, incluidos los métodos para derrotar su poder.\n\nAunque el lanzamiento real de cualquiera de las dos aplicaciones del hechizo no requiere componente material, el estudio necesario para memorizarlo sí exige que el mago pulverice un diamante de al menos 1000 po de valor, usando el polvo de diamante para trazar los contornos de la jaula o cubo que desea crear mediante lanzamiento de hechizo en algún momento posterior.\n\nAsí, en la memorización, el polvo de diamante se emplea y se gasta, pues al completar el estudio, el mago debe entonces lanzar el polvo al aire y este desaparecerá.",
    },
    706: {
        "name": "Selector de Oleada de Hornung",
        "description": "El gran Hornung, habiendo sido alcanzado más de una vez por sus propias oleadas descontroladas, ideó un método para mejorar los resultados de la magia salvaje y, no por casualidad, sus propias probabilidades de supervivencia.\n\nEl resultado fue el selector de oleada de Hornung.\n\nAl lanzar este hechizo, el mago salvaje obtiene un mayor control sobre las oleadas descontroladas.\n\nCuando el hechizo del lanzador crea una oleada descontrolada, se determinan dos resultados separados de la Tabla 2.\n\nEl lanzador puede entonces elegir cuál de los dos resultados tendrá efecto.",
    },
    709: {
        "name": "Deseo Limitado",
        "description": "El deseo limitado es un hechizo muy poderoso pero difícil.\n\nSe cumplirá literalmente, pero solo de forma parcial o durante una duración limitada, el deseo del lanzador.\n\nAsí, la realidad del pasado, presente o futuro podría alterarse (pero posiblemente solo para el mago, a menos que la redacción del hechizo sea muy cuidadosamente formulada) de alguna forma limitada.\n\nEl uso de un deseo limitado no cambiará sustancialmente grandes realidades, ni proporcionará riqueza o experiencia con solo pedirlo.\n\nEl hechizo puede, por ejemplo, restaurar algunos puntos de golpe (o todos los puntos de golpe durante una duración limitada) perdidos por el mago.\n\nPuede reducir las probabilidades de impacto o el daño de los oponentes, aumentar la duración de algún efecto mágico, hacer que una criatura esté favorablemente dispuesta hacia el lanzador, imitar un hechizo de nivel 7 o inferior, etc.\n\n(Consulta el hechizo de deseo de nivel 9).\n\nLos deseos codiciosos suelen acabar en desastre para el solicitante.\n\nEl tiempo de lanzamiento se basa en el tiempo dedicado a preparar la redacción del hechizo (los jugadores astutos deciden lo que quieren decir antes de usar el hechizo).\n\nNormalmente, el tiempo de lanzamiento es de un asalto (la mayor parte del cual se emplea en decidir qué decir).\n\nLanzar este hechizo envejece al lanzador un año por cada 100 años de esperanza de vida regular.",
    },
    710: {
        "name": "Puno de Llama de Malec-Keth",
        "description": "Cuando este hechizo se completa, una de las manos del lanzador estalla en luz y queda rodeada por un aura de llama.\n\nEl lanzador no sufre daño por este efecto.\n\nLa iluminación es igual a la de una antorcha.\n\nSi el mago toca con éxito a un oponente, el sujeto debe intentar una tirada de salvación.\n\nSi la tirada tiene éxito, la llama permanece en la mano del lanzador y la criatura tocada sufre 1d4+2 puntos de daño por fuego.\n\nSi la salvación falla, la llama deja la mano del lanzador para rodear el cuerpo de la víctima en un aura de fuego abrasador.\n\nEl aura sobrecalentada arde durante 1 asalto, infligiendo 1d4 puntos de daño por nivel del lanzador.\n\nEn lugar de atacar a una criatura, el lanzador puede optar por tocar cualquier objeto individual, que queda automáticamente rodeado por el aura abrasadora durante 1 asalto y debe superar una tirada de salvación de objeto contra fuego mágico o ser destruido.\n\nEl aura puede rodear un objeto de hasta 5 pies cúbicos de volumen por nivel del lanzador.",
    },
    711: {
        "name": "Invisibilidad en Masa",
        "description": "Este hechizo permite al lanzador volver a una criatura u objeto completamente invisible.\n\nEl sujeto sigue sujeto a todas las leyes físicas de la realidad, incluida la detección a través de medios no visuales (por ejemplo, sonido, olor, etc.).",
    },
    712: {
        "name": "Invocacion de Monstruos V",
        "description": "Este hechizo permite al lanzador invocar siete ojos mágicos que proporcionan visión de 360° y capacidades de detección mejoradas.\n\nCada ojo proporciona un efecto específico, como detectar invisibilidad o influencia mental.",
    },
    713: {
        "name": "Mansion Magnifica de Mordenkainen",
        "description": "Este hechizo permite al lanzador asfixiar a todas las criaturas dentro de un área, infligiendo daño mientras luchan por respirar.\n\nTambién debilita sus capacidades físicas durante la duración.",
    },
    714: {
        "name": "Espada de Mordenkainen",
        "description": "Crea un plano de fuerza resplandeciente con forma de espada, manejado mentalmente por el lanzador.\n\nSe mueve y golpea como una espada usada por un luchador de la mitad del nivel del lanzador.\n\nSolo puede alcanzar a criaturas afectadas por armas +3 o que estén desfasadas.\n\nGolpea cualquier CA con una tirada de 19 o 20.\n\nInflige 5d4 de daño a criaturas de tamaño humano o menores, 5d6 a las mayores.\n\nDura hasta que expire la duración, sea disipada o sea despedida por el lanzador.",
    },
    716: {
        "name": "Persistencia",
        "description": "Permite que un hechizo de nivel 6 o inferior sea lanzado y mantenido en estasis para su uso posterior.\n\nLos hechizos personales (como volar o protección contra el mal) pueden activarse o desactivarse a voluntad, con la duración contando solo mientras esté activo.\n\nLos hechizos instantáneos pueden almacenarse y activarse una vez.\n\nSolo puede haber activo un hechizo persistente a la vez; uno nuevo sustituye al antiguo.\n\nEl componente material del hechizo almacenado se usa durante el lanzamiento.",
    },
    717: {
        "name": "Puerta de Fase",
        "description": "Crea una puerta invisible de un solo sentido en una pared.\n\nSolo el lanzador puede ver y usar la puerta de fase, aunque se puede traer a otra criatura (cuenta como dos usos).\n\nLa puerta bloquea luz, sonido y magia.\n\nDura un uso por cada dos niveles del lanzador.\n\nPuede ser disipada por un mago de mayor nivel o por un lanzamiento combinado de varios de menor nivel.",
    },
    719: {
        "name": "Rocio Prismatico",
        "description": "Un rocío brillante en forma de abanico de siete rayos se extiende desde el lanzador.\n\nCada rayo tiene un color único y un efecto mágico.\n\nCualquier criatura en el área es alcanzada por uno o más rayos (tira 1d8 por objetivo).\n\nLos rayos pueden causar daño, muerte, locura, petrificación o destierro planar.\n\nLas criaturas con menos de 8 DG también quedan cegadas durante 2d4 asaltos.",
    },
    721: {
        "name": "Secuestrar",
        "description": "Cuando se lanza, este hechizo no solo impide que los hechizos de detección y localización funcionen para detectar o localizar los objetos afectados por el hechizo de secuestrar, sino que también vuelve los objetos afectados invisibles para cualquier forma de visión o de ver.\n\nAsí, un hechizo de secuestrar puede ocultar una puerta secreta, una cámara del tesoro, etc.\n\nPor supuesto, el hechizo no impide que el sujeto sea descubierto por medios táctiles o mediante el uso de dispositivos (como una capa de ojos o una gema de visión).\n\nSi se lanza sobre una criatura que no quiere ser afectada, esta recibe una tirada de salvación normal.\n\nLas criaturas vivas (e incluso los tipos de no muertos) afectadas por un hechizo de secuestrar quedan en coma y están efectivamente en un estado de animación suspendida hasta que el hechizo se agote o sea disipado.\n\nLos componentes materiales del hechizo son una pestaña de basilisco, goma arábiga y un dracma de blanqueo.",
    },
    723: {
        "name": "Caminar en Sombras",
        "description": "Para usar el hechizo de caminar en sombras, el mago debe estar en un área de sombras densas.\n\nEl lanzador y cualquier criatura que toque son transportados al borde del Plano Material Primario donde limita con el Semiplano de las Sombras.\n\nEn esta región, el mago puede moverse a una velocidad de hasta 7 millas por turno, moviéndose normalmente en los bordes del Semiplano de las Sombras pero mucho más rápido en relación con el Plano Material Primario.\n\nAsí, un mago puede usar este hechizo para viajar rápidamente pisando el Semiplano de las Sombras, recorriendo la distancia deseada, y volviendo luego al Plano Material Primario.\n\nEl mago sabe dónde emergerá en el Plano Material Primario.\n\nEl hechizo de caminar en sombras también puede usarse para viajar a otros planos que limitan con el Semiplano de las Sombras, pero esto requiere el tránsito potencialmente peligroso del Semiplano de las Sombras para llegar a un borde con otro plano de realidad.\n\nCualquier criatura tocada por el mago cuando se lanza el hechizo de caminar en sombras también realiza la transición a los bordes del Semiplano de las Sombras.\n\nPuede optar por seguir al mago, vagar por el plano o regresar al Plano Material Primario (50 % de probabilidad de cada resultado si se pierden o son abandonados por el mago).\n\nLas criaturas no dispuestas a acompañar al mago al Semiplano de las Sombras reciben una tirada de salvación, negando el efecto si tiene éxito.",
    },
    724: {
        "name": "Gato de Sombra",
        "description": "Cuando se lanza este hechizo, el mago hace aparecer un gato hecho de sombra.\n\nEl gato de sombra tiene el tamaño de un gato normal y puede ser gris o negro a elección del lanzador.\n\nEl lanzador tiene control telepático completo sobre el felino; puede ver, oír e incluso hablar a través de él mientras permanezca dentro del alcance.\n\nEn el momento en que sale del alcance, el gato de sombra desaparece.\n\nEl lanzador no necesita concentrarse en el gato de sombra.\n\nEl felino sombrío es insustancial, estando solo sujeto a ataques mágicos o especiales, incluidos los de armas +1 o superiores.\n\nTiene CA 15, una velocidad de movimiento de 18 y tiradas de salvación iguales a las del lanzador.\n\nEl gato se disipa si pierde puntos de golpe iguales a la mitad del total de puntos de golpe del lanzador.\n\nEl gato de sombra no tiene ataques propios y no puede tocar ni llevar objetos.\n\nUn hechizo exitoso de disipar magia hace que el gato desaparezca.\n\nUn gato de sombra no produce sonido al moverse.\n\nEs un 90 % indetectable en cualquier condición que no sea la más brillante.\n\nPuede atravesar pequeños agujeros o aberturas estrechas.\n\nLos componentes materiales de este hechizo son una perla negra de al menos 100 po de valor y una zarpa de un gato gris o negro.",
    },
    727: {
        "name": "Reenviar Conjuro",
        "description": "Esta poderosa abjuración hace que los hechizos lanzados contra el mago reboten sobre el lanzador original.\n\nEsto incluye hechizos lanzados desde pergaminos y habilidades innatas similares a conjuros, pero excluye específicamente los siguientes: efectos de área que no están centrados directamente sobre el mago protegido, efectos de hechizos entregados por contacto, y efectos de hechizos de dispositivos como varitas, bastones, etc.\n\nAsí, un hechizo de luz lanzado para cegar al mago protegido podría ser devuelto y posiblemente cegar al lanzador, mientras que el mismo hechizo no se vería afectado si se lanza para iluminar un área en la que está el mago protegido.\n\nDe siete a diez niveles de hechizo se ven afectados por el reenvío.\n\nEl número exacto lo tira en privado el DM; el jugador nunca sabe con certeza cuán efectivo es el hechizo.\n\nUn hechizo solo puede ser reenviado parcialmente: divide el número de niveles restantes que pueden reenviarse por el nivel del hechizo entrante para ver qué fracción del efecto se reenvía, con el resto afectando al mago.\n\nPor ejemplo, una bola de fuego entrante está centrada en un mago con un nivel de reenvío restante.\n\nEsto significa que 2/3 de la bola de fuego afecta al mago protegido, 1/3 al lanzador, y cada uno es el centro de un efecto de bola de fuego.\n\nSi el daño resultante es 40 puntos, el mago protegido recibe 27 puntos de daño y el lanzador sufre 13.\n\nAmbos (y cualquier criatura en las respectivas áreas) pueden realizar tiradas de salvación contra conjuros para reducir a la mitad el daño.\n\nUn hechizo de retención o parálisis parcialmente reenviado actuará como un hechizo de lentificar sobre aquellos que estén afectados en un 50 % o más.\n\nSi el mago protegido y un atacante lanzador de conjuros tienen efectos de reenviar conjuro activos, se crea un campo resonante con los siguientes efectos: consulta la tabla en el libro.\n\nEl componente material del hechizo es un pequeño espejo de plata.",
    },
    731: {
        "name": "Teletransporte sin Error",
        "description": "Este hechizo permite al lanzador teletransportarse a cualquier ubicación conocida sin el riesgo habitual de error asociado al hechizo estándar de teletransporte.\n\nSin embargo, teletransportarse a otros planos requiere estudio y comprensión previos del destino.\n\nAunque la probabilidad de error se reduce en el plano natal del lanzador, el hechizo sigue dependiendo de la experiencia previa del lanzador en el plano de destino.\n\nLa probabilidad de error puede determinarse usando la tabla habitual de teletransporte.",
    },
    732: {
        "name": "Desvanecer",
        "description": "Con este hechizo, el mago hace que un objeto desaparezca (como si fuera lanzado por un hechizo de teletransporte) y luego reaparezca en una ubicación deseada, siempre que el objeto no exceda las 50 libras por nivel del lanzador.\n\nEl volumen del objeto tampoco puede exceder los 3 pies cúbicos por nivel del lanzador.\n\nLos objetos más grandes o pesados no se ven afectados, y el hechizo falla si se superan estos límites.",
    },
    733: {
        "name": "Marchitacion Horrenda de Abi-Dalzim",
        "description": "Este hechizo evapora la humedad de los cuerpos de todas las criaturas vivas en el área, infligiendo 1d8 puntos de daño por nivel del lanzador.\n\nUna salvación exitosa reduce el daño a la mitad.\n\nLos elementales de agua y las criaturas vegetales salvan con una penalización de -2.\n\nEl hechizo no surte efecto sobre no muertos ni constructos.\n\nEl componente material es un trozo de esponja.",
    },
    734: {
        "name": "Aerobarco",
        "description": "El lanzador elige como objetivo una nube, que desciende y se transforma en una nave de su imaginación.\n\nLa nave puede tener cualquier forma (barco, carro, etc.) y se mueve bajo el control de los comandos mentales del lanzador.\n\nSe desplaza en cualquier dirección y medio, incluyendo bajo el agua y en el espacio sin aire.\n\nPueden requerirse remos para la propulsión.\n\nEl aerobarco se mantiene suspendido si el lanzador deja de concentrarse, pero se hunde suavemente tras 1 turno.",
    },
    736: {
        "name": "Antipatia-Simpatia",
        "description": "Hace que las criaturas objetivo sientan una atracción emocional intensa:\n\n- **Antipatía:** los objetivos son repelidos a menos que superen una salvación contra conjuros.\n\nSi tienen éxito, sufren una penalización de -1 a la Destreza cada asalto (máx. 4).\n\n- **Simpatía:** los objetivos son atraídos a la ubicación u objeto.\n\nSi fallan la salvación, no pueden resistir quedarse o sostenerlo.\n\nEl hechizo afecta a un cubo de 10 pies por nivel o a un objeto, y requiere que se nombre un tipo de criatura o alineamiento específico.",
    },
    738: {
        "name": "Atadura",
        "description": "Crea una restricción mágica para retener a una criatura, a menudo extraplanar.\n\nRequiere un diagrama circular o ataduras físicas, según el sujeto.\n\nLa duración varía según el tipo de atadura, el nivel del lanzador y el tiempo de ritual.\n\nLos componentes varían pero incluyen metales especiales, hierbas raras, gemas (1000 po por DG) y una representación del objetivo.\n\nLos nombres verdaderos anulan la resistencia a la magia.\n\nLas salvaciones se niegan si el nivel del lanzador es el doble de los DG del objetivo.",
    },
    740: {
        "name": "Demanda",
        "description": "Este hechizo es muy parecido al hechizo de mago de nivel 5 *envío*, permitiendo un breve contacto con una criatura lejana.\n\nSin embargo, con este hechizo el mensaje también puede contener una *sugerencia* (consulta el hechizo de mago de nivel 3 *sugerencia*), que el sujeto hará lo posible por cumplir si falla su tirada de salvación contra conjuros, realizada con una penalización de -2.\n\nSi el mensaje es imposible o sin sentido según la situación actual del sujeto, se entiende, pero no se requiere ninguna tirada de salvación y la sugerencia no surte efecto.\n\nEl lanzador debe estar familiarizado con la criatura contactada y debe conocer bien su nombre y apariencia.\n\n- Si la criatura no está en el mismo plano de existencia, hay una probabilidad base del 5 % de que la demanda no llegue.\n- Las condiciones locales en otros planos pueden empeorar esta probabilidad, a discreción del DM.\n\nSi la demanda se recibe, se entiende incluso por criaturas con Inteligencia tan baja como 1.\n\nLas criaturas de estado de semidiós o superior pueden optar por ignorar la demanda por completo.\n\nEl mensaje de la demanda debe tener 25 palabras o menos, incluida la sugerencia.\n\nLa criatura puede enviar una breve respuesta de inmediato.",
    },
    741: {
        "name": "Transferencia de Finca",
        "description": "Este poderoso hechizo permite a un lanzador transferir una gran extensión de terreno en el Plano Material Primario a cualquiera de los planos elementales.\n\nTodas las edificaciones, personas y fauna dentro del área de efecto también son transportadas.\n\nEl terreno forma una bolsa del Plano Material Primario dentro del plano elemental:\n\n- La bolsa es una esfera de diámetro igual al área del terreno.\n- La superficie permite el paso de criaturas, pero bloquea la intrusión elemental.\n- En el interior: aire normal (coincidiendo con el Plano Material Primario en el momento de la transferencia) y una fuente de agua.\n\nEl área debe estar rodeada de marcadores sólidos hechos de material propio del plano de destino, colocados a no más de cinco pies de distancia.\n\nEl mago debe estar dentro del área durante el lanzamiento.\n\nUna vez movido, el terreno no puede volver a moverse usando este hechizo.\n\nSi el dispositivo de control (un objeto mágico para comandar elementales) es alterado, el hechizo falla y las energías elementales inundan la bolsa.\n\nEl dispositivo de control se consume en el lanzamiento y debe colocarse en el corazón de la finca.",
    },
    742: {
        "name": "Vidrio-Acero",
        "description": "El hechizo de vidrio-acero convierte cristal o vidrio normal, no mágico, en una sustancia transparente con la resistencia a la tracción y la inrompibilidad del acero real.\n\n- Afecta hasta 10 libras por nivel del lanzador.\n- El material debe ser un único objeto completo.\n- La Clase de Armadura resultante es 1.\n\nComponentes materiales: un pequeño trozo de vidrio y un pequeño trozo de acero.",
    },
    743: {
        "name": "Permanencia Mayor",
        "description": "Esta poderosa versión de *permanencia* permite que los efectos mágicos se vuelvan permanentes sobre objetos o criaturas.\n\n- Debe seguir al lanzamiento de un hechizo compatible.\n- Cada uso reduce la Constitución del lanzador en 1 punto.\n- Los efectos solo pueden ser disipados por un lanzador de mayor nivel.\n\n**Hechizos utilizables solo sobre el lanzador:** *comprender idiomas, detectar el mal, detectar invisibilidad, detectar magia, infrarrojos, protección contra cantrip, protección contra el mal, protección contra proyectiles normales, leer magia, lenguas, sirviente invisible.*\n\n**Hechizos utilizables sobre objetos o áreas:** *ampliar, miedo, ráfaga de viento, invisibilidad, boca mágica, esfera prismática, nube apestosa, muro de fuego, muro de fuerza, telaraña.*\n\n**Hechizos solo para objetos o áreas:** *alarma, glamer audible, luces danzantes, distorsión de distancia, niebla sólida, teletransporte, muro de fuego.*\n\nLa permanencia puede fallar al cabo de 1000 años.\n\nOtros hechizos pueden ser investigados para su uso, sujeto a la aprobación del DM.",
    },
    744: {
        "name": "Golpe Caleidoscopico de Gunther",
        "description": "Un haz de luz caleidoscópica y centelleante sale disparado de las puntas de los dedos del lanzador hacia un objetivo.\n\n- No tiene efecto sobre no lanzadores ni sobre criaturas con habilidades innatas similares a conjuros.\n- Los magos y sacerdotes pueden perder hechizos memorizados.\n\n**Efecto:**\n\n- El número de hechizos drenados es igual al nivel del lanzador - 1d20.\n- Si el resultado es 0 o menos, no se pierden hechizos.\n- Los hechizos perdidos se seleccionan empezando desde los de nivel 1 hacia arriba y se eligen al azar.\n\nLos hechizos perdidos deben ser rememorizados.",
    },
    745: {
        "name": "Corazon de Piedra",
        "description": "Este potente hechizo reemplaza el corazón del lanzador por un corazón de piedra perfectamente elaborado, cambiando el cuerpo y la esencia del lanzador.\n\n- El lanzador gana inmunidad a enfermedades no mágicas, veneno, encantamiento y miedo.\n- El lanzador se vuelve indetectable mediante hechizos que detectan vida o emociones.",
    },
    748: {
        "name": "Nube Incendiaria",
        "description": "Este hechizo crea una nube ondulante que estalla en llamas tras 3 asaltos.\n\n- Asalto 3: 1-2 puntos de daño por nivel del lanzador.\n- Asalto 4: 1d4 puntos de daño por nivel del lanzador.\n- Asalto 5: 1-2 puntos de daño por nivel mientras se consume.\n- Asaltos posteriores: humo oscurecedor inofensivo.\n\nLas criaturas realizan una única salvación; si fallan, deben volver a salvar en los asaltos 4 y 5 para reducir el daño a la mitad.\n\n**Componentes materiales:** una fuente de fuego, raspaduras de estiércol y una pizca de polvo.",
    },
    749: {
        "name": "Cuerpo de Hierro",
        "description": "El cuerpo del lanzador se transforma en hierro vivo, obteniendo poderosas capacidades defensivas:\n\n- Solo puede ser dañado por armas contundentes +3 o por criaturas con 8+3 DG o más.\n- Inmune a cortantes, caídas, constricción y hechizos fisiológicos (por ejemplo, veneno, debilitamiento).\n\nMientras está protegido, el lanzador no puede lanzar hechizos ni usar bonificadores de Destreza, pero se vuelve virtualmente inmune a la mayoría de los ataques.\n\nComponente material: un pequeño trozo de hierro.",
    },
    750: {
        "name": "Encantar en Masa",
        "description": "Este hechizo afecta a múltiples objetivos como lo harían *encantar persona* o *encantar monstruo*.\n\n- Afecta a criaturas cuyos Dados de Golpe o niveles totales no excedan el doble del nivel del lanzador.\n- Todos los objetivos deben estar dentro del alcance del hechizo y dentro de un cubo de 30 pies.\n- Los objetivos sufren una penalización de -2 a sus tiradas de salvación.\n- Los bonificadores de Sabiduría se siguen aplicando.\n\nNota: el número de objetivos no afecta a su probabilidad de salvación.",
    },
    751: {
        "name": "Laberinto",
        "description": "Este hechizo hace que el objetivo desaparezca en un espacio extradimensional laberíntico.\n\n- La duración depende de la Inteligencia de la criatura:\n\n| Inteligencia | Duración atrapado |\n|--------------|--------------------|\n| Menos de 3 | 2d4 turnos |\n| 3-5 | 1d4 turnos |\n| 6-8 | 5d4 asaltos |\n| 9-11 | 4d4 asaltos |\n| 12-14 | 3d4 asaltos |\n| 15-17 | 2d4 asaltos |\n| 18 o más | 1d4 asaltos |\n\nLos minotauros son inmunes a este hechizo.\n\nTeletransporte y puerta dimensional no sirven de ayuda; solo el desplazamiento entre planos puede permitir el escape.",
    },
    755: {
        "name": "Danza Irresistible de Otto",
        "description": "Cuando se coloca un hechizo de danza irresistible de Otto sobre una criatura, el hechizo hace que el receptor comience a bailar, con los pies arrastrando y repiqueteando.\n\nEste baile imposibilita a la víctima hacer algo distinto de bailar y saltar; este correteo empeora la Clase de Armadura de la criatura en -4, hace las tiradas de salvación imposibles excepto en una tirada de 20, y anula cualquier consideración de escudo.\n\nTen en cuenta que la criatura debe ser tocada, como si tuviera lugar un combate cuerpo a cuerpo y el lanzador intentara golpear para hacer daño.",
    },
    760: {
        "name": "Inmunidad a Conjuros de Serten",
        "description": "Mediante este hechizo, el mago puede conferir inmunidad virtual a ciertos hechizos y formas de ataque mágico sobre los que toca.\n\nPor cada cuatro niveles de experiencia del mago, una criatura puede ser protegida por el hechizo de inmunidad a conjuros de Serten; sin embargo, si se protege a más de una, la duración de la protección se divide entre las criaturas protegidas.\n\nPor ejemplo, un mago de nivel 16 puede lanzar el hechizo sobre una criatura y durará 16 turnos, o sobre dos criaturas durante ocho turnos, o sobre cuatro criaturas durante cuatro turnos.\n\nLa protección otorga un bonificador a las tiradas de salvación, según el tipo y nivel del hechizo, como se muestra en la tabla siguiente.\n\nEl componente material de este hechizo es un diamante de al menos 500 po de valor, que debe ser triturado y espolvoreado sobre los receptores del hechizo.\n\nCada criatura así beneficiada debe también poseer un diamante de al menos un quilate, intacto y llevado sobre su persona.",
    },
    762: {
        "name": "Simbolo",
        "description": "Un hechizo de símbolo crea runas mágicas que afectan a las criaturas que pasan por encima, tocan o leen las runas, o pasan por un portal sobre el que está inscrito el símbolo.\n\nAl lanzar el hechizo, el mago inscribe el símbolo sobre la superficie que desee.\n\nAsimismo, el lanzador puede colocar el símbolo de su elección, usando uno cualquiera de los siguientes:\n\n**Muerte:** una o más criaturas, cuyos puntos de golpe totales no excedan 80, mueren.\n\n**Discordia:** todas las criaturas se ven afectadas y caen inmediatamente en fuertes disputas y discusiones; hay un 50 % de probabilidad de que criaturas de diferentes alineamientos se ataquen entre sí.\n\nLa discusión dura 5d4 asaltos, la lucha 2d4 asaltos.\n\n**Miedo:** este símbolo crea un hechizo de miedo extra fuerte, que hace que todas las criaturas salven contra conjuros con penalizaciones de -4 a la tirada de dado, o entren en pánico y huyan como si fueran atacadas por un hechizo de miedo.\n\n**Desesperanza:** todas las criaturas se ven afectadas y deben dar media vuelta en abatimiento a menos que superen una salvación contra conjuros.\n\nLas criaturas afectadas se someten a las demandas de cualquier oponente (por ejemplo, rendirse, marcharse, etc.).\n\nLa desesperanza dura 3d4 turnos; durante este periodo hay un 25 % de probabilidad de que las criaturas afectadas no actúen durante un asalto, y un 25 % de probabilidad de que quienes actúen den media vuelta o se retiren de la batalla, según proceda.\n\n**Locura:** una o más criaturas cuyos puntos de golpe totales no excedan 120 se vuelven locas y permanecen así, actuando como si un hechizo de confusión les hubiera sido aplicado, hasta que un hechizo de sanar, restauración o deseo se emplee para eliminar la locura.\n\n**Dolor:** todas las criaturas quedan afligidas por dolores atroces que recorren sus cuerpos, causando una penalización de -2 a la Destreza y una penalización de -4 a las tiradas de ataque durante 2d10 turnos.\n\n**Sueño:** todas las criaturas con menos de 8+1 Dados de Golpe caen inmediatamente en un sueño catatónico y no pueden despertarse durante 1d12+4 turnos.\n\n**Aturdimiento:** una o más criaturas cuyos puntos de golpe totales no excedan 160 quedan aturdidas y tambaleantes durante 3d4 asaltos, dejando caer cualquier cosa que estuvieran sujetando.\n\nEl tipo de símbolo no puede reconocerse sin ser leído y, por tanto, sin activar sus efectos.\n\nLos componentes materiales de este hechizo son polvo de ópalo negro y polvo de diamante, por un valor no inferior a 5000 po cada uno.",
    },
    764: {
        "name": "Zona Salvaje",
        "description": "Este poderoso hechizo crea una disrupción en las fuerzas mágicas similar a las condiciones encontradas en regiones de magia salvaje (áreas donde los efectos de la magia han sido permanentemente alterados).\n\nEste hechizo solo tiene un efecto temporal, aunque los efectos de la zona salvaje podrían convertirse en permanentes.\n\nEl hechizo crea una región de magia salvaje centrada en el lanzador.\n\nEl área de efecto no puede moldearse de ninguna manera; siempre es un cuadrado de 300 pies de lado (90 000 pies cuadrados).\n\nDentro de la zona salvaje, reina la magia salvaje.\n\nCualquier hechizo lanzado en el área de efecto es tratado automáticamente como una oleada descontrolada (consulta la Tabla 2).\n\nLos efectos de objetos mágicos que gastan cargas también se tratan como oleadas descontroladas cuando se usan en el área.\n\nOtros objetos mágicos funcionan con normalidad.\n\nLos hechizos lanzados hacia la zona salvaje desde fuera del área de efecto funcionan con normalidad, pero los hechizos no pueden lanzarse fuera del área de efecto sin provocar una oleada descontrolada.\n\nLos componentes materiales son varias vasijas de pintura que deben derramarse sobre una lámina de plata batida por un valor no inferior a 2000 po.",
    },
    772: {
        "name": "Portal",
        "description": "Crea un portal a otro plano, convocando a un ser poderoso nombrado por el lanzador.\n\n- La entidad puede atravesarlo al instante.\n- Siempre aparece algo: si no es un sirviente, viene el ser en persona.\n- La reacción depende de la importancia de la petición:\n  - Trivial: puede atacar o marcharse.\n  - Mediana: puede ayudar pero exigirá un pago.\n  - Urgente: actúa, pidiendo un favor a cambio.\n\nLos factores incluyen el alineamiento y los objetivos tanto del lanzador como del ser.\n\nEnvejece al lanzador 5 años.",
    },
    776: {
        "name": "Disyuncion de Mordenkainen",
        "description": "Cuando se lanza este hechizo, toda la magia y los objetos mágicos dentro del radio del hechizo, salvo los que estén en la persona del lanzador o siendo tocados por él, son disyuntados.\n\nEs decir, los hechizos en proceso de lanzamiento se separan en sus componentes individuales (generalmente arruinando el efecto como hace un hechizo de disipar magia), y los objetos mágicos permanentes y encantados deben superar con éxito una salvación (contra conjuros si son realmente lanzados sobre una criatura, o contra un hechizo de disipar magia en caso contrario) o se convertirán en objetos normales.\n\nIncluso los artefactos y reliquias están sujetos a la disyunción de Mordenkainen, aunque solo hay un 1 % de probabilidad por nivel de experiencia del lanzador de afectar realmente a objetos tan poderosos.\n\nPor tanto, todas las pociones, pergaminos, anillos, varas, objetos mágicos variados, artefactos y reliquias, armas y armaduras, espadas y armas varias dentro de 30 pies del lanzador pueden perder todas sus propiedades mágicas cuando se lanza la disyunción de Mordenkainen.\n\nEl lanzador también tiene un 1 % de probabilidad por nivel de destruir una concha antimagia.\n\nSi la concha sobrevive a la disyunción, ningún objeto dentro de ella es disyuntado.\n\nNota: Destruir artefactos es un asunto peligroso, y existe un 95 % de probabilidad de atraer la atención de algún ser poderoso que tenga un interés o conexión con el dispositivo.\n\nAdemás, si un artefacto es destruido, el mago lanzador debe realizar una salvación exitosa contra conjuros con una penalización de -4 o perder permanentemente todas sus capacidades de lanzamiento de conjuros.",
    },
    777: {
        "name": "Palabra de Poder: Muerte",
        "description": "Cuando se pronuncia un hechizo de palabra de poder: muerte, una o más criaturas de cualquier tipo dentro del alcance y del área de efecto del hechizo mueren.\n\nLa palabra de poder mata a una criatura con hasta 60 puntos de golpe, o a múltiples criaturas con 10 o menos puntos de golpe cada una, hasta un máximo de 120 puntos de golpe en total.\n\nLa opción de atacar a una sola criatura o a varias debe indicarse junto con el alcance del hechizo y el centro del área de efecto.\n\nSe utilizan los puntos de golpe actuales de las criaturas.",
    },
    780: {
        "name": "Cambiaformas",
        "description": "Permite al lanzador asumir la forma de cualquier criatura viva por debajo del estatus de semidiós.\n\n- El lanzador obtiene las capacidades físicas (movimiento, CA natural, ataques) pero conserva sus estadísticas mentales.\n- No puede usar las habilidades mágicas innatas ni la resistencia a la magia de la forma.\n- Los puntos de golpe permanecen sin cambios.\n- No se requiere tirada de shock sistémico.\n- Cambiar de forma solo lleva 1 segundo.\n\nEl lanzador adopta las vulnerabilidades de la forma (por ejemplo, una forma de espectro es impotente bajo la luz del día).\n\nSi muere en una forma alterada, el lanzador no regresa a su forma original, lo que complica la resurrección.\n\nComponente material: una diadema de jade por valor de al menos 5000 po, que se hace añicos cuando el hechizo termina.\n\nSi se rompe prematuramente, el hechizo termina.",
    },
    784: {
        "name": "Parar el Tiempo",
        "description": "El lanzador congela el tiempo en un radio de 15 pies durante 1d3 asaltos de tiempo aparente.\n\n- Solo el lanzador puede actuar dentro del área.\n- Todas las demás criaturas quedan congeladas en el tiempo.\n- El efecto termina si el lanzador abandona el área.\n- Nada puede entrar durante la duración.\n\nRecomendación: el DM usa un temporizador para hacer cumplir la duración.\n\nSe puede usar teletransporte para salir antes de que expire.",
    },
    789: {
        "name": "Deseo",
        "description": "El hechizo más poderoso, capaz de alterar la realidad en gran medida.\n\n- Sin penalización para sanar, resucitar o teletransportar al grupo del lanzador.\n- Otros usos causan -3 a la Fuerza y requieren 2d4 días de reposo en cama.\n- La redacción exacta son crucial; las consecuencias no intencionadas son probables.\n- Envejece al lanzador cinco años.\n\nLa discreción del DM es esencial.\n\nLos deseos excesivamente ambiciosos o injustos (por ejemplo, muerte instantánea para otros) pueden volverse en contra o eliminar al lanzador de la campaña por completo.",
    },
    790: {
        "name": "Animar Animales Muertos",
        "description": "Este hechizo crea esqueletos y zombis no muertos a partir de los huesos y cuerpos de animales muertos, específicamente vertebrados (peces, anfibios, reptiles, aves y mamíferos).\n\nLos restos animados obedecen simples órdenes verbales dadas por el lanzador, independientemente del idioma empleado.\n\nSolo pueden animarse animales de aparición natural con inteligencia no superior a semi (por ejemplo, gatos, ranas, tigres), incluidos los animales de tamaño gigante.\n\nEstos no muertos permanecen animados hasta ser derrotados en combate o rechazados; la magia animante no puede ser disipada.\n\n**Esqueletos creados por nivel del lanzador:**\n- ¼ DG o menos: 4\n- ½ a 1 DG: 2\n- 1+ a 3 DG: 1\n- 3+ a 6 DG: 1 por cada 2 niveles\n- Más de 6 DG: 1 por cada 4 niveles\n\n**Zombis creados por nivel del lanzador:**\n- ¼ DG o menos: 2\n- ½ a 1 DG: 1\n- 1 a 3 DG: 1 por cada 2 niveles\n- Más de 3 DG: 1 por cada 4 niveles\n\nLos esqueletos y zombis obtienen las inmunidades estándar de los no muertos, pierden sus ataques especiales y tienen penalizaciones a la CA, al daño y al movimiento.\n\nLos componentes materiales son una gota de sangre y una esquirla de hueso de la misma especie que los restos.",
    },
    791: {
        "name": "Asfixiar",
        "description": "Este hechizo hace que la garganta del objetivo se constriña y los pulmones se hinchen cerrados, imitando una reacción alérgica mortal.\n\nLas criaturas afectadas deben estar dentro del alcance y fallar una salvación contra magia de la muerte.\n\nSi se的目标 a menos de seis criaturas, reciben penalizaciones a su salvación: -1 para 4-5, -2 para 2-3, -4 si solo hay un objetivo.\n\nCada asalto, las víctimas deben tirar una prueba de Constitución:\n- Fallo: 1d6 puntos de daño\n- Éxito: 1d3 puntos de daño\n\nLas víctimas quedan lentas mientras luchan por respirar.\n\nEl fallo en tres pruebas de Constitución consecutivas causa la muerte en el siguiente asalto.\n\nEl efecto termina si el objetivo abandona el área o si se usa disipar magia.\n\nEl estado de lentitud persiste 1-3 asaltos después.\n\nLas criaturas que no respiran (por ejemplo, no muertos, plantas) son inmunes.\n\nComponentes materiales: un símbolo profano y una mordaza simbólica de seda envuelta alrededor de la boca del lanzador tras el lanzamiento.",
    },
    792: {
        "name": "Asfixiar (Sacerdote)",
        "description": "Variante sacerdotal del hechizo de asfixia con los mismos efectos y componentes, pero lanzado por clérigos con las mismas restricciones de alcance, salvación y duración.",
    },
    793: {
        "name": "Atar No Muertos",
        "description": "Este hechizo afecta solo a no muertos (no a criaturas vivas).\n\nInmoviliza automáticamente a todos los no muertos corpóreos de 6 DG o menos (por ejemplo, esqueletos, ghouls, zombis) sin salvación de tirada.\n\nSe enrollan en una \"bola de hueso\" de 2-3 pies por criatura, mantenidos indefensos con sus habilidades suspendidas.\n\nEstos no muertos pueden ser rodados o movidos hacia áreas enemigas y luego liberados.\n\nPara no muertos incorpórcitos o aquellos de 7 o más DG, el hechizo funciona como un hechizo de lentificar, y tales criaturas obtienen tirada de salvación.\n\nLos no muertos \"especiales\" no se ven afectados.\n\nComponente material: un hueso sostenido en la mano izquierda del mago durante el lanzamiento.",
    },
    794: {
        "name": "Danza Osea",
        "description": "Este hechizo anima temporalmente un esqueleto o zombi, que el lanzador controla como una marioneta.\n\nEl lanzador debe concentrarse para dirigir cada una de sus acciones (por ejemplo, moverse, atacar) y no puede hablar, lanzar hechizos ni actuar mientras se concentra.\n\nLa criatura no muerta combate como un esqueleto o zombi normal.\n\nPuede realizar tareas básicas como caminar, empuñar armas o explorar (especialmente combinado con enlace de cadáver).\n\nPierde el efecto si el lanzador se distrae, pierde de vista a la criatura o si un disipar magia tiene éxito.\n\nComponentes materiales: un esqueleto o cadáver intacto y una pequeña marioneta manipulada con ambas manos.",
    },
    795: {
        "name": "Matar el Cerebro",
        "description": "El lanzador toca la cabeza de una criatura viva e intenta destruir el cerebro mediante energía nigromántica.\n\nUna salvación fallida causa muerte instantánea, ya que el cerebro es efectivamente aniquilado.\n\nLas criaturas inmunes a hechizos que afectan la mente (como constructos o no muertos sin mente) no se ven afectadas.\n\nEste hechizo no surte efecto sobre criaturas sin un cerebro discernible.\n\nNo hay daño físico visible desde el exterior, pero el interior del cráneo queda reducido a papilla.\n\nDevolver de la muerte resulta ineficaz; puede ser necesaria resurrección o deseo.",
    },
    796: {
        "name": "Causar Locura",
        "description": "Este hechizo vuelve loca a la víctima.\n\nEl DM puede consultar la tabla de locura del capítulo tres o elegir una forma de locura adecuada al lanzador maligno.\n\nEjemplos incluyen:\n\n- **Miedo a morir:** la víctima debe salvar contra paralización para resistir un hechizo de miedo al ver imágenes de muerte.\n- **Paranoia de cadáveres:** cree que todos los cadáveres son no muertos, lo que provoca paranoia.\n- **Inhabilitación de combate:** infligir confusión o debilidad mental para una neutralización rápida.\n\nLa locura es permanente a menos que se elimine mediante *curar locura* (reverso de este hechizo), *sanar*, *restauración* o *deseo*.\n\n**Efecto inverso:** *curar locura* restaura la cordura de inmediato (sin salvación).\n\nTambién:\n- Pone fin a la mayoría de las locuras mágicas, psiónicas o inducidas por veneno.\n- Cura traumas psíquicos (por ejemplo, de *borrado mental*).\n- Restaura 5-40 PSP.\n- Calma temporalmente algunas locuras extraplanares (a discreción del DM).\n\nNo cura la locura procedente de licantropía, no muerte o maldiciones poderosas como *geas*.",
    },
    797: {
        "name": "Causar Locura (Sacerdote)",
        "description": "Variante clerical del hechizo de causar locura, con los mismos efectos, ejemplos de manifestaciones y método de curación que la versión de mago, pero lanzado por clérigos con su propio conjunto de componentes y limitaciones.",
    },
    798: {
        "name": "Cadaver Anfitrion",
        "description": "Este hechizo transfiere la fuerza vital del receptor a un cadáver reciente, animándolo como una marioneta.\n\nMientras está bajo control, el cuerpo real queda paralizado pero alerta.\n\nEl lanzador u otro objetivo tocado se convierte en el \"amo\" del cadáver.\n\n- Alcance: 5 millas por nivel.\n- El cadáver conserva puntos de golpe iguales al total completo del amo.\n- Puede hablar con voz ronca, luchar y realizar la mayoría de actividades (excepto tareas de motricidad fina).\n- No puede pasar por un ser vivo sin magia de ilusión.\n\nEl lanzador puede regresar a su cuerpo en cualquier momento o se ve forzado a hacerlo si el cadáver es destruido o se mueve fuera del alcance.\n\nSi el anfitrión muere:\n\n- Se requiere una tirada de shock sistémico o el lanzador muere.\n- Puede ser cortado por disipar magia, deseo o liberación espiritual.\n\n**Componentes:** un cadáver reciente (muerto ≤ 1 día por nivel) y un parche reciente de piel del receptor, lo que causa 1-3 puntos de daño y potencialmente pérdida permanente de puntos de golpe si falla la salvación.",
    },
    799: {
        "name": "Mortal de Muerte",
        "description": "Este aura de oscuridad drenadora de vida rodea al lanzador y funciona tanto ofensiva como defensivamente.\n\n- **Uso ofensivo:** un ataque de toque fuerza a la salvación contra magia de la muerte con penalización de -4.\n\nSi falla, la víctima pierde el 20 % de sus puntos de golpe actuales por asalto durante 5 asaltos.\n- **Uso defensivo:** cualquiera que toque o golpee al lanzador debe salvar o sufrir el mismo efecto (sin penalización).\n\nEl hechizo termina cuando:\n- El lanzador afecta o es atacado por un número de criaturas igual a su nivel.\n- La duración termina (2 asaltos por nivel).\n- El lanzador muere o se usa disipar magia.\n\nLos no muertos son inmunes, y ganan 1 DG si se ven afectados, lo que puede dañar al lanzador.\n\n**Componentes:** ópalo negro y diamante triturados (5000 po), polvo de no muertos corpóreos vinculados al Plano Material Negativo, y cuarzo ahumado.",
    },
    800: {
        "name": "Puerta de la Muerte (Mago)",
        "description": "Este hechizo revive a un personaje mortalmente herido con entre -1 y -9 puntos de golpe, devolviéndolo a 0 puntos de golpe, deteniendo la hemorragia y estabilizándolo.\n\nEl sujeto permanece inconsciente pero puede ser sanado normalmente.\n\nOpcionalmente, si se lanza dentro de 1-10 asaltos tras la muerte, puede revivir al recién fallecido, sujeto a una tirada de shock sistémico y una pérdida de -1 de Constitución.\n\n**Componentes:** símbolo sagrado/profano, una tira de lino blanco y cualquier ungüento.",
    },
    801: {
        "name": "Puerta de la Muerte (Sacerdote)",
        "description": "Variante clerical del mismo hechizo, con los mismos efectos, componentes y reglas sobre la salvación, la estabilización y la posible revivificación.",
    },
    803: {
        "name": "Exterminar",
        "description": "Este hechizo extingue las fuerzas vitales de pequeños roedores y alimañas, como moscas, ratones, escarabajos, ratas, arañas y plagas similares.\n\nSolo afecta a criaturas con 1-3 puntos de golpe por nivel del lanzador (máximo 9 pg) e inteligencia animal.\n\n- Si las criaturas son extremadamente pequeñas (1 pg o menos), el lanzador puede afectar 1 pie cúbico por nivel, hasta 10 pies cúbicos.\n\nÚtil tanto en interiores como en exteriores, el hechizo es el favorito de los nigromantes que lidian con plagas.\n\nAlgunos magos malignos lo usan indebidamente sobre animales benignos o mascotas.\n\n**Componentes:**\n- Somático: dedo señalando.\n- Verbal: sonido suave de \"zzzt\".\n- Material: pizca de lavanda y ajo seco.",
    },
    804: {
        "name": "Achaque del Corazon (Mago)",
        "description": "Este hechizo ataca el corazón de una criatura viva, requiriendo línea de visión.\n\nEl lanzador debe concentrarse durante tres asaltos.\n\nDurante ese tiempo, el lanzador puede caminar o hablar, pero no lanzar hechizos ni luchar.\n\n- **1.er asalto:** la víctima salva contra magia de la muerte con -2 (más modificador de Constitución).\n\nEl fallo causa 1d8 puntos de daño e incapacita al objetivo durante 1 asalto.\n- **2.º asalto:** otra salvación con -1 (más modificador de Constitución).\n\nEl fallo causa:\n  - Pérdida del 25 % de los puntos de golpe.\n  - 2-5 asaltos de parálisis.\n  - Pérdida de 2-5 puntos a Fuerza, Constitución y Destreza.\n- **3.er asalto:** salvación final (sin penalización).\n\nEl fallo causa:\n  - Muerte inmediata por ataque al corazón.\n  - O coma de 1-4 días y -1 Constitución permanente.\n\nEl hechizo termina antes de tiempo si se rompe la línea de visión, el lanzador es interrumpido o la víctima recibe atención sanadora.\n\nEl hechizo puede ser interrumpido por disipar magia, protección contra el mal o un escarabeo de protección (a costa de una carga).",
    },
    805: {
        "name": "Achaque del Corazon (Sacerdote)",
        "description": "Variante clerical del mismo hechizo, con idénticos efectos, penalizaciones a las tiradas, consecuencias en los tres asaltos y métodos de interrupción.",
    },
    806: {
        "name": "Drenar Vida (Mago)",
        "description": "Al tocar a una víctima, el lanzador drena 1d8 + 1 puntos de golpe por nivel del objetivo.\n\nEstos puntos de golpe pueden:\n\n- Ser otorgados inmediatamente al lanzador.\n- Transferirse a otro receptor dentro de 1-4 asaltos.\n\nEl total puede exceder los puntos de golpe máximos del receptor, pero solo durante 1 turno por nivel del lanzador.\n\nEl daño se absorbe primero de los puntos de golpe adicionales.\n\nSi la víctima no es voluntaria, una salvación exitosa reduce el daño a la mitad.\n\nEl hechizo no afecta ni beneficia a los no muertos, pero los sacerdotes no muertos pueden usarlo para sanar a aliados vivos.",
    },
    807: {
        "name": "Drenar Vida (Sacerdote)",
        "description": "Variante clerical del mismo hechizo, con las mismas cantidades de drenaje, reglas de transferencia, límite temporal y restricciones sobre no muertos y aliados vivos.",
    },
    808: {
        "name": "Intercambio de Fuerza Vital",
        "description": "Este hechizo intercambia las fuerzas vitales de dos criaturas.\n\nAmbos objetivos deben fallar sus tiradas de salvación (penalización de -6) para que el intercambio funcione.\n\nSi solo uno falla:\n\n- Quien salvó: aturdido 1 asalto.\n- Quien falló: aturdido 1-4 asaltos.\n\nSi tiene éxito, las mentes transferidas conservan sus personalidades, pero sus estadísticas físicas coinciden con los nuevos cuerpos.\n\nLos objetivos no acostumbrados quedan aturdidos 1 asalto tras la transferencia.\n\n**Reversión:** solo un deseo pleno o *revocar intercambio de fuerza vital* puede deshacerlo.\n\nSi un cuerpo muere, esa fuerza vital se pierde a menos que sea clonada y luego revertida con el hechizo.",
    },
    809: {
        "name": "Transferencia de Fuerza Vital",
        "description": "Este poderoso y prolongado encantamiento permite al lanzador transferir la fuerza vital de una criatura (incluyendo la suya propia) hacia:\n\n- Un objeto mágico.\n- Un cuerpo nuevo.\n- Un receptáculo especialmente preparado.\n\nEl cuerpo original queda en coma durante 2-7 días.\n\nSi la fuerza vital no se reúne con el cuerpo, muere.\n\nMientras está en un receptáculo:\n\n- Objetos: comunicación limitada por empatía (si la hay).\n- Estatuas/gólems: pueden animarse y actuar.\n- Huespedes vivos: quedan poseídos (salvación con -4).\n\nUsado en la creación de objetos mágicos (por ejemplo, espadas sentientes).\n\nEl hechizo es irreversible a menos que se deshaga mediante deseo, clonación o destrucción del receptáculo.\n\n**Uso defensivo:** un lanzador puede pre-lanzar el hechizo y pronunciar la sílaba final para sobrevivir a la muerte.\n\nSin embargo, el espacio de hechizo queda bloqueado hasta que se usa.\n\n**Componentes:**\n- Pergamino con tintas raras.\n- Granate masivo (5000+ po), consumido en el lanzamiento.",
    },
    810: {
        "name": "Maldicion de Peste (Mago)",
        "description": "Este hechizo coloca una poderosa maldición sobre una persona u objeto, transformando al objetivo en un portador de una plaga mortal.\n\nCualquiera que entre en contacto físico con el portador debe salvar contra magia de la muerte o contraer una enfermedad mortal, similar a causar enfermedad, que causa la muerte en 2-5 semanas.\n\n- El portador es inmune a la enfermedad.\n- El portador puede no ser consciente de su condición.\n- La maldición es débilmente detectable (5 % por nivel del lanzador).\n\nLa maldición permanece hasta reclamar una vida por nivel del lanzador o hasta que se elimine:\n- Solo puede eliminarla un sacerdote de mayor nivel.\n- Disipar magia resulta ineficaz.\n- Los objetos pueden limpiarse quemándolos.\n\n**Componentes materiales:** el símbolo profano del sacerdote y una pequeña bola de mirra.\n\nEl lanzador envejece un año al lanzar el hechizo.",
    },
    811: {
        "name": "Maldicion de Peste (Sacerdote)",
        "description": "Variante clerical del mismo hechizo, con idénticos efectos sobre el portador y quienes contactan con él, las mismas reglas de detección y eliminación, y los mismos componentes materiales.",
    },
    814: {
        "name": "Sirviente Esqueletico (Mago)",
        "description": "Este hechizo anima el esqueleto de un humano, semihumano o humanoide muerto de tamaño humano o menor.\n\n- Obedece órdenes simples.\n- Útil como porteador o guardián.\n- Termina si es destruido, rechazado, disipado o tras una semana.\n\n**Límite:** 1 sirviente esquelético por nivel del lanzador.\n\n**Componente material:** un puñado de tierra de cementerio.\n\nEste hechizo no se considera un acto bondadoso; típicamente solo lo usan lanzadores malignos.",
    },
    815: {
        "name": "Sirviente Esqueletico (Sacerdote)",
        "description": "Variante clerical del mismo hechizo, con idéntica animación, obediencia, duración y componentes.",
    },
    816: {
        "name": "Atadura de Espiritu (Mago)",
        "description": "Este hechizo ata el espíritu recién fallecido a su cadáver, evitando que parta.\n\n- Se lanza dentro de 1 asalto por nivel del lanzador tras la muerte.\n- El espíritu realiza una salvación contra conjuros, con -1 por cada 3 niveles del lanzador.\n- Los cadáveres atados brillan débilmente y repelen a los animales.\n\nMientras está atado:\n\n- Inmune a la descomposición.\n- Tratado como muerto hace menos de un día para ser devuelto de la muerte.\n- Obtiene un bonificador de -10 % en tiradas de shock sistémico.\n\nPuede usarse para interrogar o para la creación de gólems de carne.\n\nSi el cadáver es destruido:\n\n- El espíritu queda atado al lugar.\n- Puede convertirse en no muerto.\n\nSolo disipar el mal o el reverso de este hechizo pueden liberar al espíritu.\n\nDisipar magia resulta ineficaz.",
    },
    817: {
        "name": "Atadura de Espiritu (Sacerdote)",
        "description": "Variante clerical del mismo hechizo, con idénticas reglas de tiempo, salvación, inmunidades y métodos de liberación del espíritu.",
    },
    818: {
        "name": "Invocar Espiritu",
        "description": "El lanzador eleva el espíritu de un humano o semihumano muerto para que responda preguntas.\n\n- Debe hablar el mismo idioma que el espíritu.\n- Probabilidad de éxito: 50 % + 1 % por nivel del lanzador (mínimo 5 %, máximo 95 %).\n- Los fracasos pueden atraer no muertos hostiles.\n\nEl espíritu puede salvar contra conjuros si:\n- Tiene un alineamiento diferente.\n- Tenía más Dados de Golpe que el nivel del lanzador.",
    },
    819: {
        "name": "Agilidad de No Muerto (Mago)",
        "description": "Este hechizo solo afecta a esqueletos y zombis, que obtienen temporalmente la velocidad y agilidad de un humano vivo en plena forma saludable (velocidad de movimiento 12).\n\nLos no muertos afectados también obtienen:\n- La misma Destreza, iniciativa y tiradas de salvación que el lanzador (si son superiores a las suyas propias).\n- Un bonificador automático de +1 a la CA, que puede mejorar aún más si la Destreza del lanzador otorga un bonificador defensivo.\n\nLos componentes materiales son tres gotas de agua, tendón de cualquier mamífero y una gota de mercurio.",
    },
    820: {
        "name": "Agilidad de No Muerto (Sacerdote)",
        "description": "Variante clerical del mismo hechizo, con idénticos efectos sobre velocidad, Destreza, iniciativa, salvación y CA, y los mismos componentes materiales.",
    },
    821: {
        "name": "Regeneracion de No Muerto",
        "description": "Este hechizo \"cura\" a los no muertos restaurando 2d4 + 1 puntos de golpe por nivel del lanzador al objetivo.\n\nLa curación no puede exceder los puntos de golpe máximos normales de la criatura.\n\n- Funciona sobre no muertos corpóreos e incorpóreos.\n- El lanzador queda temporalmente protegido contra contactos dañinos (por ejemplo, parálisis, drenaje de energía).\n- Solo puede verse afectado un no muerto por lanzamiento.\n\n**Hechizo inverso:** *drenar no muerto* inflige el mismo daño (que no se gana como curación).\n\nLas protecciones contra efectos dañinos se mantienen iguales.",
    },
    822: {
        "name": "Regeneracion de No Muerto (Sacerdote)",
        "description": "Variante clerical del mismo hechizo, con idénticas cantidades de curación, restricciones sobre no muertos afectados y reglas de protección temporal del lanzador.",
    },
    823: {
        "name": "Foco de Conjuro sobre No Muerto (Mago)",
        "description": "Este hechizo convierte a un no muerto en un conducto remoto para otro hechizo que el lanzador lleva consigo (denominado *hechizo compañero*). Cuando se lanza:\n\n- El hechizo compañero se libera desde el no muerto, aunque el lanzador realiza todas las acciones del lanzamiento.\n- Sin límite de alcance, pero debe estar en el mismo plano.\n- Compatible con *sentidos espectrales*, *agilidad de no muerto* o *resistir rechazo*.\n- El no muerto puede estar bajo el control de un hechizo, objeto o capacidad clerical.\n\nEl hechizo permite lanzar hechizos sigilosamente mediante un señuelo o no muerto controlado, ideal para emboscadas o para mantener el secreto.",
    },
    824: {
        "name": "Foco de Conjuro sobre No Muerto (Sacerdote)",
        "description": "Variante clerical del mismo hechizo, con idéntica mecánica de conducto remoto, reglas de alcance y compatibilidad con otros hechizos sobre no muertos.",
    },
    825: {
        "name": "Conferencia de Heridas",
        "description": "Este hechizo transfiere hasta 3 puntos de golpe por nivel del lanzador de heridas de una criatura a otra, excluyendo al propio lanzador.\n\nSecuencia del lanzamiento:\n1. Primer asalto: las heridas se transfieren al lanzador.\n2. Segundo asalto: el lanzador redirige las heridas a otro objetivo.\n\nAmbos objetivos deben estar:\n- Dispuestos, indefensos o inmovilizados.\n- Dentro del alcance de toque.\n\nLos objetivos no voluntarios reciben una salvación contra conjuros para resistir.\n\nSi el lanzamiento se ve interrumpido tras el primer asalto, el lanzador sufre el daño mediante *transferencia empática de heridas*.\n\nSi lo lanza un nigromante:\n- No puede fallar.\n- Puede actuar como un hechizo de *puerta de la muerte*.\n- Tras el lanzamiento, el mago pierde 7 puntos de Constitución, recuperando uno por cada 2 horas de descanso.\n\n**Componentes materiales:** los de *transferencia empática de heridas*, más un broche de rubí (5000 po) que se hace añicos al lanzar el hechizo.",
    },
    828: {
        "name": "Proteccion contra Hambre y Sed",
        "description": "Cuando se lanza protección contra hambre y sed, el receptor no necesita comida, agua ni alimento de ningún tipo durante la duración del hechizo.\n\nEl receptor puede ser el lanzador o cualquier persona que toque.\n\nCada día, el lanzador (o el sujeto que elija el lanzador) está bajo el efecto del hechizo, está completamente nutrido como si hubiera comido y bebido con normalidad.\n\nAl final de la duración del hechizo, el sujeto no tiene más hambre ni sed que cuando se lanzó originalmente.",
    },
    829: {
        "name": "Ahogar",
        "description": "Mediante ahogar, el lanzador hace que aparezca un par de manos fantasmos alrededor de la garganta de una sola víctima.\n\nLa víctima debe ser humana, semihumana o humanoide, y estar dentro de 30 yardas del lanzador.\n\nLas manos ahogarán y estrangularán a la víctima afectada durante la duración del hechizo; cada asalto, la víctima sufre 1-4 puntos de daño por las manos que la estrangulan.\n\nSi la víctima supera una tirada de salvación, sufre la mitad del daño cada asalto.\n\nAhogar puede ser anulado por disipar magia o un hechizo similar; la víctima no puede arrancar las manos etéreas de su cuello.\n\nLa víctima realiza todas las tiradas de ataque con una penalización de -2 mientras esté afectada por ahogar.",
    },
    830: {
        "name": "Rememoracion de la Muerte",
        "description": "Este hechizo permite al lanzador visualizar los últimos minutos de la vida de cualquier criatura o persona que murió en las 24 horas anteriores.\n\nCuando el lanzador toca el cadáver del sujeto, entra en un trance.\n\nEl lanzador tiene entonces una visión de los últimos 10 minutos de la vida del sujeto tal y como los vio el propio sujeto.\n\nLa visión termina con la última escena que vio el sujeto antes de morir, momento en el que el lanzador despierta de su trance y el hechizo termina.",
    },
    831: {
        "name": "Daga de Hielo",
        "description": "Este hechizo dispara una daga de hielo al objetivo.\n\nEl lanzador realiza una tirada de ataque normal como si atacara con un arma de proyectil, teniendo en cuenta el alcance (corto: 10 yardas, medio: 20 yardas, largo: 30 yardas).\n\nUn impacto exitoso causa 2d4 puntos de daño.\n\nSi la daga de hielo falla, consulta las reglas de proyectiles tipo granada para determinar su punto de caída.\n\nAl golpear un objeto o criatura sólida, se hace añicos, liberando frío paralizante en un radio de 5 pies.\n\nLas criaturas afectadas deben salvar contra paralización o recibir 1d4 puntos de daño por frío y quedar adormecidas durante 1-3 asaltos, reduciendo su movimiento a la mitad y las tiradas de ataque en -2.\n\nLa proximidad a calor intenso otorga un bonificador de +2 a la tirada de salvación.\n\nLa daga de hielo no puede reutilizarse.\n\nSi se toca, se hace añicos como se ha descrito.\n\nLas dagas intactas se derriten 1 asalto después de su creación, independientemente de la temperatura.",
    },
    832: {
        "name": "Vocalizar",
        "description": "Este hechizo permite al receptor lanzar hechizos con componentes verbales en silencio.\n\nEl receptor puede hacerlo solo dentro de la duración de vocalizar.\n\nEs útil para el sigilo o contrarrestar efectos como silencio.\n\nVocalizar no anula silencio, pero permite al lanzador lanzar hechizos con normalidad.\n\nLos efectos sonoros audibles de los hechizos siguen quedando enmascarados bajo silencio.\n\nVocalizar no afecta al habla normal.",
    },
    833: {
        "name": "Garrote de Hueso",
        "description": "Este hechizo encanta un hueso, convirtiéndolo en un garrote mágico:\n\n- Actúa como un arma +4 contra no muertos, infligiendo 1d6+4 puntos de daño.\n- Actúa como un arma +1 contra otros, infligiendo 1d6+1 puntos de daño.\n\nSolo puede usarse en huesos que pudieran blandirse como garrotes (por ejemplo, un fémur, pero no un cráneo).\n\nAl final del hechizo, el hueso vuelve a la normalidad.\n\nSi se usan competencias de armas, la competencia con garrote se aplica a los garrotes de hueso.\n\nLos usuarios sin competencia sufren las penalizaciones estándar por falta de competencia.",
    },
    834: {
        "name": "Retrasar la Muerte",
        "description": "Permite al receptor seguir funcionando después de alcanzar 0 puntos de golpe.\n\nEl sujeto:\n\n- Puede actuar normalmente hasta alcanzar -10 pg.\n- Sufre una penalización de -2 a los ataques y a las tiradas de salvación.\n- El movimiento se reduce a la mitad una vez en 0 pg.\n\nSi el hechizo termina antes de que el sujeto alcance -10 pg, muere al instante.\n\nSi alcanza -10 pg, también muere.\n\nLos hechizos normales de devolver de la muerte funcionan tras la muerte causada por este efecto.",
    },
    835: {
        "name": "Falso Rostro",
        "description": "El lanzador duplica la apariencia facial de otro humano, semihumano o humanoide (no no muerto), siempre que el sujeto esté dentro del alcance y sea visible.\n\nSolo cambia la cara: el lanzador conserva su propia voz, cuerpo, habilidades y sentidos.\n\nNo es una ilusión y no puede detectarse ni disiparse mediante magia de detección de ilusiones.\n\nSin embargo, disipar magia revertirá el efecto.\n\nEl hechizo sirve como un poderoso disfraz mágico pero irradia magia nigromántica bajo detección.",
    },
    836: {
        "name": "Craneo Flotante",
        "description": "Este hechizo crea un cráneo humano resplandeciente con colmillos afilados.\n\nEl cráneo flota a aproximadamente un pie por encima del hombro del lanzador; a medida que el lanzador se mueve, el cráneo flota con él.\n\nSi el lanzador deja de moverse y se concentra, puede ordenar mentalmente al cráneo flotante que se mueva en cualquier dirección dentro de un radio de 30 pies.\n\nEl lanzador puede ver a través de los ojos del cráneo como si fueran los suyos propios, lo cual resulta útil para espiar o explorar.\n\nEl lanzador también puede ordenar al cráneo que ataque con sus dientes afilados como navajas, infligiendo 1d6 puntos de daño por mordisco.\n\nSi la concentración se interrumpe, el cráneo cae inofensivamente al suelo pero puede controlarse de nuevo una vez que se reanude la concentración.\n\nEl cráneo comparte las estadísticas del lanzador, salvo que tiene 3 pg y es independiente del daño al o del lanzador.",
    },
    837: {
        "name": "Mente de Hierro",
        "description": "El sujeto queda inmune a todos los hechizos de encantamiento y retención durante la duración del hechizo.\n\nAdemás, el receptor automáticamente deja de creer en todas las ilusiones lanzadas por magos de nivel 3 (o su equivalente) o inferiores.\n\nEsto lo convierte en una defensa ideal contra la magia que influye en la mente y contra los efectos ilusorios de bajo nivel.",
    },
    839: {
        "name": "Forzar Cambio de Forma",
        "description": "Este hechizo obliga a cualquier cambiador de forma o criatura que use un hechizo de cambio de forma a volver a su forma verdadera o natural.\n\n- El lanzador elige como objetivo a sospechosos cambiadores de forma dentro del alcance.\n- Una salvación fallida fuerza una transformación inmediata e inflige 3d10 puntos de daño.\n- Una salvación exitosa impide la transformación pero sigue causando la mitad del daño (redondeando hacia abajo).\n- La transformación dura un asalto completo, durante el cual no se pueden realizar otras acciones.",
    },
    841: {
        "name": "Catapulta",
        "description": "Mediante este hechizo, el lanzador puede hacer que cualquier objeto individual que pese 3 libras o menos se mueva en línea recta en la dirección que indique el mago.\n\nEl objeto saldrá despedido en esa dirección hasta alcanzar el límite del hechizo y luego caerá al suelo.\n\nEl objeto debe estar suelto, independiente o no sostenido por alguien, y ser lo bastante ligero para moverse (de lo contrario, el objeto temblará en su lugar y el hechizo se desperdiciará).\n\nEste hechizo puede usarse ofensivamente para arrojar un objeto contra un enemigo.\n\nEl objeto golpea al individuo en su trayectoria con la TABLA del lanzador, con un bonificador de +3 al dado.\n\nSe considera un arma mágica +3 al tirar para impactar pero no al tirar el daño.\n\nEl daño causado depende del objeto, pero usa las siguientes pautas:\n\n| Tipo de objeto | Daño |\n|----------------|------|\n| Arma | Como arma +1 |\n| Objeto pequeño | 2-3 puntos |\n| Objeto grande | 2-4 puntos (2-3 libras) |",
    },
    842: {
        "name": "Luz de Cadaver",
        "description": "Este hechizo hace que un cuerpo muerto o no muerto brille con una pálida resplandor.\n\nEl brillo puede ser blanco, amarillo, verde, ámbar o rojo según el deseo del lanzador.\n\nEl lanzador puede alterar el brillo a voluntad, siempre que esté a menos de 30 pies del cuerpo brillante.\n\nLa luz puede variar desde el contorno más tenue hasta el brillo de una antorcha, apta para leer o para trabajos detallados.\n\nEl resplandor es difuso y constante, y no penaliza a la figura no muerta en combate (cf. *fuego de hadas*).\n\nEl lanzador puede afectar un cuerpo de tamaño mediano por nivel, el doble de cuerpos de tamaño pequeño, la mitad de cuerpos grandes y la cuarta parte de criaturas enormes.\n\nNada mayor que enorme puede verse afectado por este hechizo.\n\nEl resplandor no daña a las criaturas no muertas de ningún modo.\n\nPuede lanzarse sobre no muertos que tengan forma material, incluso si esa forma es gaseosa (como espectros, pero excluyendo fantasmas, que existen principalmente en otros planos).\n\nEste hechizo puede ser usado por nigromantes (magos especialistas en nigromancia) pero no por transmutadores (magos especialistas en alteración).",
    },
    843: {
        "name": "Conocer Escuela",
        "description": "Mediante este hechizo, el lanzador puede determinar la escuela de otro lanzador de conjuros (si la tiene).\n\nEste hechizo solo funcionará sobre otros magos que sean especialistas en un área en particular (abjuradores, convocadores, nigromantes, etc.).\n\nEl hechizo no produce ningún resultado sobre sacerdotes, lanzadores de conjuros sin escuelas, o criaturas sin capacidad para lanzar conjuros.\n\nEste hechizo se usa principalmente para dar fe de las afirmaciones de un mago en particular como lanzador de conjuros de un tipo u otro.\n\nEl objetivo no es consciente de que se le está adivinando, pero como con todos estos hechizos de adivinación, probablemente se ofendería si lo descubriera.\n\nQue se cuide el lanzador.",
    },
    845: {
        "name": "Atadura",
        "description": "Cuando se lanza este hechizo, el mago hace que toda tela suelta o artículos tipo cuerda dentro del área de efecto actúen como si estuvieran animados.\n\nEl hechizo hace que estos objetos se agiten salvajemente durante un asalto y luego intenten atar a cualquier criatura en movimiento dentro de su alcance durante el resto de la duración.\n\nEl material usado puede ser de cualquier composición (seda, lana, cáñamo, cuero, etc.).\n\nLas ataduras golpean con TABLA 15 y, si tienen éxito, enredan a la criatura durante el resto de la duración del hechizo, a menos que esta realice una prueba de Fuerza exitosa cada asalto.\n\nCualquier víctima que se libere antes de tiempo no vuelve a ser atacada.\n\nEl material usado no gana mayor resistencia ni dureza.\n\nPuede ser quemado, cortado o roto.\n\nSi no hay material en el área, el hechizo falla.\n\nSi el lanzador está dentro del área, no se ve afectado.",
    },
    847: {
        "name": "Disipar Silencio",
        "description": "Este hechizo anula el efecto del silencio mágico dentro del área del hechizo de disipar silencio durante la duración del hechizo.\n\nTras el lanzamiento de disipar silencio, todo lanzamiento de conjuros, habla y acciones pueden proceder con normalidad.\n\nDurante la duración del hechizo, el área protegida por disipar silencio es inmune al silencio mágico: los hechizos de silencio no funcionarán dentro del área de disipar silencio.\n\nSin embargo, el área es inmóvil y no sigue al lanzador.",
    },
    848: {
        "name": "Armadura Fantasmal",
        "description": "Este hechizo crea un traje de armadura mágica alrededor del lanzador o de una criatura tocada.\n\nEsta armadura no tiene peso, no hace ruido y no restringe el movimiento.\n\nProporciona protección de CA 3 (o mejora la CA del objetivo a 3, si es peor).\n\nLa armadura es invisible y no interfiere con el lanzamiento de conjuros, el robo ni otras acciones.\n\nSe considera un efecto de fuerza, no una armadura física, y por tanto no se ve afectada por hechizos como *calentar metal* o ataques de monstruos de óxido.\n\nPermanece durante 1 asalto por nivel o hasta ser disipada.",
    },
    849: {
        "name": "Red Mental",
        "description": "Este hechizo vincula las mentes de hasta cuatro individuos (incluido el lanzador), permitiéndoles compartir pensamientos y percepciones limitadas.\n\nTodos deben ser participantes voluntarios.\n\nEl hechizo requiere 1 asalto de lanzamiento por participante.\n\nUna vez establecida, el grupo comparte comunicación telepática, con plena conciencia del estado físico, las emociones y el entorno inmediato de cada uno.\n\nAdemás, una vez por turno, el lanzador puede teletransportar al instante a un participante a la ubicación de otro, siempre que ambos formen parte de la red mental.\n\nEl lanzador debe realizar una prueba de Constitución al final de cada turno para mantener el vínculo; el fallo termina el hechizo prematuramente.\n\nEl hechizo termina automáticamente tras 12 turnos o si el lanzador deja de concentrarse.",
    },
    850: {
        "name": "Bola de Nieve de Snilloc",
        "description": "Este hechizo crea una bola de nieve mística en la mano del lanzador que puede lanzarse inmediatamente contra cualquier objetivo dentro del alcance.\n\nLa bola de nieve impacta automáticamente con 1-3 puntos de daño, 1-6 puntos si se emplea contra un oponente que use fuego o habite en él.\n\nLa bola de nieve golpea como un *misil mágico* y puede ser afectada y repelida del mismo modo (*broche de protección*, *lanzarrayos*, etc.).\n\nLa bola de nieve de Snilloc es considerada por la mayoría de los magos como una forma menor de misil mágico, aunque tiene la ventaja del alcance en niveles superiores (en lugar de múltiples impactos) y puede dirigirse contra un objeto además de una criatura.\n\nTambién es más efectiva contra criaturas ígneas.\n\nExisten informes de una variante de nivel 2 de este hechizo con efectos idénticos llamada *tarta de crema de Snilloc*.\n\nEstos informes no están confirmados.",
    },
    851: {
        "name": "Sentidos Espectrales",
        "description": "El receptor de este hechizo obtiene poderes sensoriales espectrales, lo que le permite ver criaturas y objetos invisibles o etéreos, escuchar susurros lejanos con claridad y detectar emanaciones mágicas en el área.\n\nEstas habilidades no requieren concentración activa.\n\nEl hechizo dura 1 hora por nivel del lanzador.\n\nNo revela ilusiones ni fantasmas, pero permite la detección de criaturas ocultas mediante ocultación no basada en ilusiones.\n\nEl receptor también puede detectar automáticamente la presencia de no muertos o constructos dentro de 30 pies, aunque no su ubicación exacta ni su tipo.",
    },
    852: {
        "name": "Mala Suerte",
        "description": "Con este hechizo, el mago salvaje crea un patrón negativo en las fuerzas aleatorias que rodean a una criatura.\n\nA la criatura se le concede una tirada de salvación; si tiene éxito, el hechizo falla.\n\nSi falla la salvación, el azar cae en un patrón desafortunado.\n\nCualquier acción que implique azar (es decir, cada vez que una tirada de dado afecte al personaje) realizada por la víctima durante los siguientes 2-20 asaltos requiere dos intentos separados; siempre se aplica el peor resultado (la víctima tira dos veces para ataques, daños, salvaciones, etc., usando siempre la peor tirada de dado).\n\nUna piedra de la suerte o dispositivo mágico similar anulará la mala suerte.\n\nSin embargo, hacerlo impide que el objeto mágico funcione durante 2d10 asaltos.\n\nEl componente material es un trozo de espejo roto.",
    },
    853: {
        "name": "Encanto Siniestro",
        "description": "Mediante este hechizo, el lanzador encanta a una persona de tal manera que disfruta realmente matando y se vuelve berserk de inmediato, atacando para matar tanto a amigos como a enemigos por igual durante la duración del hechizo, a menos que se supere una salvación contra conjuros.\n\nLa definición de persona es la misma que para *encantar persona*, y se aplican las mismas restricciones, salvo que el personaje encantado no tiene reparos en matar a otros.\n\nEl individuo encantado no atacará al lanzador de este hechizo a menos que el lanzador lo ataque o dañe primero.\n\nSi esto ocurre, el individuo encantado solo atacará al lanzador.\n\nSi no hay nadie a quien el individuo encantado pueda atacar, actúa con normalidad.\n\nTan pronto como alguien distinto del lanzador entre a la vista (dentro de la duración del hechizo, por supuesto), el *encanto siniestro* hace efecto y el individuo encantado se lanza al ataque.\n\nLos ataques berserker del individuo encantado no otorgan poderes ni habilidades adicionales.\n\nSi se le da a elegir entre dos formas distintas de atacar, el personaje encantado siempre elige la más mortífera (lanzará un *bola de fuego* antes de sacar su daga, por ejemplo).\n\nSi el personaje encantado es forzado a atacar algo mucho más poderoso, el DM puede permitir una segunda salvación contra conjuros para romper el encanto.",
    },
    854: {
        "name": "Baston de Fuego",
        "description": "Este hechizo hace que el bastón del lanzador (o un objeto de madera similar) estalle en llamas.\n\nEl fuego puede usarse para golpear a un oponente con 2d6 puntos de daño por fuego con un ataque exitoso.\n\nEl lanzador puede realizar un ataque así por asalto.\n\nAdemás de su uso cuerpo a cuerpo, el bastón puede prender objetos inflamables por contacto.\n\nSi se lanza en un área que contenga materiales combustibles, puede desatarse un fuego normal.\n\nEl fuego no puede ser arrojado ni proyectado; permanece sobre el bastón hasta que termina el hechizo.\n\nEl bastón de fuego emite luz en un radio de 10 pies y su calor puede sentirse hasta 5 pies de distancia.",
    },
    855: {
        "name": "Daga de Hielo",
        "description": "Este hechizo crea una daga mágica de hielo que se forma en la mano del lanzador y puede ser arrojada como una daga.\n\nSi impacta, causa 2d4 puntos de daño.\n\nAdemás, la daga explota en una pequeña ráfaga de frío, infligiendo 1d4 puntos de daño adicionales a todas las criaturas en un radio de 5 pies del objetivo.\n\nUna salvación contra conjuros niega el daño de la ráfaga.\n\nLa daga desaparece tras ser arrojada, impacte o falle, o al final del asalto.\n\nSe puede crear una nueva daga en un asalto posterior con otro lanzamiento.",
    },
    856: {
        "name": "Lucubracion de Mordenkainen",
        "description": "Mediante este hechizo, el mago puede recordar al instante cualquier hechizo de nivel 1 a 5 que haya usado durante las últimas 24 horas.\n\nEl hechizo debe haber sido memorizado y realmente usado durante ese periodo.\n\nLa lucubración de Mordenkainen permite la recuperación de un solo hechizo.\n\nSi el hechizo recuperado requiere componentes materiales, estos deben ser proporcionados por el lanzador; el hechizo recuperado no se puede usar hasta que se disponga de los componentes materiales.",
    },
    857: {
        "name": "Gato de Sombra",
        "description": "Cuando se lanza este hechizo, el mago hace aparecer un gato hecho de sombra.\n\nEl gato de sombra tiene el tamaño de un gato normal y puede ser gris o negro a elección del lanzador.\n\nEl lanzador tiene control telepático completo sobre el felino; puede ver, oír e incluso hablar a través de él mientras permanezca dentro del alcance.\n\nEn el momento en que sale del alcance, el gato de sombra desaparece.\n\nEl lanzador no necesita concentrarse en el gato de sombra.\n\nEl felino sombrío es insustancial, lo que lo hace inmune a ataques físicos normales o especiales, incluidos los de armas +1 o superiores.\n\nTiene una CA equivalente a la del propio lanzador, una velocidad de movimiento de 18 y las mismas tiradas de salvación que el lanzador.\n\nEl gato se disipa si recibe puntos de daño iguales a la mitad del total de puntos de golpe del lanzador.\n\nEl gato de sombra no tiene ataques propios y no puede tocar ni llevar objetos.\n\nUn hechizo exitoso de disipar magia hace que el gato desaparezca.\n\nUn gato de sombra no produce sonido al moverse.\n\nEs un 90 % indetectable en cualquier condición que no sea la más brillante.\n\nPuede atravesar pequeños agujeros o aberturas estrechas.",
    },
    858: {
        "name": "Ahuyentar Sombras",
        "description": "Este hechizo faculta al mago a rechazar a criaturas creadas por los hechizos de *monstruos de sombra*, *semimonstruos de sombra* o *sombras*, provocando que huyan presas del pánico durante la duración del hechizo (pueden regresar más tarde si son capaces).\n\nLas criaturas afectadas huirán a la máxima velocidad posible.\n\nEl hechizo no surte efecto sobre criaturas verdaderamente no muertas, incluidos los monstruosos de sombra.\n\nAlternativamente, este hechizo puede dirigirse a un único monstruo de sombra (creado por uno de los hechizos anteriores) para arrebatar el control a su lanzador original y hacer que ataque a la criatura que el controlador elija.\n\nEl ataque continuará hasta que la duración del hechizo haya transcurrido, momento en el que el monstruo de sombra regresará a su plano de origen.",
    },
    860: {
        "name": "Evasion de Elminster",
        "description": "Una versión personalizada del hechizo de contingencia orientada a la preservación del lanzador, este hechizo causará, bajo ciertas condiciones específicas, que el cuerpo, mente y espíritu del lanzador viajen a otra ubicación.\n\nLa transferencia es automática e incluye solo el cuerpo y los objetos físicamente unidos a él, dejando atrás cualquier objeto que pese más de 50 libras de forma individual.\n\nEl hechizo reúne cuerpo, espíritu y mente incluso si habían sido separados previamente.\n\nAl lanzar este hechizo, el mago debe especificar seis condiciones de activación bajo las cuales se activa la evasión.\n\nCuando una de ellas ocurra, el lanzador es arrastrado al destino predefinido, ya sea en el mismo plano o en otro plano o semiplano conocido.\n\nAdemás, el lanzador selecciona dos hechizos para que se lancen inmediatamente tras la llegada.\n\nEstos deben lanzarse justo después del hechizo de evasión durante la preparación.\n\nLos componentes materiales son una pinta de sangre del lanzador y una gema con un valor mínimo de 5000 po, ambos consumidos en el lanzamiento.\n\nEl lanzador también pierde 1d4 puntos de golpe en el momento del lanzamiento, que no se recuperan hasta que se activa la evasión.",
    },
    861: {
        "name": "Flecha de Fuego",
        "description": "Este hechizo puede lanzarse de dos formas.\n\nEn la primera, encanta una flecha por nivel del lanzador, haciendo que cada una inflija 1 punto adicional de daño por fuego al acertar.\n\nEl encantamiento dura hasta el final del asalto o hasta que la flecha sea disparada.\n\nLa segunda versión crea una flecha mágica llameante que puede ser arrojada como una jabalina.\n\nImpacta con 1d6+4 de daño, sin tirada de salvación.\n\nEl dardo llameante puede prender objetos inflamables y se extingue tras el impacto.",
    },
    862: {
        "name": "Invisibilidad Mayor",
        "description": "Este hechizo opera como el hechizo de *invisibilidad*, salvo que no termina si el receptor ataca.\n\nPermanece en efecto durante toda la duración o hasta ser disipado.\n\nLa criatura permanece invisible incluso mientras ataca, aunque efectos reveladores como *visión verdadera* seguirán exponiendo al objetivo.",
    },
    863: {
        "name": "Mente en Blanco, Menor",
        "description": "Cuando se lanza, este hechizo protege al receptor de hechizos y efectos que afectan la mente.\n\nEl receptor es inmune a todos los intentos de leer o influir en sus pensamientos, incluidos hechizos como *percepción extrasensorial*, *sugerencia*, *confusión* y *debilidad mental*.\n\nEl hechizo no bloquea efectos físicos ni magia elemental, y no puede usarse junto con otras abjuraciones protectoras como *globo menor de invulnerabilidad*.",
    },
    864: {
        "name": "Puerta de Sombras",
        "description": "Mediante este hechizo, el mago crea la ilusión de una puerta.\n\nLa ilusión también permite al mago parecer atravesar esa \"puerta\" y desaparecer.\n\nEn realidad, se ha apartado de un salto y puede huir, totalmente invisible, durante la duración del hechizo.\n\nLas criaturas que observan esto son engañadas al ver o entrar en una habitación vacía de 10 pies × 10 pies si abren la \"puerta\".\n\nUn hechizo de visión verdadera, una gema de visión o medios mágicos similares pueden descubrir al mago.\n\nCiertos monstruos de Dados de Golpe elevados también podrían notar al mago (consulta el hechizo de invisibilidad), pero solo si realizan un intento activo de hacerlo.",
    },
    865: {
        "name": "Epuracion Resplandeciente de Elminster",
        "description": "Este poderoso hechizo invoca un número de esferas plateadas flotantes, hasta tantas esferas como niveles tenga el lanzador.\n\nCada una de estas esferas tiene la capacidad de absorber un único hechizo, capacidad similar a un conjuro o efecto mágico de cualquier tipo ofensivo.\n\nTras absorber el hechizo, la esfera se desvanece, llevándose consigo la energía del hechizo.\n\nLos hechizos ofensivos pueden considerarse generalmente como aquellos que infligen daño al objetivo o lo someten a una influencia perniciosa o dañina.\n\nLos hechizos pasivos (como muros) a veces pueden usarse en situaciones con intención dañina.\n\nLa intención y la situación son tan importantes como el efecto del hechizo para determinar si un hechizo es ofensivo o no a efectos de que la epuración funcione.\n\nVarios muros, esferas, algunos de los hechizos de Bigby y la mayoría de las abjuraciones no afectarán al hechizo de epuración.\n\nAquellos hechizos que tengan efectos de área en los que exista una esfera plateada (como una bola de fuego) simplemente no funcionarán: la energía mágica será absorbida por la esfera antes de que el daño se inflija.\n\nLos hechizos que ya están en vigor cuando las esferas plateadas entran en ellos no se ven afectados por este hechizo, pero quedan automáticamente anulados si se lanzan a menos de 10 pies de una esfera plateada.\n\nLos objetos con cargas de hechizos ofensivos (como varitas) pueden ser anulados si la esfera se coloca sobre o delante de la varita.\n\nDe lo contrario, las esferas no afectan a objetos mágicos ni armas, ni a objetos potencialmente letales que no estén activados, como símbolos.\n\nEl lanzador puede dirigir las esferas para que se desplacen a una velocidad máxima de 60 pies por asalto, hasta el límite del alcance del hechizo.\n\nLas esferas creadas a partir de una sola epuración deben moverse como un grupo; el lanzador no puede moverlas individualmente ni separarlas.\n\nEl mago que las crea puede lanzar otros hechizos, pero no puede mover las esferas en el mismo asalto.\n\nEl lanzador puede moverse y luchar y mover las esferas al mismo tiempo.\n\nSi el lanzador abandona el área sin las esferas, estas permanecen hasta que absorban un hechizo ofensivo.\n\nDel mismo modo, si el lanzador muere, las esferas plateadas permanecen en el área, sin moverse, pero sin infligir ningún daño.\n\nLas esferas plateadas de la epuración no pueden moverse físicamente ni atacarse.\n\nNo tienen presencia física sólida y pueden atravesar barreras mágicas y físicas por igual sin sufrir daño.\n\nNi el lanzador ni nadie más puede aprovechar la energía mágica disipada por las esferas.\n\nIncluso las capacidades similares a conjuros de poderes y criaturas de otros planos pueden verse afectadas por las esferas plateadas de una epuración, aunque los propios seres podrían no verse afectados.",
    },
    866: {
        "name": "Forma Fantasmal",
        "description": "Este hechizo transforma al lanzador en una forma intangible e insustancial muy parecida a la de un fantasma.\n\nEn esta forma, el lanzador puede volar lentamente, atravesar objetos sólidos y no puede ser dañado por armas normales.\n\nEl lanzador no puede lanzar hechizos ni interactuar físicamente con objetos o seres mientras está en forma fantasmal.\n\nLa forma sigue estando sujeta a ataques y efectos mágicos que se dirigen a lo etéreo o lo incorpóreo.",
    },
    867: {
        "name": "Latigo de Proteccion de Khelben",
        "description": "Este hechizo especializado y raro crea un azote en forma de látigo de fuerza mística controlada por el lanzador.\n\nEste látigo mágico es particularmente efectivo contra hechizos que adoptan la forma de fuerzas de empuje, golpe o aplastamiento, en particular los populares hechizos creados por Bigby.\n\nEl mago no necesita concentrarse para mantener el látigo de protección, pero no puede lanzar otros hechizos mientras lo usa ni blandir otras armas.\n\nAl usar el látigo, golpea o para automáticamente bajo la dirección de su portador.\n\nLos efectos del látigo son los siguientes:\n\n- El látigo confiere al usuario inmunidad al hechizo de *empujar*.\n- El látigo disipará inmediatamente un hechizo de *escudo* sin afectarse a sí mismo.\n- El látigo tiene un 40 % de probabilidad de destruir un *disco flotante de Tenser* por ataque.\n\nEl látigo no se ve afectado.\n- El látigo afecta a cualquiera de los hechizos de *mano de Bigby* como sigue:\n    - *Mano interpuesta*: destruida, con un 20 % de probabilidad de que el látigo también sea destruido.\n    - *Mano contundente*: 90 % de probabilidad de ser destruida por ataque, con un 30 % de probabilidad de que el látigo sea destruido por ataque.\n    - *Mano agarradora*: 80 % de probabilidad de ser destruida por ataque, con un 40 % de probabilidad de que el látigo sea destruido por ataque.\n    - *Puño cerrado*: 70 % de probabilidad de ser destruido por ataque, con un 50 % de probabilidad de que el látigo sea destruido por ataque.\n    - *Mano aplastante*: 65 % de probabilidad de ser destruida por ataque, con un 60 % de probabilidad de que el látigo sea destruido por ataque.\n    - Los hechizos menores de Bigby (por ejemplo, *agarre estrangulador*, *manopla aplastante*) se destruyen al contacto con el látigo, igual que un hechizo de *escudo*.\n- El látigo no surte efecto sobre barreras mágicas inmóviles como *muro de fuerza* o *esfera prismática*.\n- El látigo no surte efecto sobre hechizos que no usan fuerza mágica como entidad sólida (por ejemplo, *sujeción*, *lentificar*, *gravedad invertida*, etc.).\n- El látigo no puede dañar objetos vivos, por lo que no puede usarse como arma.\n- El látigo puede usarse para parar ataques físicos, incluidas armas mágicas y armas hechas de fuerza mágica (por ejemplo, *bastón anulador*, *martillo espiritual*).\n\nParar tiene una tasa base de éxito del 60 %, +2 % por nivel del lanzador, pero requiere iniciativa sobre el atacante.",
    },
    868: {
        "name": "Defensores Fantasma Fieles de Mordenkainen",
        "description": "Este hechizo invoca 1d4 defensores fantasma similares a sabuesos por cada 3 niveles del lanzador (máximo 6).\n\nCada defensor combate como una criatura de 4 DG, CA 0, e inflige 1d10 puntos de daño por impacto.\n\nObedecen las órdenes mentales del lanzador, no pueden ser objeto de incredulidad y desaparecen si mueren o al final del hechizo.\n\nSon inmunes a encantamiento, sueño, retención y hechizos similares, y pueden atacar a enemigos etéreos e invisibles.",
    },
    869: {
        "name": "Inmunidad a Conjuros de Sertan",
        "description": "Este hechizo funciona como *inmunidad a conjuros*, pero proporciona una protección más amplia.\n\nLa versión de Sertan otorga +10 a las tiradas de salvación contra hechizos de 1.er a 3.er nivel, +8 contra los de 4.º a 6.º, y +6 contra los de 7.º a 9.º nivel.\n\nEstos bonificadores se acumulan con los de objetos mágicos o habilidades de clase.\n\nEl hechizo es extremadamente raro y costoso, pues usa poderosos componentes para vincular la inmunidad.",
    },
    870: {
        "name": "Inmunidad a Conjuros",
        "description": "Mediante este hechizo, el mago puede conferir inmunidad virtual a ciertos hechizos y formas de ataque mágico sobre los que toca.\n\nPor cada cuatro niveles de experiencia del mago, una criatura puede ser protegida por el hechizo de inmunidad a conjuros de Serten; sin embargo, si se protege a más de una, la duración de la protección se divide entre las criaturas protegidas.\n\nPor ejemplo, un mago de nivel 16 puede lanzar el hechizo sobre una criatura y durará 16 turnos, o sobre dos criaturas durante ocho turnos, o sobre cuatro criaturas durante cuatro turnos.\n\nLa protección otorga un bonificador a las tiradas de salvación, según el tipo y nivel del hechizo, como se muestra en la tabla siguiente:\n\n| Nivel del hechizo | Hechizo de mago | Hechizo de sacerdote |\n|--------------------|------------------|------------------------|\n| 1.er-3.er          | +9*              | +7                     |\n| 4.º-6.º            | +7               | +5                     |\n| 7.º-8.º            | +5               | +3                     |\n\n* Incluye efectos de encantamiento.\n\nEl componente material de este hechizo es un diamante de al menos 500 po de valor, que debe ser triturado y espolvoreado sobre los receptores del hechizo.\n\nCada criatura así beneficiada debe también poseer un diamante de al menos un quilate, intacto y llevado sobre su persona.",
    },
    871: {
        "name": "Teletransportar Muerte",
        "description": "Mediante esta magia, el lanzador puede teletransportar al instante a una sola criatura muerta o no muerta a cualquier ubicación deseada en el mismo plano que el lanzador.\n\nEl peso no es un factor, pero solo una criatura y sus pertenencias inmediatas pueden ser teletransportadas mediante el uso del hechizo.\n\nEl éxito de la teletransportación depende de lo familiar que el destino le resulte al lanzador (no al no muerto enviado).\n\nLos no muertos con habilidades de hechizo y acceso a este hechizo pueden usarlo para teletransportarse a sí mismos.\n\nLa probabilidad de acierto en la teletransportación varía:\n\n- **Muy familiar:** En el objetivo 01-02, Alto 03-99, Bajo 00\n- **Estudiado con cuidado:** En el objetivo 01-04, Alto 05-98, Bajo 99-00\n- **Visto de pasada:** En el objetivo 01-08, Alto 09-96, Bajo 97-00\n- **Visto una vez:** En el objetivo 01-16, Alto 17-92, Bajo 93-00\n- **Nunca visto:** En el objetivo 01-32, Alto 33-84, Bajo 85-00",
    },
    872: {
        "name": "Invulnerabilidad a Conjuros",
        "description": "El receptor de este hechizo queda completamente inmune a un hechizo, efecto similar a un conjuro u objeto mágico.\n\nEl hechizo, efecto de hechizo u objeto se enumera en el momento del lanzamiento del hechizo.\n\nAl describir un hechizo o efecto de hechizo particular, debe ser necesaria una descripción completa.\n\nLa invulnerabilidad a un hechizo de luz, por ejemplo, no es suficiente, ya que el hechizo puede ser tanto de mago como de sacerdote.\n\nEl lanzamiento correcto sería protegerse contra el \"hechizo de mago de nivel 1, Luz\".\n\nDicha protección es completa para el receptor del hechizo, y es como si el hechizo u objeto no existiera para el individuo protegido.\n\nUn personaje podría volverse invulnerable a un muro de hierro y caminar a través de dicho muro, si fue creado por el hechizo.\n\nLa invulnerabilidad a un hechizo particular proporciona protección completa solo contra ese hechizo particular.\n\nVersiones relacionadas o menores de ese hechizo, equivalentes no mágicos de ese hechizo y habilidades similares a conjuros que lo duplican aún pueden afectar al receptor.\n\nCuando se lidia con habilidades similares a conjuros, la invulnerabilidad a hechizos proporciona protección completa contra una habilidad similar a un conjuro empleada por un tipo o clase de criatura.\n\nUna invulnerabilidad al ojo desintegrador de un beholder no protege de los otros ojos del beholder, ni de ninguna otra forma de desintegración.\n\nCuando se lanza para proteger contra un objeto mágico, este hechizo protege contra todos los ataques de ese objeto y de todos los objetos mágicos idénticos.\n\nLa invulnerabilidad a una espada +1 hace al personaje invulnerable a todas esas espadas.\n\nUna (espada +1, +2 contra personas llamadas Fred) le afectará normalmente.\n\nLos hechizos de pergamino se consideran hechizos mágicos en lugar de objetos y deben protegerse individualmente.\n\nLos artefactos, reliquias y objetos mágicos únicos no pueden verse afectados por este hechizo.\n\nSolo se puede lanzar una invulnerabilidad a hechizos sobre un individuo a la vez.\n\nNo puede lanzarse sobre los muertos, sobre un objeto o una ubicación.",
    },
    874: {
        "name": "Sinostodweomer de la Simbul",
        "description": "Este singular hechizo permite al lanzador sacrificar todos los hechizos preparados a cambio de recuperar puntos de golpe perdidos.\n\nCada nivel de hechizo sacrificado restaura 1d4 puntos de golpe.\n\nEl lanzador debe sacrificar todos los hechizos memorizados a la vez, incluidos los almacenados en objetos especiales como libros de hechizos o anillos.\n\nEste hechizo solo puede usarse una vez al día y solo por el lanzador original.",
    },
    875: {
        "name": "Salto de Gema",
        "description": "Este hechizo permite al lanzador teletransportarse al instante a la ubicación de una gema del pícaro preparada previamente como foco.\n\nEl lanzador debe haber sostenido físicamente y nombrado la gema de destino.\n\nUna vez lanzado, el lanzador desaparece y aparece en la ubicación de la gema nombrada.\n\nEl hechizo falla si la gema nombrada ha sido destruida o se encuentra en una ubicación protegida contra la teletransportación.\n\nEl lanzador solo puede sintonizar una gema así a la vez.\n\nEl hechizo es instantáneo y no puede interrumpirse una vez comenzado.",
    },
    877: {
        "name": "Vision",
        "description": "Cuando un mago desea obtener guía sobrenatural, lanza un hechizo de *visión*, invocando a cualquier poder del que desee ayuda y haciendo una pregunta que será respondida con una visión.\n\nSe tiran dos dados de seis caras:\n\n- Total 2-6: el poder está molesto y se niega a responder; el lanzador debe realizar un servicio bajo un geas o búsqueda ultrapoderosos.\n- Total 7-9: el poder es indiferente y ofrece una visión menor o no relacionada.\n- Total 10 o más: el poder concede una visión verdadera.\n\nEl componente material es un sacrificio valorado por el lanzador o por el poder.\n\nLos objetos más preciados aumentan la tirada (hasta +3).",
    },
    878: {
        "name": "Vinculo de Muerte",
        "description": "Este hechizo nigromántico vincula la fuerza vital del lanzador con la de la criatura objetivo.\n\nCualquier daño sufrido por uno se transfiere al otro y viceversa.\n\nEsto incluye tanto el daño como la sanación.\n\nSin embargo, si el objetivo muere, el lanzador no se ve afectado.\n\nSi el lanzador muere, el hechizo termina.\n\nEl vínculo no puede romperse hasta que termine la duración o una de las partes abandone el plano.\n\nUsado como garantía en negociaciones o venganzas, fuerza una cautela mutua.\n\nComponentes materiales: una pizca de polvo de tumba y una gota de sangre del lanzador.",
    },
    879: {
        "name": "Demanda",
        "description": "Este hechizo funciona como *envío* pero permite la entrega de una *sugerencia* también.\n\nEl receptor debe realizar una tirada de salvación contra conjuros con -2 o ser obligado a obedecer la sugerencia.\n\nSi la sugerencia es obviamente imposible o irrelevante, no se necesita tirada de salvación.\n\nEl lanzador debe estar familiarizado con el receptor y conocer su nombre y apariencia.\n\nSi el objetivo está en otro plano, la tasa base de fallo es del 5 %, que puede aumentar según las condiciones.\n\nIncluso las criaturas con Inteligencia 1 pueden entender el mensaje.\n\nLos semidioses y seres superiores pueden optar por ignorarlo.",
    },
    881: {
        "name": "Motor de Conjuros",
        "description": "Al lanzar este hechizo, el mago invoca el motor de conjuros, una gran rueda que absorbe energía mágica, en particular los hechizos lanzados.\n\nCuando se lanza inicialmente, el motor está inactivo y permanece invisible en la ubicación donde lo lanzó el mago.\n\nUna vez que se lanza un hechizo en el área de efecto alrededor del motor, este se activa.\n\nAparece una gran rueda intangible de 12 pies de diámetro y 2 pies de grosor, brillando con una luz blanca resplandeciente por la energía presente.\n\nUna vez activado, el motor de conjuros no se desactivará; más bien, eventualmente se ralentizará por falta de energía mágica y se volverá fantasmal y translúcido.\n\nCuando está activado, el motor de conjuros absorbe toda la energía mágica lanzada en el área de efecto, atravesando objetos sólidos para hacerlo.\n\nLos hechizos de mago y sacerdote, las habilidades similares a conjuros de monstruos e individuos, y los objetos mágicos con cargas lanzables no funcionarán en esta área.\n\nSu energía es absorbida por la rueda, que brilla con más intensidad y gira más rápido con cada adición.\n\nA diferencia del atrapaconjuros, el motor de conjuros no puede sobrecargarse.\n\nUn motor de conjuros puede destruirse por contacto directo con un objeto mágico (excluyendo pociones y pergaminos, pero incluyendo artefactos y objetos mágicos únicos).\n\nEl motor explotará al contacto con dicho objeto, infligiendo 1-20 puntos de daño a todos los que estén en un radio de 10 pies y 1-8 a todos los que estén entre 10 y 20 pies de distancia de la propia rueda.\n\nEl objeto mágico también se destruye en la explosión.\n\nLos artefactos y objetos únicos (como espadas de propósito especial) no se destruyen, pero ellos (y su portador) son trasladados físicamente a otro plano o dimensión.\n\nVolver desde allí es problema del personaje.\n\nUn hechizo de disipar magia no destruirá el motor de conjuros, ya que su energía será absorbida en el proceso.\n\nLos símbolos, glifos y mágicas de abjuración ya colocados en el momento en que el motor de conjuros se activa no son absorbidos, aunque los nuevos hechizos de esa variedad lanzados en el área sí lo son.\n\nUn hechizo de desintegrar provocará que el motor explote del mismo modo que si contactara con un objeto mágico.\n\nUn motor de conjuros en funcionamiento tiene un efecto secundario beneficioso: si un lanzador de conjuros estudia o reza en su luz, el tiempo necesario para aprender o recibir hechizos se reduce a la mitad.\n\nEsto no reduce el tiempo necesario para descansar, solo para memorizar hechizos.\n\nAparte de los poderes enumerados anteriormente, el motor de conjuros no afecta a los seres vivos.\n\nLos individuos con objetos mágicos no activarán un motor de conjuros inactivo.\n\nSolo el lanzamiento de un hechizo en el área de efecto invocará al motor de conjuros.",
    },
    882: {
        "name": "Despojar Mente",
        "description": "Este hechizo separa la mente de un individuo de su cuerpo mientras envuelve al cuerpo en una armadura invulnerable de fuerza mágica.\n\nEl cuerpo no muere, sino que se coloca en un estado de animación suspendida.\n\nNo puede ser dañado por magia ni por fuerza física, ni siquiera ser movido.\n\nEl cuerpo no envejece, respira ni come, y no está sujeto a enfermedades, podredumbre, infección o veneno, incluso si estos estados existían en él antes de ser despojado de la mente.\n\nLa mente misma es liberada invisiblemente por el Plano Material Primario, donde flota serena, indetectable por cualquier medio.\n\nAl igual que el cuerpo, la mente no puede ser dañada por ningún proceso conocido.\n\nNo puede controlar su movimiento ni lo que ve, y su memoria es errática.\n\nEl DM puede ofrecer entre una y seis escenas pequeñas, frases o situaciones para que la mente despojada presencie en su vuelo, como semillas para aventuras futuras.\n\nMientras está en estado de despojo, la mente no puede pensar, rezar, estudiar o investigar hechizos, ni siquiera elegir observar a una persona o lugar en particular.\n\nLa mente y el cuerpo pueden vincularse mediante un deseo limitado o pleno, o mediante el reverso de este hechizo, restaurar la mente.\n\nEl restaurar la mente se lanza sobre el cuerpo y la mente es devuelta de inmediato.\n\nLa mente y el cuerpo deben estar en el mismo plano para que este hechizo funcione.\n\nRestaurar la mente tiene otras funciones también: puede curar la locura (tanto mágica como de otro tipo), eliminar la debilidad mental y romper todos los controles mentales o mágicos, incluidos geas, búsquedas y encantamientos.\n\nSe aplica una tirada de salvación al restaurar la mente y, si falla, el cuerpo y la mente siguen separados.\n\nEl hechizo de despojo de mente en su forma original es usado a menudo por magos de alto nivel en situaciones de vida o muerte para preservarse para una futura recuperación y restauración.",
    },
    883: {
        "name": "Evasion de Elminster (Mayor)",
        "description": "Una versión personalizada del hechizo de contingencia orientada a la preservación del lanzador, este hechizo causará, bajo ciertas condiciones específicas, que el cuerpo, mente y espíritu del lanzador viajen a otra ubicación.\n\nLa transferencia es automática e incluye solo el cuerpo y los objetos físicamente unidos a él, dejando atrás cualquier objeto que pese más de 50 libras de forma individual.\n\nEl hechizo reúne cuerpo, espíritu y mente incluso si habían sido separados previamente.\n\nAl lanzar este hechizo, el mago debe especificar seis condiciones de activación bajo las cuales se activa la evasión.\n\nCuando una de ellas ocurra, el lanzador es arrastrado al destino predefinido, ya sea en el mismo plano o en otro plano o semiplano conocido.\n\nAdemás, el lanzador selecciona dos hechizos para que se lancen inmediatamente tras la llegada.\n\nEstos deben lanzarse justo después del hechizo de evasión durante la preparación.\n\nLos componentes materiales son una pinta de sangre del lanzador y una gema con un valor mínimo de 5000 po, ambos consumidos en el lanzamiento.\n\nEl lanzador también pierde 1d4 puntos de golpe en el momento del lanzamiento, que no se recuperan hasta que se activa la evasión.",
    },
    884: {
        "name": "Epuracion Resplandeciente de Elminster (Mayor)",
        "description": "Este poderoso hechizo invoca un número de esferas plateadas flotantes, hasta tantas esferas como niveles tenga el lanzador.\n\nCada una tiene la capacidad de absorber un único hechizo, capacidad similar a un conjuro o efecto mágico de cualquier tipo ofensivo.\n\nTras absorber el hechizo, la esfera se desvanece, llevándose consigo la energía.\n\nLos hechizos ofensivos pueden considerarse generalmente como aquellos que infligen daño al objetivo o lo someten a una influencia perniciosa o dañina.\n\nLos hechizos pasivos (como muros) a veces pueden usarse en situaciones con intención dañina.\n\nLa intención y la situación son tan importantes como el efecto del hechizo para determinar si un hechizo es ofensivo o no a efectos de que la epuración funcione.\n\nVarios muros, esferas, algunos de los hechizos de Bigby y la mayoría de las abjuraciones no afectarán al hechizo de epuración.\n\nAquellos hechizos que tengan efectos de área en los que exista una esfera plateada (como una bola de fuego) simplemente no funcionarán: la energía mágica será absorbida por la esfera antes de que el daño se inflija.\n\nLos hechizos que ya están en vigor cuando las esferas plateadas entran en ellos no se ven afectados por este hechizo, pero quedan automáticamente anulados si se lanzan a menos de 10 pies de una esfera plateada.\n\nLos objetos con cargas de hechizos ofensivos (como varitas) pueden ser anulados si la esfera se coloca sobre o delante de la varita.\n\nDe lo contrario, las esferas no afectan a objetos mágicos ni armas, ni a objetos potencialmente letales que no estén activados, como símbolos.\n\nEl lanzador puede dirigir las esferas para que se desplacen a una velocidad máxima de 60 pies por asalto, hasta el límite del alcance del hechizo.\n\nLas esferas creadas a partir de una sola epuración deben moverse como un grupo; el lanzador no puede moverlas individualmente ni separarlas.\n\nEl mago que las crea puede lanzar otros hechizos, pero no puede mover las esferas en el mismo asalto.\n\nSi el lanzador abandona el área sin las esferas, estas permanecen hasta que absorban un hechizo ofensivo.\n\nSi el lanzador muere, las esferas permanecen en el área, sin moverse, sin infligir daño.\n\nLas esferas no pueden moverse físicamente ni atacarse; no tienen presencia física sólida y pueden atravesar barreras mágicas y físicas por igual sin daño.\n\nNi el lanzador ni nadie más puede aprovechar la energía disipada.\n\nIncluso las habilidades similares a conjuros de otros planos pueden verse afectadas.",
    },
    885: {
        "name": "Auxilio Inverso",
        "description": "La aplicación inversa del hechizo de *auxilio* transporta al mago a las proximidades inmediatas del poseedor del objeto encantado, cuando el objeto se rompe y se pronuncia la palabra de mando.\n\nEl mago tendrá una idea general de la ubicación y la situación del poseedor del objeto, pero no tiene opción de ir o no, lo que hace que este lanzamiento sea verdaderamente raro.\n\nLos componentes materiales incluyen gemas por un valor total no inferior a 5000 po, que solo pueden encantarse una vez al mes (típicamente bajo luna llena).\n\nEn ese momento se establece el destino y el efecto (directo o inverso) del auxilio.",
    },
    886: {
        "name": "Restablecimiento Temporal",
        "description": "El reverso de la *estasis temporal*, este hechizo pone fin a la animación suspendida causada por ese hechizo y restaura al objetivo al flujo temporal normal.\n\nSolo requiere una sola palabra para lanzarse, sin componentes somáticos ni materiales.",
    },
    887: {
        "name": "Encanto Virus",
        "description": "Este hechizo es una variante siniestra de *encantar en masa* que se propaga por contacto.\n\nComienza encantando a una sola criatura (con una penalización de -2 a la salvación), pero solo si el objetivo tiene menos puntos de golpe que el lanzador.\n\nDe lo contrario, actúa como *encantar persona o monstruo*.\n\nLos individuos encantados pueden entonces encantar a otros por contacto.\n\nEstos objetivos posteriores deben salvar normalmente, y quienes tengan más pg que el lanzador obtienen un bonificador de +2.\n\nEl proceso continúa recursivamente, propagándose hasta tres veces el nivel del lanzador en objetivos individuales.\n\nCada criatura encantada se comporta como si estuviera bajo *encantar persona*, con las mismas limitaciones.\n\nLa Inteligencia afecta a cuánto dura el efecto antes de que se permita otra salvación.\n\nSi el lanzador ataca a cualquier sujeto encantado, todos los demás afectados por ese encanto virus pueden salvar.\n\nUn *disipar magia* exitoso sobre un individuo encantado rompe el hechizo para todos los demás vinculados a esa instancia.\n\nLas criaturas inmunes a efectos de encantamiento no se ven afectadas.\n\nEl componente material es una fina tela de alambre de cobre finamente hilado por valor de 100 po.",
    },
    502: {
        "name": "Pergamino Ilusorio",
        "description": "Este hechizo permite al mago escribir instrucciones u otra información sobre pergaminos, papel, etc.\n\nEl pergamino ilusorio parece ser alguna forma de escritura extranjera o mágica.\n\nSolo la persona o personas que el mago desea que lean la escritura pueden hacerlo.\n\nUn ilusionista lo reconoce como pergamino ilusorio.\n\nLas criaturas no autorizadas que echen un vistazo al pergamino deben realizar tiradas de salvación contra conjuros.\n\nUna salvación exitosa significa que la criatura puede apartar la mirada con solo una leve sensación de desorientación.\n\nEl fallo significa que la criatura queda sujeta a una sugerencia implantada en el pergamino por el lanzador en el momento en que se lanzó el hechizo de pergamino ilusorio.\n\nLa sugerencia no puede requerir más de tres turnos para llevarse a cabo.\n\nLa sugerencia podría ser cerrar el libro y marcharse, u olvidar la existencia del libro, por ejemplo.\n\nUn hechizo de disipar magia exitoso eliminará el pergamino ilusorio, pero un intento fallido borra toda la escritura.\n\nLas escrituras ocultas pueden leerse mediante una combinación del hechizo de visión verdadera y el hechizo de leer magia o comprensión de idiomas, según proceda.\n\nEl componente material es una tinta a base de plomo que requiere una fabricación especial por un alquimista, con un coste no inferior a 300 po por uso.",
    },
    504: {
        "name": "Invisibilidad, Radio 10'",
        "description": "Este hechizo confiere invisibilidad a todas las criaturas dentro de 10 pies del receptor.\n\nEl equipo transportado y las fuentes de luz están incluidos, pero cualquier luz emitida sigue siendo visible.\n\nEl centro del efecto se desplaza con el receptor.\n\nAquellos afectados por este hechizo pueden verse entre sí.\n\nCualquier criatura afectada que salga del área se vuelve visible, pero las criaturas que entren en el área tras lanzar el hechizo no se vuelven invisibles.\n\nLas criaturas afectadas (distintas del receptor) que atacan anulan la invisibilidad solo para sí mismas.\n\nSi el receptor del hechizo ataca, la invisibilidad de radio 10' se rompe para todos.\n\nLos componentes materiales son los mismos que para el hechizo de invisibilidad.",
    },
    506: {
        "name": "Lanza de Disrupcion",
        "description": "Este hechizo crea un haz de fuerza concusiva y disruptiva que surge de la mano del mago en una trayectoria de 5 pies de ancho y 60 pies de largo.\n\nCualquier criatura atrapada en la trayectoria del haz sufre 5d4 puntos de daño, más 2 puntos de daño por nivel del lanzador (el daño máximo es de 5d4+30); por ejemplo, un mago de nivel 6 infligiría 5d4+12 de daño con la lanza de disrupción.\n\nA las víctimas se les concede una tirada de salvación contra conjuros para reducir el daño a la mitad.\n\nLa energía de la lanza asesta un golpe poderoso contra objetos inanimados y puede destrozar fácilmente muebles ligeros, paredes finas de madera o mampostería frágil.\n\nLas puertas de madera con barrotes pueden ser arrancadas de sus goznes e incluso las puertas sólidas con refuerzos de hierro o la mampostería pesada pueden dañarse seriamente con la lanza de disrupción.\n\nLas criaturas con cuerpos amorfos o no sólidos, como los elementales de fuego o aire y algunas masas y limos, son resistentes a los efectos de esta y solo sufren la mitad del daño, o un cuarto del daño si superan una salvación.",
    },
    510: {
        "name": "Sombra Reptante de Lorloveim",
        "description": "Este hechizo hace que la sombra del mago se alargue, estirándose lejos de su cuerpo a una velocidad de 15 yardas por asalto del lanzador.\n\nPuede alargarse una distancia máxima de 10 yardas por nivel del lanzador.\n\nLa sombra se mueve como una sombra ordinaria, por el suelo y subiendo por las paredes.\n\nEl lanzador puede maniobrar de cualquier manera factible para colocar la sombra donde desee.\n\nUn lanzador podría colocar su sombra sobre una ventana elevada en una torre para espiar a los ocupantes de la torre.\n\nLa sombra no produce sonido y es un 90 % indetectable en cualquier entorno que no sea el más brillante.\n\nMientras el hechizo dura, el ilusionista puede ver, oír y hablar a través de su sombra.\n\nLa sombra no puede tocar físicamente, recoger ni atacar a criaturas u objetos.\n\nSolo puede ser golpeada por hechizos, armas mágicas de +1 o superiores, u otros ataques especiales (como el aliento de dragón).\n\nLa sombra tiene la misma Clase de Armadura que el lanzador.\n\nLos puntos de golpe perdidos por la sombra los sufre el lanzador.\n\nPara lanzar el hechizo debe haber una fuente de luz al menos tan brillante como una vela.\n\nEl componente material es una pequeña estatuilla del lanzador esculpida en un trozo de obsidiana valorada en al menos 1000 po.",
    },
    511: {
        "name": "Agarre de Piedra de Maximillian",
        "description": "Este hechizo debe lanzarse sobre suelo pedregoso, como un suelo de piedra artificial, el suelo de una caverna natural, o un campo sembrado de cantos rodados.\n\nNo es posible lanzar el hechizo sobre una pared o techo de piedra.\n\nEl hechizo provoca que un brazo hecho de piedra (aproximadamente del mismo tamaño que una extremidad humana normal) emerja del suelo bajo cualquier criatura objetivo del lanzador.\n\nLa mano de piedra intenta agarrar la pierna de la criatura objetivo, a quien se le concede una tirada de salvación para evitar el efecto; si la salvación tiene éxito, la mano desaparece.\n\nCada asalto posterior, la mano tiene un 5 % de probabilidad por nivel del lanzador de reaparecer y atacar.\n\nLas criaturas atrapadas por la mano sufren una velocidad de movimiento de 0, penalización de -2 a la CA y penalización de -2 al ataque.\n\nLos personajes atrapados pierden cualquier bonificador de Destreza.\n\nLa mano no causa daño a su víctima.\n\nLa extremidad pétrea tiene CA 2 y puntos de golpe iguales al triple de los puntos de golpe máximos del lanzador.\n\nEl número máximo de puntos de golpe que una mano de piedra puede tener es 60.\n\nEl componente material es una mano miniatura esculpida en piedra, que se desmorona en polvo cuando la mano convocada es destruida o el hechizo expira.",
    },
    512: {
        "name": "Meteoritos Minutos de Melf",
        "description": "Este hechizo permite al mago lanzar pequeños globos de fuego (uno por cada nivel de experiencia que haya alcanzado), cada uno de los cuales estalla en una esfera de un pie de diámetro al contacto, infligiendo 1d4 puntos de daño a la criatura alcanzada.\n\nTambién puede encender materiales combustibles (incluso tablones sólidos).\n\nLos meteoritos se tratan como misiles lanzados por el mago con un bonificador de +2 a las tiradas de ataque y sin penalización por alcance.\n\nLos fallos se tratan como proyectiles tipo granada que infligen 1 punto de daño a las criaturas en un radio de tres pies.\n\nEl hechizo puede lanzarse de dos maneras:\n\nA) El mago descarga cinco meteoritos cada asalto (consulta la sección \"Ataques múltiples e iniciativa\" en el capítulo 9: Combate).\n\nTen en cuenta que esto se prolonga al menos hasta el siguiente asalto.\n\nB) El mago descarga solo un meteorito por asalto.\n\nAdemás de soltar el misil, el lanzador puede realizar otras acciones en el asalto, incluido lanzar otros hechizos, luchar cuerpo a cuerpo o usar dispositivos.\n\nLos hechizos que requieren concentración obligan al mago a renunciar al resto de los misiles para mantener la concentración.\n\nAdemás, si el mago no mantiene un conteo mental exacto del número de misiles que le quedan, ha perdido involuntariamente la parte restante del hechizo.\n\nEl hechizo termina cuando el lanzador ha disparado tantos meteoritos como niveles de experiencia tiene, cuando renuncia a lanzar los que quedan, o cuando un hechizo de disipar magia exitoso se lanza sobre el lanzador.\n\nLos componentes necesarios para el lanzamiento de este hechizo son nitro y azufre formados en una cuenta mediante la adición de brea de pino.\n\nEl lanzador también debe tener un pequeño tubo hueco de proporciones diminutas, hecho de oro.\n\nEl tubo cuesta no menos de 1000 po de fabricación, tan fina es su hechura y grabado mágico, y puede reutilizarse.",
    },
    513: {
        "name": "Maleficio Menor",
        "description": "Este hechizo permite a un mago afectar negativamente a todas las tiradas de salvación de sus enemigos.\n\nLos oponentes bajo la influencia de este hechizo realizan todas las tiradas de salvación con una penalización de -1.\n\nAlternativamente, el mago puede seleccionar cualquier escuela de magia y hacer que sus enemigos realicen todas las tiradas de salvación contra la magia de esa escuela con -2.\n\nEsta penalización no es acumulativa con una penalización a la tirada de salvación derivada del hecho de que el mago sea especialista; la penalización no aumenta a -3.",
    },
    523: {
        "name": "Solvente de Corrosion",
        "description": "Este hechizo conjura una sustancia viscosa corrosiva y ácida de horrible fortaleza en una superficie o criatura dentro del alcance del hechizo.\n\nHasta un pie cuadrado de área superficial por nivel del lanzador puede verse afectado, por lo que un lanzador de nivel 5 puede afectar 5 pies cuadrados, lo suficiente para crear un agujero de 2 pies por 3 pies en una puerta o pared, o empapar por completo a una criatura de tamaño humano.\n\nEl ácido corroe 6 pulgadas de madera, cuero o hueso, 4 pulgadas de piedra o 1 pulgada de metal cada asalto.\n\nContra monstruos compuestos de piedra, metal o madera, el solvente inflige 1d3 puntos de daño por nivel del lanzador en el primer asalto, 1d2 por nivel del lanzador en el segundo asalto y 1 por cada dos niveles del lanzador en el tercer y último asalto.\n\nPor tanto, un mago de nivel 10 que golpee a un Treant con solvente de corrosión inflige 10d3, luego 10d2 y finalmente 5 puntos de daño.\n\nCada asalto, se concede a la víctima una tirada de salvación contra conjuros para reducir el daño a la mitad.\n\nContra la carne, el solvente es mucho menos efectivo; es cáustico y arde dolorosamente, infligiendo 1 punto de daño por nivel del lanzador en el primer asalto, pero ningún daño adicional en el segundo o tercer asalto.\n\nSin embargo, la quemadura en los asaltos siguientes inflige una penalización de -2 a los ataques de la víctima mientras el solvente esté activo.\n\nEl solvente es extremadamente probable que cause daños extensos a la armadura y al equipo de la víctima; pueden aplicarse tiradas de salvación de objeto contra ácido a discreción del DM.\n\nSi la armadura o el equipo es de naturaleza mágica, entonces las tiradas de salvación se realizan con los bonificadores habituales otorgados al objeto mágico.\n\nEl gran alquimista Vandarien desarrolló su solvente para disolver rejillas de hierro, trampas de piedra y madera y otros peligros similares.\n\nLa efectividad del solvente contra criaturas minerales o de madera fue solo un efecto secundario de su investigación.\n\nEl componente material de este hechizo es una mezcla de vinagre, agua y una gota de ácido de dragón negro.",
    },
    525: {
        "name": "Armadura de Espiritu",
        "description": "Este hechizo permite al mago rodearse con una porción de su propia esencia vital, que adopta la forma de un aura centelleante.\n\nLa armadura de espíritu ofrece una protección equivalente a la cota de tiras (CA 16) y otorga al mago un bonificador de +3 a las tiradas de salvación contra ataques mágicos.\n\nLos efectos de la armadura de espíritu no son acumulativos con otros tipos de armadura o protección mágica, pero se aplican los bonificadores de Destreza.\n\nLa armadura de espíritu es efectiva contra armas y ataques mágicos y no mágicos.\n\nNo dificulta el movimiento ni añade peso o carga.\n\nNo interfiere con el lanzamiento de hechizos.\n\nCuando el hechizo termina, el aura se disipa y el lanzador pierde temporalmente una parte de su esencia vital, sufriendo 2d3 puntos de daño a menos que supere una tirada de salvación contra conjuros.\n\nEstos pg perdidos se recuperan a razón de 1 por hora.\n\nNo se sufre daño si la salvación tiene éxito.",
    },
    527: {
        "name": "Lenguas",
        "description": "Este hechizo permite al mago hablar y comprender idiomas adicionales, ya sean lenguas raciales o dialectos regionales.\n\nNo permite al lanzador hablar con animales.\n\nEl hechizo permite al lanzador ser comprendido por todas las criaturas de ese tipo dentro de la distancia de audición, generalmente 60 pies.\n\nEste hechizo no predispone al sujeto hacia el lanzador de ningún modo.\n\nEl mago puede hablar una lengua adicional por cada tres niveles de experiencia.\n\nEl reverso del hechizo cancela el efecto del hechizo de lenguas o confunde cualquier tipo de comunicación verbal dentro del área de efecto.\n\nEl componente material es un pequeño modelo de arcilla de un zigurat, que se hace añicos cuando se pronuncia el hechizo.",
    },
    529: {
        "name": "Muro de Agua",
        "description": "Este hechizo hace aparecer una cortina o campo de agua que permanece intacto y erguido desafiando la gravedad.\n\nEl muro dura tanto como el mago elija concentrarse en mantenerlo o un asalto por nivel si el mago elige no concentrarse en sostenerlo.\n\nEl lanzador puede dar forma al muro de agua de tres maneras:\n\nA. Cortina de agua.\n\nEn esta forma, el mago conjura un plano de agua de 5 pies cuadrados y 1 pie de grosor por nivel de experiencia; por ejemplo, un mago de nivel 5 puede crear cinco secciones de muro de 5 pies × 5 pies × 1 pie, suficientes para bloquear un pasillo abovedado de 15 pies de ancho y 10 pies de alto con una cortina de agua de 1 pie de grosor.\n\nEl borde inferior de la cortina debe apoyarse en el suelo, pero no necesita estar anclado a ambos lados, y permanece cohesionado y erguido durante la duración del hechizo.\n\nUna vez levantado, el muro no puede moverse.\n\nB. Hemisferio.\n\nEn esta manifestación, el muro de agua forma una cúpula de 1 pie de grosor sobre el lanzador, con un radio interior igual a 3 pies más 1 pie por nivel del lanzador; un mago de nivel 7 podría crear una cúpula con un radio de 10 pies.\n\nEl muro debe apoyarse en el suelo.\n\nLa cúpula es inmóvil.\n\nC. Esfera.\n\nSi se lanza bajo el agua, el lanzador puede dar forma al muro de agua en una esfera de 1 pie de grosor, con un radio interior igual a 3 pies más 1 pie por nivel del lanzador (no hay aire en la esfera).\n\nLa esfera se centra en el lanzador y se desplaza con él.\n\nEn cualquiera de sus formas, el muro de agua tiene dos efectos principales.\n\nEn primer lugar, el disparo de proyectiles a través del muro es prácticamente imposible, sufriendo una penalización de -4 al ataque por cada pie de grosor, así como una penalización de -1 al daño por cada dos pies de grosor.\n\nLas criaturas obtienen un bonificador de +1 a las salvaciones contra hechizos de ataque que deben atravesar el muro.\n\nSi el hechizo no permite salvación, ninguna es concedida por el muro de agua.\n\nEn segundo lugar, el paso físico a través del muro se ve obstaculizado; cualquier criatura que intente pasar debe invertir un asalto completo para hacerlo y queda empapada en el proceso.\n\nEl muro de agua puede ser derrotado o sorteado mediante varios hechizos o efectos.\n\nAl final de la duración del hechizo, el agua pierde su cohesión y colapsa, lo que puede sorprender a quienes se resguardan bajo el hemisferio o están junto a la cortina.\n\nTen en cuenta que el agua puede ser dulce (25 % de probabilidad), salada (50 % de probabilidad) o salobre (25 % de probabilidad), aunque la esfera siempre estará compuesta del tipo de agua que la rodea.\n\nEl componente material es un vial lleno de agua bendita de manantial.",
    },
    531: {
        "name": "Doble Acuoso",
        "description": "Este hechizo puede lanzarse sobre cualquier masa de líquido tan grande como un océano o tan pequeña como un vaso de vino.\n\nLa primera criatura cuyo reflejo se proyecte sobre la superficie del líquido libera el hechizo.\n\nCuando el hechizo se activa, el líquido forma inmediatamente una imagen tridimensional exacta de la criatura reflejada.\n\nSi más de una criatura proyecta un reflejo simultáneamente, solo se forma un doble acuoso.\n\nCada criatura tiene la misma probabilidad de ser la víctima del hechizo (tira al azar).\n\nEl tamaño del doble acuoso está limitado por el volumen de fluido disponible.\n\nSi el hechizo se lanzara sobre una jarra llena de cerveza, el doble se formaría a partir de la cerveza, convirtiéndose en un duplicado de la víctima del tamaño de la jarra.\n\nEl doble acuoso nunca excederá el tamaño real de la víctima, independientemente del tamaño de la masa de líquido.\n\nCuando el hechizo se lanza sobre el líquido, su duración se considera permanente hasta que la energía se libere por el reflejo de una criatura.\n\nEl líquido no se evaporará hasta que el hechizo se active.\n\nCuando el doble acuoso se forma, permanece animado durante 1 asalto por nivel de experiencia del lanzador, hasta un máximo de 10 asaltos.\n\nEl doble acuoso intenta tocar a la criatura que ha duplicado.\n\nSolo puede afectar a la criatura a la que se parece.\n\nTiene la misma TABLA y puntos de golpe actuales que la criatura que duplica, pero no puede lanzar hechizos ni usar ninguno de los objetos mágicos o habilidades especiales de la criatura.\n\nEl doble acuoso tiene CA 6 y su velocidad de movimiento es el doble que la de la víctima.\n\nPuede filtrarse bajo puertas y a través de rendijas.\n\nSi el doble acuoso logra tocar a la criatura, se funde con el individuo, cubriendo todo su cuerpo con una piel de líquido.\n\nLa víctima debe intentar una tirada de salvación.\n\nSi tiene éxito, la criatura ha resistido el efecto del hechizo y el doble acuoso \"muere\", convirtiéndose en fluido normal (y empapando a la criatura en el proceso).\n\nSi la salvación falla, el doble acuoso comienza a abrirse camino dentro del cuerpo de la víctima, infligiendo 1d8 puntos de daño por asalto hasta que sea destruido.\n\nEl doble acuoso se disipa si se reduce a cero puntos de golpe o cuando expira la duración del hechizo.\n\nGolpear al doble acuoso mientras está envuelto alrededor de su víctima causa una cantidad igual de daño a la víctima.\n\nLos hechizos de apartar agua, bajar agua y transmutar agua en polvo destruyen instantáneamente un doble acuoso.",
    },
    532: {
        "name": "Muro de Viento",
        "description": "Este hechizo trae consigo una cortina vertical invisible de viento de dos pies de grosor y considerable fuerza: una brisa fuerte suficiente para alejar a cualquier ave más pequeña que un águila o para arrancar papeles y materiales similares de manos desprevenidas.\n\n(En caso de duda, una salvación contra conjuros determina si el sujeto mantiene su agarre).\n\nLos insectos normales no pueden atravesar tal barrera.\n\nLos materiales sueltos, incluso prendas de tela, vuelan hacia arriba cuando son atrapados por un muro de viento.\n\nLas flechas y los virotes se desvían hacia arriba y fallan, mientras que las piedras de honda y otros proyectiles de menos de dos libras de peso reciben una penalización de -4 al primer disparo y de -2 a los siguientes.\n\nLos gases, la mayoría de armas de aliento y las criaturas en forma gaseosa no pueden atravesar este muro, aunque no supone una barrera para las criaturas incorpóreas.\n\nLos componentes materiales son un pequeño abanico y una pluma de origen exótico.",
    },
    535: {
        "name": "Encantar Monstruo",
        "description": "Este hechizo es similar al hechizo de encantar persona, pero puede afectar a cualquier criatura viva, o a varias criaturas de bajo nivel.\n\nEl hechizo afecta a 2d4 Dados de Golpe o niveles de criaturas, aunque solo afecta a una criatura de 4 o más Dados de Golpe o niveles, independientemente del número obtenido.\n\nTodos los sujetos posibles reciben tiradas de salvación contra conjuros, ajustadas por Sabiduría.\n\nCualquier daño infligido por el lanzador o sus aliados en el asalto del lanzamiento otorga a la criatura herida otra tirada de salvación con un bonificador de +1 por punto de daño recibido.\n\nCualquier criatura afectada considera al lanzador del hechizo como un amigo, un aliado o compañero al que debe tratar bien o proteger del daño.\n\nSi la comunicación es posible, la criatura encantada sigue las peticiones, instrucciones u órdenes razonables con la mayor fidelidad (consulta el hechizo de sugestión).\n\nSi la comunicación no es posible, la criatura no daña al lanzador, pero otros en las proximidades pueden estar sujetos a sus intenciones, hostiles o de otro tipo.\n\nCualquier acto abiertamente hostil del lanzador rompe el hechizo, o al menos permite una nueva tirada de salvación contra el encantamiento.\n\nLas criaturas afectadas eventualmente salen de la influencia del hechizo.\n\nEsta es una función del nivel de la criatura (es decir, sus Dados de Golpe):\n\n- 1.er nivel o hasta 2 DG: 5 % de probabilidad por semana de romper el hechizo.\n- 2.º nivel o hasta 3+2 DG: 10 % de probabilidad por semana.\n- 3.er nivel o hasta 4+4 DG: 15 % de probabilidad por semana.\n- 4.º nivel o hasta 6 DG: 25 % de probabilidad por semana.\n- 6.º nivel o hasta 7+2 DG: 35 % de probabilidad por semana.\n- 6.º nivel o hasta 8+4 DG: 45 % de probabilidad por semana.\n- 7.º nivel o hasta 10 DG: 60 % de probabilidad por semana.\n- 8.º nivel o hasta 12 DG: 75 % de probabilidad por semana.\n- 9.º nivel o más de 12 DG: 90 % de probabilidad por semana.\n\nEl día exacto de la semana y la hora del día se determinan en secreto.",
    },
    536: {
        "name": "Confusion",
        "description": "Este hechizo provoca confusión en una o más criaturas dentro del área, creando indecisión y la incapacidad de realizar acciones efectivas.\n\nLas criaturas afectadas actuarán según determine una tirada de d10:\n\n| d10 | Resultado |\n|-----|------------|\n| 1   | Deambulan lejos del lanzador (a menos que se lo impidan) durante toda la duración del hechizo. |\n| 2-6 | Atacan al lanzador o a quien lo acompañe. |\n| 7-9 | Se quedan quietas y confundidas un asalto (luego vuelven a tirar). |\n| 10  | Actúan normalmente durante un asalto (luego vuelven a tirar). |\n\nEl área de efecto se extiende hasta un cubo de 60 pies.\n\nEl hechizo dura 2 asaltos por nivel del lanzador.\n\nLas criaturas con 4 o más Dados de Golpe o niveles no se ven afectadas.",
    },
    538: {
        "name": "Contagio",
        "description": "Este hechizo causa una enfermedad grave y debilidad en una criatura.\n\nEl individuo afectado queda inmediatamente aquejado de una de las siguientes enfermedades: fiebre cerebral (fiebre grave con delirios), fiebre licantrópica (incluyendo la transformación en bestia), malaria (fiebres altas con escalofríos), disentería (diarrea con sangre), ictericia (limadura), epilepsia (ataques), lepra (deformación de las extremidades y caída del cabello), o cualquier enfermedad que el DM considere apropiada.\n\nLa víctima obtiene una tirada de salvación contra enfermedades con -2; el fallo significa que la enfermedad se desarrolla, según la tabla de enfermedades incluida en el manual de campaña apropiado.\n\nLa enfermedad puede ser curada con éxito mediante curar enfermedad.\n\nLos componentes materiales son una gota de sangre de la víctima (de cualquier fuente) y un hueso carbonizado de un muerto.",
    },
    543: {
        "name": "Arma Encantada",
        "description": "Este hechizo convierte un arma ordinaria en una mágica.\n\nEl arma equivale a un arma +1, con +1 a las tiradas de ataque y de daño.\n\nAsí, flechas, hachas, virotes, arcos, dagas, martillos, mazas, lanzas, espadas, etc., pueden convertirse en armas temporalmente encantadas.\n\nDos armas pequeñas (flechas, virotes, dagas, etc.) o un arma grande (hacha, arco, martillo, maza, etc.) pueden verse afectadas por el hechizo.\n\nEl hechizo funciona sobre armas mágicas existentes siempre que el bonificador combinado total sea de +3 o inferior.\n\nLas armas de proyectil encantadas de esta manera pierden su encantamiento cuando impactan con éxito a un objetivo, pero por lo demás el hechizo dura toda su duración.\n\nEste hechizo se usa a menudo en combinación con los hechizos de encantar un objeto y permanencia para crear armas mágicas, lanzándose este hechizo una vez por cada bonificador deseado.\n\nLos componentes materiales de este hechizo son cal en polvo y carbono.",
    },
    544: {
        "name": "Debilitamiento",
        "description": "Este hechizo suprime temporalmente la fuerza vital del sujeto.\n\nEl nigromante apunta con su dedo y pronuncia el encantamiento, liberando un rayo negro de energía chisporroteante.\n\nEl sujeto debe realizar una tirada de salvación contra conjuros, ajustada por Destreza, para evitar el rayo.\n\nEl éxito significa que el hechizo no surte efecto.\n\nEl fallo significa que el sujeto es tratado exactamente como si hubiera sido drenado de niveles de energía por un wight, un nivel por cada cuatro niveles del lanzador.\n\nLos Dados de Golpe, hechizos y otros detalles del personaje dependientes del nivel se pierden o reducen.\n\nAquellos drenados a nivel 0 deben realizar una prueba de shock sistémico para sobrevivir y quedan indefensos hasta que el hechizo expira.\n\nEl efecto del hechizo termina finalmente, ya sea tras 1d4 horas más una hora por nivel del lanzador, o tras seis horas de descanso completo e ininterrumpido.\n\nLas capacidades de nivel se recuperan, pero los hechizos perdidos deben rememorizarse.\n\nLos no muertos son inmunes a este hechizo.",
    },
    545: {
        "name": "Tentaculos Negros de Evard",
        "description": "Este hechizo crea muchos tentáculos gomosos y negros en el área de efecto.\n\nEstos miembros ondulantes parecen brotar de la tierra, el suelo o cualquier superficie bajo los pies, incluyendo el agua.\n\nCada tentáculo tiene 10 pies de largo, CA 4 y requiere tantos puntos de daño para ser destruido como el nivel del mago que lanzó el hechizo.\n\nHay 1d4 de tales tentáculos, más uno por nivel de experiencia del lanzador.\n\nCualquier criatura dentro del alcance de los tentáculos es objeto de ataque según determine el DM.\n\nEl objetivo de un ataque de tentáculo debe realizar una tirada de salvación contra conjuros.\n\nSi tiene éxito, el sujeto sufre 1d4 puntos de daño por el contacto con el tentáculo, y luego el tentáculo es destruido.\n\nEl fallo en la salvación indica que el daño infligido es 2d4 puntos, el miembro de ébano se enrolla alrededor de su sujeto y el daño será de 3d4 puntos en el segundo asalto y siguientes.\n\nDado que estos tentáculos carecen de inteligencia para guiarlos, existe la posibilidad de que aten cualquier objeto (un árbol, un poste, un pilar, incluso al propio mago) o continúen apretando a un oponente muerto.\n\nEl agarre establecido por un tentáculo permanece hasta que el tentáculo sea destruido por alguna forma de ataque o hasta que desaparezca al final de la duración del hechizo.\n\nEl componente de este hechizo es un trozo de tentáculo de un pulpo gigante o calamar gigante.",
    },
    549: {
        "name": "Escudo de Fuego",
        "description": "Este hechizo puede lanzarse de dos formas: un escudo cálido que protege contra ataques basados en frío, o un escudo frío que protege contra ataques basados en fuego.\n\nAmbos devuelven daño a las criaturas que realizan ataques físicos contra el mago.\n\nEl mago debe elegir qué variación memoriza cuando se selecciona el hechizo.\n\nAl lanzar este hechizo, el mago parece inmolarse a sí mismo, pero las llamas son finas y tenues, sin desprender calor, aunque dan una luz igual a solo la mitad de la iluminación de una antorcha normal.\n\nEl color de las llamas se determina al azar (50 % de probabilidad de cada color): azul o verde si se lanza el escudo frío, violeta o azul si se emplea el escudo cálido.\n\nLos poderes especiales de cada escudo son los siguientes:\n\nA) Escudo cálido.\n\nLas llamas son cálidas al tacto.\n\nCualquier ataque basado en frío se salva con un bonificador de +2; o bien se sufre la mitad del daño normal o no se sufre daño.\n\nNo hay bonificador contra los ataques basados en fuego, pero si el mago falla la salvación requerida (si la hay) contra ellos, sufre el doble del daño normal.\n\nEl componente material para esta variación es un poco de fósforo.\n\nB) Escudo frío.\n\nLas llamas son frías al tacto.\n\nCualquier ataque basado en fuego se salva con un bonificador de +2; o bien se sufre la mitad del daño normal o no se sufre daño.\n\nNo hay bonificador contra los ataques basados en frío, pero si el mago falla la salvación requerida (si la hay) contra ellos, sufre el doble del daño normal.\n\nEl componente material para esta variación es una luciérnaga o gusano de luz vivos, o las porciones de la cola de cuatro muertos.\n\nCualquier criatura que golpee al lanzador del hechizo con su cuerpo o armas de mano inflige el daño normal al mago, pero el atacante sufre la misma cantidad de daño.\n\nLa resistencia mágica del atacante, si la tiene, se pone a prueba cuando la criatura golpea realmente al mago.\n\nUna resistencia exitosa hace añicos el hechizo.\n\nEl fallo significa que la resistencia a la magia de la criatura no afecta a esa instancia del hechizo.",
    },
    552: {
        "name": "Maleficio Mayor",
        "description": "Este hechizo opera exactamente igual que el hechizo de maleficio menor de nivel 3, salvo que el mago impone una penalización de -2 a todas las tiradas de salvación de todas las criaturas hostiles dentro del área de efecto.\n\nOpcionalmente, el mago puede crear una penalización de -3 a las tiradas de salvación contra hechizos de una escuela de magia.\n\nEsta penalización no es acumulativa con una penalización a la tirada de salvación derivada del hecho de que el mago sea especialista; la penalización no aumenta a -4.",
    },
    554: {
        "name": "Tormenta de Hielo",
        "description": "Este hechizo puede tener uno de dos efectos, a elección del lanzador: o bien grandes piedras de granizo golpean durante un asalto en un área de 40 pies de diámetro e infligen 3d10 puntos de daño a cualquier criatura dentro del área de efecto, o bien cae aguanieve persistente en un área de 80 pies de diámetro durante un asalto por nivel del lanzador.\n\nLa aguanieve ciega a las criaturas dentro de su área durante la duración del hechizo y hace que el suelo del área esté helado, ralentizando así el movimiento un 50 % y haciendo que haya un 50 % de probabilidad de que una criatura que intente moverse en el área se resbale y caiga.\n\nLa aguanieve también apaga antorchas y pequeños fuegos.\n\nTen en cuenta que este hechizo anulará un hechizo de calentar metal.\n\nLos componentes materiales para este hechizo son una pizca de polvo y unas gotas de agua.",
    },
    555: {
        "name": "Muro Ilusorio",
        "description": "Este hechizo crea la ilusión de una pared, suelo, techo o superficie similar, que es permanente hasta ser disipada.\n\nAparece absolutamente real cuando se observa, incluso mágicamente, como con el hechizo clerical de visión verdadera o su equivalente, pero los objetos físicos pueden atravesarla sin dificultad.\n\nCuando el hechizo se usa para ocultar fosas, trampas o puertas normales, las habilidades de detección demihumanas y mágicas funcionan normalmente, y los registros táctiles o de búsqueda revelan la verdadera naturaleza de la superficie, aunque no hacen desaparecer la ilusión.\n\nEl componente material es un polvo raro que cuesta al menos 400 po y requiere cuatro días para prepararse.",
    },
    556: {
        "name": "Invisibilidad Mejorada",
        "description": "Este hechizo es similar al hechizo de invisibilidad, pero el receptor puede atacar, ya sea mediante descarga de proyectiles, combate cuerpo a cuerpo o lanzamiento de hechizos, y permanecer sin ser visto.\n\nTen en cuenta, sin embargo, que a veces hay señales reveladoras, un centelleo, de modo que un oponente observador puede atacar al receptor del hechizo invisible.\n\nEstas señales solo son perceptibles cuando se buscan específicamente (después de que el personaje invisible haya dado a conocer su presencia).\n\nLos ataques contra el personaje invisible sufren penalizaciones de -4 a las tiradas de ataque, y las tiradas de salvación del personaje invisible se realizan con un bonificador de +4.\n\nLas criaturas con Dados de Golpe elevados que podrían notar oponentes invisibles notarán a una criatura bajo este hechizo como si tuviera 2 Dados de Golpe menos (realizan tiradas de salvación contra conjuros; el éxito indica que detectan al personaje).",
    },
    558: {
        "name": "Refugio Seguro de Leomund",
        "description": "Este hechizo permite al mago invocar mágicamente una robusta cabaña o albergue, hecha del material común en el área donde se lanza el hechizo: piedra, madera o (en el peor de los casos) césped.\n\nEl área del suelo del alojamiento es de 30 pies cuadrados por nivel del lanzador, y la superficie es lisa, limpia y seca.\n\nEn todos los aspectos, el alojamiento se parece a una cabaña normal, con una puerta resistente, dos o más ventanas con postigos y una pequeña chimenea.\n\nAunque el alojamiento es seguro contra vientos de hasta 70 millas por hora, no tiene fuente de calefacción o refrigeración (más allá de las cualidades naturales de aislamiento).\n\nPor tanto, debe calentarse como una vivienda normal, y el calor extremo le afecta desfavorablemente a él y a sus ocupantes.\n\nSin embargo, la morada ofrece una seguridad considerable por lo demás, ya que es tan fuerte como un edificio de piedra normal, independientemente de la composición del material, resiste llamas y fuego como si fuera de piedra y es impermeable a proyectiles normales (pero no a los lanzados por máquinas de asedio o gigantes).\n\nLa puerta, las contraventanas e incluso la chimenea están seguras contra la intrusión; las dos primeras cerradas con cierre mágico y la última asegurada con una rejilla superior de hierro y un humero estrecho.\n\nAdemás, estas tres áreas están protegidas por un hechizo de alarma.\n\nPor último, se invoca un sirviente invisible para dar servicio al lanzador.\n\nEl interior del refugio contiene muebles rudimentarios según los deseos del lanzador: hasta ocho literas, una mesa con caballetes y bancos, hasta cuatro sillas u ocho taburetes y un escritorio.\n\nLos componentes materiales de este hechizo son una pequeña astilla de piedra, cal triturada, unos granos de arena, un poco de agua y varias astillas de madera.\n\nEstos deben aumentarse con los componentes de los hechizos de alarma y sirviente invisible si se quieren incluir estos beneficios (hilo y alambre de plata y una pequeña campana).",
    },
    560: {
        "name": "Localizar Criatura",
        "description": "Este hechizo es similar al hechizo de localizar objeto de nivel 2.\n\nSin embargo, en lugar de encontrar un objeto inanimado, permite al mago encontrar una criatura.\n\nEl mago lanza el hechizo, gira lentamente, y es capaz de sentir la dirección de la persona o criatura, siempre que el sujeto esté dentro del alcance.\n\nEl mago averigua a qué distancia está la criatura y en qué dirección se mueve (si lo hace).\n\nEste hechizo puede localizar una especie general de criatura (un caballo o un umber hulk, por ejemplo) o puede usarse para encontrar a un individuo específico.\n\nEl mago debe haber visto físicamente al individuo o al tipo de criatura al menos una vez desde una distancia no superior a 10 yardas.\n\nA diferencia de localizar objeto, este hechizo no se ve bloqueado por el plomo.\n\nSin embargo, sí lo bloquea el agua corriente (como un río o un arroyo).\n\nLos objetos no pueden encontrarse mediante el uso de este hechizo.\n\nEl componente material es un poco de pelo de sabueso.",
    },
    564: {
        "name": "Creacion Menor",
        "description": "Este hechizo permite al mago crear un objeto de naturaleza no viva y vegetal: bienes blandos, cuerda, madera, etc.\n\nEl lanzador realmente extrae hilos de materia del plano de las Sombras del aire y los teje en el objeto deseado.\n\nEl volumen del objeto creado no puede exceder un pie cúbico por nivel del lanzador.\n\nEl objeto permanece en existencia solo durante la duración del hechizo.\n\nEl lanzador debe tener al menos un pequeño trozo de materia del mismo tipo de objeto que planea crear mediante el hechizo de creación menor: un poco de cáñamo retorcido para crear cuerda, una astilla de madera para crear una puerta, etc.",
    },
    565: {
        "name": "Globo Menor de Invulnerabilidad",
        "description": "Este hechizo crea una esfera mágica inmóvil y tenuemente centelleante alrededor del lanzador que evita que cualquier efecto de hechizo de nivel 1, 2 o 3 penetre (es decir, el área de efecto de cualquiera de tales hechizos no incluye el área del globo menor de invulnerabilidad).\n\nEsto incluye habilidades innatas y efectos de objetos.\n\nSin embargo, cualquier tipo de hechizo puede lanzarse fuera de la esfera mágica, y estos pasan del lanzador del globo a su sujeto sin afectar al globo menor.\n\nLos hechizos de nivel 4 o superior no se ven afectados por el globo.\n\nEl globo puede ser derribado por un hechizo de disipar magia exitoso.\n\nEl lanzador puede salir y volver al globo sin penalización.\n\nTen en cuenta que los efectos de los hechizos en realidad no son interrumpidos por el globo a menos que se lancen directamente a través de él o hacia él: el lanzador aún vería una imagen especular creada por un mago fuera del globo.\n\nSi ese mago entrara entonces en el globo, las imágenes parpadearían, para volver a aparecer cuando el mago saliera del globo.\n\nDel mismo modo, un mago situado en el área de un hechizo de luz todavía recibiría suficiente luz para ver, aunque esa parte del volumen del hechizo de luz en el globo no sería luminosa.\n\nEl componente material del hechizo es una cuenta de vidrio o cristal que se hace añicos al expirar el hechizo.",
    },
    566: {
        "name": "Reenviar Conjuro Menor",
        "description": "Este hechizo es similar al reenviar conjuro de nivel 7, que hace que los hechizos lanzados contra el mago reboten sobre el lanzador original.\n\nEsto incluye hechizos lanzados desde pergaminos y habilidades innatas similares a conjuros, pero excluye los siguientes: efectos de área que no están centrados directamente sobre el mago protegido, efectos de hechizos entregados por contacto, y efectos de hechizos de dispositivos como varitas, bastones, etc.\n\nAsí, un hechizo de luz lanzado para cegar al mago protegido podría ser devuelto y posiblemente cegar al lanzador, mientras que el mismo hechizo no se vería afectado si se lanza para iluminar un área en la que estuviera el mago protegido.\n\nSe pueden reenviar de uno a cuatro (1d4) niveles de hechizo.\n\nEl número exacto lo tira en privado el DM; el jugador nunca sabe con certeza cuán efectivo es el hechizo.\n\nA diferencia de la versión de nivel 7 de este hechizo, reenviar conjuro menor no es capaz de reenviar parcialmente un hechizo.\n\nPor ejemplo, si un mago tiene tres niveles de reenvío, puede reenviar tres hechizos de nivel 1, uno de nivel 1 y otro de nivel 2, o un hechizo de nivel 3.\n\nEn ningún caso puede reenviar hechizos de nivel 4 o superior.\n\nSi el lanzador es objetivo de un hechizo de nivel superior al que es capaz de reenviar, el lanzador recibe todo el impacto del hechizo.\n\nSi el mago protegido y un atacante lanzador de conjuros tienen efectos de reenviar conjuro activos, se crea un campo resonante con los siguientes efectos (consulta la tabla en el libro).\n\nEl componente material de este hechizo es una moneda de plata bien pulida.",
    },
    567: {
        "name": "Invocacion de Monstruos II",
        "description": "Este hechizo es muy parecido al hechizo de invocación de monstruos I de nivel 3, salvo que este hechizo invoca 1d6 monstruos de nivel 2.\n\nEstos aparecen en cualquier lugar dentro del área de efecto del hechizo y atacan a los oponentes del lanzador, hasta que les ordene cesar, expire la duración del hechizo o los monstruos sean derrotados.\n\nEstas criaturas no comprueban moral y desaparecen al morir.\n\nSi no hay oponente con quien luchar y el mago puede comunicarse con ellas, los monstruos invocados pueden realizar otros servicios para el mago invocador.\n\nLos componentes materiales de este hechizo son una bolsa minúscula y una pequeña vela (no necesariamente encendida).",
    },
    568: {
        "name": "Proyectiles de Fuerza de Mordenkainen",
        "description": "Este hechizo crea un globo brillante de energía mágica que sale despedido de la mano del lanzador para golpear infaliblemente a su objetivo, de forma muy similar al hechizo de misil mágico.\n\nEl sujeto debe ser visto o detectado de otro modo para ser objetivo de este hechizo.\n\nEl mago crea un misil en nivel 7 y un misil adicional en nivel 10, tres en nivel 13, cuatro en nivel 16, y así sucesivamente, hasta un máximo de siete misiles en nivel 25.\n\nCada misil inflige 2d4 puntos de daño al objetivo y luego estalla en una explosión concusiva de 3 pies de radio que inflige 1 punto de daño por nivel del lanzador; por ejemplo, un mago de nivel 12 podría conjurar dos proyectiles de fuerza, cada uno de los cuales impacta con 2d4+12 puntos de daño.\n\nLa víctima puede intentar una tirada de salvación contra conjuros para negar el daño de la concusión, pero el impacto del misil en sí no permite salvación.\n\nAl igual que misil mágico, las esferas de fuerza pueden dirigirse a tantos o tan pocos objetivos como el lanzador desee.\n\nLos misiles pueden dañar o destruir fácilmente objetos inanimados, especialmente objetos frágiles o delicados.",
    },
    574: {
        "name": "Proteccion Psiquica",
        "description": "Este hechizo proporciona al lanzador un bonificador de +6 a las tiradas de salvación (o permite una salvación en caso de que normalmente no se permita) contra hechizos o efectos que controlen o destruyan su mente, incluyendo mando, dominación, debilidad mental, retención, tarro mágico, locura, posesión y los poderes psiónicos de dominación, dominación en masa y cambio de personalidad.\n\nCualquier intento de subvertir o destruir la mente del mago se traduce en un bonificador de +6 a la salvación o en una salvación si normalmente no se permite.",
    },
    582: {
        "name": "Invocar Licantropo",
        "description": "Este hechizo solo es efectivo en la noche de luna llena y la noche inmediatamente anterior y posterior.\n\nPara que el hechizo sea efectivo, el lanzador y el licántropo deben estar en el mismo plano de existencia; no hay otra limitación de alcance.\n\nCuando se lanza el hechizo, el licántropo más cercano (según determine el DM) de la especie elegida debe intentar una tirada de salvación.\n\nSi tiene éxito, la criatura no se ve afectada.\n\nSi falla, el licántropo aparece instantáneamente cerca del lanzador.\n\nTras su llegada, la criatura puede atacar libremente al mago a menos que el lanzador haya creado un círculo de protección.\n\nSi hay un círculo, el licántropo aparece en el círculo; de lo contrario, aparece 1d10 pies de distancia del lanzador en una dirección aleatoria (el DM debe usar el diagrama de dispersión para proyectiles tipo granada que se encuentra en la Guía del Dungeon Master para determinar la dirección).\n\nUn círculo de protección es una prisión temporal dibujada con pigmentos especialmente preparados mezclados con limaduras de plata.\n\nEstos pigmentos cuestan 100 po por cada pie de diámetro del círculo (así, un círculo de 10 pies de diámetro cuesta 1000 po).\n\nUn círculo de protección debe tener al menos 5 pies de diámetro; si es más pequeño, el licántropo se libera automáticamente.\n\nPreparar el círculo lleva un turno por pie de diámetro.\n\nIncluso con tal protección, el licántropo puede romper el círculo y cobrarse venganza del invocador.\n\nLa criatura intenta inmediatamente escapar y atacar al mago.",
    },
    588: {
        "name": "Esfera Vitriolica",
        "description": "Este hechizo conjura una esfera de un pie de ácido esmeralda brillante que el lanzador puede dirigir para golpear cualquier objetivo dentro del alcance.\n\nCuando alcanza su objetivo, la esfera estalla y empapa a la víctima en ácido potente.\n\nLa víctima sufre 1d4 puntos de daño por nivel del lanzador (hasta un daño máximo de 12d4) y puede intentar una tirada de salvación contra conjuros para reducir el daño a la mitad.\n\nSi la víctima falla la salvación, sigue sufriendo daño de ácido en los siguientes asaltos, sufriendo dos dados menos de daño cada asalto.\n\nPor ejemplo, un mago de nivel 8 inflige 8d4 de daño con este hechizo en el primer asalto, 6d4 en el segundo, 4d4 en el tercero, 2d4 en el cuarto, y el hechizo termina en el quinto.\n\nCada asalto, el sujeto tiene derecho a una tirada de salvación: el hechizo termina cuando la supera, o cuando el daño del ácido sigue su curso.\n\nEl ácido también puede neutralizarse con sosa, ceniza, lejía o carbón vegetal, o eliminarse con una gran cantidad de agua.\n\nLa esfera vitriólica también salpica ácido en un radio de 5 pies alrededor del objetivo principal.\n\nCualquier criatura dentro del radio de salpicadura debe salvar contra paralización o sufrir un impacto de salpicadura que inflige 1d4 puntos de daño por cada cinco niveles del lanzador.\n\nLos impactos de salpicadura no causan daño continuado.\n\nEl componente material para este hechizo es una gota de bilis de babosa gigante.",
    },
    590: {
        "name": "Muro de Hielo",
        "description": "Este hechizo puede lanzarse de tres maneras: como un plano anclado de hielo, como un hemisferio, o como una sábana horizontal para caer sobre las criaturas con el efecto de una tormenta de hielo.\n\nA) Plano de hielo.\n\nCuando se lanza este hechizo, se crea una sábana de hielo fuerte y duro.\n\nEl muro es principalmente defensivo, deteniendo perseguidores y similares.\n\nEl muro tiene 1 pulgada de grosor por nivel de experiencia del mago.\n\nCubre un área de 10 pies cuadrados por nivel (un mago de nivel 10 puede crear un muro de hielo de 100 pies de largo y 10 pies de alto, un muro de 50 pies de largo y 20 pies de alto, etc.).\n\nCualquier criatura que rompa el hielo sufre 2 puntos de daño por pulgada de grosor del muro.\n\nLas criaturas que usan fuego sufren 3 puntos de daño por pulgada, mientras que las que usan frío solo sufren 1 punto de daño por pulgada al romperlo.\n\nEl plano puede orientarse de cualquier manera siempre que esté anclado a lo largo de uno o más lados.\n\nB) Hemisferio.\n\nEste lanzamiento del hechizo crea un hemisferio cuyo radio máximo es igual a 3 pies más 1 pie por nivel del lanzador.\n\nPor tanto, un mago de nivel 7 puede crear un hemisferio de 10 pies de radio.\n\nEl hemisferio dura hasta que se rompe, se disipa o se derrite.\n\nTen en cuenta que es posible, pero difícil, atrapar oponentes móviles bajo el hemisferio.\n\nC) Sábana de hielo.\n\nEste lanzamiento del hechizo hace que una sábana horizontal caiga sobre los oponentes.\n\nLa sábana cubre un área de 10 pies cuadrados por nivel del lanzador.\n\nLa sábana tiene el mismo efecto que las piedras de granizo de una tormenta de hielo: 3d10 puntos de daño infligidos a las criaturas bajo ella.\n\nUn muro de hielo no puede formarse en un área ocupada por objetos físicos o criaturas; su superficie debe ser lisa e intacta cuando se crea.\n\nLos fuegos mágicos como bolas de fuego y alientos de dragón ígneo derriten un muro de hielo en un asalto, aunque esto crea una gran nube de niebla vaporosa que dura un turno.\n\nLos fuegos normales o mágicos menores no aceleran el derretimiento del muro.\n\nEl componente material de este hechizo es un pequeño trozo de cuarzo o cristal de roca similar.",
    },
    592: {
        "name": "Ilusion Avanzada",
        "description": "Este hechizo es esencialmente un hechizo de fuerzas espectrales que opera a través de un programa (similar al hechizo de ilusión programada) determinado por el lanzador.\n\nAsí, no es necesario que el mago se concentre en el hechizo durante más tiempo que el asalto en que lo lanza, ya que el programa ya ha comenzado y continuará sin supervisión.\n\nLa ilusión tiene componentes visuales, auditivos, olfativos y térmicos.\n\nSi cualquier espectador intenta activamente no creer el hechizo, obtiene una tirada de salvación contra conjuros.\n\nSi algún espectador tiene éxito en no creer y comunica este hecho a otros espectadores, cada uno de esos espectadores obtiene una tirada de salvación contra conjuros con un bonificador de +4.\n\nLos componentes materiales son un poco de vellón y varios granos de arena.",
    },
    595: {
        "name": "Animar Muertos",
        "description": "Este hechizo crea los monstruos no muertos de menor nivel: esqueletos o zombis, generalmente a partir de los huesos o cuerpos de humanos, semihumanos o humanoides muertos.\n\nEl hechizo hace que los restos existentes se animen y obedezcan las simples órdenes verbales del lanzador.\n\nLos esqueletos o zombis pueden seguir al lanzador, permanecer en un área y atacar a cualquier criatura (o solo a un tipo concreto de criatura) que entre en el lugar, etc.\n\nLos no muertos permanecen animados hasta que son destruidos en combate o son rechazados; la magia no puede ser disipada.\n\nLos siguientes tipos de criaturas muertas pueden ser animados:\n\nA) Humanos, semihumanos y humanoides con 1 Dado de Golpe.\n\nEl mago puede animar un esqueleto por cada nivel de experiencia que haya alcanzado, o un zombi por cada dos niveles.\n\nLos niveles de experiencia, si los hay, del muerto se ignoran: el cuerpo de un luchador de nivel 9 recién muerto se anima como un zombi con 2 Dados de Golpe, sin habilidades especiales de clase o raza.\n\nB) Criaturas con más de 1 Dado de Golpe.\n\nEl número de no muertos animados viene determinado por los Dados de Golpe del monstruo (los DG totales no pueden superar el nivel del mago).\n\nLas formas de esqueleto tienen los DG de la criatura original, mientras que las formas de zombi tienen un DG más.\n\nAsí, un mago de nivel 12 podría animar cuatro gnolls zombi (4 × [2 + 1 DG] = 12), o un único esqueleto de gigante de fuego.\n\nTales no muertos no tienen ninguna de las habilidades especiales que tenían en vida.\n\nC) Criaturas con menos de 1 Dado de Golpe.\n\nEl lanzador puede animar dos esqueletos por nivel o un zombi por nivel.\n\nLas criaturas tienen sus DG normales como esqueletos y un DG adicional como zombis.\n\nLos clérigos reciben un bonificador de +1 al intentar rechazarlos.\n\nEste hechizo asume que los cuerpos o huesos están disponibles y razonablemente intactos (¡los de esqueletos o zombis destruidos en combate no lo estarán!).\n\nRequiere una gota de sangre y una pizca de polvo de hueso o una astilla de hueso para completar el hechizo.\n\nEl lanzamiento de este hechizo no es un acto bueno y solo los magos malignos lo usan con frecuencia.",
    },
    598: {
        "name": "Caos",
        "description": "Este hechizo es similar al hechizo de confusión de nivel 4, pero solo las siguientes criaturas reciben tirada de salvación: luchadores, magos especializados en encantamientos, monstruos que no usan magia y tienen Inteligencia 4 o inferior, criaturas de Inteligencia 21 o superior y criaturas con más niveles o Dados de Golpe que el nivel del lanzador.\n\nEl hechizo causa desorientación y severa distorsión perceptiva, creando indecisión y la incapacidad de tomar acción efectiva.\n\nEl hechizo afecta a 1d4 criaturas, más una criatura por nivel del lanzador.\n\nAquellos a quienes se les permite una salvación la realizan con penalizaciones de -2, ajustadas por Sabiduría.\n\nAquellos que superan la salvación no se ven afectados por el hechizo.\n\nLas criaturas afectadas reaccionan así: en una tirada de d10 de 1, las criaturas afectadas deambulan lejos (a menos que se lo impidan) durante la duración del hechizo; en una tirada de 2-6, las criaturas afectadas se quedan de pie confundidas un asalto (luego vuelven a tirar); en una tirada de 7-9, las criaturas afectadas atacan a la criatura más cercana durante un asalto (luego vuelven a tirar); en una tirada de 10, las criaturas afectadas actúan con normalidad durante un asalto (luego vuelven a tirar).\n\nEl hechizo dura un asalto por cada nivel del lanzador.\n\nLas afectadas son comprobadas por el DM para acciones cada asalto durante la duración del hechizo, o hasta que ocurra el resultado \"deambular lejos durante la duración del hechizo\".\n\nLas criaturas que deambulan se mueven tan lejos del lanzador como sea posible usando su modo de movimiento más típico (los personajes caminan, los peces nadan, los murciélagos vuelan, etc.).\n\nLas tiradas de salvación y acciones se comprueban al comienzo de cada asalto.\n\nCualquier criatura confundida que sea atacada percibe al atacante como un enemigo y actúa según su naturaleza básica.\n\nEl componente material para este hechizo es un pequeño disco de bronce y una pequeña varilla de hierro.",
    },
    599: {
        "name": "Nube Mortifera",
        "description": "Este hechizo genera una nube ondulada de vapores amarillentos verdosos espantosos que es tan tóxica como para matar a cualquier criatura con menos de 4+1 Dados de Golpe, hace que las criaturas con 4+1 a 5+1 Dados de Golpe realicen tiradas de salvación contra veneno con penalizaciones de -4 o mueran, y las criaturas de hasta 6 Dados de Golpe (inclusive) realicen tiradas de salvación contra veneno sin modificar o mueran.\n\nAguantar la respiración no tiene efecto sobre la letalidad del hechizo.\n\nAquellos por encima del nivel 6 (o 6 DG) deben abandonar la nube inmediatamente o sufrir 1d10 puntos de daño por veneno cada asalto mientras estén en el área de efecto.\n\nLa nube mortífera se aleja del lanzador a 10 pies por asalto, rodando por la superficie del suelo.\n\nUna brisa moderada hace que altere su rumbo (tira para determinar la dirección), pero no se mueve de vuelta hacia su lanzador.\n\nUn viento fuerte la rompe en cuatro asaltos, y una fuerza de viento mayor impide el uso del hechizo.\n\nUna vegetación muy densa dispersará la nube en dos asaltos.\n\nComo los vapores son más pesados que el aire, se hunden al nivel más bajo del terreno, incluso se vierten por bocas de madriguera o sumideros; así, el hechizo es ideal para matar nidos de hormigas gigantes, por ejemplo.\n\nNo puede penetrar líquidos, ni puede lanzarse bajo el agua.",
    },
    603: {
        "name": "Semimonstruos de Sombra",
        "description": "Este hechizo es similar al hechizo de monstruos de sombra de nivel 4, salvo que los monstruos creados son efectivamente el 40 % de sus puntos de golpe normales.\n\nSi se realiza la tirada de salvación, su potencial de daño es solo del 40 % del normal y su Clase de Armadura es 8.\n\nLos monstruos no tienen ninguna de las habilidades especiales de las criaturas reales, aunque las víctimas pueden engañarse creyendo que sí.",
    },
    606: {
        "name": "Distorsion de Distancia",
        "description": "Este hechizo solo puede lanzarse en un área completamente rodeada o cerrada por tierra, roca, arena o materiales similares.\n\nEl mago también debe lanzar un hechizo de conjurar elemental para invocar un elemental de tierra.\n\nEl elemental sirve sin intentar liberarse cuando el lanzador anuncia que su intención es lanzar un hechizo de distorsión de distancia.\n\nEl hechizo coloca al elemental de tierra en el área de efecto, y el elemental entonces hace que las dimensiones del área se dupliquen o reduzcan a la mitad para quienes viajan sobre ella (a elección del lanzador).\n\nAsí, un corredor de 10 pies × 100 pies podría parecer tener 5 pies de ancho y 50 pies de largo, o 20 pies de ancho y 200 pies de largo.\n\nCuando expira la duración del hechizo, el elemental regresa a su plano.\n\nLa verdadera naturaleza de un área afectada por distorsión de distancia es indetectable para cualquier criatura que viaje por ella, pero el área irradia magia tenuemente, y un hechizo de visión verdadera puede revelar que un elemental de tierra está extendido dentro del área.\n\nEl material necesario para este hechizo es un pequeño trozo de arcilla blanda.",
    },
    611: {
        "name": "Debilidad Mental",
        "description": "Este hechizo se usa únicamente contra personas o criaturas que usan hechizos mágicos.\n\nLa debilidad mental hace que el intelecto del sujeto degenere al de un niño morónico.\n\nEl sujeto permanece en este estado hasta que se use un hechizo de sanar o de deseo para cancelar los efectos.\n\nLos seres usuarios de magia son muy vulnerables a este hechizo; por tanto, sus tiradas de salvación se realizan con los siguientes ajustes: consulta la tabla en el libro.\n\nSe aplican ajustes de Sabiduría a la salvación.\n\nEl componente material de este hechizo es un puñado de arcilla, cristal, vidrio o esferas minerales, que desaparece al lanzar el hechizo.",
    },
    612: {
        "name": "Retener Monstruo",
        "description": "Este hechizo inmoviliza de una a cuatro criaturas de cualquier tipo dentro del alcance del hechizo y a la vista del lanzador.\n\nPuede optar por retener a una, dos, tres o cuatro criaturas.\n\nSi se ataca a tres o cuatro, cada salvación es normal; si se ataca a dos, cada salvación sufre una penalización de -1; si solo se ataca a una, la salvación sufre una penalización de -3.\n\nEl componente material para este hechizo es una barra o varilla de metal duro por cada monstruo a retener.\n\nLa barra o varilla puede ser tan pequeña como un clavo de tres peniques.",
    },
    614: {
        "name": "Procuracion de Khazid",
        "description": "Este hechizo permite al lanzador acceder más fácilmente a componentes de hechizo raros o peligrosos.\n\nEl mago lanza este hechizo sobre un espejo de plata mientras se concentra en una imagen mental del material que desea.\n\nLa probabilidad base de éxito es del 50 %, modificada por los siguientes factores:\n\n- +1 % por nivel del lanzador\n- +10 % si el lanzador ha visto antes el mismo tipo de sustancia u objeto; este bonificador no es acumulativo con el siguiente\n- +20 % si el lanzador tiene una muestra del material o del mismo tipo de objeto en su poder; este bonificador no es acumulativo con el anterior\n- +30 % si el mago conoce la ubicación del objeto deseado\n- -50 % si el lanzador nunca ha visto el mismo tipo de material u objeto antes\n\nSi la tirada porcentual indica fallo, el lanzador es incapaz de localizar el ingrediente deseado y el hechizo termina.\n\nSi la tirada indica éxito, el mago ha localizado el objeto o sustancia y el espejo se convierte en una puerta mágica a través de la cual el lanzador puede ver el objetivo.\n\nEl tamaño de la puerta viene determinado por el tamaño del espejo, hasta un tamaño máximo de 3 pies por 2 pies.\n\nLa puerta aparece siempre a la longitud de un brazo del objetivo, lo que permite al mago meter la mano a través del espejo, agarrar el objeto de su deseo y traerlo de vuelta a través de la puerta.\n\nEl mago debe arriesgar su propia seguridad: la puerta no permite el uso de sondas, cucharones de mango largo, pinzas u otros equipos para recoger el material.\n\nEl lanzador no puede moverse completamente a través de la puerta.\n\nLa puerta desaparece cuando expira la duración del hechizo o cuando el objetivo o el mago se mueven a más de 10 pies de distancia de ella.\n\nLa puerta es visible desde ambos lados, y otras criaturas pueden meter la mano a través de ella.\n\nLas armas de aliento, los ataques de mirada, los proyectiles, los hechizos y ataques similares no pueden lanzarse a través de la puerta.\n\nDado que las criaturas pueden pasar sus extremidades a través de la puerta, pueden usarse ataques físicos y hechizos de contacto.\n\nEl único límite al alcance de este hechizo es que el lanzador y el objetivo deben estar en el mismo plano de existencia.\n\nLas fuerzas elementales (no criaturas) no atravesarán la puerta.\n\nAsí, el mago no corre el riesgo de inundar su laboratorio abriendo una puerta bajo el mar, por ejemplo.\n\nSin embargo, el hechizo no proporciona ningún tipo de protección contra un entorno hostil.\n\nLos componentes materiales son un espejo de plata exquisito por valor mínimo de 10 000 po y un ópalo negro por valor de al menos 1000 po, que debe ser pulverizado y espolvoreado sobre el espejo.\n\nEl espejo no se pierde tras el lanzamiento y puede usarse de nuevo, pero el ópalo en polvo se consume en el lanzamiento.",
    },
    617: {
        "name": "Cofre Secreto de Leomund",
        "description": "Este hechizo permite ocultar un cofre especialmente construido en lo profundo del Plano Etéreo, para ser invocado usando un pequeño modelo del cofre.\n\nEl cofre grande debe estar excepcionalmente bien elaborado y ser caro, construido para el lanzador por artesanos maestros.\n\nSi está hecho principalmente de madera, debe ser ébano, palo de rosa, sándalo, teca, o similar, y todas sus guarniciones de esquina, clavos y herrajes deben ser de platino.\n\nSi está construido de marfil, los herrajes metálicos del cofre deben ser de oro.\n\nSi el cofre es de bronce, cobre o plata, sus guarniciones deben ser de electrum o plata.\n\nEl coste de tal cofre nunca es inferior a 5000 po.\n\nUna vez construido, el mago debe encargar una pequeña réplica (de los mismos materiales y perfecta en cada detalle) hecha, de modo que la miniatura del cofre parezca ser una copia perfecta.\n\n¡Un mago solo puede tener un par de estos cofres en cualquier momento dado, ni siquiera los hechizos de deseo permiten excepciones!\n\nLos cofres en sí no son mágicos, y pueden equiparse con cerraduras, protecciones, etc., como cualquier cofre normal.\n\nMientras toca el cofre y sostiene la pequeña réplica, el mago canta el hechizo.\n\nEsto hace que el cofre grande desaparezca en el Plano Etéreo.\n\nEl cofre puede contener 1 pie cúbico de material por nivel del mago, sin importar su tamaño aparente.\n\nLa materia viva crea un 75 % de probabilidad de que el hechizo falle, así que el cofre se usa típicamente para asegurar libros de hechizos valiosos, objetos mágicos, gemas, etc.\n\nMientras el lanzador tenga la pequeña réplica del cofre mágico, puede recuperar el grande del Plano Etéreo siempre que lo desee.\n\nSi la miniatura del cofre se pierde o destruye, no hay forma, ni siquiera con un hechizo de deseo, de que el cofre grande pueda regresar, aunque se podría organizar una expedición para encontrarlo.\n\nMientras el cofre esté en el Plano Etéreo, hay una probabilidad acumulativa del 1 % por semana de que algún ser lo encuentre.\n\nEsta probabilidad se restablece al 1 % cada vez que se recupera el cofre y se vuelve a lanzar el hechizo para devolverlo al Plano Etéreo.\n\nSi se encuentra el cofre, el DM debe resolver el encuentro y decidir cómo reacciona el ser ante el cofre (por ejemplo, podría ignorarlo, vaciarlo total o parcialmente, o incluso intercambiar o añadir a los objetos presentes).\n\nCada vez que el cofre secreto es devuelto al Plano Material Primario, se abre una ventana etérea durante una cantidad variable de tiempo (generalmente alrededor de un turno); la ventana disminuye lentamente de tamaño.\n\nCuando se abre este agujero entre los planos, comprueba si hay un encuentro etéreo para ver si un monstruo es arrastrado a través de él.\n\nSi el cofre grande no se recupera antes de que la duración del hechizo expire, hay una probabilidad acumulativa del 5 % por día de que se pierda.",
    },
    620: {
        "name": "Baston Magico",
        "description": "Este hechizo permite al bastón de un mago almacenar un nivel de hechizo por cada tres niveles del lanzador.\n\nAsí, un mago de nivel 9 puede almacenar tres niveles de hechizo (tres hechizos de nivel 1, uno de nivel 1 y uno de nivel 2, o un hechizo de nivel 3).\n\nLos hechizos que se vayan a almacenar en el bastón deben memorizarse con normalidad por el mago.\n\nLos hechizos se lanzan luego con normalidad al cargar el bastón; el lanzamiento requiere el tiempo de lanzamiento normal del hechizo más un asalto.\n\nEl hechizo se borra de la memoria y se consumen los componentes materiales.\n\nTodos los hechizos a almacenar deben lanzarse al bastón dentro de 1 turno.\n\nTodos los hechizos almacenados tienen un tiempo de lanzamiento de 1.\n\nLos hechizos permanecen en el bastón hasta que se lanzan o se disipan, o hasta 1 hora por nivel del lanzador.\n\nTras este tiempo, todos los hechizos almacenados se desvanecen.\n\nSolo los magos que conocen el hechizo de bastón mágico pueden lanzar hechizos desde el bastón de otro mago.\n\nEsto se aplica a magos que nunca han aprendido o no podrían lanzar normalmente los hechizos almacenados en un bastón.\n\nEs común, sin embargo, que el propietario del bastón implemente una palabra de comando que deba ser conocida por cualquiera que desee usar el bastón.\n\nEl componente material para este hechizo es un bastón cortado de un fresno.\n\nPor cada nivel de hechizo que el mago pretenda imbuir en el bastón, este debe estar incrustado con rubíes por valor de al menos 1000 po.",
    },
    644: {
        "name": "Muro de Piedra",
        "description": "Este hechizo crea un muro de roca granítica que se funde con las superficies rocosas adyacentes.\n\nSe emplea típicamente para cerrar pasajes, portales y brechas contra los oponentes.\n\nEl muro de piedra tiene 0,25 pulgadas de grosor y hasta 20 pies cuadrados por nivel de experiencia del mago que lanza el hechizo.\n\nAsí, un mago de nivel 12 puede crear un muro de piedra de 3 pulgadas de grosor y hasta 240 pies cuadrados de área superficial (un muro de 12 pies de ancho y 20 pies de alto, por ejemplo, para cerrar completamente un pasaje de 10 pies × 16 pies).\n\nEl muro creado no necesita ser vertical, ni apoyarse sobre una base firme (consulta el hechizo de muro de hierro); sin embargo, debe fundirse y estar sólidamente apoyado por piedra existente.\n\nPuede usarse para puentear un abismo, por ejemplo, o como rampa.\n\nPara este uso, si el vano es de más de 20 pies, el muro debe ser abovedado y con contrafuertes.\n\nEste requisito reduce el área de efecto a la mitad.\n\nAsí, un lanzador de nivel 20 puede crear un vano con un área de 200 pies cuadrados.\n\nEl muro puede ser toscamente moldeado para permitir almenas, parapetos, etc., reduciendo igualmente el área.\n\nLa piedra es permanente a menos que sea destruida por un hechizo de disipar magia o desintegrar, o por medios normales como romper o astillar.\n\nEl componente material es un pequeño bloque de granito.",
    },
    649: {
        "name": "Montura Espectral de Bloodstone",
        "description": "Este hechizo permite a un mago crear una criatura cuasi-real, similar a un buitre.\n\nLa montura voladora puede transportar al lanzador y a otra persona más por cada tres niveles de experiencia del mago (cuatro en nivel 12, cinco en 15, etc.).\n\nTodos los pasajeros deben ser nombrados específicamente durante el lanzamiento.\n\nLa montura espectral parece un buitre esquelético enorme con alas andrajosas.\n\nMientras vuela, emite chillidos espantosos que resuenan por el cielo.\n\nLa montura espectral vuela a una velocidad de movimiento de 4 por nivel del lanzador, hasta una velocidad máxima de movimiento de 48.\n\nAparece con un bocado y riendas, más una silla por cada pasajero.\n\nTodos los animales normales rehúyen la montura espectral y solo los monstruosos la atacarán.\n\nLa montura tiene CA 18 y 10 puntos de golpe más 1 punto de golpe por nivel del lanzador.\n\nSi pierde todos sus puntos de golpe, la montura espectral desaparece.\n\nNo tiene modo de ataque.\n\nEl componente material es un hueso hueco de un buitre.",
    },
    650: {
        "name": "Relampago Encadenado",
        "description": "Este hechizo crea una descarga eléctrica que comienza como un único rayo de 2 pies de ancho, surgiendo de las puntas de los dedos del lanzador.\n\nA diferencia del hechizo de rayo, el relámpago encadenado golpea inicialmente a un objeto o criatura, y luego arquea hacia una serie de otros objetos o criaturas dentro del alcance, perdiendo energía con cada salto.\n\nEl rayo inflige inicialmente 1d6 puntos de daño por nivel del lanzador, hasta un máximo de 12d6 (la mitad del daño si el objeto o criatura supera una salvación contra conjuros).\n\nTras el primer impacto, el relámpago arquea hacia el siguiente objeto o criatura más cercano.\n\nCada salto reduce la fuerza del relámpago en 1d6.\n\nCada criatura u objeto mágico alcanzado recibe una salvación contra conjuros.\n\nEl éxito en esta salvación indica que la criatura solo sufre la mitad del daño del rayo.\n\nLa cadena puede impactar tantas veces (incluyendo el primer objeto o criatura) como niveles tenga el lanzador, aunque cada criatura u objeto solo puede ser alcanzado una vez.\n\nPor tanto, un rayo lanzado por un mago de nivel 12 puede alcanzar hasta 12 veces, causando menos daño con cada impacto.\n\nEl rayo continúa arqueando hasta que haya golpeado al número apropiado de objetos o criaturas, hasta que golpee un objeto que lo conecte a tierra (barrotes de hierro interconectados de una celda o jaula grande, un gran charco de líquido, etc.), o hasta que no haya más objetos o criaturas a los que golpear.\n\nLa dirección no es un factor al trazar los arcos del relámpago encadenado.\n\nLa distancia sí lo es: un arco no puede exceder el alcance del hechizo.\n\nSi el único arco posible es mayor que el alcance del hechizo, el rayo se desvanece en la nada.\n\nLas criaturas inmunes a los ataques eléctricos pueden ser alcanzadas, aunque no sufran daño.\n\n¡Ten en cuenta que es posible que la cadena arquee de vuelta al lanzador!\n\nLos componentes materiales son un poco de pelo, un trozo de ámbar, vidrio o barra de cristal y un alfiler de plata por cada nivel de experiencia del lanzador.",
    },
    656: {
        "name": "Magia Semisombra",
        "description": "Este hechizo es similar al hechizo de magia de sombra de nivel 5, pero este hechizo permite lanzar evocaciones parcialmente reales de nivel 4 y 5 (cono de frío, muro de fuego, muro de hielo, nube mortífera, etc.).\n\nSi se reconoce como magia semisombra (si una salvación contra conjuros tiene éxito), los hechizos dañinos infligen solo el 40 % del daño normal, con un mínimo de 2 puntos por dado de daño.\n\nUna nube mortífera semisombra mata a criaturas con menos de 2 Dados de Golpe e inflige 1d2 puntos de daño por asalto.",
    },
    657: {
        "name": "Hoja Dimensional",
        "description": "Este hechizo hace que un arma sea increíblemente afilada al reducir una de sus dimensiones físicas a una medición infinitesimal.\n\nLa hoja dimensional puede cortar materia con tanto esfuerzo como el que supone mover un palo por el aire.\n\nIncluso la piedra y el hierro pueden tallarse en pedazos con facilidad.\n\nEl hechizo puede lanzarse sobre casi cualquier arma cortante de mano (tipo S), así como sobre algunas armas arrojadizas de este tipo, como el chakram, los shuriken o un hacha de mano.\n\nContra criaturas, la hoja dimensional ignora cualquier parte de la Clase de Armadura derivada de la propia armadura; solo los ajustes mágicos y de Destreza afectan a la CA del oponente.\n\nPor ejemplo, un guerrero con cota de mallas +2 y Destreza 17 normalmente tiene CA 20, pero contra la hoja dimensional solo se aplica el ajuste de 3 puntos por Destreza y el ajuste mágico de 2 puntos, para una CA total de 15.\n\nLas criaturas que llevan armaduras puramente mágicas (como brazales de defensa) pueden conservar el ajuste mágico completo.\n\nLos monstruos con pieles gruesas o endurecidas, como los dragones, pueden perder parte de la Clase de Armadura a discreción del DM.\n\nEl arma gana un bonificador de +2 a las tiradas de ataque y de daño en cualquier caso, pero el portador ignora cualquier ajuste de combate basado en la Fuerza: el poder muscular no ayuda en absoluto a la hoja.\n\nLa hoja dimensional también es bastante efectiva contra objetos inanimados.\n\nCualquier objeto con un diámetro o grosor menor que la longitud de la hoja debe realizar una tirada de salvación contra desintegración al ser golpeado, o quedar limpiamente cortado en dos.\n\nLos objetos más grandes pueden serrarse o cortarse a razón de unos 5 pies cúbicos por asalto.\n\nEs peligroso intentar desarmar una hoja dimensional; el arma utilizada debe realizar una tirada de salvación contra desintegración o ser destruida.\n\nPor último, la hoja también es efectiva contra criaturas en fase o etéreas, ya que parte de su existencia es forzada al Plano Etéreo.\n\nSi el portador tiene alguna forma de detectar criaturas ocultas de esta manera, la hoja puede golpearlas y afectarlas con normalidad, pero sin el poder de anular la Clase de Armadura u otros bonificadores de combate.\n\nEl mago debe tocar el arma para que se vea afectada por el hechizo, pero después cualquiera puede blandirla.\n\nEl componente material para este hechizo es una esquirla de vidrio ultrafina.",
    },
    658: {
        "name": "Desintegrar",
        "description": "Este hechizo hace que la materia desaparezca.\n\nAfecta incluso a materia (o energía) de naturaleza mágica, como la mano contundente de Bigby, pero no a un globo de invulnerabilidad ni a una concha antimagia.\n\nLa desintegración es instantánea, y sus efectos son permanentes.\n\nCualquier criatura individual puede verse afectada, incluso los no muertos.\n\nMateria inerte, hasta un cubo de 10 pies × 10 pies × 10 pies, puede ser aniquilada por el hechizo.\n\nEl hechizo crea un fino rayo verde que hace que el material físico tocado brille y desaparezca, dejando rastros de fino polvo.\n\nLas criaturas que superan con éxito la salvación contra conjuros han evitado el rayo (los objetos materiales han resistido la magia) y no se ven afectadas.\n\nSolo la primera criatura u objeto alcanzado puede verse afectado.\n\nLos componentes materiales son una piedra imán y una pizca de polvo.",
    },
    663: {
        "name": "Constrictor Igneo del Bosque",
        "description": "Este hechizo hace que un tentáculo de llama mágica serpentee desde cualquier fuente existente de fuego natural o mágico.\n\nEl tentáculo llameante tiene 10 pies de largo, CA 13, solo puede ser golpeado por armas mágicas de +2 o superiores, y tiene puntos de golpe iguales al doble del nivel del lanzador.\n\nCualquier criatura dentro de 20 pies del tentáculo está sujeta a ataque según las órdenes del lanzador.\n\nLa víctima debe intentar una tirada de salvación; si tiene éxito, el sujeto ha evitado el enredo, pero sufre 1d6 puntos de daño por fuego por el contacto con el tentáculo.\n\nSi la salvación falla, la víctima queda enredada por la serpiente llameante y sufre 3d6 puntos de daño por fuego cada asalto hasta que el tentáculo sea destruido o el hechizo expire.\n\nEl componente material es una escama de dragón rojo.",
    },
    666: {
        "name": "Globo de Invulnerabilidad",
        "description": "Este hechizo crea una esfera mágica inmóvil y tenuemente centelleante alrededor del lanzador que evita que cualquier efecto de hechizo de nivel 1, 2, 3 o 4 penetre.\n\nAsí, el área de efecto de cualquiera de tales hechizos no incluye el área del globo de invulnerabilidad.\n\nEsto incluye habilidades innatas similares a conjuros y efectos de dispositivos.\n\nSin embargo, cualquier tipo de hechizo puede lanzarse fuera de la esfera mágica; los hechizos pasan del lanzador del globo al sujeto sin efecto sobre el globo.\n\nLos hechizos de nivel 5 o superior no se ven afectados por el globo.\n\nEl globo puede ser derribado por un hechizo de disipar magia exitoso.\n\nEl componente material del hechizo es una cuenta de vidrio o cristal que se hace añicos al expirar el hechizo.",
    },
    669: {
        "name": "Acechador Invisible",
        "description": "Este hechizo invoca a un acechador invisible del Plano Elemental del Aire.\n\nEste monstruo de 8 Dados de Golpe obedece y sirve al lanzador del hechizo en la ejecución de cualquier tarea que se le encomiende.\n\nEs un rastreador impecable dentro de un día del paso de su presa.\n\nEl acechador invisible sigue instrucciones incluso si lo envían a cientos o miles de millas de distancia y, una vez dada una orden, la cumple sin cesar hasta que la tarea se completa.\n\nSin embargo, la criatura está obligada a servir; no lo hace por lealtad o deseo.\n\nPor tanto, resiente las misiones prolongadas o las tareas complejas, e intenta pervertir las instrucciones en consecuencia.\n\nLos acechadores invisibles comprenden el habla común pero no hablan ningún idioma salvo el suyo propio.\n\nLos componentes materiales de este hechizo son incienso ardiente y un trozo de cuerno tallado en forma de creciente.",
    },
    675: {
        "name": "Invocacion de Monstruos IV",
        "description": "Este hechizo es muy parecido al hechizo de invocación de monstruos I de nivel 3, salvo que este hechizo invoca 1d3 monstruos de nivel 4.\n\nEstos aparecen dentro del área de efecto del hechizo y atacan a los oponentes del lanzador, hasta que les ordene cesar, expire la duración del hechizo o los monstruos sean derrotados.\n\nEstas criaturas no comprueban moral y desaparecen al morir.\n\nSi no hay oponente con quien luchar, los monstruos invocados pueden, si el mago puede comunicarse con ellos, y si son físicamente capaces, realizar otros servicios para el mago invocador.\n\nLos componentes materiales de este hechizo son una bolsa minúscula y una pequeña vela (no necesariamente encendida).",
    },
    684: {
        "name": "Sombras",
        "description": "Este hechizo está relacionado con los hechizos de monstruos de sombra y semimonstruos de sombra.\n\nEl hechizo de sombras usa material del Semiplano de las Sombras para formar ilusiones semireales de uno o más monstruos, hasta 1 Dado de Golpe por nivel del lanzador.\n\nTodas las sombras creadas por un mismo hechizo deben ser del mismo tipo, y tienen el 60 % del total de puntos de golpe que tendrían las criaturas reales.\n\nQuienes observan las sombras y fallan sus salvaciones contra conjuros creen en la ilusión.\n\nLas sombras actúan como los monstruos reales con respecto a la Clase de Armadura y las formas de ataque.\n\nLas formas especiales de ataque como petrificación o drenaje de niveles en realidad no ocurren, pero un sujeto que crea que las sombras son reales reaccionará de forma apropiada, hasta que la ilusión sea contrarrestada por un hechizo de disipar magia o la condición sea contrarrestada por un hechizo de sanar.\n\nQuienes realizan tiradas de salvación exitosas ven las sombras como imágenes transparentes superpuestas sobre formas sombrías vagas.\n\nEstas tienen Clase de Armadura 6 y solo causan el 60 % del daño cuerpo a cuerpo normal de los monstruos.",
    },
    692: {
        "name": "Escudo Salvaje",
        "description": "Este hechizo envuelve al lanzador en una banda giratoria de colores centelleantes, ocultándolo por completo.\n\nEl lanzador puede ver con normalidad dentro y fuera del escudo.\n\nEl escudo salvaje protege al lanzador de los efectos de hechizos y objetos mágicos.\n\nEl escudo puede absorber completamente 2d6 niveles de hechizo (es decir, si la tirada de 2d6 resulta en 10, el escudo podría absorber diez hechizos de nivel 1, dos hechizos de nivel 5 o cualquier combinación similar), anulando así sus efectos sobre el lanzador.\n\nTanto los hechizos de área como los dirigidos individualmente al mago salvaje pueden ser absorbidos.\n\nEn el caso de hechizos de área, el escudo salvaje protege solo al mago.\n\nTodos los demás en el área de efecto sufren los efectos normales del hechizo.\n\nEl escudo salvaje también protege contra oleadas descontroladas, ya sean causadas por el propio lanzador o por cualquier otro origen.",
    },
    693: {
        "name": "Golpe Salvaje",
        "description": "Este hechizo se usa principalmente contra lanzadores de conjuros hostiles.\n\nDistorsiona todos los intentos de lanzamiento de hechizos, convirtiendo la energía del hechizo en oleadas descontroladas.\n\nA la víctima de un golpe salvaje se le concede una tirada de salvación; si tiene éxito, el hechizo no surte efecto.\n\nSi la salvación falla, el objetivo queda encerrado dentro de un campo de magia salvaje.\n\nSi la víctima lanza hechizos o usa una carga de un objeto mágico, se crea automáticamente una oleada descontrolada (consulta la Tabla 2).\n\nAl determinar los efectos de esta oleada, el nivel real del mago salvaje que lanzó el golpe salvaje se resta de la tirada del dado, haciendo que los efectos de la oleada descontrolada sean más probables de afectar a la víctima.",
    },
    699: {
        "name": "Controlar No Muertos",
        "description": "Este hechizo permite al mago dar órdenes a 1d6 criaturas no muertas durante un corto periodo de tiempo.\n\nAl lanzar el hechizo, el mago designa la distancia máxima en pies a la que puede estar el no muerto.\n\nEl mago puede dar comandos a las criaturas no muertas que estén dentro de esa distancia.\n\nSi se intenta comandar a un no muerto con más Dados de Golpe que el nivel del mago, debe realizar una salvación contra conjuros o ser controlado.",
    },
    700: {
        "name": "Bola de Fuego Retardada",
        "description": "Este hechizo crea una bola de fuego, con un bonificador de +1 a cada uno de sus dados de daño, que libera su explosión en cualquier momento desde el instante hasta cinco asaltos más tarde.\n\nUna vez que el mago designa cuándo debe explotar, el hechizo se mantiene activo hasta ese momento o hasta que algo lo detone antes.\n\nSi se decide retrasar la explosión, debe haber una chispa de ignición (un hechizo de fuego, una antorcha, una chispa de un zapatazo, etc.) para detonar la bola de fuego de manera prematura; de lo contrario, la bola de fuego estalla a la hora designada.",
    },
    707: {
        "name": "Invocacion Intensificada",
        "description": "Este hechizo mejora la fuerza de las criaturas invocadas por el lanzador mediante hechizos de convocacion/invocación de nivel 1 a 6.\n\nSolo se ven afectados los hechizos que traen criaturas invocadas al mago.\n\nLos primeros dos hechizos de convocación/invocación lanzados por el mago dentro de un turno tras el hechizo de invocación intensificada se ven afectados.\n\nLas criaturas invocadas ganan 2 puntos de golpe por dado de golpe.\n\nLas criaturas afectadas conservan sus puntos de golpe adicionales hasta la expiración normal del hechizo que las invocó.\n\nLos componentes materiales son una pequeña bolsa de cuero y un minúsculo candelabro de plata.",
    },
    722: {
        "name": "Siete Ojos",
        "description": "Este hechizo conjura siete orbes mágicos que flotan sobre la cabeza del lanzador en un anillo de unos 5 pies de diámetro.\n\nLos ojos permanecen durante 1 asalto por nivel, o hasta que el lanzador elija gastar el orbe usándolo en ataque o defensa.\n\nAdemás, mientras exista al menos un ojo, el lanzador obtiene visión de 360° y puede detectar invisibilidad y detectar fase a voluntad, con un alcance de 60 pies.\n\nLos poderes de cada ojo se describen a continuación.\n\n**Ojo de la mente.**\n\nEste orbe protege al lanzador contra ataque mental, encantamiento o influencia, incluidos efectos de carisma, embeleso, retención y emoción.\n\nEl primer ataque así se ve anulado por el orbe y lo destruye a su vez.\n\nSi el mago lo desea, el ojo de la mente puede usarse para encantar persona como el hechizo de mago de nivel 1, aunque esto también gasta el orbe.\n\n**Ojo de la espada.**\n\nEste ojo desvía el primer ataque físico que ponga en peligro al lanzador, incluidos ataques con armas de mano o proyectiles, y luego desaparece.\n\nEl mago también puede emplear el ojo de la espada para crear cinco hojas mágicas que golpean como misiles mágicos con 1d4+1 puntos de daño cada una.\n\n**Ojo del mago.**\n\nUna manifestación de energía pura, como relámpago, fuego, fuerza, frío o un efecto similar, es absorbida por el ojo del mago.\n\nEl ojo también puede proyectar un rayo de 60 pies de largo por 5 pies de ancho que inflige 4d8 de daño (salvación contra conjuros para reducir a la mitad) a todos los que se hallen en su trayectoria.\n\nCualquier uso agota el poder del ojo.\n\n**Ojo del veneno.**\n\nEste ojo puede usarse para detener cualquier ataque o efecto que pueda envenenar al lanzador.\n\nEn el caso de un atacante armado con un arma envenenada, el lanzador puede decidir gastar el ojo del veneno o el ojo de las espadas para bloquear el ataque.\n\nEl ojo también puede usarse para envenenar a una criatura dentro de 30 pies; la víctima debe realizar una salvación contra veneno o morir en un asalto.\n\n**Ojo del espíritu.**\n\nEl primer ataque que afecta a la energía vital de la víctima, incluyendo drenaje de energía, drenaje de fuerza, causar heridas, atrapar el alma, tarro mágico o muerte, es esquivado por el ojo del espíritu.\n\nEl mago puede, en su lugar, elegir agotar el poder del ojo lanzando debilitamiento (consulta el hechizo de mago de nivel 4) sobre un objetivo dentro de 30 pies.\n\n**Ojo del artificio.**\n\nEste ojo desvía y es destruido por el primer ataque dirigido al lanzador desde un dispositivo mágico.\n\nSi el ataque adopta también una forma que pueda ser bloqueada por otro ojo (por ejemplo, el rayo de una varita de relámpagos), el lanzador puede elegir qué ojo se gasta.\n\nSi se usa para atacar en su lugar, el ojo del artificio funciona como un disipar magia lanzado a nivel 8.\n\n**Ojo de piedra.**\n\nEste ojo ofrece protección contra el primer ataque que pueda petrificar al lanzador y luego desaparece.\n\nTambién puede gastarse para lanzar retener persona.\n\nAunque cualquier número de ojos puede defender al mago en el curso de un solo asalto, solo un ojo puede usarse para atacar por asalto.\n\nCuando el lanzador usa un ojo para atacar, no puede lanzar un hechizo, atacar físicamente ni emplear otro objeto mágico en el mismo asalto; ordenar al ojo que descargue sus energías requiere su completa concentración.\n\nLos ataques de los ojos se considera que tienen un modificador de iniciativa de 1 o una velocidad de muy rápida en el sistema de iniciativa de Opciones del Jugador: Combate y Táctica.\n\nEl componente material es siete gemas bendecidas valoradas en al menos 50 po cada una.",
    },
    726: {
        "name": "Dar Forma a Conjuro",
        "description": "Este hechizo otorga al mago salvaje la capacidad de atrapar la energía mágica dirigida contra él y reformarla como desee.\n\nMientras está vigente, el hechizo no muestra signos visibles de su existencia.\n\nNo ofrece protección contra hechizos de efecto de área.\n\nSi un mago salvaje es objetivo de un hechizo u objeto mágico, este hechizo automáticamente le concede una tirada de salvación.\n\nSi la salvación falla, el hechizo del oponente surte efectos normales.\n\nSi la salvación tiene éxito, dar forma absorbe la energía mágica del hechizo del oponente.\n\nEl mago salvaje puede entonces elegir dejar que la energía se disipe o puede usarla al instante para lanzar un hechizo de vuelta al mago oponente.\n\nEl hechizo devuelto debe ser de un nivel igual o inferior al del original y debe estar actualmente memorizado por el mago.\n\nEl acto de devolver el hechizo no le cuesta al mago salvaje ninguno de sus hechizos memorizados.\n\nLa energía del hechizo no puede guardarse; si no se usa de inmediato, se disipa.\n\nPor ejemplo, Hamos, un mago salvaje, está protegido por un dar forma a conjuro y recibe un dedo de muerte (un hechizo de nivel 7).\n\nSupera su tirada de salvación y ahora puede lanzar un hechizo de nivel 7 o inferior.\n\nHamos tiene memorizado actualmente un debilidad mental.\n\nDado que solo es un hechizo de nivel 5, elige lanzarlo de vuelta a su enemigo.\n\nRealiza su prueba de variación de nivel (y no obtiene una oleada descontrolada) y el debilidad mental sale despedido contra su adversario.\n\nHamos aún tiene memorizado su debilidad mental original.\n\nLos dos niveles de hechizo restantes se pierden, dado que no se usaron en el mismo asalto.\n\nSi un mago salvaje es alcanzado por dos hechizos a la vez, puede elegir a cuál dar forma.\n\nSufre todos los efectos del hechizo restante.\n\nEl componente material es un diamante valor mínimo de 2000 po.\n\nCuando se lanza el hechizo, el diamante se transforma en un trozo de carbón.",
    },
    729: {
        "name": "Robar Encantamiento",
        "description": "Este hechizo \"roba\" el encantamiento de un objeto mágico y lo coloca dentro de otro objeto no mágico (el componente material).\n\nAmbos objetos deben ser tocados por el mago durante el lanzamiento.\n\nLos dos objetos deben ser de la misma categoría (arma contundente, arma cortante, anillo, amuleto, escudo, armadura, varita, etc.).\n\nEl encantamiento solo puede transferirse a un objeto no mágico.\n\nSolo se puede transferir la energía de un objeto; no es posible combinar dos objetos mágicos en uno solo.\n\nEl nuevo objeto tiene todas las propiedades del objeto mágico original (incluido el mismo número de cargas, si las tiene).\n\nEn la culminación del hechizo, al objeto mágico original se le concede una tirada de salvación contra desintegración con todos los modificadores que se le permiten como objeto mágico.\n\nLos objetos excepcionalmente poderosos (como los artefactos) pueden considerarse automáticamente como éxito en la salvación a discreción del DM.\n\nSi la salvación tiene éxito, el objeto mágico resiste el efecto y el hechizo termina en fracaso.\n\nSi la tirada falla, el objeto mágico pierde todos sus poderes, que se transfieren al objeto previamente no mágico.\n\nIncluso si el objeto mágico falla su salvación, el éxito del hechizo no está garantizado.\n\nExiste la posibilidad de que el encantamiento se pierda.\n\nLa probabilidad base de que esto ocurra es del 100 %, modificada en -5 % por nivel del lanzador.\n\nAsí, un mago de nivel 20 no tiene posibilidad de perder la magia.\n\nSi el encantamiento se pierde, ambos objetos se vuelven no mágicos.\n\nEl componente material es el objeto no mágico que debe recibir el encantamiento.\n\nDebe ser de igual o mayor valor que el objeto que se va a drenar.",
    },
    730: {
        "name": "Asfixiar",
        "description": "Este hechizo extrae el aliento de todas las criaturas dentro del área de efecto que fallen una tirada de salvación.\n\nSu aliento se coloca dentro de una pequeña bolsa de seda sostenida por el lanzador.\n\nCada asalto, una víctima de este hechizo debe intentar una prueba de Constitución.\n\nSi falla, la criatura sufre 2d4 puntos de daño.\n\nSi tiene éxito, el sujeto ha tomado suficiente aire para reducir el daño a 1d4.\n\nMientras luchan y jadean por aire, las criaturas afectadas se mueven y atacan a la mitad de su ritmo normal, sufren una penalización de -4 a la CA, penalización de -4 al ataque, y pierden todos los bonificadores de combate por Destreza.\n\nLos efectos de este hechizo continúan cada asalto independientemente de si las víctimas permanecen en el área de efecto original.\n\nEl daño se acumula hasta que el hechizo expira, se abre la bolsa de seda o se lanza un hechizo de disipar magia exitoso sobre la bolsa.\n\nLas penalizaciones al combate permanecen vigentes durante 1d3 asaltos tras el final del hechizo.\n\nEl componente material es una pequeña bolsa de seda tachonada de ópalos negros por un valor total no inferior a 5000 po.\n\nLa bolsa no se destruye durante el lanzamiento, pero se vuelve inservible para futuros lanzamientos si se usa un hechizo de disipar magia exitoso sobre ella.",
    },
    756: {
        "name": "Polimorfar Cualquier Objeto",
        "description": "Este hechizo cambia un objeto o criatura en otro.\n\nCuando se usa como un hechizo de polimorfar a otro o piedra a carne, simplemente trata el hechizo como una versión más poderosa, con tiradas de salvación realizadas con penalizaciones de -4 a la tirada de dado.\n\nCuando se lanza para cambiar otros objetos, la duración del hechizo depende de lo radical que sea el cambio realizado desde el estado original hasta su estado encantado, así como de lo diferente que sea en tamaño.\n\nEl DM determina los cambios usando las siguientes pautas: consulta la tabla en el libro.\n\nUn cambio de reino hace que el hechizo funcione durante horas (si se elimina por un reino) o turnos (si se elimina por dos).\n\nOtros cambios afectan de forma similar a la duración del hechizo.\n\nAsí, cambiar un león por una androsfinge sería permanente, pero convertir un nabo en un gusano púrpura sería un cambio con una duración medida en horas.\n\nConvertir un colmillo en un elefante sería permanente, pero convertir una ramita en una espada sería un cambio con una duración de varios turnos.\n\nTodos los objetos polimorfados irradian una magia fuerte, y si un hechizo de disipar magia se lanza con éxito sobre ellos, vuelven a su forma natural.\n\nTen en cuenta que un hechizo de piedra a carne o su reverso afectará a los objetos bajo este hechizo.\n\nComo con otros hechizos de polimorfismo, el daño sufrido en la nueva forma puede resultar en la herida o muerte de la criatura polimorfada.\n\nPor ejemplo, es posible polimorfar a una criatura en roca y molerla hasta convertirla en polvo, causando daño, quizás incluso la muerte.\n\nSi la criatura se hubiera transformado en polvo desde el principio, se necesitarían métodos más creativos para dañarla; tal vez el mago pudiera usar un hechizo de ráfaga de viento para dispersar el polvo por doquier.\n\nEn general, el daño ocurre cuando la nueva forma se altera mediante fuerza física, aunque el DM tendrá que dirimir muchas de estas situaciones.\n\nLa tirada de shock sistémico debe aplicarse a las criaturas vivas, al igual que las restricciones indicadas respecto a los hechizos de polimorfar a otro y piedra a carne.\n\nTambién ten en cuenta que un efecto de polimorfismo a menudo detracta de los poderes de un objeto o criatura, pero no añade nuevos poderes, excepto posiblemente capacidades de movimiento no presentes en la forma anterior.\n\nAsí, una espada vorpal polimorfada en una daga no conservaría la capacidad vorpal.\n\nDel mismo modo, los objetos sin valor no pueden convertirse en objetos valiosos permanentes.\n\nLos componentes materiales de este hechizo son mercurio, goma arábiga y humo.",
    },
    758: {
        "name": "Muro Prismático",
        "description": "Este hechizo permite al mago invocar una pared vertical y opaca, un plano de luz multicolor centelleante que lo protege de todas las formas de ataque.\n\nLa pared destella con todos los colores del espectro visible, siete de los cuales tienen un poder y propósito distintos. La pared es inmóvil, y el lanzador del hechizo puede atravesarla sin sufrir daño.\n\nSin embargo, cualquier criatura con menos de 8 Dados de Golpe que esté dentro de 20 pies de la pared y no se proteja los ojos queda cegada durante 2d4 asaltos por los colores.\n\nCada color de la pared tiene un efecto especial.\n\nCada color también puede ser anulado por un efecto mágico específico, pero los colores deben anularse en el orden preciso del espectro.\n\nLa tabla adjunta muestra los siete colores de la pared, el orden en que se presentan, sus efectos sobre las criaturas que intentan atacar al lanzador, y la magia necesaria para anular cada color.\n\nLas proporciones máximas de la pared son de 4 pies de ancho por nivel de experiencia del lanzador y 2 pies de alto por nivel de experiencia.\n\nUn hechizo de muro prismático lanzado para materializarse en un espacio ocupado por una criatura se ve interrumpido y el hechizo se desperdicia.",
    },
    759: {
        "name": "Pantalla",
        "description": "Este hechizo combina varios elementos para crear una poderosa protección contra la adivinación y la observación directa.\n\nCuando se lanza el hechizo, el mago dicta lo que será y no será observado en el área de efecto.\n\nLa ilusión creada debe ser enunciada en términos generales.\n\nAsí, el lanzador podría especificar la ilusión de él y otro jugando al ajedrez durante la duración del hechizo, pero no podría hacer que los jugadores de ajedrez ilusorios tomaran un descanso, hicieran la cena y luego reanudaran su partida.\n\nPodría hacer que un cruce de caminos pareciera tranquilo y vacío incluso mientras un ejército pasa realmente por el área.\n\nPodría especificar que nadie sea visto (incluidos los transeúntes), que sus tropas no sean detectadas, o incluso que cada quinto hombre o unidad deba ser visible.\n\nUna vez establecidas las condiciones, no pueden cambiarse.\n\nLos intentos de adivinar el área detectan automáticamente la imagen dictada por el lanzador sin tirada de salvación permitida.\n\nLa vista y el sonido son apropiados para la ilusión creada.\n\nUna banda de hombres de pie en una pradera podría ocultarse como una pradera vacía con pájaros piando, etc.\n\nLa observación directa puede permitir una tirada de salvación (como en una ilusión normal), si hay motivo para no creer lo que se ve.\n\nCiertamente, los espectadores en el área se volverían sospechosos si la columna de un ejército en marcha desapareciera en un punto para reaparecer en otro.\n\nIncluso entrar en el área no cancela la ilusión ni permite necesariamente una tirada de salvación, suponiendo que los seres ocultos tengan cuidado de mantenerse fuera del camino de los afectados por la ilusión.",
    },
    763: {
        "name": "Atrapar el Alma",
        "description": "Este hechizo fuerza la fuerza vital de la criatura (y su cuerpo material) a entrar en una gema prisión especial encantada por el lanzador.\n\nLa criatura debe ser vista por el lanzador cuando se pronuncia la palabra final.\n\nEl hechizo puede activarse de dos maneras.\n\nEn primer lugar, la palabra final del hechizo puede pronunciarse cuando la criatura está dentro del alcance del hechizo.\n\nEsto permite la resistencia mágica (si la hay) y una salvación contra conjuros para evitar el efecto.\n\nSi también se pronuncia el nombre real de la criatura, cualquier resistencia mágica se ignora y la salvación contra conjuros sufre una penalización de -2.\n\nSi la salvación tiene éxito, la gema prisión se hace añicos.\n\nEl segundo método es mucho más insidioso, ya que engaña a la víctima para que acepte un objeto disparador inscrito con la palabra final del hechizo, colocando automáticamente el alma de la criatura en la trampa.\n\nPara usar este método, tanto el verdadero nombre de la criatura como la palabra de activación deben inscribirse en el objeto cuando se encanta la gema.\n\nUn hechizo de simpatía también puede colocarse sobre el objeto disparador.\n\nTan pronto como la criatura sujeto recoge o acepta el objeto, su fuerza vital se transfiere automáticamente a la gema, sin el beneficio de la resistencia mágica o de la salvación.\n\nLa gema prisión retendrá a la entidad atrapada indefinidamente, o hasta que la gema se rompa y la fuerza vital sea liberada, permitiendo que el cuerpo material se reforme.\n\nSi la criatura atrapada es una criatura poderosa de otro plano (lo que podría significar un personaje atrapado por un habitante de otro plano cuando el personaje no está en el Plano Material Primario), se le puede exigir realizar un servicio inmediatamente al ser liberada.\n\nDe lo contrario, la criatura puede quedar libre una vez que se rompa la gema que la aprisiona.\n\nAntes del lanzamiento real de atrapar el alma, el mago debe preparar la prisión, una gema de al menos 1000 po de valor por cada Dado de Golpe o nivel de experiencia de la criatura a atrapar (por ejemplo, requiere una gema de 10 000 po de valor para atrapar a una criatura de 10 DG o de nivel 10).\n\nSi la gema no es lo bastante valiosa, se hace añicos cuando se intente la captura.\n\n(Ten en cuenta que, aunque los personajes no tienen concepto de nivel como tal, el valor de la gema necesaria para atrapar a un individuo puede investigarse).",
    },
    775: {
        "name": "Invocacion de Monstruos VII",
        "description": "Este hechizo es muy parecido al hechizo de invocación de monstruos I de nivel 3, salvo que este hechizo invoca uno o dos monstruos de nivel 7 que aparecen un asalto después de que se lance el hechizo, o un monstruo de nivel 8 que aparece dos asaltos después de que se lance el hechizo.",
    },
    778: {
        "name": "Esfera Prismatica",
        "description": "Este hechizo permite al mago invocar un globo opaco e inmóvil de luz multicolor centelleante a su alrededor, dándole protección contra todas las formas de ataque.\n\nLa esfera destella en todos los colores del espectro visible, siete de los cuales tienen poderes y propósitos distintos.\n\nCualquier criatura con menos de 8 Dados de Golpe queda cegada durante 2d4 turnos por los colores de la esfera.\n\nSolo el lanzador del hechizo puede entrar y salir de la esfera prismática sin sufrir daño, aunque puede lanzarla sobre otros para protegerlos.\n\nLa esfera puede ser destruida, color por color, en orden consecutivo, por varios efectos mágicos; sin embargo, el primero debe ser derribado antes de que el segundo se vea afectado, y así sucesivamente.\n\nCualquier criatura que pase a través de la barrera recibe el efecto de cada color aún presente.\n\nLa tabla siguiente muestra los colores y efectos de la esfera prismática, así como lo que anulará cada globo.\n\nTen en cuenta que típicamente el hemisferio superior del globo es visible, ya que el lanzador del hechizo está en el centro de la esfera, por lo que la mitad inferior suele quedar oculta por la superficie del suelo sobre la que se encuentra.\n\nAdemás, una vara de cancelación o un hechizo de disyunción de Mordenkainen destruirá una esfera prismática (pero una concha antimagia no penetrará en ella).\n\nDe lo contrario, cualquier cosa que no sea un artefacto o reliquia que entre en la esfera es destruida, y cualquier criatura está sujeta a los efectos de cada color aún activo, es decir, 70-140 puntos de daño más muerte, petrificación, locura y transporte instantáneo a otro plano.",
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
