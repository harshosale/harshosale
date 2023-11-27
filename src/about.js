import styles from "./styles.module.css";

const About = () => {
  const data = [
    `I am professinal software developer based out of India. \
    With over 2 years experience in web development. \
    Mostly worked in supply chain industry with a little in fintech space.`,
    `Really love to talk to people, so developed hobby of learning languages. \
    Beyond this politics, economy and science interests me.`,
    `Connect with me to know more.`,
  ];
  return (
    <div className={styles.about}>
      {data.map((element) => (
        <p>{element}</p>
      ))}
    </div>
  );
};

export default About;
