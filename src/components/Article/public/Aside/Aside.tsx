import { PropsWithChildren } from 'react';
import AsideIcon from './asideIcon';
import styles from './index.module.scss';

type AsideCssProperties = {
  '--color-aside': string;
} & React.CSSProperties;

type AsideProps = {
  title?: string;
  type?: 'info' | 'warning' | 'danger' | 'success';
  style?: AsideCssProperties;
  color?: string;
};

export default function Aside({
  title,
  children,
  type = 'info',
  style,
  color,
}: AsideProps & PropsWithChildren) {
  return (
    <aside
      data-type={type}
      className={` ${styles['aside-background']} ${styles['aside-container']}`}
      style={color ? { '--color-aside': color, ...style } : { ...style }}
    >
      <div
        className={`${styles['aside-icon']} flex items-center justify-center`}
      >
        <AsideIcon color={color} type={type} />
      </div>
      <div className={styles['aside-title']}>{title}</div>
      <div className={styles['aside-content']}>{children}</div>
    </aside>
  );
}
