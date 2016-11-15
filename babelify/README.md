# Ejemplo de JSX/ES2015 en el navegador con Babelify/Browserify

## Prerrequisitos

Si no están instaladas las herramientas en línea de comandos `browserify` y `watchify` debemos instalarlas.

```bash
npm install -g browserify watchify
```

Estas herramientas permiten usar módulos al estilo Node pero en el navegador. Así podemos por ejemplo instalar React con `npm` y usar `require` en el HTML  para cargar la librería.

Como estamos usando `npm` nótese que tenemos un `package.json` en nuestro proyecto. Por tanto instalaríamos sus dependencias con

```bash
npm install
```

## React sin JSX/ES2015

`browserify` lo que hace es "juntar" todo nuestro JS, que podemos tener dividido en módulos al estilo Node, en un solo archivo `.js` que ya podemos incluir en el navegador con un *tag* `<script src="...">`. 

```bash
browserify js/main_no_jsx.js -o bundle.js -d
```

donde nuestro fichero `.js` "principal" que es el que hace el `require` del resto es `main_no_jsx` y el fichero resultante queremos que sea `bundle.js`. El *switch* `-d` lo incluimos para poder depurar en el navegador nuestros `.js` individualmente, ya que si no el único que sería accesible sería el `bundle.js` donde está todo nuestro código "mezclado" y transformado por browserify y por tanto es difícil o imposible de depurar.

> Si modificamos algo de cualquier `.js` tendremos que volver a ejecutar el comando. `watchify` es lo mismo que `browserify` pero se queda ejecutándose y vuelve a generar el *bundle* si detecta cambios. Así que nuestra orden sería mejor como 

```bash
watchify js/main_no_jsx.js -o bundle.js -d
```

## React con JSX/ES2015

Si usamos JSX o ES2015 en nuestro código JS necesitaremos además de juntarlo todo en un *bundle* un paso previo de traducción a ES5 ,que es la versión de JS que implementan los navegadores actuales. Para eso usamos una herramienta llamada `babelify`, que nos permite usar con `browserify` un traductor ES2015->ES5 llamado `babel`.

En un caso genérico lo primero sería instalar las dependencias en nuestro proyecto 

```bash
npm install --save-dev babelify
npm install --save-dev babel-preset-es2015 babel-preset-react
```

y ahora modificamos el comando `watchify` para que haga uso de `babelify`

```bash
watchify js/main.js -o bundle.js -d -t [ babelify --presets [ es2015 react ] ]
```