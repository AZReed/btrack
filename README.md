This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Instalacion y Uso

Lanzar primero servidor local. https://github.com/Beetrack/frontend-test

```
npm install
npm start
```

Lanzar después la aplicación React:

```
yarn install (o con npm)
yarn start (o con npm)
```

La aplicación se ejecutará en:

```
localhost:3001
```

## Consideraciones

En el archivo package.json, bajo "scripts" hay una modificación para que corra en el puerto 3001, ya que el 3000 lo usa el servidor local.

Tuve problemas para sobreescribir el estilo que viene por defecto de la librería reacstrap, es la primera vez que lo uso,
así que no me quedó más remedio que escribir el stilo en el mismo código de react para solventar este problema.