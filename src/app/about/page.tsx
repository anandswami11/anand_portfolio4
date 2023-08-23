import Image from 'next/image'
import aboutstyle from './about.module.css'
export const metadata = {
    title: 'about page',
    description: 'This is about page',
  }
export default function about(){
    return(
        <>
       <div className={aboutstyle.about_row}>
        <div>
        <div className={aboutstyle.about_image}>

        </div>
        <div className={aboutstyle.about_infor}>
       <div className={aboutstyle.web_devo}> I'm Anand Swami and<span className='namecolor'> Web Developer</span></div>
<div className={aboutstyle.about_me}> Hi! My name is<span className='namecolor'>  Anand Swami</span>. I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, 
I have acquired the skills and knowledge necessary to make your project a success.</div>
            </div>
            </div>
        </div> 
        </>
    )
}