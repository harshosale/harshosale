import styles from "./styles.module.css";
import header_image from "./header_image.jpeg";
import { useState } from "react";

const Header = ({ setNavigation = () => {}, options = [] }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleBarsClick = (val = false) => {
    setShowMenu((prev) => val && !prev);
  };

  return (
    <div className={styles.header}>
      <img
        className={styles.header_image}
        src={header_image}
        alt="my pic"
        onClick={() => setNavigation("")}
      />
      <div className={styles.header_content}>
        <div className={styles.header_name} onClick={() => setNavigation("")}>
          Harshad Bhosale
        </div>
        <div
          className={
            showMenu ? styles.header_navigation_menu : styles.header_navigations
          }
        >
          {options.map((option) => (
            <div
              className={styles.header_navigation}
              onClick={() => {
                handleBarsClick();
                setNavigation(option.nav);
              }}
            >
              {option.name}
            </div>
          ))}
        </div>
        <div
          className={
            showMenu
              ? styles.header_navigation_cross
              : styles.header_navigation_bars
          }
          onClick={handleBarsClick}
        >
          {[...Array(3).keys()].map(() => {
            return (
              <div className={showMenu ? styles.cross : styles.bars}></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
