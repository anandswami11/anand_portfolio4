import Image from 'next/image'
import homestyle from './home.module.css'
import imagehome1 from './image/imagehome1.jpg'
export const metadata = {
  title: 'Home page',
  description: 'This is my first next.js project',
}

export default function Home() {
  return (
   
           <>
           <div className={homestyle.home_page}>
{/* <Image src={imagehome} width={1100}  alt='home banner' /> */}
{/* <div className={homestyle.imagehome1}> */}
<p className={homestyle.home_box2}>
<div className={homestyle.imagehome1}><Image src={imagehome1} alt='home image' /> </div>
<p className={homestyle.home_text3}>ANAND<span className={homestyle.namecolor}> SWAMI</span></p>
<p className={homestyle.home_text4}>I'm a<span className={homestyle.namecolor}> Web Developer</span></p>
</p> 

</div>
           
           
           
           
           
           
           {/* </div> */}
          
        

        </> 
  )
}
