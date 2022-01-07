import { AiFillGithub, AiFillLinkedin, AiFillFacebook} from 'react-icons/ai'
import { GiTie } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'
import styles from '../styles/Sidebar.module.css'

export const Sidebar = () => {
    return (
        <div>
            <img src="/user2.jpg" alt="user avatar" className={`${styles.img}`} />
            <h3 className={`${styles.name}`} >
                <span className={styles.fname} >Nahid </span>
                Islam
            </h3>
            <p className={` ${styles.title}`} >Web Developer</p>
            
            {/* Resume */}
                <a href="/Nahid.pdf" download="/Nahid.pdf" className={`d-flex align-items-center justify-content-center px-2 py-1 my-2 ${styles.resume} `} >
                    <GiTie className={`${styles.tie}`}/>
                    <span>Download Resume</span>
                </a>
               

            {/* Socials */}
                <div className={`d-flex justify-content-around px-2 py-1 mx-auto my-sm-4 my-3 `}>
                    
                    <a href="https://www.linkedin.com/in/nahid-islam-1aaa6814b">
                        <AiFillLinkedin className={`${styles.socials_icon}`}/>
                    </a>
                    <a href="https://github.com/nahidnstu12">
                        <AiFillGithub className={`${styles.socials_icon}`}/>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100025300822373"  >
                        <AiFillFacebook className={`${styles.socials_icon}`}/>
                    </a>
                </div>

            {/* contacts */}
                <div className={`py-4 my-sm-4 my-3 ${styles.contacts}`}>
                    <div className={`d-flex align-items-center justify-content-center`}>
                        <GoLocation className={`mr-2 ${styles.tie}`}/>
                        <span>Noakhali, Bangladesh</span>
                    </div>
                    <p  className={`my-2`}>nahidaslamxxx3@gmail.com</p>
                    <p  className={`my-2`}>01621876123 / 0183240925</p>
                </div>

            {/* Email button */}
            <button  className={`text-white px-5 py-2 mx-2 my-3 ${styles.email_button}`} onClick={()=> window.open('mailto:nahidaslamxxx3@gmail.com')}>
                Email Me
            </button>
            <button  className={`py-2 px-5 text-white ${styles.theme_button}`}>Change Theme</button>
        </div>
    )
}
