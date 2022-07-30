import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Menu, Typography } from "antd";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { icons } from "antd/lib/image/PreviewGroup";
/* import icon from "../images/cryptocurrency.png"; */

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items = [
    getItem(
      <a href="/" rel="noopener noreferrer">
        Home
      </a>,
      "link1",
      <HomeOutlined />
    ),
    getItem(
      <a href="/cryptocurrencies" rel="noopener noreferrer">
        Cryptocurrencies
      </a>,
      "link2",
      <FundOutlined />
    ),
    getItem(
      <a href="/exchanges" rel="noopener noreferrer">
        Exchanges
      </a>,
      "link3",
      <MoneyCollectOutlined />
    ),
    getItem(
      <a href="/news" rel="noopener noreferrer">
        News
      </a>,
      "link4",
      <BulbOutlined />
    ),
  ];

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className="nav-container">
      {/*  <Avatar src={icon} size="large" /> */}
      <Typography.Title level={2} className="logo">
        <Link to="/">CryptoNS</Link>
      </Typography.Title>
      <Button
        className="menu-control-container"
        onClick={() => setActiveMenu(!activeMenu)}
      >
        <MenuOutlined />
      </Button>
      {activeMenu && (
        <Menu
          theme="dark"
          style={{
            width: 300,
          }}
          defaultSelectedKeys={["1"]}
          items={items}
        />
      )}
    </div>
  );
}

export default Navbar;
