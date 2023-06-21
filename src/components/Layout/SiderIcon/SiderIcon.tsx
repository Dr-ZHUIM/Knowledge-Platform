import React from 'react';

type IconType = {
  icon: React.ReactElement;
  href: string;
};
export default function SiderIcon({ icon, href }: IconType) {
  return (
    <a className="sider-icon" href={href} target="_blank">
      {icon}
    </a>
  );
}
