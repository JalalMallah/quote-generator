import React, { useEffect } from 'react';

import 'styles/global.scss';

const App = () => {
  const url = 'https://type.fit/api/quotes';

  useEffect(() => {
    console.log(url);
  }, []);

  return (
    <div className='container'>
      <h1 className='title'>Quote Generator</h1>
      <p className='quote-text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odit mollitia
        incidunt deleniti. Et aliquam voluptatem placeat illo cum quia ducimus officiis obcaecati.
        Corrupti quae, repellat deleniti saepe natus aliquid?
      </p>
      <p className='quote-author'>John Doe</p>
      <button className='generate-quote'>Generate New Quote</button>
    </div>
  );
};

export default App;
