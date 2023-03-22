import React, { Component } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.jpeg";
import { Button } from "antd";
import { Dropdown, Input, Layout, Menu, Typography } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { withRouter, RouteComponentProps } from "../../helpers/withRouter";
import { RootState } from "../../redux/store";
import { withTranslation, WithTranslation } from "react-i18next";
import {
  addLanguageActionCreator,
  changeLanguageActionCreator,
} from "../../redux/language/languageActions";
import { connect } from "react-redux";
import { Dispatch } from "redux";

const mapStateToProps = (state: RootState) => {
  return {
    language: state.language.language,
    languageList: state.language.languageList,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeLanguage: (code: "zh" | "en") => {
      const action = changeLanguageActionCreator(code);
      dispatch(action);
    },
    addLanguage: (name: string, code: string) => {
      const action = addLanguageActionCreator(name, code);
      dispatch(action);
    },
  };
};

type PropsType = RouteComponentProps & // react-router 路由props类型
  WithTranslation & // i18n props类型
  ReturnType<typeof mapStateToProps> & // redux store 映射类型
  ReturnType<typeof mapDispatchToProps>; // redux dispatch 映射类型

class HeaderComponent extends Component<PropsType> {
  menuClickHandler = (event) => {
    console.log(event);
    if (event.key === "new") {
      // 添加新语言action
      this.props.addLanguage("新语言", "new_lang");
    } else {
      this.props.changeLanguage(event.key);
    }
  };

  render(): React.ReactNode {
    const { navigate, t } = this.props;

    return (
      <div className={styles["App-header"]}>
        <div className={styles["top-header"]}>
          <div className={styles.inner}>
            <Typography.Text>{t("header.slogan")}</Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: 15, display: "inline" }}
              menu={{
                items: [
                  ...this.props.languageList.map((item) => {
                    return { key: item.code, label: item.name };
                  }),
                  { key: "new", label: `${t("header.add_new_language")}` },
                ],
                onClick: this.menuClickHandler,
              }}
              icon={<GlobalOutlined />}
            >
              {this.props.language === "zh" ? "中文" : "English"}
            </Dropdown.Button>
            <Button.Group className={styles["button-group"]}>
              <Button onClick={() => navigate("/register")}>
                {t("header.register")}
              </Button>
              <Button onClick={() => navigate("/login")}>
                {t("header.signin")}
              </Button>
            </Button.Group>
          </div>
        </div>
        <Layout.Header className={styles["main-header"]}>
          <span onClick={() => navigate("/")}>
            <img src={logo} alt="" className={styles["App-logo"]} />
            <Typography.Title level={3} className={styles.title}>
              {t("header.title")}
            </Typography.Title>
          </span>
          <Input.Search
            placeholder="请输入旅游目的地、主题、或关键字"
            className={styles["search-input"]}
          />
        </Layout.Header>
        <Menu
          mode="horizontal"
          className={styles["main-menu"]}
          items={[
            { key: "1", label: `${t("header.home_page")}` },
            { key: "2", label: `${t("header.weekend")}` },
            { key: "3", label: `${t("header.group")}` },
            { key: "4", label: `${t("header.backpack")}` },
            { key: "5", label: `${t("header.private")}` },
            { key: "6", label: `${t("header.cruise")}` },
            { key: "7", label: `${t("header.hotel")}` },
            { key: "8", label: `${t("header.local")}` },
            { key: "9", label: `${t("header.theme")}` },
            { key: "10", label: `${t("header.custom")}` },
            { key: "11", label: `${t("header.study")}` },
            { key: "12", label: `${t("header.visa")}` },
            { key: "13", label: `${t("header.enterprise")}` },
            { key: "14", label: `${t("header.high_end")}` },
            { key: "15", label: `${t("header.outdoor")}` },
            { key: "16", label: `${t("header.insurance")}` },
          ]}
        />
      </div>
    );
  }
}

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(withRouter(HeaderComponent)));
