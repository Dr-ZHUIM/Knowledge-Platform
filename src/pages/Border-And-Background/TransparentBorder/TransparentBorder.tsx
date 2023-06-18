import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';

export const label = '透明边框';

export function TransparentBorder() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <code>asdf</code>
      </div>
    </div>
  );
}