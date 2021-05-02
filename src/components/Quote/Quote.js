import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import * as s from './quote.module.scss';

export default function Quote({ quotes }) {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  function generateRandomQuote() {
    const quotesCount = quotes.length;
    const randomIndex = ~~(Math.random() * quotesCount);
    setAuthor(quotes[randomIndex].author ?? 'Author Unknown');
    setText(quotes[randomIndex].text);
  }

  useEffect(() => {
    generateRandomQuote();
  }, []);

  return (
    <div className={s.container}>
      {console.log(quotes)}
      <h1 className={s.title}>Quote Generator</h1>
      <p className={s.text}>{text}</p>
      <p className={s.author}>{author}</p>
      <button className={s.generateQuote} onClick={generateRandomQuote}>
        Generate New Quote
      </button>
    </div>
  );
}

Quote.propTypes = {
  quotes: PropTypes.array.isRequired,
};
