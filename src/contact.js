const Contact = () => {
  const CONTACT_OPTIONS = [
    {
      image: "",
      name: "Mobile",
      info: "+91-9130103785",
    },
    {
      image: "",
      name: "Whatsapp",
      info: "+91-9381714974",
      link: "whatsapp://send?text=Hi Harshad, I am&phone=+919381714974",
    },
    {
      image: "",
      name: "Zalo",
      info: "+84-0909908413",
    },
    {
      image: "",
      name: "Email",
      info: "harshad.bhosale1400@gmail.com",
      link: "mailto:harshad.bhosale1400@gmail.com",
    },
    {
      image: "",
      name: "Linkedin",
      info: "@harshad-bhosale-71199a187",
      link: "https://www.linkedin.com/in/harshad-bhosale-71199a187/",
    },
    {
      image: "",
      name: "Github",
      info: "@harshosale",
      link: "https://github.com/harshosale",
    },
  ];

  return (
    <div>
      {CONTACT_OPTIONS.map((o) => (
        <li>
          {o.name} : <span onClick={() => window.open(o.link)}>{o.info}</span>
        </li>
      ))}
    </div>
  );
};

export default Contact;
