import { Menu, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { Dispatch, FC } from "react";
import { RouteNames } from "../routes";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";
import { useDispatch } from "react-redux";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { isAuth } = useTypedSelector((state) => state.auth);
  const dispatch: Dispatch<any> = useDispatch();

  return (
    <Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>Volkovich</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item
                onClick={() => dispatch(AuthActionCreators.logout())}
                key={1}
              >
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
