// Write your code here.
import './index.css'

const FaqItem = props => {
  const {listItem, myfunction} = props
  const {id, answerText, initial, questionText} = listItem
  console.log(id)
  const imageUrl = initial
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const imageAlt = initial ? 'minus' : 'plus'
  const clickingmyitem = () => {
    myfunction(id)
  }
  return (
    <li className="myitems">
      <div className="first">
        <h1 className="item_heading">{questionText}</h1>
        <button onClick={clickingmyitem} className="btn" type="button">
          {' '}
          <img className="image1" src={imageUrl} alt={imageAlt} />
        </button>
      </div>
      {initial ? (
        <div className="second">
          <hr className="horizontal_line" />
          <p className="item_desc">{answerText}</p>
        </div>
      ) : (
        ''
      )}
    </li>
  )
}

export default FaqItem
