import { handleClassName } from '@/utils/utils';
import React from 'react';
import styles from './index.module.scss';

type PostProps = {
  title: string;
  categories: string[];
  icon?: React.ReactElement;
  show: boolean;
  onClick: (key: string) => void;
  onChange: (key: string) => void;
};

export default function Post({
  show,
  title,
  categories,
  icon,
  onClick,
  onChange,
}: PostProps) {
  return (
    <>
      <div className={`${styles['navbar-item']} pos-re`}>
        <div
          onClick={() => onChange(show ? '' : title)}
          className=" flex items-center justify-center"
        >
          {title}
          {icon}
        </div>
        <div
          className={`${styles.collapse}${handleClassName(
            `${show ? '' : styles['collapse-hide']}`,
          )}`}
        >
          {categories.map((key) => (
            <div
              onClick={() => {
                onClick(key);
              }}
              key={key}
            >
              {key}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
