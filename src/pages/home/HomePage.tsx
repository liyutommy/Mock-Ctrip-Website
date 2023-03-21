import React, { Component } from "react";
import styles from "./HomePage.module.css";
import {
  Footer,
  Header,
  SideMenu,
  Carousel,
  ProductionCollection,
  BusinessPartners,
} from "../../components";
import { Col, Row, Typography } from "antd";
import { productList1, productList2, productList3 } from "./mockup";
import sideImage1 from "../../assets/images/sider_1.png";
import sideImage2 from "../../assets/images/sider_2.png";
import sideImage3 from "../../assets/images/sider_3.png";

import { withTranslation, WithTranslation } from "react-i18next";

class HomePageComponent extends Component<WithTranslation> {
  render() {
    const { t } = this.props;

    return (
      <>
        <Header />
        {/* 页面内容 content */}
        <div className={styles["page-content"]}>
          <Row style={{ marginTop: 20 }}>
            <Col span={6}>
              <div>
                <SideMenu />
              </div>
            </Col>
            <Col span={18}>
              <div>
                <Carousel />
              </div>
            </Col>
          </Row>

          <ProductionCollection
            title={
              <Typography.Title level={3} type="warning">
                {t("home_page.hot_recommended")}
              </Typography.Title>
            }
            sideImage={sideImage1}
            products={productList1}
          />
          <ProductionCollection
            title={
              <Typography.Title level={3} type="danger">
                {t("home_page.new_arrival")}
              </Typography.Title>
            }
            sideImage={sideImage2}
            products={productList2}
          />
          <ProductionCollection
            title={
              <Typography.Title level={3} type="success">
                {t("home_page.domestic_travel")}
              </Typography.Title>
            }
            sideImage={sideImage3}
            products={productList3}
          />

          <BusinessPartners />
        </div>
        <Footer />
      </>
    );
  }
}

export const HomePage = withTranslation()(HomePageComponent);
