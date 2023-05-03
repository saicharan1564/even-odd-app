import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  incrementValue = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Count {count}</h1>
          <p className="paragraph">
            Count is {count % 2 === 0 ? 'Even' : 'Odd'}
          </p>
          <button
            className="button"
            type="button"
            onClick={this.incrementValue}
          >
            Increment
          </button>
          <p className="caution">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
