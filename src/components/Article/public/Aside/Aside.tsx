import { PropsWithChildren } from 'react';
import AsideIcon from './asideIcon';
import styles from './index.module.scss';

type AsideProps = {
  title: string;
  mode: 'info' | 'warning' | 'danger' | 'success';
};

export default function Aside({
  title,
  children,
  mode = 'info',
}: AsideProps & PropsWithChildren) {
  return (
    <aside
      data-mode={mode}
      className={` ${styles['aside-background']} ${styles['aside-container']}`}
    >
      <div
        className={`${styles['aside-icon']} flex items-center justify-center`}
      >
        <AsideIcon mode={mode} />
      </div>
      <div className={styles['aside-title']}>{title}</div>
      <div className={styles['aside-content']}>{children}</div>
    </aside>
  );
}
