import './formRegister.scss'
import {Component} from "react";

export default class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      category: '',
      categories: []
    }
    this._handleCategories = this._handleCategories.bind(this)
    this._handleCategory = this._handleCategory.bind(this)
    this._handlerTitle = this._handlerTitle.bind(this)
    this._handlerText = this._handlerText.bind(this)
    this._createNote = this._createNote.bind(this)
  }

  componentDidMount() {
    this.props.categories.subscribe(this._handleCategories)
  }

  componentWillUnmount() {
    this.props.categories.unsubscribe(this._handleCategories)
  }

  _handleCategories(categories) {
    this.setState({categories})
  }

  _handleCategory(event) {
    event.stopPropagation()
    const category = event.target.value
    this.setState({category})
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
    const {title, text, category} = this.state
    this.props.createNote(title, text, category)
  }

  render() {
    const {title, text, category, categories} = this.state
    return (
      <form className={'form-register'} onSubmit={this._createNote}>
        <select onChange={this._handleCategory} value={category}>
          <option>No category</option>
          {categories.map((category, index) => {
            return (
              <option key={index} value={category}>{category}</option>
            )
          })}
        </select>
        <input value={title} className={'form-register_input'} type="text" placeholder='Title'
               onChange={this._handlerTitle}/>
        <textarea value={text} rows={15} className={'form-register_input'} placeholder='Type your note!'
                  onChange={this._handlerText}/>
        <button className={'form-register_input form-register_submit'}>
          Keep
        </button>
      </form>
    )
  }
}
