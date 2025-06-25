import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import styles from './ContactsIcons.module.css'

const ContactsIcons = () => {
    return (
        <div className={styles.iconsDiv}>
            <a href="https://github.com/Hak0bian" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className={styles.icon} />
            </a>
            <a href="https://www.instagram.com/hak0bian" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className={styles.icon} />
            </a>
            <a href="https://www.linkedin.com/in/garik-hakobyan-3398b6361" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className={styles.icon} />
            </a>
            <a href="https://t.me/hak0bian" target="_blank" rel="noopener noreferrer">
                <TelegramIcon className={styles.icon} />
            </a>
        </div>
    )
}

export default ContactsIcons