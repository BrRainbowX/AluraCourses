import './styles/reset.scss'
import './styles/main.scss'
import React, {Component} from 'react'
import ListOfNotes from './components/listOfNotes/listOfNotes'
import FormRegister from './components/formRegister/formRegister'
import ListOfCategories from "./components/listOfCategories/listOfCategories";
import NotesArray from "./data/NotesArray";
import Categories from "./data/Categories";

class App extends Component {
  constructor() {
    super();
    this.notes = new NotesArray()
    this.categories = new Categories()
  }

  render() {
    return (
      <div className={'content'}>
        <FormRegister categories={this.categories} createNote={this.notes.addNote} />
        <main className={'main'}>
          <ListOfCategories categories={this.categories} createCategory={this.categories.addCategory} />
          <ListOfNotes notes={this.notes} deleteNote={this.notes.deleteNote}/>
        </main>
      </div>
    );
  }
}

export default App;
