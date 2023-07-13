import {Component} from 'react'

import './index.css'

class Greetings extends Component {
  state = {
    userInput: '',
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {userInput} = this.state
    return (
      <div className="greetings-container">
        <div className="responsive-container">
          {/* UNControlled Input which is handel by BROWSER it mean what to be displayed in the input is desides by the browser */}
          <input
            type="text"
            className="input-filed"
            onChange={this.onChangeUserInput}
          />
          {/* Controlled Input which is handel by REACT STATE */}
          <input
            type="text"
            className="input-filed"
            value={userInput}
            onChange={this.onChangeUserInput}
          />
          <p className="paragraph">Hello, {userInput}</p>
        </div>
      </div>
    )
  }
}

export default Greetings
