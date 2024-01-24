// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, score, isValue} = props

  return (
    <nav className="nav-container">
      <div className="nav-con1">
        <img
          className="nav-img1"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
        />
        <h1 className="nav-h1">Emoji Game</h1>
      </div>
      {isValue && (
        <div className="nav-con1">
          <p className="nav-p1">Score: {score}</p>
          <p className="nav-p1"> Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
