var React = require('react')
var ReactDOM = require('react-dom')
var MiComponente = require('./miComponente_no_jsx.js')
ReactDOM.render(
    React.createElement(MiComponente, {saludo: 'EEyyyy!!!'}),
    document.getElementById('miComponente')
)