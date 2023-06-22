type LogoType = {
  onClick?: () => void;
  imgPath: string;
};

export default function Logo({ onClick, imgPath }: LogoType) {
  return (
    <div
      onClick={onClick}
      className="sider-logo"
      style={{
        backgroundImage: `url('${imgPath}')`,
      }}
    />
  );
}
