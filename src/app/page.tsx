import Image from 'next/image'
import homestyle from './home.module.css'
import imagehome from './image/imagehome2.jpg'
export const metadata = {
  title: 'Home page',
  description: 'This is my first next.js project',
}

export default function Home() {
  return (
   
           <>
           <div className={homestyle.home_page}>
{/* <Image src={imagehome} width={1100}  alt='home banner' /> */}
           </div>
          
        

        </> 
  )
}
