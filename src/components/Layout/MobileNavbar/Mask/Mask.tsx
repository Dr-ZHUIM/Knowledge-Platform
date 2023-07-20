import { useCallback, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';
import { solveMaskMenu } from '../utils';

type MaskType = {
  show: boolean;
  onNavigate?: (to: string) => void;
  layers?: [Layer, Record<string, RouteT[]>][];
  btnGroup?: React.ReactNode;
};

type MaskItemType = {
  label: PostType | Layer;
  isLayerTitle: boolean;
  layerLabel?: Layer;
  style?: React.CSSProperties;
  onClick?: (layerLabel: Layer, label: PostType) => void;
};

function MaskItem({
  layerLabel,
  label,
  onClick,
  style,
  isLayerTitle,
}: MaskItemType) {
  return (
    <>
      <div
        // Only MenuItem has onClick so that I can confirm here to use these types asserts
        onClick={
          onClick
            ? () => onClick(layerLabel as Layer, label as PostType)
            : undefined
        }
        className={`${
          isLayerTitle ? styles['mask-category'] : styles['mask-item']
        }`}
        style={{ ...style }}
      >
        {label}
      </div>
    </>
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

  const maskMenu = useMemo(() => {
    return solveMaskMenu(layers);
  }, [layers]);

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
        show ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <div
        className={`${styles['mask-bg']} ${
          show ? `${styles['mask-show']}` : `${styles['mask-hidden']}`
        }`}
      ></div>
      <div className={styles['menu-container']}>
        {maskMenu.map((item, index) => (
          <MaskItem
            key={index}
            {...item}
            onClick={
              !item.isLayerTitle
                ? () => toArticle(item.label, item.layerLabel)
                : undefined
            }
            style={{
              transitionDelay: `${0.2 + index * 0.05}s`,
              transform: show ? `translateX(0)` : `translateX(-100%)`,
            }}
          />
        ))}
      </div>
      <div
        className={`${styles['btn-group']} ${
          show ? `${styles['mask-show']}` : `${styles['mask-hidden']}`
        }`}
      >
        {btnGroup}
      </div>
    </div>
  );
}
