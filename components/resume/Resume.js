import styles from "./resume.module.scss";
import { CVProfile, SkillSectionBtn, ContactInfo, SkillSection } from "./Elements";
import {
  contactInformation,
  familiarSkill,
  languageLists,
  myself,
  refencee,
  skillsInfo,
} from "../../store/data";

export default function Resume() {
  return (
    <main className={styles.mainContent}>
      <div className={styles.leftSection}>
        <div className={styles.leftContent}>
          {/* profile */}
          <CVProfile profile={myself} />

          {/* contact-info */}
          <ContactInfo contactInformation={contactInformation} />

          {/* skill section */}
          <SkillSection skills={skillsInfo} label={"Skills"} />

          <SkillSectionBtn skills={familiarSkill} label={"familiar With"} />

          {/* labguages */}
          <SkillSectionBtn skills={languageLists} label={"languages"} />
        </div>
      </div>
      <div className={styles.rightSection}></div>
    </main>
  );
}
