import React from 'react';

import * as s from './quote.module.scss';

export default function Quote() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Quote Generator</h1>
      <p className={s.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate, sequi iste nesciunt
        adipisci error sunt? Doloribus, amet sed nostrum est cum velit illo ducimus sint unde in id.
        Quod!
      </p>
      <p className={s.author}>Someone smart</p>
      <button className={s.generateQuote}>Generate New Quote</button>
    </div>
  );
}
