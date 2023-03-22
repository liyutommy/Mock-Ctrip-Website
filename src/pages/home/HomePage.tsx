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
import { Col, Row, Typography, Spin } from "antd";
// import { productList1, productList2, productList3 } from "./mockup";
import sideImage1 from "../../assets/images/sider_1.png";
import sideImage2 from "../../assets/images/sider_2.png";
import sideImage3 from "../../assets/images/sider_3.png";

import { withTranslation, WithTranslation } from "react-i18next";
import axios from "axios";

interface State {
  loading: boolean;
  error: string | null;
  productList: any[];
}

class HomePageComponent extends Component<WithTranslation, State> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      productList: [],
    };
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        "http://123.56.149.216:8080/api/productCollections"
      );
      this.setState({
        loading: false,
        error: null,
        productList: data,
      });
    } catch (error) {
      if (error instanceof Error) {
        this.setState({
          error: error.message,
          loading: false,
        });
      }
    }
  }

  render() {
    const { t } = this.props;
    const { productList, loading, error } = this.state;

    if (loading) {
      return (
        <Spin
          size="large"
          style={{
            marginTop: 200,
            marginBottom: 200,
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
          }}
        />
      );
    }

    if (error) {
      return <div>网站出错：{error}</div>;
    }

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
            products={productList[0].touristRoutes}
          />
          <ProductionCollection
            title={
              <Typography.Title level={3} type="danger">
                {t("home_page.new_arrival")}
              </Typography.Title>
            }
            sideImage={sideImage2}
            products={productList[1].touristRoutes}
          />
          <ProductionCollection
            title={
              <Typography.Title level={3} type="success">
                {t("home_page.domestic_travel")}
              </Typography.Title>
            }
            sideImage={sideImage3}
            products={productList[2].touristRoutes}
          />

          <BusinessPartners />
        </div>
        <Footer />
      </>
    );
  }
}

export const HomePage = withTranslation()(HomePageComponent);
