import React from "react";
import { PaymentForm, CheckoutCard } from "../../components";
import { MainLayout } from "../../layouts/mainLayout";
import { Row, Col } from "antd";
import { useSelector, useAppDispatch } from "../../redux/hooks";
import { placeOrder } from "../../redux/order/slice";

export const PlaceOrderPage: React.FC = () => {
  const jwt = useSelector((state) => state.user.token) as string;
  const loading = useSelector((state) => state.order.loading);
  const order = useSelector((state) => state.order.currentOrder);
  const dispatch = useAppDispatch();

  return (
    <MainLayout>
      <Row>
        <Col span={12}>
          <PaymentForm />
        </Col>
        <Col span={12}>
          <CheckoutCard
            loading={loading}
            order={order}
            onCheckout={() => {
              dispatch(placeOrder({ jwt, orderId: order.id }));
            }}
          />
        </Col>
      </Row>
    </MainLayout>
  );
};
