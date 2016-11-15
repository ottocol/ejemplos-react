
var React = require('react')
var MiComponente = React.createClass({
    render: function () {
        return React.DOM.div(null,
            React.DOM.h1(null, 'Otro componente más'),
            React.DOM.p(null, this.props.saludo + ', yo soy otro componente React más')
        )
    }
})

module.exports = MiComponente