import React from 'react';

type MdxType = {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
};

function FadeIn({ style, children, className }: MdxType) {
  return (
    <div
      className={className}
      style={{ paddingBottom: '100px', ...style }}
      ref={(e) => {
        if (e) {
          e.className = `${e.className} mount`;
        }
      }}
    >
      {children}
    </div>
  );
}

export default React.memo(FadeIn);
