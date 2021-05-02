import React, { useEffect, useState } from 'react';

import Quote from 'components/Quote/Quote';
import Spinner from 'components/Spinner/Spinner';

import 'styles/global.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const URL = 'https://type.fit/api/quotes';

  useEffect(() => {}, []);

  return <Spinner />;
};

export default App;
