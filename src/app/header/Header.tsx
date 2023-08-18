import Link from "next/link"
import Image from "next/image"
import logo  from '../image/logo.png'
import headerstyle from './header.module.css'
export default function Header(){
    return(
        <>
        <div className={headerstyle.nav_link}>
            <Link className={headerstyle.linklogo} href='/'><Image src={logo} width={30} alt="logo imagr"/></Link>
<Link className={headerstyle.linkabout} href="/about">About</Link>
<Link className={headerstyle.linkcontact} href='/contact'>Contact</Link>
<Link className={headerstyle.linkproject} href='/project'>Project</Link>
        </div>
        
        </>
    )
}