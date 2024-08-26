import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark.svg";
import SkillsList from "../../common/SkillList";

function skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill="HTML" />
        <SkillsList src={checkMarkIcon} skill="CSS" />
        <SkillsList src={checkMarkIcon} skill="JavaScript" />
      </div>
      <hr />

      <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill="React" />
        <SkillsList src={checkMarkIcon} skill="NodeJS" />
        <SkillsList src={checkMarkIcon} skill="Express" />
      </div>
      <hr />

      <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill="Git" />
        <SkillsList src={checkMarkIcon} skill="MongoDB" />
        <SkillsList src={checkMarkIcon} skill="Bootstrap" />
      </div>
    </section>
  );
}

export default skills;
