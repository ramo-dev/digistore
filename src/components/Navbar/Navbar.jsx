import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import { AlignRightOutlined, CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

    };

    window.addEventListener("resize", handleResize);
    handleResize();

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <Link to="/" className="logo">
          <h1>DigiStore</h1>
        </Link>
        {isMobile && (
          <div className="menu-icon" onClick={handleToggleDrawer}>
            <AlignRightOutlined />
          </div>
        )}
        {!isMobile && (
          <ul
            className={`nav-links nav-block ${isScrolled ? "scrolled" : ""} `}
          >
            <Link to="/" className="btn">
              <li>Home</li>
            </Link>
            <Link to="/about" className="btn">
              <li>About</li>
            </Link>
            <Link to="/register" className="btn">
              <li>Sign Up</li>
            </Link>
            <Link to="/login" className="btn">
              <li>Login</li>
            </Link>
          </ul>
        )}
      </nav>
      <Drawer
        placement="right"
        closable={false}
        onClose={handleToggleDrawer}
        visible={isMobile && showDrawer}
        className="drawer-menu"
      >
        <ul>
          <button className="btn backbtn" onClick={handleToggleDrawer}>
            <CloseOutlined />
          </button>
          <Link to="/" className="btn" onClick={handleToggleDrawer}>
            <li>Home</li>
          </Link>
          <Link to="/about" className="btn" onClick={handleToggleDrawer}>
            <li>About</li>
          </Link>
          <Link to="/register" className="btn" onClick={handleToggleDrawer}>
            <li>Sign Up</li>
          </Link>
          <Link to="/login" className="btn" onClick={handleToggleDrawer}>
            <li>Login</li>
          </Link>
        </ul>
      </Drawer>
    </>
  );
};

export default Navbar;
