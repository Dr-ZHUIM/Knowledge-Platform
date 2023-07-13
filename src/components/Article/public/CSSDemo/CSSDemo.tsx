import React, { useState, useEffect, useCallback, memo, useMemo } from 'react';
import Demo from '../Demo/Demo';
import styles from './index.module.scss';

type CssDemoProps = {
  options: React.CSSProperties[];
  children: React.ReactNode;
  ControlledRef: React.MutableRefObject<HTMLDivElement | null>;
};

function CssProperties({ css }: { css: React.CSSProperties }) {
  const keys = useMemo(() => Object.keys(css), [css]);
  const values = useMemo(() => Object.values(css), [css]);
  return (
    <div className="flex flex-col">
      {keys.map((key, index) => (
        <div key={index}>
          {key} : {values[index]}
        </div>
      ))}
    </div>
  );
}

/**
 *
 * @param options ----- every option is based on React.CSSProperties
 * @param children ----- some divs to show your demo
 * @param ControlledElement ----- which div will be controlled
 *
 */
function CSSDemo({ options, children, ControlledRef }: CssDemoProps) {
  const [active, setActive] = useState(0);
  const handleClick = useCallback(
    (e: React.MouseEvent & { currentTarget: { dataset: any } }) => {
      setActive(Number(e.currentTarget.dataset.index) || 0);
    },
    [],
  );
  useEffect(() => {
    const controlledElement = ControlledRef.current;
    if (controlledElement !== null) {
      const keys = Object.keys(options[active]) as any[];
      const values = Object.values(options[active]);
      keys.forEach((key, index) => {
        controlledElement.style[key] = values[index];
      });
    }
  }, [active, ControlledRef, options]);
  return (
    <Demo>
      <div className={styles['css-demo-wrapper']}>
        <div className={styles['options-wrapper']}>
          {options.map((item, index) => (
            <div
              className={styles.options}
              onClick={handleClick}
              data-index={index}
              key={index}
              data-active={active === index && 'true'}
            >
              <CssProperties css={item} />
            </div>
          ))}
        </div>
        <div className={styles['demo-exposer']}>{children}</div>
      </div>
    </Demo>
  );
}

export default memo(CSSDemo);
