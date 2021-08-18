import './styles/reset.scss'
import './styles/main.scss'
import React, {Component} from 'react'
import ListOfNotes from './components/listOfNotes/listOfNotes'
import FormRegister from './components/formRegister/formRegister'

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
    this.createNote = this.createNote.bind(this)
  }
  createNote(title, text) {
    const notes = [...this.state.notes, {title, text}]
    this.setState({notes})
  }
  render() {
    const {notes} = this.state
    return (
      <div className={'content'}>
        <FormRegister createNote={this.createNote}/>
        <ListOfNotes notes={notes}/>
      </div>
    );
  }
}

export default App;
