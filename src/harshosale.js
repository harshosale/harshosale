import { useState } from "react";
import styles from "./styles.module.css";
import Home from "./home";
import About from "./about";
import Project from "./projects";
import Contact from "./contact";
import Header from "./header";
import Footer from "./footer";

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
      <Header options={options} setNavigation={setNavigation} />
      <div className={styles.content}>
        {options.filter((o) => o.nav === navigation)[0].component}
      </div>
      <Footer />
    </div>
  );
};

export default Harshosale;
