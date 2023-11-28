import styles from './index.module.scss';
import { useState } from 'react';
import Demo from '@/components/Article/public/Demo/Demo';
import { Slider, Row, Switch } from 'antd';
export function GridDefaultDemo() {
  const [columns, setColumns] = useState(2);
  const [perspective, setPerspective] = useState(true);

  const marks = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
  };
  return (
    <Demo title="Grid 默认情况演示">
      <div
        className={`w-full flex flex-col gap-[24px] ${styles['grid-default-demo']}`}
      >
        <Slider
          marks={marks}
          value={columns}
          min={1}
          max={6}
          railStyle={{
            backgroundColor: 'var(--color-primary-500)',
          }}
          tooltip={{ open: false }}
          onChange={setColumns}
        />

        <div data-perspective={perspective} className={styles['grid-demo']}>
          <div className={`relative ${styles['grid-relative']}`}>
            <div className={`${styles['grid-box-container']}`}>
              <div className={`${styles['grid-box']}`}>
                {Array.from({ length: columns }).map((_, index) => (
                  <div key={index} className={styles['grid-item']}>
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>
            <div className={`${styles['grid-box-container-perspective']}`}>
              <div className={`${styles['grid-box']}`}>
                {Array.from({ length: columns }).map((_, index) => (
                  <div key={index} className={styles['grid-item']}>
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Row align="middle" className="w-24">
          <span className="mr-2">透视</span>
          <Switch
            className={styles['perspective-switch']}
            checked={perspective}
            onChange={setPerspective}
          />
        </Row>
      </div>
    </Demo>
  );
}

export function GridDefaultDivideHeightDemo() {
  const [columns, setColumns] = useState(2);
  const [perspective, setPerspective] = useState(true);

  const marks = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
  };
  return (
    <Demo title="Grid 平分高度演示">
      <div
        className={`w-full flex flex-col gap-[24px] ${styles['grid-default-divide-height-demo']}`}
      >
        <Slider
          marks={marks}
          value={columns}
          min={1}
          max={6}
          railStyle={{
            backgroundColor: 'var(--color-primary-500)',
          }}
          tooltip={{ open: false }}
          onChange={setColumns}
        />

        <div data-perspective={perspective} className={styles['grid-demo']}>
          <div className={`relative ${styles['grid-relative']}`}>
            <div className={`${styles['grid-box-container']}`}>
              <div className={`${styles['grid-box']}`}>
                {Array.from({ length: columns }).map((_, index) => (
                  <div key={index} className={styles['grid-item']}>
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>
            <div className={`${styles['grid-box-container-perspective']}`}>
              <div className={`${styles['grid-box']}`}>
                {Array.from({ length: columns }).map((_, index) => (
                  <div key={index} className={styles['grid-item']}>
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Row align="middle" className="w-24">
          <span className="mr-2">透视</span>
          <Switch
            className={styles['perspective-switch']}
            checked={perspective}
            onChange={setPerspective}
          />
        </Row>
      </div>
    </Demo>
  );
}

export function GridColumnsDemo({ children }: React.PropsWithChildren) {
  return (
    <Demo title="Grid 列演示">
      {children}
      <div className={`${styles['grid-columns-demo']} `}>
        <div className={styles['grid-box']}>
          <div className={`${styles['grid-item']}`}>1</div>
          <div className={`${styles['grid-item']}`}>2</div>
        </div>
      </div>
    </Demo>
  );
}
