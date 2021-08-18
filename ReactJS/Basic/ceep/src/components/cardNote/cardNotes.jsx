import './cardNote.scss'
import {Component} from "react";

export default class CardNotes extends Component {
  render() {
    const {title, text} = this.props
    return (
      <section className={'card-note'}>
        <header className={'card-note_header'}>
          <h3 className={'card-note_title'}>{title}</h3>
        </header>
        <p className={'card-note_text'}>{text}</p>
      </section>
    )
  }
}

