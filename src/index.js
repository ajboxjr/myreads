import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter} from 'react-router-dom'
import App from './App'
import './index.css'
//Browser router is a Router with an history.
//This allows for the state to be changed.  
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))
