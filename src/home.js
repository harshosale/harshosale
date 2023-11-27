import styles from "./styles.module.css";

const Home = () => {
  const data = "Hello, I'm Harshad.";
  return <div className={styles.home}>{data}</div>;
};

export default Home;
