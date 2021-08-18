import './listOfNotes.scss'
import React, {Component} from 'react'
import CardNotes from "../cardNote/cardNotes";

export default class ListOfNotes extends Component {
  render() {
    const {notes} = this.props
    return (
      <ul className={'list-of-notes'}>
        {notes.map(({title, text}, index) => {
          return (
            <li key={index} className={'list-of-notes_item'}>
              <CardNotes title={title} text={text}/>
            </li>
          )
        })}
      </ul>
    )
  }
}
