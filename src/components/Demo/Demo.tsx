import React from 'react';
import styles from './index.module.scss';

type DemoType = {
  children: React.ReactNode;
  title?: string;
};

export default function Demo({ children, title }: DemoType) {
  return (
    <div
      demo-title={`Demo: ${title || ''}`}
      className={`${styles['demo-container']}`}
    >
      {children}
    </div>
  );
}
