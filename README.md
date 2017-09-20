# Photobooks

Este repositorio forma parte del proyecto https://github.com/EliasBF/photobooks-real-example-app

## Requerimientos

- [Nodejs](https://nodejs.org/en/download/current/) >= 8
- [RethinkDb](https://rethinkdb.com/docs/install/) >= 2.3.6

## Configuración

- Para iniciar esta aplicación es recomendable utilizar la version completa del proyecto en https://github.com/EliasBF/photobooks-real-example-app.

- Para iniciar esta aplicación localmente debes tener también el proyecto [photobooks-db](https://github.com/EliasBF/photobooks-db-real-example-app) en el mismo directorio, debido a que photobooks-db esta definido en el package.json como una dependencia local (ve al proyecto https://github.com/EliasBF/photobooks-real-example-app para acceder a photobooks-db).

- Inicia todos o el microservicio que desees utilizar (rethinkdb debe estar en ejecución).

	```
  npm run [endpoint]-dev
	```

##### Listo, puedes acceder a la API desde la url que veas en los logs.
