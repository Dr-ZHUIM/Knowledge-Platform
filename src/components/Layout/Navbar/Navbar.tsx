import {
  GithubOutlined,
  HomeOutlined,
  UserOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo/Logo';
import Post from './Post/Post';
import NavbarIcon from './SiderIcon/SiderIcon';
import styles from './index.module.scss';
import logoImg from '@imgs/logo.png';

type NavbarProps = {
  layers: [Layer, Record<string, RouteT[]>][];
};
export default function Navbar({ layers }: NavbarProps) {
  const navigate = useNavigate();
  const changeLayer = (category: PostType, layer: Layer) => {
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
            onClick={(key) => changeLayer(key as PostType, layer)}
          />
        ))}
      </div>
      <div className="flex items-center gap-[2rem]">
        <NavbarIcon
          href="https://github.com/Dr-ZHUIM"
          icon={<GithubOutlined />}
        />
        <NavbarIcon href="http://www.zhuim.fun" icon={<UserOutlined />} />
        <NavbarIcon onClick={() => navigate('/')} icon={<HomeOutlined />} />
      </div>
    </header>
  );
}
