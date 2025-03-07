import RevealOnScroll from "../RevealOnScroll";

function Home(){
    return(
        <section 
            id="home" 
            className="min-h-screen flex items-center justify-center relative"
        >
            <RevealOnScroll>
                {/* https://stackoverflow.com/questions/74542280/bottom-of-gradient-text-gets-cut-off-tailwindcss 
                <div className="px-10 sm:px-10 md:px-12 ">
                    <div className='relative max-w-6xl mx-auto pt-20 sm:pt-24 lg:pt-32'>
                        <h1 className="h-[8rem] sm:h-[4rem] font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                            <span className="text-center">Testing Image grapes plane page</span></h1>
                    </div>
                </div> */}
                
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent leading-right">
                        Hi, Je suis Yvon Cocks
                    </h1>
                {/*
                <div className="text-center z-10 px-4 sm:px-10 md:px-12">
                    <div className="relative max-w-6xl mx-auto pt-20 sm:pt-24 lg:pt-32">

                        <h1 className="h-[8rem] sm:h-[4rem] text-4xl sm:text-5xl lg:text-6xl tracking-tight md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent leading-right">
                            Hi, I'm Yvon Cocks
                        </h1>
                    </div> */}
                    
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        Je recherche un emploi en tant que
                        développeur Unity / C# / C++ / C / Réalité Augmentée (RA) / Réalité Virtuelle (RV)
                        / .Net / React.
                    </p>

                    <div className="flex justify-center space-x-4">
                    <a 
                        href="#projects" 
                        className="bg-orange-500 text-white py-3 px-6 rounded 
                            font-medium transition relative overflow-hidden 
                            hover:-translate-y-0.5 
                            hover:shadow-[0_0_15px_rgba(239, 185, 48, 0.4)]
                            hover:bg-orange-300"
                    >
                        Mes Projets
                    </a>
                    <a 
                        // href="#projects" 
                        className="border border-orange-500/50 text-orange-500 py-3 px-6 rounded 
                            font-medium transition-all duration-200
                            hover:-translate-y-0.5 
                            hover:shadow-[0_0_15px_rgba(239, 185, 48, 0.2)]
                            hover:bg-orange-500/10"
                    >
                        Mes CVs
                    </a>
                    </div>
                </div>

            </RevealOnScroll>
        </section>
    );
}

export default Home;