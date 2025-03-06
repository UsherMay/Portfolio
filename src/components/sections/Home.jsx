function Home(){
    return(
        <section 
            id="home" 
            className="min-h-screen flex items-center justify-center relative"
        >
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent leading-right">
                    Bonjour, je suis Yvon Cocks
                </h1>

                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                Diplômé en ingénierie informatique de l’ENSIIE, 
                j'ai acquis des compétences en tant que Développeur Unity, C#, C++, C, RA, RV, .Net, ReactJS.
                </p>

                <div className="flex justify-center space-x-4">
                <a 
                    href="#projects" 
                    className="bg-orange-500 text-white py-3 -px-6 rounded 
                        font-medium transition relative overflow-hidden 
                        hover:-translate-y-0.5 
                        hover:shadow-[0_0_15px_rgba(239, 185, 48,0.4)]"
                >
                    Voir mes Projets
                </a>
                <a 
                    // href="#projects" 
                    className="border border-orange-500/50 text-orange-500 py-3 -px-6 rounded font-medium transition-all duration-200
                        hover:-translate-y-0.5 
                        hover:shadow-[0_0_15px_rgba(239, 185, 48, 0.2)]
                        hover:bg-orange-500/10"
                >
                    Télecharger mon CV
                </a>
            </div>
            </div>

            
        </section>
    );
}

export default Home;