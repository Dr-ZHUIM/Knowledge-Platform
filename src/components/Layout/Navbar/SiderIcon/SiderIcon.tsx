import React from 'react';
import styles from './index.module.scss';

type IconType = {
  icon: React.ReactElement;
  href?: string;
  onClick?: () => void;
};
export default function NavbarIcon({ icon, href, onClick }: IconType) {
  return (
    <a onClick={onClick} className={styles.icon} href={href} target="_blank">
      {icon}
    </a>
  );
}
