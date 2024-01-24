// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {playAgain, score} = props
  const imgUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const text = score === 12 ? 'You Won' : 'You Lose'
  const compliment = score === 12 ? 'Best Score' : 'Score'
  const onAgain = () => {
    playAgain()
  }

  return (
    <div className="card-container1">
      <div className="card-con1">
        <h1 className="card-h1">{text}</h1>
        <p className="card-p1">{compliment}</p>
        <p className="card-p2"> {score}/12</p>
        <button className="card-btn1" type="button" onClick={onAgain}>
          Play Again
        </button>
      </div>
      <div>
        <img className="card-img1" src={imgUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
