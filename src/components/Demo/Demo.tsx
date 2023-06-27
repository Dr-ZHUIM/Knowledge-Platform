import React from 'react';

type DemoType = {
  children: React.ReactNode;
  title?: string;
};

export default function Demo({ children, title }: DemoType) {
  return (
    <div demo-title={`Demo: ${title || ''}`} className="demo-container">
      {children}
    </div>
  );
}
