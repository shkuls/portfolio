import Instagram from "../assets/instagram.svg"
import Linkedin from "../assets/linkedin.svg"
import email from "../assets/envelope-regular.svg"
import github from "../assets/github.svg"
import ContactCard from "../components/ContactCard"

const contact : Array<{
  'logo' : string ;
  'link' : string;
  'title' : string ;
}> = [
  {
    'logo': email,
    'link' : "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCHrhTcJLZstBcnmCscSHRdDtHgVRZVcskgcxLRxzBltXTMhjBjQbDWMSNwbqsZKtkpRxjqV" , 
    'title' : "Email",
  },
  {
    'logo': github,
    'link' : "https://github.com/shkuls" , 
    'title' : "Github",
  },
  {
    'logo': Linkedin,
    'link' : "https://www.linkedin.com/in/shlok-kulshreshtha-155981270/" , 
    'title' : "Linkedin",
  },
  {
    'logo': Instagram,
    'link' : "https://www.instagram.com/shlok.kulsh/" , 
    'title' : "Instagram",
  },
]

export default function About() {
  return (
    <div id="contact" className="bg-[#8860D0] h-56">
     <div className="flex justify-around pt-10 ">
        {
          contact.map((cont , index)=>
          <ContactCard key={index} {...cont}/>
          )
        }

     </div>
    </div>
  )
}
