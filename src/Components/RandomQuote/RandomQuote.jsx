import React, {useState} from 'react'
import "./RandomQuote.css"
import reload_icon from "../Images/reload-icon.png"

const RandomQuote = () => {
  const [quote, setQuote] = useState({
    text: "Difficulties increase the nearer we get to a goal.",
    author: "Johann Wolfgang von Goethe"
  })

  return (
    <div className='Container'> 
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">{quote.author}</div>
          <div className="icon">
            <img src={reload_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RandomQuote

