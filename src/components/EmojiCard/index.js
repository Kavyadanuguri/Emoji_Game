// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, getEmoji} = props
  const {emojiName, id, emojiUrl} = emojiDetails

  const getResult = () => {
    getEmoji(id)
  }

  return (
    <li className="emoji-list-container" key={id}>
      <button className="emoji-btn1" type="button" onClick={getResult}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
