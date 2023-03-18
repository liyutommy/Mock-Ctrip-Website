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

export class HomePage extends Component {
  render() {
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
                爆款推荐
              </Typography.Title>
            }
            sideImage={sideImage1}
            products={productList1}
          />
          <ProductionCollection
            title={
              <Typography.Title level={3} type="danger">
                新品上市
              </Typography.Title>
            }
            sideImage={sideImage2}
            products={productList2}
          />
          <ProductionCollection
            title={
              <Typography.Title level={3} type="success">
                国内游推荐
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
