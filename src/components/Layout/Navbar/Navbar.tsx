import { useState, useEffect, useCallback, useId } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Post from './Post/Post';
import styles from './index.module.scss';
import logoImg from '@imgs/logo.png';

type NavbarProps = {
  layers: [Layer, Record<string, RouteT[]>][];
  btnGroup?: React.ReactNode;
};
export default function Navbar({ layers, btnGroup }: NavbarProps) {
  const [active, setActive] = useState('');
  const navigate = useNavigate();
  const handleKeyboard = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setActive('');
  }, []);
  useEffect(() => {
    document.documentElement.addEventListener('keydown', handleKeyboard);
    return () => {
      document.documentElement.removeEventListener('keydown', handleKeyboard);
    };
  }, []);
  return (
    <header className={`flex ${styles.navbar}`}>
      <div className="flex items-center gap-4">
        <Logo onClick={() => navigate('/')} imgPath={logoImg} />
        {layers.map(([layer, layerItems]) => (
          <Post
            onChange={(title) => {
              setActive(() => title);
            }}
            show={active === layer}
            title={layer}
            key={layer}
            icon={
              <DownOutlined
                style={{ fontSize: '.8rem', marginLeft: '.7rem' }}
              />
            }
            categories={Object.keys(layerItems)}
          />
        ))}
        <Link
          to="/KnowledgeCanvas"
          className="text-[var(--color-f-unhover)] duration-500 hover:text-white hover:bg-[var(--color-light)]"
        >
          <div className="h-[60px] leading-[60px] p-[0_1rem]  text-[1.1rem]">
            KnowledgeCanvas
          </div>
        </Link>
      </div>
      {btnGroup}
    </header>
  );
}
