import './formRegister.scss'
import {Component} from "react";

export default class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
    }
    this._handlerTitle = this._handlerTitle.bind(this)
    this._handlerText = this._handlerText.bind(this)
    this._createNote = this._createNote.bind(this)
  }

  _handlerTitle(event) {
    event.preventDefault()
    const title = event.target.value
    this.setState({title})
  }

  _handlerText(event) {
    event.preventDefault()
    const text = event.target.value
    this.setState({text})
  }

  _createNote(event) {
    event.preventDefault()
    const {title, text} = this.state
    this.props.createNote(title, text)
  }

  render() {
    const {title, text} = this.state
    return (
      <form className={'form-register'} onSubmit={this._createNote}>
        <input value={title} className={'form-register_input'} type="text" placeholder='Title' onChange={this._handlerTitle}/>
        <textarea value={text} rows={15} className={'form-register_input'} placeholder='Type your note!'
                  onChange={this._handlerText}/>
        <button className={'form-register_input form-register_submit'}>
          Keep
        </button>
      </form>
    )
  }
}
