// export const metadata = {
//     title: 'About page',
//     description: 'This is my first next.js project',
// }
import footerstyle from './footer.module.css'

export default function Footer(){
    return(
        <>
        <div className={footerstyle.footer_row}>
            <p className={footerstyle.build}>Build in next.js</p>
        </div>
        </>
    )
}