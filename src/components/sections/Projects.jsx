function Projects(){
    const frontendSkills = [
        "React",
        "TypeScript",
        "TailWindCSS"
    ];
    
    return(
        <section 
            id="projects"             
            className="min-h-screen flex items-center justify-center py-20"     
        >
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent leading-right">
                    Mes Projets
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_2px_8px_rgba(239,185,48,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2"> Title </h3>
                        <p className="text-gray-400 mb-4"> 
                            BLABLABLABALALALjydvbksbvskbksjbvkdsj
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                        {["qqch","qqch2"].map((tech,index) => 
                                <span 
                                    key={index} 
                                    className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm 
                                     hover:bg-orange-500/20 hover:shadow-[0_2px_8px_rgba(239,185,48,0.1)] transition-all">
                                    {tech}
                                </span>)}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="" className="text-orange-400 hover:text-orange-300 transition-colors my-4"> View Project → </a>
                        </div>
                    </div>
                    
                    
                </div>

            </div>
        </section>
    );
}

export default Projects;