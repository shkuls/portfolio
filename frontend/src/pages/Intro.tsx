import Topbar from "../components/Topbar"
import Spline from '@splinetool/react-spline';
export default function Intro() {
  return (<>

    <Topbar/>
    <div className="bg-[#FF5760] flex flex-col sm:flex-row" id="home">
        <div className="m-auto min-w-80 w-[70vw] flex-col ml-10">
            <p>
                Hi there!
            </p>
            <p className="text-5xl font-bold">
                I'm Shlok.
            </p>
            <p className="text-2xl">
                I make applications for the web.
            </p>


        </div>
      <Spline className="" scene="https://prod.spline.design/DCNLvIodaiM-1hq9/scene.splinecode" />
    </div>

  
  </>
  )
}
