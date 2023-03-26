import React from "react";
import {
  Skeleton,
  Switch,
  Card,
  Avatar,
  Button,
  Typography,
  Space,
  Tag,
  Table,
} from "antd";
import { DeleteOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";

interface Item {
  key: number;
  item: string;
  amount: string | number | JSX.Element;
}

const columns: ColumnsType<Item> = [
  {
    key: "item",
    dataIndex: "item",
    title: "项目",
  },
  {
    key: "amount",
    dataIndex: "amount",
    title: "金额",
  },
];

interface PropsType {
  loading: boolean;
  originalPrice: number;
  price: number;
  onCheckout: () => void;
  onShoppingCartClear: () => void;
}

export const PaymentCard: React.FC<PropsType> = ({
  loading,
  originalPrice,
  price,
  onCheckout,
  onShoppingCartClear,
}) => {
  const paymentData: Item[] = [
    {
      key: 1,
      item: "原价",
      amount: <Typography.Text delete>¥ {originalPrice}</Typography.Text>,
    },
    {
      key: 2,
      item: "现价",
      amount: (
        <Typography.Title type="danger" level={2}>
          ¥ {price}
        </Typography.Title>
      ),
    },
  ];
  return (
    <Card
      style={{ width: 300, marginTop: 16 }}
      actions={[
        <Button type="primary" danger onClick={onCheckout} loading={loading}>
          <CheckCircleOutlined />
          下单支付
        </Button>,
        <Button onClick={onShoppingCartClear} loading={loading}>
          <DeleteOutlined />
          清空
        </Button>,
      ]}
    >
      <Skeleton loading={loading} active>
        <Card.Meta
          title={<Typography.Title level={2}>总计</Typography.Title>}
          description={
            <Table
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
