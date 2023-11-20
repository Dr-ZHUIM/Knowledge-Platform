import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
export default function flexDemo() {
  return (
    <div className={styles['flex-box']}>
      <section className={styles['flex-section-axis-one']}>flex-start</section>
      <section className={styles['flex-section-axis-two']}>center</section>
      <section className={styles['flex-section-axis-three']}>flex-end</section>
    </div>
  );
}
