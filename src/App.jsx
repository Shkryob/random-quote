import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import quotes from './quotes.json'

function getRandomQuote() {
  return quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)];
}

function App() {
  const [quote, setQuote] = useState(getRandomQuote())

  function newQuote() {
    setQuote(getRandomQuote());
  }

  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box">
          <div id="text">{ quote.quote }</div>
          <div id="author">{ quote.author }</div>

          <button id="new-quote" onClick={newQuote}>New Quote</button>
          <a id="tweet-quote" href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent(quote.quote + ' ' + quote.author)}>
            Tweet Quote
          </a>
        </div>
      </header>
    </div>
  )
}

export default App
