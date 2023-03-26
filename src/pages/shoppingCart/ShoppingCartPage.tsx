import React from "react";
import styles from "./ShoppingCartPage.module.css";
import { MainLayout } from "../../layouts/mainLayout";
import { Row, Col, Affix } from "antd";
import { ProductList, PaymentCard } from "../../components";
import { useSelector, useAppDispatch } from "../../redux/hooks";
import { clearShoppingCartItem } from "../../redux/shoppingCart/slice";

export const ShoppingCartPage: React.FC = () => {
  const loading = useSelector((state) => state.shoppingCart.loading);
  const shoppingCartItems = useSelector((state) => state.shoppingCart.items);
  const jwt = useSelector((state) => state.user.token) as string;
  const dispatch = useAppDispatch();

  return (
    <MainLayout>
      <Row>
        {/* 购物车清单 */}
        <Col span={16}>
          <div className={styles["product-list-container"]}>
            <ProductList
              data={shoppingCartItems.map((item) => item.touristRoute)}
            />
          </div>
        </Col>
        {/* 支付卡组件 */}
        <Col span={8}>
          <Affix>
            <div className={styles["payment-card-container"]}>
              <PaymentCard
                loading={loading}
                originalPrice={shoppingCartItems
                  .map((item) => item.originalPrice)
                  .reduce((a, b) => a + b, 0)}
                price={shoppingCartItems
                  .map(
                    (item) =>
                      item.originalPrice *
                      (item.discountPresent ? item.discountPresent : 1)
                  )
                  .reduce((a, b) => a + b, 0)}
                onCheckout={() => {}}
                onShoppingCartClear={() => {
                  dispatch(
                    clearShoppingCartItem({
                      jwt,
                      itemsIds: shoppingCartItems.map((item) => item.id),
                    })
                  );
                }}
              />
            </div>
          </Affix>
        </Col>
      </Row>
    </MainLayout>
  );
};
