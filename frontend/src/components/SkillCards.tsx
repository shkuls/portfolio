export default function SkillCards(props : {title : string , img ?: string}) {
  return (
    <div className="bg-[#84CDEB] rounded-[36px] shadow-skillBox w-[15vw] sm:w-[8vw] flex flex-row mt-10 h-10 m-5  hover:shadow-md hover:text-sm ease-in-out duration-300">
      {/* <img className="m-3 h-5" src={props.img}/> */}
      <h1 className="font-bold m-auto text-center  sm:w-32 font-poppins text-[#010101]">{props.title}</h1>
    </div>
  )
}
