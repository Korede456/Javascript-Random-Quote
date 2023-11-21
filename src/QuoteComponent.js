import React, { useEffect, useState } from "react";

const QuoteComponent = () => {
  const [quoteData, setQuoteData] = useState(null);
  const [randomIndex, setRandomIndex] = useState(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        // Fetch the JSON file
        const response = await fetch("/quotes.json");

        if (!response.ok) {
          throw new Error("Failed to fetch quotes");
        }

        // Parse the JSON data
        const quotesData = await response.json();

        // Set the quote data and a random index in the state
        setQuoteData(quotesData);
        setRandomIndex(Math.floor(Math.random() * quotesData.quotes.length));
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };

    // Call the fetchQuotes function
    fetchQuotes();
  }, []); // Empty dependency array ensures useEffect runs only once

  // Render loading state while fetching data
  if (!quoteData) {
    return <p>Loading...</p>;
  }

  // Function to generate a new random index and update state
  const generateNewQuote = () => {
    setRandomIndex(Math.floor(Math.random() * quoteData.quotes.length));
  };

  // Extract and render the current random quote and its author
  const currentQuote = quoteData.quotes[randomIndex];

  return (
    <div>
      <h2>Random Quote:</h2>
      <p id = "text">Quote: {currentQuote.quote}</p>
      <p id = "author">Author: {currentQuote.author}</p>
      <button id = "new-quote" onClick={generateNewQuote}>Generate New Quote</button>
    </div>
  );
};

export default QuoteComponent;
