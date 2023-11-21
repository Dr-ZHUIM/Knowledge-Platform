import React, { useState, useRef, useLayoutEffect } from 'react';
import { Tooltip } from 'antd';
import type { TooltipProps } from 'antd';
import styles from './index.module.scss';

type OverflowTextProps = {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  tooltipProps?: TooltipProps;
};

export default function OverflowText({
  text,
  className,
  style,
  tooltipProps,
}: OverflowTextProps) {
  const textRef = useRef<HTMLDivElement | null>(null);
  const [isOverFlow, setIsOverFlow] = useState(false);

  useLayoutEffect(() => {
    if (textRef.current) {
      setIsOverFlow(textRef.current.clientWidth < textRef.current.scrollWidth);
    }
  }, [text]);

  return (
    <Tooltip trigger={'hover'} title={isOverFlow && text} {...tooltipProps}>
      <div
        style={style}
        className={`${styles['text-ellipsis']}${
          className ? ` ${className}` : ''
        }`}
        ref={textRef}
      >
        {text}
      </div>
    </Tooltip>
  );
}
