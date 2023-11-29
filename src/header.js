import styles from "./styles.module.css";

const Header = ({ setNavigation = () => {}, options = [] }) => {
  return (
    <div className={styles.header}>
      <img
        className={styles.header_image}
        src="https://avatars.githubusercontent.com/u/79321559?v=4"
        alt="my pic"
        onClick={() => setNavigation("")}
      />
      <div className={styles.header_content}>
        <div className={styles.header_name} onClick={() => setNavigation("")}>
          Harshad Bhosale
        </div>
        <div className={styles.header_navigations}>
          {options.map((option) => (
            <div
              className={styles.header_navigation}
              onClick={() => setNavigation(option.nav)}
            >
              {option.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
