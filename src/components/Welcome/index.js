// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {subscribe: false}

  renderButton = () => {
    const {subscribe} = this.state
    console.log(this.state)

    this.setState(prevState => ({subscribe: !prevState.subscribe}))
  }

  getButtonText = () => {
    const {subscribe} = this.state
    return subscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="bg-container">
        <h1 className="heading-1">Welcome</h1>
        <h2 className="heading-2">Thank you! Happy Learning</h2>
        <button className="button" onClick={this.renderButton}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
