import {navBarInfo} from "../constants/index.js";

function MobileMenu({isMenuOpen, setIsMenuOpen}){

    // const navBarInfo = getNavBarInfoArray();

    return(
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                         transition-all duration-300 ease-in-out
                         ${isMenuOpen ? 
                            "h-screen opacity-100 pointer-events-auto" : 
                            "h-0 opacity-0 pointer-events-none"}
                        `}>

            <button 
                onClick={()=> setIsMenuOpen(false)} 
                className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
                >
                
                &times;
            </button>

            {navBarInfo.map(({title,href},index)=>
                <a  key={index}
                    href={href}
                    onClick={()=>setIsMenuOpen(false)} 
                    className={`text-2xl font-semibold my-4 transform transition-transform duration-300
                        ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                    >
                        <span className="text-gray-300 hover:text-white transition-colors">{title}</span>
                </a>
            )}

        </div>
    );
}

export default MobileMenu;