import React from 'react';
import styles from './BitExposer.module.scss';
import { get32Bit } from '@/layers/Post/JavaScript/AssignmentOrOperator/BitWise/utils';

type BitExposerType = {
  num: number;
  style?: React.CSSProperties;
  className?: string;
};

function BitExposer({ num, style, className }: BitExposerType) {
  return (
    <div
      className={`${styles.bitExposer}${className && ' ' + className}`}
      style={{
        fontFamily: 'monospace',
        ...style,
      }}
    >
      {get32Bit(num)}
    </div>
  );
}

export default React.memo(BitExposer);
