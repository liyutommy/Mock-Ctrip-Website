import React, { useEffect } from "react";
import styles from "./LoginForm.module.css";
import { Button, Checkbox, Form, Input } from "antd";
import { Login } from "../../redux/user/slice";
import { useSelector, useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router";


export const LoginForm: React.FC = () => {
  const loading = useSelector((state) => state.user.loading);
  const jwt = useSelector((state) => state.user.token);
  const error = useSelector((state) => state.user.error);
  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(jwt !== null){
      navigate("/")
    }
  
    return () => {}
  }, [jwt])
  

  const onFinish = (values: any) => {
    console.log("Success:", values);
    dispatch(Login({
      email: values.username,
      password: values.password,
    }))
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={styles["Login-form"]}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
