import { useEffect } from "react";
import { getNavBarInfoArray } from "../utils";

function NavBar({isMenuOpen, setIsMenuOpen}){

    const navBarInfo = getNavBarInfoArray();
    
    useEffect(()=>{
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
    }, [isMenuOpen]);

    return(
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className=" max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white"> 
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent leading-right">Portfolio</span> 
                    </a>

                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                        onClick={() => setIsMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navBarInfo.map(({title, href},index)=>
                            <a key={index} href={href} className="text-gray-300 hover:text-white transition-colors">{title}</a>

                        )}

                    </div>
                </div>

            </div>
        </nav>
    );
}

export default NavBar;