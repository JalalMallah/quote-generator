import React from 'react';

import * as s from './spinner.module.scss';

export default function Spinner() {
  return (
    <div className={s.skChase}>
      <div className={s.skChaseDot}></div>
      <div className={s.skChaseDot}></div>
      <div className={s.skChaseDot}></div>
      <div className={s.skChaseDot}></div>
      <div className={s.skChaseDot}></div>
      <div className={s.skChaseDot}></div>
    </div>
  );
}
