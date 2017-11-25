import React, {Component} from 'react'
//import PropTypes from 'prop-types'

class Book extends Component {
  render(){
    const {title, authors, image} = this.props
    console.log(this.props)
    const noThumbLink = "http://dummyimage.com/128x193/292929/e3e3e3&text=No Cover Available"
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193,backgroundImage: `url(${
                                image ? image.thumbnail : noThumbLink
                            })` }}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors[0]}</div>
      </div>
    )
  }
}
export default Book
