import Image from "next/image";
import Link from "next/link";
import GitHub from '../../Asstes/images/GitHub_Logo.svg'
import faceBook from '../../Asstes/images/facebook-color-svgrepo-com.svg'
import Linkedin from '../../Asstes/images/linkedin-linked-in-svgrepo-com.svg'
import phone from '../../Asstes/images/phone-calling-svgrepo-com.svg'
import email from '../../Asstes/images/email-part-2-svgrepo-com.svg'


export default function Contacts(){
    return(
        <div className="footer" id="footer">
            <p><Image src={email} alt="" height={200} width={20}/> <span><b>akkikr494@gmail.com</b></span></p>
            <p><Image src={phone} alt="" height={200} width={20}/> <span><b>+91-9801295690</b></span></p>
            <span><b><a href="https://github.com/akshaykr-98" target="_blank" rel="noopener noreferrer"><Image src={GitHub} alt="" height={200} width={20}/></a></b></span>
            <span><b><a href="www.linkedin.com/in/akshay-kumar-9b303517a" target="_blank" rel="noopener noreferrer"><Image src={Linkedin} alt="" height={200} width={20}/></a></b></span>
            <span><b><a href="https://www.facebook.com/mrakshaykr/" target="_blank" rel="noopener noreferrer"><Image src={faceBook} alt="" height={200} width={20}/></a></b></span>
        </div>
    )
}
