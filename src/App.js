import React, { useEffect, useState } from 'react';

import Quote from 'components/Quote/Quote';
import Spinner from 'components/Spinner/Spinner';

import 'styles/global.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);

  const URL = 'https://type.fit/api/quotes';

  function getQuotes() {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setQuotes(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && <Quote quotes={quotes} />}
    </>
  );
};

export default App;
