import React from "react";
import styles from "./App.module.css";
import { Footer, Header, SideMenu, Carousel } from "./components";
import { Col, Row } from "antd";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      {/* 页面内容 content */}
      <div className={styles["page-content"]}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <div style={{ background: "red" }}>
              <SideMenu />
            </div>
          </Col>
          <Col span={18}>
            <div style={{ background: "blue" }}>
              <Carousel />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default App;
