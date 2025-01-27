import styles from "./AboutStyles.module.css";

function About() {
  return (
    <section id="about" className={styles.container}>
      <h1 className={styles.sectionTitle}>About Me</h1>
      <p className="info">
        With a solid foundation in Computer Science and a passion for leveraging
        my skills to drive innovation, I aim to make a meaningful impact in the
        tech industry. I am seeking a dynamic position where I can apply my
        expertise, contribute to company success, and embrace new challenges to
        fuel professional growth further.
      </p>
    </section>
  );
}

export default About;
