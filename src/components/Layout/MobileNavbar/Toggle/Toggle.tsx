import { handleClassName } from '@/utils/utils';
import styles from './index.module.scss';

type ToggleProps = {
  show: boolean;
  onToggle: () => void;
};

export default function Toggle({ show, onToggle }: ToggleProps) {
  return (
    <>
      <svg
        width={20}
        height={30}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 900 900"
        onClick={() => onToggle()}
        className={`${styles.menu_icon} ${styles.svg}  ${handleClassName(
          show ? `${styles.menuexpanded}` : '',
        )}`}
      >
        <path
          className={`${styles['menu_icon_dash']} ${styles.dash_top}`}
          d="M145 609l609 0c74,0 74,111 0,111l-609 0c-74,0 -74,-111 0,-111z"
          id="dash_bottom"
        ></path>
        <path
          className={`${styles['menu_icon_dash']} ${styles.dash_middle}`}
          d="M146 394c203,0 406,0 609,0 74,0 74,111 0,111 -203,0 -406,0 -609,0 -74,0 -74,-111 0,-111z"
          id="dash_middle"
        ></path>
        <path
          className={`${styles['menu_icon_dash']} ${styles.dash_bottom}`}
          d="M146 179l609 0c74,0 74,111 0,111l-609 0c-74,0 -74,-111 0,-111z"
          id="dash_top"
        ></path>
      </svg>
    </>
  );
}
