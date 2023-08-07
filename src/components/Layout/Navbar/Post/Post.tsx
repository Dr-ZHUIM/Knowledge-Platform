import { handleClassName } from '@/utils/utils';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

type PostProps = {
  title: string;
  categories: string[];
  icon?: React.ReactElement;
  show: boolean;
  onChange: (key: string) => void;
};

export default function Post({
  show,
  title,
  categories,
  icon,
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
            <Link
              className="text-[var(--color-f-unhover)] duration-500 hover:text-white hover:bg-slate-800"
              to={`/Articles/${title}/${key}`}
              key={key}
            >
              {key}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
