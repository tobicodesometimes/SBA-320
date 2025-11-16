import React, { useState, useEffect } from "react";
import "./RandomQuote.css";
import reload_icon from "../Images/reload-icon.png";

const BASE_URL = "https://api.animechan.io/v1";

const RandomQuote = () => {
  const [quote, setQuote] = useState({
    text: "You can't just put hot sauce on everything.",
    author: "Tobi Onasanya",
  });

  const [error, setError] = useState(null);

  // Fetch one random anime quote
  const fetchRandomQuote = async () => {
    try {
      setError(null);

      const response = await fetch(`${BASE_URL}/quotes/random`);

      if (!response.ok) {
        // e.g. 429 Too Many Requests
        throw new Error(`Request failed with status ${response.status}`);
      }

      const result = await response.json();
      // result looks like:
      // { status: 'success', data: { content, anime: { name }, character: { name } } }

      const data = result.data;

      setQuote({
        text: data.content,
        author: `${data.character.name} — ${data.anime.name}`,
      });
    } catch (err) {
      console.error(err);
      setError("Could not load an anime quote right now. Please try again later.");
    }
  };

  // Load a quote once when the component first mounts
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div className="container">
      <div className="quote">{quote.text}</div>

      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">
            {error ? error : quote.author}
          </div>
          <div className="icon">
            <img
              src={reload_icon}
              onClick={fetchRandomQuote}
              alt="Reload quote"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;


