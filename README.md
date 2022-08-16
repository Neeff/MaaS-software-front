# MaaS-software-front

This template should help get you started developing with Vue 3 in Vite.

### System dependencies
 - node v17.2.0

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Description 
 - Proyecto Front end que provee la interfaz para poder interactuar con servicios relacionados con el área de monitorización, específicamente a la asignación de turnos u horas 
 - La aplicación cuenta con tres secciones principales
 	- Sección de turnos disponibles por servicio: En este apartado se pueden manipular las horas disponibles por ingenieros mediante una interfaz de checkbox habilitada para cada hora en particular.
 	- Sección de turnos asignados, aquí el usuario podrá visualizar una lista de horas y sus asignaciones respectivas, además de poder ver el recuento de horas asignadas por ingeniero. 
 - Crear un servicio
 	 - Sección que permite generar un servicio junto con sus ingenieros asignados.


- La aplicación como se menciona anteriormente cuenta con tres vistas que a su vez hacen uso de componentes más pequeños, junto con ellos se opta por utilizar como manejador de estado pinia, definiendo tres tiendas 
	 - services
	 - available_hours
	 - shifts
	las cuales mantendran el estado de la aplicacion y sus respectivas acciones
	
	Al momento de iniciar a aplicacion es requerida una lista de sercvicios.
	al seleccionar un servicio particular, se inicia una peticion para obtener horas disponibles, turnos asignados y una lista de semanas ademas de la semana actual.
	
- Components
	- AssignedShifts.vue
		- Componente encargado de la logica para renderizar tarjetas contenedoras con los turnos asignados a distintos ingenieros
	- AvailabilityTable.vue
		- Component encargado de la logica para renderizar una tarjeta por dia de la semana donde se pintaran los datos relacionados a las horas disponibles.
	- HoursPerEngineer.vue
		- Componente encargado de mostrar metricas, y calcular la cantidad de horas asignadas a cada ingeniero.
	- NavBar.vue
		- Componente que se encarga de la logica de navegacion haciendo uso de vue router, es quien hace las llamadas inciales para obtener los servicios.
	- WeekPicker
		- Componente que permite renderizar un dropdown con x cantidad de semanas, funciona como switch para intercambiar las horas disponibles por semana al igual que los turnos asignados.
	
