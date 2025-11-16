import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faIdCard } from '@fortawesome/free-regular-svg-icons';
import { EmailLink } from './components/EmailLink';

const email: string = "abrahamtoledo90@gmail.com"
const social = [
    {
        name: 'Github',
        icon: faGithub,
        url: 'https://www.github.com/atscub',
    },
    {
        name: 'LinkedIn',
        icon: faLinkedin,
        url: 'https://www.linkedin.com/in/abraham-toledo',
    },
    {
        name: 'StackOverflow',
        icon: faStackOverflow,
        url: 'https://stackoverflow.com/users/6009518/abraham-toledo',
    },
    {
        name: 'View my CV',
        icon: faIdCard,
        url: '/headless-cv',
    },
]

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Abraham Toledo</h1>
      <p>Website under construction</p>
  
      <div className={styles.socialLinks}>
        {social.map(({icon, url, name}) => (
            <a key={name} className='social-link' href={url} target='__blank' >
                <FontAwesomeIcon
                  icon={icon}
                  color='#545454'
                  size='2x'
                  title={name} />
            </a>
        ))}
        <EmailLink email={btoa(email)}/>
      </div>
    </main>
  )
}


