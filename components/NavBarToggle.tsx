"use client";

import { useState } from "react";

const NavBarToggle: React.FC = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive((prev) => !prev);

    // 메뉴 활성화 상태에 따라 클래스 토글
    const menuElement = document.querySelector(".navbar-menu");
    if (menuElement) {
      if (isMenuActive) {
        menuElement.classList.remove("is-active");
      } else {
        menuElement.classList.add("is-active");
      }
    }
  };

  return (
    <a
      role="button"
      className={`navbar-burger ${isMenuActive ? "is-active" : ""}`}
      aria-label="menu"
      aria-expanded="false"
      onClick={toggleMenu}
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  );
};

export default NavBarToggle;
