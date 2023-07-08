import { useToggle } from '@/utils/hooks';
import React from 'react';
import styles from './index.module.scss';
import { handleClassName } from '@/utils/utils';

type PostProps = {
  title: string;
  layers: string[];
  icon?: React.ReactElement;
  onClick: (key: string) => void;
};

export default function Post({ title, layers, icon, onClick }: PostProps) {
  const [toggle, handleToggle] = useToggle();
  return (
    <>
      <div
        onClick={handleToggle}
        className={`${styles['navbar-item']} pos-re flex items-center flex-1`}
      >
        {title}
        {icon}
        <div
          className={`${styles.collapse}${handleClassName(
            `${toggle ? '' : styles['collapse-hide']}`,
          )}`}
        >
          {layers.map((key) => (
            <div onClick={() => onClick(key)} key={key}>
              {key}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
