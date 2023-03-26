import React from "react";
import { Skeleton, Card, Button, Typography, Table } from "antd";
import { CheckCircleOutlined, HomeOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";

interface OrderItem {
  key: number;
  item: string;
  amount: string | number | JSX.Element;
}

const columns: ColumnsType<OrderItem> = [
  {
    key: "item",
    dataIndex: "item",
    title: "产品",
  },
  {
    key: "amount",
    dataIndex: "amount",
    title: "价格",
  },
];

interface PropsType {
  loading: boolean;
  order: any;
  onCheckout: () => void;
}

export const CheckoutCard: React.FC<PropsType> = ({
  loading,
  order,
  onCheckout,
}) => {
  const navigate = useNavigate();

  const paymentData: OrderItem[] = order
    ? order.orderItems.map((item, index) => ({
        key: index,
        item: item.touristRoute.title,
        amount: (
          <>
            <Typography.Text delete>¥ {item.originalPrice} </Typography.Text>{" "}
            <Typography.Text type="danger" strong>
              ¥ {item.originalPrice * item.discountPresent}
            </Typography.Text>
          </>
        ),
      }))
    : [];

  return (
    <Card
      style={{ width: 600, marginTop: 50 }}
      actions={[
        order && order.state === "Completed" ? (
          <Button
            type="primary"
            onClick={() => {
              navigate("/");
            }}
            loading={loading}
          >
            <HomeOutlined />
            回到首页
          </Button>
        ) : (
          <Button type="primary" danger onClick={onCheckout} loading={loading}>
            <CheckCircleOutlined />
            支付
          </Button>
        ),
      ]}
    >
      <Skeleton loading={loading} active>
        <Card.Meta
          title={
            <Typography.Title level={2}>
              {order && order.state === "Completed" ? "支付成功" : "总计"}
            </Typography.Title>
          }
          description={
            <Table<OrderItem>
              dataSource={paymentData}
              columns={columns}
              showHeader={false}
              size="small"
              bordered={false}
              pagination={false}
            />
          }
        />
      </Skeleton>
    </Card>
  );
};
