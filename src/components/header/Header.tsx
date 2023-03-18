import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.jpeg";
import { Button, MenuProps } from "antd";
import { Dropdown, Input, Layout, Menu, Typography } from "antd";
import { GlobalOutlined } from "@ant-design/icons";


const langItems: MenuProps["items"] = [
  {
    label: "中文",
    key: "1",
  },
  {
    label: "English",
    key: "2",
  },
];

const dropDownProps = {
  items: langItems,
};

const navItems: MenuProps["items"] = [
  { key: "1", label: "旅游首页" },
  { key: "2", label: "周末游" },
  { key: "3", label: "跟团游" },
  { key: "4", label: "自由行" },
  { key: "5", label: "私家团" },
  { key: "6", label: "邮轮" },
  { key: "7", label: "酒店+景点" },
  { key: "8", label: "当地玩乐" },
  { key: "9", label: "主题游" },
  { key: "10", label: "定制游" },
  { key: "11", label: "游学" },
  { key: "12", label: "签证" },
  { key: "13", label: "企业游" },
  { key: "14", label: "高端游" },
  { key: "15", label: "爱玩户外" },
  { key: "16", label: "保险" },
];

export const Header: React.FC = () => {
  return (
    <div className={styles["App-header"]}>
      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          <Typography.Text>让旅游更幸福</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15, display: "inline" }}
            menu={dropDownProps}
            icon={<GlobalOutlined />}
          >
            语言
          </Dropdown.Button>
          <Button.Group className={styles["button-group"]}>
            <Button>注册</Button>
            <Button>登陆</Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles["main-header"]}>
        <img src={logo} alt="" className={styles["App-logo"]} />
        <Typography.Title level={3} className={styles.title}>
          携程旅行
        </Typography.Title>
        <Input.Search
          placeholder="请输入旅游目的地、主题、或关键字"
          className={styles["search-input"]}
        />
      </Layout.Header>
      <Menu mode="horizontal" className={styles["main-menu"]} items={navItems} />
    </div>
  )
}
