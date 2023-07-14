import styles from './index.module.scss';

export default function MobileNavbar({
  children,
}: {
  children: React.ReactNode;
}) {
  return <header className={`flex ${styles.navbar}`}>{children}</header>;
}
