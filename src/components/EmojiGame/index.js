import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
} */

// Write your code here.

class EmojiGame extends Component {
  state = {isTrue: true, filteredList: [], topScore: 0, score: 0}

  playAgain = () => {
    const {isTrue, score} = this.state
    this.setState({isTrue: true, score: 0})
    console.log(isTrue)
    console.log(score)
  }

  getEmoji = id => {
    const {emojisList} = this.props
    const {filteredList, isTrue, score, topScore} = this.state
    const isIdPresent = filteredList.includes(id)
    const filteredListLength = filteredList.length
    console.log(isTrue)
    console.log(topScore)
    console.log(score)

    if (isIdPresent) {
      if (topScore <= filteredListLength) {
        this.setState({topScore: filteredListLength})
      }
      this.setState({isTrue: false})
      filteredList.length = 0
    } else {
      if (filteredListLength === emojisList.length - 1) {
        this.setState({isTrue: false})
        this.setState({
          score: emojisList.length - 1,
          topScore: emojisList.length,
        })
      }
      this.setState(prevState => ({
        filteredList: [...prevState.filteredList, id],
      }))
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {isTrue, topScore, score} = this.state
    const shuffledList = this.getShuffledEmojisList()
    return (
      <div className="main-bg-container">
        <NavBar topScore={topScore} isValue={isTrue} score={score} />
        {isTrue && (
          <ul className="main-ul-container">
            {shuffledList.map(each => (
              <EmojiCard
                emojiDetails={each}
                getEmoji={this.getEmoji}
                key={each.id}
              />
            ))}
          </ul>
        )}
        {!isTrue && (
          <div className="main-container1">
            <WinOrLoseCard
              playAgain={this.playAgain}
              topScore={topScore}
              score={score}
            />
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
