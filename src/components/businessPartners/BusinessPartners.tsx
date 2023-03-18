import React from "react";
import styles from "./BusinessPartners.module.css";
import { Row, Col, Typography, Divider } from "antd";

import image1 from "../../assets/images/microsoft.png";
import image2 from "../../assets/images/youtube.png";
import image3 from "../../assets/images/instagram.png";
import image4 from "../../assets/images/facebook.png";

const companies = [
  { src: image1, title: "Microsoft" },
  { src: image2, title: "Youtube" },
  { src: image3, title: "Instagram" },
  { src: image4, title: "Facebook" },
];

export const BusinessPartners: React.FC = () => {
  return (
    <div className={styles.content}>
      <Divider orientation="left">
        <Typography.Title level={3}>目的地及景区合作</Typography.Title>
      </Divider>
      <Row>
        {companies.map((item, index) => {
          return (
            <Col span={6} key={"business-partner-" + index}>
              <img
                src={item.src}
                alt="bussiness-partner"
                className={styles["company-img"]}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
