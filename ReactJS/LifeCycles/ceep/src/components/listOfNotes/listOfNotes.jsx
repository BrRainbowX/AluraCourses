import './listOfNotes.scss'
import React, {Component} from 'react'
import CardNotes from "../cardNote/cardNotes";

export default class ListOfNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
    this._handleNotes = this._handleNotes.bind(this)
  }

  componentDidMount() {
    this.props.notes.subscribe(this._handleNotes)
  }

  componentWillUnmount() {
    this.props.notes.unsubscribe(this._handleNotes)
  }

  _handleNotes(notes) {
    this.setState({notes})
  }

  render() {
    const {notes} = this.state
    const {deleteNote} = this.props
    return (
      <ul className={'list-of-notes'}>
        {notes.map(({title, text, category}, index) => {
          return (
            <li key={index} className={'list-of-notes_item'}>
              <CardNotes index={index} deleteNotes={deleteNote} title={title} text={text} category={category}/>
            </li>
          )
        })}
      </ul>
    )
  }
}
