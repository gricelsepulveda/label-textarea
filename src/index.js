import React, { useState } from "react"
import { render } from 'react-dom'
import InputArea from "./js/components/InputArea/InputArea.jsx"

//scss
import './styles/main.scss'

const App = () => {

  const [words, setWords] = useState(["hello", "world"])

  function handleChange (value) {
    setWords(value)
  }
  return (
    <div className="gs-body-wrapper flex col center">
      <p>Write your favorite tags and see the magic when you type "comma"</p>

      <InputArea limit={35} preset={words} onChange={(value) => handleChange(value)} id="undesired_words" color="primary"/>
    </div>
  )
}

render(<App/>, document.getElementById('root'))