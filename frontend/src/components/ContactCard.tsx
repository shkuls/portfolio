

type contact = {
    'logo' : string ;
    'link' : string;
    'title': string ;
  }

export default function ContactCard(props : contact) {
  return (
    <div onClick={() =>{
        window.location.href = props.link;
      }} className='m-auto  my-[5vh] w-[20vw]  bg-grad shadow-contBox rounded-[77px] flex flex-col  p-3 sm:w-32 hover:text-white transition-all duration-200 hover:cursor-pointer hover:shadow-md hover:text-sm '>
      <img src={props.logo} className='sm:h-5 h-3 m-auto  hover:h-6 transition-all'/>
      <a  className='font-poppins text-xs sm:font-semibold  mx-auto'>{props.title}</a>
    </div>
  )
}
 