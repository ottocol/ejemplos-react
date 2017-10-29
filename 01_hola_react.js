import {React} from 'react'
import {ReactDOM} from 'react-dom'

const Hello = ({name}) => <h1>Hello {name}!</h1>

ReactDOM.render(
  <Hello name={"dude"}/>,
  document.body.appendChild(document.createElement("div"))
)