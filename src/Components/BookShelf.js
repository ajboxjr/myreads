import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
//For Books Element
// - ol map the books in a grid

class BookShelf extends Component{
  static propTypes = {
    title: PropTypes.string,
    books: PropTypes.array,
    onChangeShelf: PropTypes.func.isRequired
  }
/* This function should hold an array of books for the BookShelf
it should return
This function solely shows the list of Books
1. Nothing
*/
  update_book = (book, shelf) => {
    this.props.onChangeShelf(book, shelf)
  }

  render(){
    const { title, books } = this.props
    return (
      <div>
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book, i )=>(
            <li key={i}>
              <Book
              book={book}
              onUpdate={(shelf) => { this.update_book(book, shelf) }} />
            </li>
          ))}
        </ol>
      </div>
    </div>
    )
  }
}
export default BookShelf
