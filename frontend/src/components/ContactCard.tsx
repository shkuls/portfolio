

type contact = {
    'logo' : string ;
    'link' : string;
    'title': string ;
  }

export default function ContactCard(props : contact) {
  return (
    <div onClick={() =>{
        window.location.href = props.link;
      }} className='bg-grad shadow-contBox rounded-[77px] m-10 flex h-10 w-32 hover:text-white transition-all duration-200 hover:cursor-pointer hover:shadow-md hover:text-sm '>
      <img src={props.logo} className='h-5 m-auto hover:h-6 transition-all'/>
      <a  className='m-auto font-poppins font-semibold '>{props.title}</a>
    </div>
  )
}
 