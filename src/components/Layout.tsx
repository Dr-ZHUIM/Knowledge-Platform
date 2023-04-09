import React, { useState, useEffect, useCallback } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import "./layout.scss";

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("transparentBorder", "/transparentBorder"),
  getItem("Option 2", "2"),
];

export default function Layout(props: React.PropsWithChildren) {
  const navigate = useNavigate();

  const handleNavigate: MenuProps["onClick"] = (info) => {
    navigate(info.key);
  };

  return (
    <div className="container">
      <Menu
        onClick={handleNavigate}
        mode="inline"
        style={{ width: 256 }}
        items={items}
      />
      <main className="main">{props.children}</main>
    </div>
  );
}

