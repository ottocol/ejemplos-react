
var React = require('react')
var MiComponente = React.createClass({
    render: function () {
        return <div>
            <h1>Otro componente más</h1>
            <p> {this.props.saludo} soy otro componente React más, y uso JSX </p>
        </div>
    }
})

module.exports = MiComponente