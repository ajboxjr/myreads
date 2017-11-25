import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

//A class to contain the books and sort them by category
// currentlyReading wantToRead and read

//Title
//Content
class BookList extends Component{
  static propTypes = {
    books: PropTypes.array.isRequired
  }
  render(){
    const { books } = this.props
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            books={books.filter((book) => book.shelf === 'currentlyReading')}
            title='Currently Reading'
          />
          <BookShelf
            books={books.filter((book) => book.shelf === 'wantToRead')}
            title='Want To Read'
          />
          <BookShelf
            books={books.filter((book) => book.shelf === 'read')}
            title='Read'
          />
        </div>
      </div>
    )
  }
}
export default BookList
