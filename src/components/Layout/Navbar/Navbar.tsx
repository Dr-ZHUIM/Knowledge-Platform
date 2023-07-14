import { DownOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Post from './Post/Post';
import styles from './index.module.scss';
import logoImg from '@imgs/logo.png';

type NavbarProps = {
  layers: [Layer, Record<string, RouteT[]>][];
  btnGroup?: React.ReactNode;
};
export default function Navbar({ layers, btnGroup }: NavbarProps) {
  const navigate = useNavigate();
  const toArticle = (category: PostType, layer: Layer) => {
    navigate(`/Articles/${layer}/${category}`);
  };
  return (
    <header className={`flex ${styles.navbar}`}>
      <div className="flex items-center gap-4">
        <Logo onClick={() => navigate('/')} imgPath={logoImg} />
        {layers.map(([layer, layerItems]) => (
          <Post
            title={layer}
            key={layer}
            icon={
              <DownOutlined
                style={{ fontSize: '.8rem', marginLeft: '.7rem' }}
              />
            }
            categories={Object.keys(layerItems)}
            onClick={(category) => toArticle(category as PostType, layer)}
          />
        ))}
      </div>
      {btnGroup}
    </header>
  );
}
