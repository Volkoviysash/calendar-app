import { Menu, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { FC } from "react";
import { RouteNames } from "../routes";
import { useNavigate } from "react-router-dom";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const auth = true;
  return (
    <Header>
      <Row justify="end">
        {auth ? (
          <>
            <div style={{ color: "white" }}>Volkovich</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => console.log("exit")} key={1}>
                Exit
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item onClick={() => navigate(RouteNames.LOGIN)} key={1}>
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Header>
  );
};

export default Navbar;
