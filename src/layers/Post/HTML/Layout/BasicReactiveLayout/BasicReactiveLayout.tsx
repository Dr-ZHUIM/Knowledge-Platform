import Article from '@/components/Article/Article';
import Demo from '@/components/Article/public/Demo/Demo';
import MdxResolver from '@/components/Article/public/MdxResolver/MdxResolver';
import { Row, Slider, Switch } from 'antd';
import { useState } from 'react';
import mdx from './index.mdx';
import styles from './index.module.scss';
export { label, summary } from './index.mdx';

function FlexDemo() {
  return (
    <div className={styles['flex-box']}>
      <section className={styles['flex-section-axis-one']}>flex-start</section>
      <section className={styles['flex-section-axis-two']}>center</section>
      <section className={styles['flex-section-axis-three']}>flex-end</section>
    </div>
  );
}

function GridDefaultDemo() {
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
      <div className="w-full flex flex-col gap-[24px]">
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
          <div className="relative">
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

export default function HowToCreateAVitePlugin() {
  return (
    <Article>
      <MdxResolver TC={mdx} components={{ FlexDemo, GridDefaultDemo }} />
    </Article>
  );
}
