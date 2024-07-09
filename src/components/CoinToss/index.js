// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    tossImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    total: 0,
    heads: 0,
    tails: 0,
  }

  onButtonClick = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const {total, heads, tails} = this.state
    if (tossResult === 0) {
      this.setState({
        tossImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        total: total + 1,
        heads: heads + 1,
      })
    } else {
      this.setState({
        tossImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        total: total + 1,
        tails: tails + 1,
      })
    }
  }

  render() {
    const {tossImage, total, heads, tails} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={tossImage} className="img" alt="toss result" />
          <button className="button" type="button" onClick={this.onButtonClick}>
            Toss Coin
          </button>
          <div className="counter-container">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
