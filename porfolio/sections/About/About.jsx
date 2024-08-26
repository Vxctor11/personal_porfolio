import styles from "./AboutStyles.module.css";

function About() {
  return (
    <section id="about" className={styles.container}>
      <h1 className={styles.sectionTitle}>About Me</h1>
      <p className="info">
        As a recent graduate in Computer Science, I bring a solid background in
        full-stack development and a commitment to delivering high-quality
        solutions. My experience spans across modern web technologies, and I am
        driven by the opportunity to solve complex problems and contribute to
        innovative projects. I am looking for a role where I can apply my
        technical skills, collaborate with talented teams, and make a measurable
        impact on the company’s growth and success.
      </p>
    </section>
  );
}

export default About;
