var React = require('react')
var ReactDOM = require('react-dom')
var MiComponente = require('./miComponente.js')
ReactDOM.render(
    //creamos la instancia del componente al estilo HTML.
    // Los atributos de "props" se pasan como atributos HTML
    <MiComponente saludo="¿Qué tal? ,"/>,
    document.getElementById('miComponente')
)