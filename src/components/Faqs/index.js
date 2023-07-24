// Write your code here.
import {Component} from 'react'
import Faqitem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.state = {mylist: props.faqsList}
  }

  clickingitem = id => {
    console.log(id)
    this.setState(prevState => ({
      mylist: prevState.mylist.map(each => {
        if (id === each.id) {
          return {...each, initial: !each.initial}
        }
        return each
      }),
    }))
  }

  render() {
    const {initial, mylist} = this.state
    console.log(initial)
    const adding = mylist.map(each => ({...each, initial: false}))
    console.log(adding)
    return (
      <div className="bg_container">
        <div className="faq_container">
          <h1 className="heading">FAQs</h1>
          <ul className="list_container">
            {mylist.map(each => (
              <Faqitem
                myfunction={this.clickingitem}
                key={each.id}
                listItem={each}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
