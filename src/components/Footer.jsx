import S from './style.module.scss'
import Linkedin from '../assets/logoLinkedin.png'
import Facebook from '../assets/logoFacebook.png'
import Instagram from '../assets/logoInstagram.png'

export default function Footer() {
  return (
    <footer>
         <nav className={S.navFooter}>
                <ul>
                    <li><a href=""><img src={Linkedin} alt="Logo do Linkedin" /></a></li>
                    <li><a href=""><img src={Facebook} alt="Logo do Linkedin" /></a></li>
                    <li><a href=""><img src={Instagram} alt="Logo do Linkedin" /></a></li>
                </ul>
            </nav>
    </footer>
  )
}