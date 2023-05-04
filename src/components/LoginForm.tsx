import { Button, Form, Input } from "antd";
import React, { Dispatch, FC, useState } from "react";
import { rules } from "../utils/rules";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Login: FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const sumbit = () => {
    dispatch(AuthActionCreators.login(username, password));
  };
  return (
    <Form onFinish={sumbit}>
      {error && <div style={{ color: "red " }}>{error}</div>}
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required("Please input your username")]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required("Please input your password")]}
      >
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
