import { Menu, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { Dispatch, FC } from "react";
import { RouteNames } from "../routes";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";
import { useDispatch } from "react-redux";
import { useActions } from "../hooks/useActions";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const dispatch: Dispatch<any> = useDispatch();
  const { logout } = useActions();

  return (
    <Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>{user.username}</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={logout} key={1}>
                Exit
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <div style={{ color: "white" }}>Hi!</div>
              <Menu.Item onClick={() => navigate(RouteNames.LOGIN)} key={1}>
                Login
              </Menu.Item>
            </Menu>
          </>
        )}
      </Row>
    </Header>
  );
};

export default Navbar;
