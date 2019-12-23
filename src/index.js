import React, { Fragment } from "react"
import { render } from 'react-dom'
import InputArea from "./js/components/InputArea/InputArea.jsx"

//scss
import './styles/main.scss'

const App = () => (
  <div className="gs-body-wrapper flex col center">
    <p>Write your favorite tags and see the magic when you type "comma"</p>
    <InputArea/>
  </div>
)

render(<App/>, document.getElementById('root'))