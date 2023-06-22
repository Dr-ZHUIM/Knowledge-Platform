import React from 'react';
import FadeIn from '../FadeIn/FadeIn';

type ArticleType = {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
};

export default function Article({ children, className, style }: ArticleType) {
  return (
    <section className={className} style={{ ...style }}>
      <FadeIn>{children}</FadeIn>
    </section>
  );
}
