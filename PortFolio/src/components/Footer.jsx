import linkdin_logo from '../assets/linkdin.png'; 
import github_logo from '../assets/github.png';
export default function Footer(){
    return (
        <footer className='bg-blue-500 h-full w-full flex items-center'>
            <div className="flex items-center justify-center  w-[30px] h-[20px] mt-4 gap-3 cursor-pointer px-6 py-6">
                <img src={github_logo} alt=""  className="hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"/>
                <img src={linkdin_logo} alt="" className="hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"/>
            </div>
        </footer>
    )
}