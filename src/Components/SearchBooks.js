import React,{Component} from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book.js'

class SearchBooks extends Component {
  state = {
    query: '',
    books: []
  }

  resetBookList = () => {
    console.log("Book list reset")
    this.state({books: []})
  }

  updateQuery = (query) => {
    if (query === ""){
      this.resetBookList()
    }
    this.setState({ query })
    this.populateBooks(this.state.query)
  }
  populateBooks = (query) => {
    BooksAPI.search(query, 10).then((books) => {
      this.setState({books: books})
    })
  }
  update_book = (book, shelf) => {
    console.log(`book ${book} shelf ${shelf}`)
    BooksAPI.update(book, shelf)
    console.log('updated')
  }
  clearQuery = () => {
    this.setState({ query: '' })
  }
  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">

          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book, i )=>(
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
export default SearchBooks
