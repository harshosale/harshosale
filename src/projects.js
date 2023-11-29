import styles from "./styles.module.css";
const Projects = () => {
  const data = [
    {
      img: "https://images.healthshots.com/healthshots/en/uploads/2023/04/26155309/raisins-2-1600x900.jpg",
      content: "SHAM - E-commerce store for raisins.",
      link: "",
    },
    {
      img: "https://geniespreadsheets.com/wp-content/uploads/2023/07/1-5-800x800.png",
      content:
        "Finance tracker - Income and Expense management system to track your cashflows.",
      link: "",
    },
  ];
  return (
    <div className={styles.projects}>
      {data.map((element) => {
        return (
          <div
            className={styles.project}
            onClick={() => window.open(element.link)}
          >
            <img
              className={styles.project_image}
              src={element.img}
              alt="some pic"
            />
            <div className={styles.project_content}>{element.content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
