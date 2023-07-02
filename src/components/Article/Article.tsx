import { handleClassName } from '@/utils/utils';
import React from 'react';
import FadeIn from './public/FadeIn/FadeIn';
import styles from './index.module.scss';

type ArticleType = {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
};

export default function Article({ children, className, style }: ArticleType) {
  return (
    <section
      className={`${styles.article}${handleClassName(className)}`}
      style={{ ...style }}
    >
      <FadeIn>{children}</FadeIn>
    </section>
  );
}
