import contactstyle from './contact.module.css'
export const metadata = {
    title: 'contact page',
    description: 'This is contact page',
  }
export default function contact(){
    return(
        <div className={contactstyle.contact_box}>
          <div className={contactstyle.box_1}> 
          <div className={contactstyle.box_2}>  
       <h1 className={contactstyle.contact}>CONTACT</h1> 
       <div className={contactstyle.touch}>Get in Touch</div>
<p className={contactstyle.con_text}> 
Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
</p></div></div>
<div className={contactstyle.row_1}>
<div className={contactstyle.box_left}>
  <div className={contactstyle.name}> Name</div>
  <div className={contactstyle.email}>Email</div>
  <div className={contactstyle.message}>Send Message</div>
  <div className={contactstyle.send_message}>Send Message</div>
  </div>
  <div className={contactstyle.box_right}>

  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56300.40957880135!2d75.35209229571097!3d28.12286804180553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3913390583f17b4d%3A0xb717cafeaaf8c602!2sJhunjhunu%2C%20Rajasthan%20333001!5e0!3m2!1sen!2sin!4v1692587682148!5m2!1sen!2sin" width="100%" height="100%" loading="lazy"></iframe>
  </div>
  </div>
        </div>
    )
}