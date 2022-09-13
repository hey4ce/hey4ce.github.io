# Registro del desarrollo

## Primer día

He empezado el desarrollo haciendo un diseño básico de la web dividiendo la
sección `<body>` en `<header>`, `<div id="content">` y `<footer>`. También he
creado los archivos index.js para tener ahí todo el código en JavaScript e
index.css para tener todo el estilo.

## Segundo día

He hecho toda la división de la sección de cada pregunta junto a su barra de
conformidad, de forma que el texto se ve bien dentro sin tocar con los bordes
redondeados para dar una mayor esteticidad y ampliado el tamaño de la barra ya
que el que viene por defecto es muy pequeño para la función que se le va a dar.

## Tercer día

Dejando de lado el diseño en HTML y CSS de la web he empezado el desarrollo de
la parte en JavaScript de esta, haciendo que a cada actualización de una barra
se ejecute un código que modifique la puntuación guardada para esta pregunta en
la lista interna del programa. Tras ejecutarse esto se vuelven a sumar todas
las puntuaciones en base a cada función y se guardan en otra lista interna.

## Cuarto día

He creado el archivo html donde se enseñará el resultado haciendo la llamada al
mismo archivo css de `index.html` y la misma estructura pero solo teniendo el
texto en el `div` del contenido. Tras esto he programado el selector de función
principal y auxiliar escogiendo la principal en base a la puntuación más alta y
la auxiliar teniendo las dos única opciones de auxiliar para la principal.
