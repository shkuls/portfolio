export default function SkillCards(props : {title : string , img ?: string}) {
  return (
    <div className="bg-[#0095FF] rounded-[36px] shadow-skillBox flex flex-row mt-10 h-10 m-5 hover:shadow-md ease-in-out duration-300">
      {/* <img className="m-3 h-5" src={props.img}/> */}
      <h1 className="font-bold m-auto text-center w-32">{props.title}</h1>
    </div>
  )
}