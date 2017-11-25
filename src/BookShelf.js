import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
//For Books Element
// - ol map the books in a grid
class BookShelf extends Component{
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render(){
    const { title, books} = this.props
    return (
      <div>
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book)=>(
            <li>
              <Book
              title={book.title}
              authors={book.authors}
              image={book.imageLinks}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
    )
  }
}
export default BookShelf
