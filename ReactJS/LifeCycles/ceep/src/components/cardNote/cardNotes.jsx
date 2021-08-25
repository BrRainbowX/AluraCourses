import './cardNote.scss'
import {Component} from "react";

export default class CardNotes extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this)
  }

  delete() {
    this.props.deleteNotes(this.props.index)
  }

  render() {
    const {title, text, category} = this.props
    return (
      <section className={'card-note'}>
        <header className={'card-note_header'}>
          <h3 className={'card-note_title'}>{title}</h3>
          <img onClick={this.delete} alt={'Delete Button'} src={'images/delete.svg'}/>
        </header>
        <main>
          <p className={'card-note_text'}>{text}</p>
        </main>
        <p>{category}</p>
      </section>
    )
  }
}

