function mayus(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let param = window.location.href.split('?')[1];
let query = new URLSearchParams(param);

const data = {
    "SiTe": {
        "MBTI": "ISTJ",
        "description": "Es un tipo de personalidad definido por su fuerte sentido de la moralidad y el deber. Les gusta implementar sistemas de reglas que permitan que equipos y organizaciones funcionen con una clara lógica y orden. Dan un gran valor a las normas y a la necesidad de que la realidad se corresponda con cómo deberían ser las cosas. Aunque son personas introvertidas, no rehuyen de la interacción con los demás."
    },
    "SiFe": {
        "MBTI": "ISFJ",
        "description": "Son personas definidas principalmente por sus ganas de proteger y ayudar a los demás. Se esfuerzan por hacer todo lo que se espera de ellas, pero no tienen grandes aspiraciones ni se muestran muy ambiciosas. Tienden a pensar que es malo pedir compensaciones o aumentos a cambio de los sacrificios que realizan a la hora de trabajar, puesto que éste debería ser una meta en sí."
    },
    "NiFe": {
        "MBTI": "INFJ",
        "description": "Son personas muy sensibles, reservadas y movidas por unos ideales muy definidos y que, además, sienten la necesidad de hacer que los demás también se beneficien de estos ideales. Esto hace que sean propensas tanto a la reflexión como a la acción, lo que puede llegar a suponer tanto trabajo que se sobrecargan por tener demasiadas responsabilidades. Muestran una gran capacidad para interpretar exitosamente los estados mentales de los demás y tratan de utilizar esta información para ayudarlas antes de que la otra persona se lo solicite."
    },
    "NiTe": {
        "MBTI": "INTJ",
        "description": "Las personas descritas por esta categoría son personas muy centradas en sus propias ideas y teorías sobre el funcionamiento del mundo, lo que significa que analizan su entorno centrándose en sus ideas sobre cómo opera éste. Son conocedoras de sus propias capacidades y confían en su propio criterio, aunque éste vaya en contra de algunos superiores. <br> <br> Es muy frecuente que lleguen a ser expertas en un ámbito de conocimiento muy específico, ya que les gusta tener suficiente conocimiento sobre algo como para poder tener en cuenta todos los factores que entran en juego en su funcionamiento y, a partir de aquí, saber lo que se puede hacer o lo que va a pasar al futuro."
    },
    "FiSe": {
        "MBTI": "ISFP",
        "description": "Son personas que viven totalmente en el aquí y ahora, en constante búsqueda de la novedad y de situaciones sensorialmente estimulantes. Son reservadas, pero también alegres, espontáneas y cálidas con sus amistades. Tienen un especial talento en el mundo de las artes."
    },
    "FiNe": {
        "MBTI": "INFP",
        "description": "Son individuos que se preocupan mucho por ayudar a los demás desde su posición de personas reservadas y con sus propios valores morales, aunque muestran una sensibilidad estética y artística que les devuelve una de las personalidades más creativas."
    },
    "TiSe": {
        "MBTI": "ISTP",
        "description": "Son personas reservadas, orientadas a la acción ya las soluciones prácticas frente a problemas del día a día. También son definidas por su tendencia hacia el pensamiento lógico y su espontaneidad y autonomía. Les gusta explorar entornos y descubrir formas en las que se pueden interactuar con ellos."
    },
    "TiNe": {
        "MBTI": "INTP",
        "description": "Son uno de los 16 tipos de personalidad más definidos por la propensión a la reflexión. A estas personas les gustan las teorías con capacidad para explicar todo lo que puede ocurrir en un sistema, y su tendencia hacia el perfeccionismo hace que corrijan a los demás en múltiples ocasiones. Valoran más su exactitud en términos teóricos que el pragmatismo y la resolución de problemas concretos."
    },
    "SeTi": {
        "MBTI": "ESTP", 
        "description": "Las personas que pertenecen a esta categoría son espontáneas, alegres y activas, pero al igual que lo que ocurre con otras personalidades de función extrovertida, tienden a ejercer dominio sobre los demás, en este caso a través de su capacidad de observación y carisma."
    },
    "NeTi": {
        "MBTI": "ENTP",
        "description": "Son personas especialmente movidas por la curiosidad y los retos que para ser resueltos requieren afrontar preguntas intelectualmente estimulantes. Su agilidad mental y su facilidad para detectar inconsistencias lógicas hace de ellas a personas predispuestas a interesarse por la ciencia o la filosofía. Además, su tendencia a mostrarse competitivas las hace personas muy activas durante el día, siempre intentando llegar a soluciones innovadoras a problemas complejos."
    },
    "SeFi": {
        "MBTI": "ESFP",
        "description": "Son personas alegres y espontáneas que disfrutan entreteniéndose y entreteniendo a los demás. La diversión es uno de los pilares más importantes de sus vidas, y son de trato cercano y temperamento cálido. Aman la novedad y hablar sobre sus experiencias personales."
    },
    "NeFi": {
        "MBTI": "ENFP",
        "description": "Son uno de los 16 tipos de personalidad con mayor propensión al pensamiento creativo, las artes y la sociabilidad. Son alegres, disfrutan de la interacción con otras personas, y actúan teniendo en mente su posición como parte de un 'todo' formado por la humanidad, y no se muestran individualistas. De hecho, suelen involucrarse en tareas colectivas para ayudar a los demás, pensando en el impacto social de sus acciones. Sin embargo, también se distraen fácilmente y es frecuente que posterguen tareas que consideran aburridas o demasiado simples y rutinarias."
    },
    "TeSi": {
        "MBTI": "ESTJ",
        "description": "Los ESTJ son personas a las que les gusta tener el control sobre lo que ocurre a su alrededor, siempre encuentran la manera de que todo funcione como debe ser y, si es necesario, la implementan ellos mismos."
    },
    "TeNi": {
        "MBTI": "ENTJ",
        "description": "Las personas descritas por esta categoría son comunicativas, de pensamiento ágil y analítico y predispuestas a encabezar equipos y organizaciones. Se adaptan bien al cambio y hacen que sus estrategias también. Además, casi siempre saben cómo contar sus proyectos o historias de forma que resulten de interés para el resto, lo que los convierte en líderes muy aptos."
    },
    "FeSi": {
        "MBTI": "ESFJ",
        "description": "Se trata de personas muy volcadas en la atención de las necesidades de los demás, especialmente si forman parte de su círculo cercano (familia y amistades). Por eso siempre que pueden prestan su ayuda y procuran que sus círculos sociales cercanos estén siempre estables y con buena salud. Por eso tienden a evitar que aparezcan conflictos fuertes y se muestran diplomáticas cuando hay choques de intereses."
    },
    "FeNi": {
        "MBTI": "ENFJ",
        "description": "Son personas que aprenden constantemente sobre todos los ámbitos del conocimiento (o buena parte de ellas) y ayudan a aprender a las demás, guiándolas en su propia evolución. Les gusta ofrecer tutela y consejos, y son muy buenas influyendo en la conducta de los demás. Se centran en sus valores e ideales, y hacen lo posible por mejorar el bienestar del mayor número de personas a través de sus ideas y sus acciones."
    },
}

let big = "";
let big_num = -100;

let functions = {};

for (let pair of query.entries()) {
    functions[pair[0]] = parseInt(pair[1], 10);

    console.log(typeof pair[1], typeof big_num);

    if (parseInt(pair[1], 10) > big_num) {
	big_num = parseInt(pair[1], 10);
	big = pair[0];
    }

}

let secondary = "";
let secondary_num = -100;

switch (big) {
    case "te":
    case "fe":
	if (functions["si"] > functions["ni"]) {
	    secondary = "si";
	} else {
	    secondary = "ni";
	}
	break;

    case "ti":
    case "fi":
	if (functions["se"] > functions["ne"]) {
	    secondary = "se";
	} else {
	    secondary = "ne";
	}
	break;

    case "si":
    case "ni":
	if (functions["te"] > functions["fe"]) {
	    secondary = "te";
	} else {
	    secondary = "fe";
	}
	break;

    case "se":
    case "ne":
	if (functions["ti"] > functions["fi"]) {
	    secondary = "ti";
	} else {
	    secondary = "fi";
	}
	break;
}

console.log(secondary);

console.log(big, big_num);

let pers = mayus(big) + mayus(secondary)

document.getElementById("result").innerHTML += data[pers].MBTI + " (" + pers + ")";
document.getElementById("image").src = "./images/" + data[pers].MBTI + ".png"
document.getElementById("description").innerHTML = data[pers].description

let content = document.getElementById("mail").href;

document.getElementById("mail").setAttribute("href", content + " " + pers);




