import {PropTypes} from 'prop-types'
import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'
//A class to contain the books and sort them by category
// currentlyReading wantToRead and read

//Title
//Content
class BookList extends Component{
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  }

  render(){
    const { books } = this.props
    const shelves = [
      {
        title: 'Currently Reading',
        type: 'currentlyReading'
      },
      {
        title: 'Want To Read',
        type: 'wantToRead'
      },
      {
        title: 'Read',
        type: 'read'
      },
      {
        title: 'None',
        type: 'None'
    }]
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map((shelf) => (
            <BookShelf
              title={shelf.title}
              books={books.filter((book) => book.shelf === shelf.type)}
              onChangeShelf={this.props.onChange}
            />
          ))}
        </div>
        <div className="open-search">
          <Link to='/search' className="showSearchPage"> Add a book </Link>
        </div>
      </div>
    )
  }
}
export default BookList
