import React from 'react';

type IconType = {
  icon: React.ReactElement;
  href?: string;
  onClick?: () => void;
};
export default function SiderIcon({ icon, href, onClick }: IconType) {
  return (
    <a onClick={onClick} className="sider-icon" href={href} target="_blank">
      {icon}
    </a>
  );
}
