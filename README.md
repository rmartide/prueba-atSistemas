
# PruebaAtsistemas
## Autor
Rodrigo Martín de Lamo

## Desarrollo

- Se ha utilizado Angular Material para el estilo.
- El back está mockeado con angular-in-memory-web-api.
- La paginación se hace en el front usando el paginador de material.
- El interceptor actúa ante todas las llamadas al back y junto a un servicio muestra un spinner en la barra de navegación.

## Dockerización

Es una versión muy sencilla en la que se copia todo el contenido a una imagen de node, se instalan los paquetes de npm, se instala la build y se ejecuta un proxy con node.

Para ponerlo en funcionamiento basta con ejecutar el comando npm run dockerizar y una vez haya terminado abrimos en el navegador la dirección http://localhost:9999.

## Tests

Para los tests se ha utilizado jest con ng-mocks.