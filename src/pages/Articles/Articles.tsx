import Article from '@/components/Article/Article';
import { layers } from '@/routes/getRoutes';
import { Fragment, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
    <div className="flex-col">
      <h3 className="text-[var(--color-primary-800)]">{title}</h3>
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
    </div>
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
      <div>
        {summary.split('\n').map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
    </div>
  );
}

export default function Articles() {
  const navigate = useNavigate();
  const { layer, category } = useParams<{ layer: Layer; category: string }>();
  const menuLists = useMemo(() => {
    if (layer) {
      const _category = layers[layer] && category && layers[layer][category];
      return (_category && _category[0].children) || [];
    }
    return [];
  }, [layer, category]);
  const goArticle = (path: string) => {
    navigate(path);
  };
  return (
    <Article>
      <div className="flex justify-between mb-[48px] font-bolder">
        <span className="text-[36px] ">{category}</span>
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
