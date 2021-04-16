import React, { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState({ content: "", author: "" });

  const loadData = async () => {
    const response = await fetch(
      "https://api.quotable.io/random?maxLength=100"
    );
    if (response.status === 200) {
      const data = await response.json();
      setQuote({
        content: data.content,
        author: data.author,
      });
    }
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(() => {
      loadData();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div class="card-container">
      <div class="card-panel card-leftbar card-light-grey">
        <p class="quotes">
          <i>{quote.content}</i>
        </p>
        <h4>-{quote.author}</h4>
      </div>
    </div>
  );
};

export default Quote;
