import { Fragment, useMemo } from 'react';
import Article from '@/components/Article/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { layers } from '@/routes/getRoutes';
import styles from './index.module.scss';
import { getArticles } from './utils';

type MenuListProps = {
  title: string;
  items: RouteT[];
  onNavigate: (path: string) => void;
};

type MenuItemProps = {
  title: string;
  subtitle: string;
  path: string;
  summary: string;
  onNavigate: (path: string) => void;
};

function MenuList({ title, items, onNavigate }: MenuListProps) {
  return (
    <>
      <h3>{title}</h3>
      <div className={`flex flex-col ${styles['menu-list']}`}>
        {items.map((item) => (
          <MenuItem
            onNavigate={onNavigate}
            path={item.path}
            title={item.label}
            subtitle={item.subLabel}
            key={item.label}
            summary={item.summary}
          />
        ))}
      </div>
    </>
  );
}

function MenuItem({
  title,
  summary,
  subtitle,
  path,
  onNavigate,
}: MenuItemProps) {
  summary && summary.includes('\n\t') && console.log(true);
  return (
    <div
      onClick={() => onNavigate(path)}
      className={`w-[fit-content] flex flex-col gap-[24px] cursor-pointer ${styles['menu-item']}`}
    >
      <h4>{title}</h4>
      {subtitle && <h5>{subtitle}</h5>}
      {summary.split('\n').map((p, index) => (
        <p key={index}>{p}</p>
      ))}
    </div>
  );
}

export default function Articles() {
  const navigate = useNavigate();
  const { layer } = useParams<Record<string, Layer>>();
  const menuLists = useMemo(() => {
    if (layer) {
      const _layer = layers[layer];
      return (_layer && _layer[0].children) || [];
    }
    return [];
  }, [layer]);
  const goArticle = (path: string) => {
    navigate(path);
  };
  return (
    <Article>
      <div className="flex justify-between mb-[48px] font-bolder">
        <span className="text-[36px] ">{layer}</span>
        <span className="text-[36px] ">Articles: {getArticles(menuLists)}</span>
      </div>
      {menuLists.map((list, index) => (
        <Fragment key={list.label}>
          <MenuList
            onNavigate={goArticle}
            title={list.label}
            items={list.children || []}
          />
          {index < menuLists.length - 1 && <hr />}
        </Fragment>
      ))}
    </Article>
  );
}
