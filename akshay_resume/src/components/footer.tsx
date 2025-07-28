import Image from "next/image";
import Link from "next/link";
import GitHub from '../../Asstes/images/GitHub_Logo.svg'
import faceBook from '../../Asstes/images/facebook-color-svgrepo-com.svg'
import Linkedin from '../../Asstes/images/linkedin-linked-in-svgrepo-com.svg'
import phone from '../../Asstes/images/phone-calling-svgrepo-com.svg'
import email from '../../Asstes/images/email-part-2-svgrepo-com.svg'


export default function Contacts() {
    return (
        <div className="footer" id="footer">
            <span><b><a href="mailto:akkikr494@gmail.com" target="_blank" rel="noopener noreferrer"><Image src={email} alt="Email icon" style={{ width: 'auto', height: '20px', marginRight: '8px' }} /></a> akkikr494@gmail.com </b></span>
            <span><b><a href="https://wa.me/919801295690" target="_blank" rel="noopener noreferrer"><Image src={phone} alt="Phone icon" style={{ width: 'auto', height: '20px', marginRight: '8px' }} /></a> +91-9801295690 </b></span>
            <span><b><a href="https://github.com/akshaykr-98" target="_blank" rel="noopener noreferrer"><Image src={GitHub} alt="" style={{ width: 'auto', height: '20px' }} /></a></b></span>
            <span><b><a href="www.linkedin.com/in/akshay-kumar-9b303517a" target="_blank" rel="noopener noreferrer"><Image src={Linkedin} alt="" style={{ width: 'auto', height: '20px' }} /></a></b></span>
            <span><b><a href="https://www.facebook.com/mrakshaykr/" target="_blank" rel="noopener noreferrer"><Image src={faceBook} alt="" style={{ width: 'auto', height: '20px' }} /></a></b></span>
        </div>
    )
}
