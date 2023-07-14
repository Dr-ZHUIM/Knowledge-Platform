import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';

type MaskType = {
  show: boolean;
  onNavigate?: (to: string) => void;
  layers?: [Layer, Record<string, RouteT[]>][];
  btnGroup?: React.ReactNode;
};

type MaskMenuType = {
  layerLabel: string;
  layer: Record<string, RouteT[]>;
  onClick: (key: PostType) => void;
};

function MaskMenu({ layerLabel, layer, onClick }: MaskMenuType) {
  return (
    <div className={styles['mask-menu']}>
      <div className={styles['mask-category']}>{layerLabel}</div>
      {layer &&
        Object.keys(layer).map((category, index) => (
          <div
            onClick={() => onClick(category as PostType)}
            className={styles['mask-item']}
            key={category}
          >
            {category}
          </div>
        ))}
    </div>
  );
}

export default function Mask({
  show,
  layers = [],
  onNavigate,
  btnGroup,
}: MaskType) {
  const navigate = useNavigate();

  const toArticle = useCallback(
    (category: PostType, layer: Layer) => {
      (onNavigate && onNavigate(`/Articles/${layer}/${category}`)) ||
        navigate(`/Articles/${layer}/${category}`);
    },
    [onNavigate],
  );

  useEffect(() => {
    if (show) {
      document.documentElement.classList.add('overflow-hidden');
    } else {
      document.documentElement.classList.remove('overflow-hidden');
    }
  }, [show]);
  return (
    <div
      className={`${styles['mask-container']} ${
        show ? `${styles['mask-show']}` : `${styles['mask-hidden']}`
      }`}
    >
      <div className={styles['menu-container']}>
        {layers.map(([layerLabel, layer]) => {
          return (
            <MaskMenu
              onClick={(category) =>
                toArticle(category as PostType, layerLabel)
              }
              key={layerLabel}
              layerLabel={layerLabel}
              layer={layer}
            />
          );
        })}
      </div>
      <div className={`${styles['btn-group']}`}>{btnGroup}</div>
    </div>
  );
}
