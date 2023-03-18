import React from "react";
import styles from "./SideMenu.module.css";
import { sideMenuList } from "./mockup";
import { Menu } from "antd";
import { GiftOutlined } from "@ant-design/icons";

export const SideMenu: React.FC = () => {
  return (
    <Menu
      mode="vertical"
      className={styles["side-menu"]}
      items={sideMenuList.map((item) => {
        return {
          label: item.title,
          key: item.title,
          icon: <GiftOutlined />,
          children: item.subMenu.map((childItem) => {
            return {
              label: childItem.title,
              key: childItem.title,
              icon: <GiftOutlined />,
              children: childItem.subMenu.map((submenu) => {
                return {
                  label: submenu,
                  key: submenu,
                  icon: <GiftOutlined />,
                };
              }),
            };
          }),
        };
      })}
    ></Menu>
  );
};
