import styles from "./resume.module.scss";
import { FiMail, FiPhone } from "react-icons/fi";
import Link from "next/link";


export const CVProfile = ({ profile }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.imgbox}>
        <img src={profile.profileImage} alt="profile" />
      </div>
      <h2 className={styles.name}>{profile.profileName}</h2>
      <p className={styles.career}>{profile.desgignation}</p>
      <p className={styles.aboutme}>{profile.aboutMe}</p>
    </div>
  );
};

export const ContactInfo = ({ contactInformation }) => {
    const info = contactInformation.filter(item => item.priority)
    console.log(info)
  return (
    <div className={styles.contactInfo}>
      <h3 className={styles.mainTitle}>Contact Info</h3>
      <ul>
        {info.map((item) => (
          <Link href={item.url} key={item.id}>
            <a target="_blank">
              <li>
                {item.icon}
                {item.label}
              </li>
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export const SkillSection = ({ skills, label }) => {
  return (
    <div className={styles.skillsSection}>
      <h3 className={styles.mainTitle}>{label}</h3>
      <ul>
        {skills.map((item) => (
          <li key={item.title}>
            <p className={styles.skillTitle}>{item.title}</p>
            <div className={styles.progressBar}>
              <div
                className={`${styles.progress}`}
                style={{ width: item.progress }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const SkillSectionBtn = ({ skills, label }) => {
  return (
    <div className={styles.skillsSectionBtn}>
      <h3 className={styles.mainTitle}>{label}</h3>
      <ul>
        {skills.map((item) => (
          <li key={item.title}>
            <p className={styles.skillTitleBtn}>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const ReferenceSection = ({ refencee }) => {
  return (
    <div className={styles.referencesSection}>
      <h3 className={styles.mainTitle}>References</h3>
      {refencee.map((item) => (
        <div className={styles.referee} key={item.id}>
          <h6 className={styles.subTitle}>{item.name}</h6>
          <p className={styles.subPara}>{item.desgignation}</p>
          <ul>
            <li>
              <FiPhone />
              {item.phone}
            </li>
            <li>
              <FiMail />
              {item.email}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};
