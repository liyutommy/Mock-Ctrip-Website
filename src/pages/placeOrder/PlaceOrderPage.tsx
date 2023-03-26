import React from "react";
import { PaymentForm, CheckoutCard } from "../../components";
import { MainLayout } from "../../layouts/mainLayout";
import { Row, Col } from "antd";

export const PlaceOrderPage: React.FC = () => {
  return (
    <MainLayout>
      <Row>
        <Col span={12}>
          <PaymentForm />
        </Col>
        <Col span={12}>
          {/* <CheckoutCard /> */}
        </Col>
      </Row>
    </MainLayout>
  )
};
