import React, { useEffect, useState } from 'react';

import Quote from 'components/Quote/Quote';

import 'styles/global.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const URL = 'https://type.fit/api/quotes';

  useEffect(() => {}, []);

  return <Quote />;
};

export default App;
