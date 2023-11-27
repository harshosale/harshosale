import styles from "./styles.module.css";
const Projects = () => {
  const data = [
    {
      img: "https://media.licdn.com/dms/image/D4D03AQH0aGV02S7IBA/profile-displayphoto-shrink_800_800/0/1680938017511?e=1706140800&v=beta&t=GkaFd0NviM5C7QqZo4zwdwYdM09kDtJoMfUqxCTYYh8",
      content: "sdcsx",
    },
    {
      img: "https://media.licdn.com/dms/image/D4D03AQH0aGV02S7IBA/profile-displayphoto-shrink_800_800/0/1680938017511?e=1706140800&v=beta&t=GkaFd0NviM5C7QqZo4zwdwYdM09kDtJoMfUqxCTYYh8",
      content: "sdcsx",
    },
  ];
  return (
    <div>
      {data.map((element) => {
        return (
          <div className={styles.project}>
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
