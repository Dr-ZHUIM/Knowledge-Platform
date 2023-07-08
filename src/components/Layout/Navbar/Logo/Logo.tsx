import styles from './index.module.scss';

type LogoType = {
  onClick?: () => void;
  imgPath: string;
};

export default function Logo({ onClick, imgPath }: LogoType) {
  return <img onClick={onClick} className={`${styles.logo}`} src={imgPath} />;
}
