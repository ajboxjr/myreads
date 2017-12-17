import React from 'react'
import { Route } from 'react-router-dom'
import BookList from './Components/BookList'
import SearchBooks from './Components/SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }
  // INitial Downloading the boooks
  componentDidMount(){
    BooksAPI.getAll().then(( books) => {
      this.setState({books: books})
    })
  }
  //Fetch Book
  fetchBooks = () => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books: books})
      })
  }
  // Update the Books onShelf
  update_book_details = (book, shelf) => {
    console.log(book, shelf)
    BooksAPI.update(book ,shelf).then(()=>{
      this.fetchBooks()
    })
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={()=>(
            <SearchBooks />
          )}/>
        <Route exact path="/" render={() => (
          <BookList books={this.state.books} onChange={this.update_book_details.bind(this)} />
        )}/>
        </div>
    )
  }
}

export default BooksApp
