import { useEffect, useRef } from 'react';
import { useHasMounted } from '../../../utils/hooks';
import styles from './index.module.scss';

type LogoType = {
  onClick?: () => void;
  imgPath: string;
};

export default function Logo({ onClick, imgPath }: LogoType) {
  const logoRef = useRef<HTMLDivElement>(null);
  const hasMounted = useHasMounted();
  const handleLogoStatus = () => {
    if (logoRef.current) {
      logoRef.current.className = `sider-logo`;
      setTimeout(() => {
        logoRef.current!.className = `sider-logo mount`;
      }, 0);
    }
  };
  useEffect(() => {
    if (hasMounted) {
      handleLogoStatus();
    }
  }, [hasMounted, imgPath]);
  return (
    <div
      ref={logoRef}
      onClick={onClick}
      className="sider-logo"
      style={{
        backgroundImage: `url('${imgPath}')`,
      }}
    />
  );
}
