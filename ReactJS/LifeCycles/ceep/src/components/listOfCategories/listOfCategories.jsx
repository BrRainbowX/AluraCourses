import './listOfCategories.scss'
import React, {Component} from 'react';

export default class ListOfCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
    this._handleInput = this._handleInput.bind(this)
    this._handleCategories = this._handleCategories.bind(this)
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

  _handleInput(event) {
    if(event.key === 'Enter') {
      this.props.createCategory(event.target.value)
    }
  }

  render() {
    const {categories} = this.props.categories
    return (
      <section className={'list-of-categories'}>
        <section className={'list-of-categories_items'}>
          {categories.map((category, index) => {
            return(
              <div key={index}>
                {category}
              </div>
            )
          })}
        </section>
        <section className={'list-of-categories_input'}>
          <input type='text' placeholder={'Add category'} onKeyUp={this._handleInput} />
        </section>
      </section>
    );
  }
}
