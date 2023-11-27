import { useState } from "react";
import styles from "./styles.module.css";
import Home from "./home";
import About from "./about";
import Project from "./projects";
import Contact from "./contact";

const Harshosale = () => {
  const options = [
    { name: "", nav: "", component: <Home /> },
    { name: "About Me", nav: "about", component: <About /> },
    { name: "Projects", nav: "projects", component: <Project /> },
    { name: "Connect with me", nav: "contact", component: <Contact /> },
  ];
  const [navigation, setNavigation] = useState("");

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <img
          className={styles.header_image}
          src="https://media.licdn.com/dms/image/D4D03AQH0aGV02S7IBA/profile-displayphoto-shrink_800_800/0/1680938017511?e=1706140800&v=beta&t=GkaFd0NviM5C7QqZo4zwdwYdM09kDtJoMfUqxCTYYh8"
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
      <div className={styles.content}>
        {options.filter((o) => o.nav === navigation)[0].component}
      </div>
      <div className={styles.footer}>Made with &hearts; by harshosale</div>
    </div>
  );
};

export default Harshosale;
