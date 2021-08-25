export default class NotesArray {
  constructor() {
    this.notes = []
    this._subscribers = []
    this.addNote = this.addNote.bind(this)
    this.deleteNote = this.deleteNote.bind(this)
  }

  subscribe(func) {
    this._subscribers.push(func)
  }

  unsubscribe(func) {
    console.log(this.notes.length)
    this._subscribers = this._subscribers.filter(f => f !== func)
    console.log(this.notes.length)
  }

  notify() {
    this._subscribers.forEach((f) => f(this.notes))
  }

  addNote(title, body, category) {
    const note = new Note(title, body, category)
    this.notes.push(note)
    this.notify()
  }

  deleteNote(index) {
    this.notes.splice(index, 1)
    this.notify()
  }
}

class Note {
  constructor(title, body, category) {
    this.title = title
    this.body = body
    this.category = category
  }
}
