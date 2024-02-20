import Pic1 from '../../assets/3d-brain-with-lightening-removebg-preview.png' 
import 'animate.css';
function Home() {
  return (
    <div className='home'>
        <div className=" container ">
            <div className="row align-items-center justify-content-between  m-0 p-0">
                <div className="col-lg-5 col-12 ">
                    <h2 className='home-tit' > hi , welcome to our website to make MS detection </h2>
                    <div className='d-flex mt-3  justify-content-lg-between justify-content-around '>
                        <button className='btnn btn-home'>make test</button>
                        <button className='btnn btn-home'>about us</button>
                    </div>
                </div>
                <div className="col-lg-4 col-12 d-none d-lg-block animate__animated animate__infinite animate__heartBeat animate__delay-2s">
                    <img src={Pic1} alt="pic" className=' w-75 h-75 pic1'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home