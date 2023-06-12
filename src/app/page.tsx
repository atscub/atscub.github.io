import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

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
    // {
    //     name: 'Email',
    //     icon: faEnvelope,
    //     url: '&#109;a&#105;l&#116;&#111;:&#97;&#98;&#114;&#97;&#104;&#97;&#109;&#116;&#111;&#108;&#101;&#100;&#111;&#57;&#48;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;',
    // }
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
      </div>
    </main>
  )
}
