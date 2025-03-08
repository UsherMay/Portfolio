import RevealOnScroll from "../RevealOnScroll";

function Projects(){
    const frontendSkills = [
        "React",
        "TypeScript",
        "TailWindCSS"
    ];

    const projectsList = [
        {
            title: "Portfolio",
            description: "Un Portfolio simpliste pour montrer mes compétences",
            personal: true,
            techList: [
                "React",
                "TailwindCSS",
                "Node.JS",
            ],
            href :""
        },
        {
            title: "Détective Syra : Objets cachés",
            description: "Développeur de mini jeux avec Kayfo Game Studio",
            personal: false,
            techList: [
                "Unity",
                "C#"
            ],
            href :"https://play.google.com/store/apps/details?id=games.Kayfo.DetectiveSyra&hl=fr"
        },
        // { // Can't find link to the game
        //     title: "Teul Master",
        //     description: "Jeux de jongle en HTML5 pour la plateforme de jeux en ligne Kayfo Play",
        //     personal: false,
        //     techList: [
        //         "PlayCanvas",
        //         "JavaScript"
        //     ],
        //     href :"https://www.kayfo.games"
        // },
        {
            title: "Fruit Spin",
            description: "Jeux d'arcade en HTML5 pour la plateforme de jeux en ligne Kayfo Play",
            personal: false,
            techList: [
                "Cocos",
                "TypeScript"
            ],
            href :"https://www.kayfo.games/game/fruit-spin"
        },
        {
            title: "Rhythm Shapes : Projet de Fin d'Études",
            description: "Jeu de rythme qui génère des niveaux par analyse des musiques du joueur",
            personal: true,
            techList: [
                "Unity",
                "C#",
                "PC-Windows"
            ],
            href :"https://ushermay.itch.io/rhythm-shapes"
        },
        {
            title: "Neon Dash",
            description: "Un jeu de course en ligne droite où vous devez esquiver les obstacles ou changer de couleur pour les franchir",
            personal: true,
            techList: [
                "Unity",
                "C#",
                "WebGl",
                "PC-Windows"
            ],
            href :"https://thearias09.itch.io/neon-dash"
        },
        {
            title: "Build & Destroy : Hostile Cooperation",
            description: "Jeu pour Global Game Jam 2022 sur le Thème de ''La Dualité''",
            personal: true,
            techList: [
                "Unity",
                "C#",
                "PC-Windows"
            ],
            href :"https://thearias09.itch.io/bad"
        },
        {
            title: "Surface",
            description: "Un jeu d'exploration en 2D. Aidez « Ploup » le calamar à atteindre la surface !",
            personal: true,
            techList: [
                "Unity",
                "C#",
                "PC-Windows"
            ],
            href :"https://thearias09.itch.io/surface"
        },
    ]
    
    return(
        <section 
            id="projects"             
            className="min-h-screen flex items-center justify-center py-20"     
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent leading-right">
                        Mes Projets
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        
                        {/* <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_2px_8px_rgba(239,185,48,0.2)] transition">
                            <h3 className="text-2xl md:text-xl font-bold mb-2"> Title </h3>
                            <p className="text-sm md:text-base text-gray-400 mb-4 "> 
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
                            
                        </div> */}
                        {projectsList.map((project,index)=>
                            
                                <div key={index} className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_2px_8px_rgba(239,185,48,0.2)] transition">
                                    <h3 className="text-2xl md:text-xl font-bold mb-2"> {project.title} </h3>
                                    <p className="text-sm md:text-base text-gray-400 mb-4 "> 
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span 
                                            className={`${ project.personal ? "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(35,71,229,0.2)]" : "bg-green-500/10 text-green-500 hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(25,239,25,0.1)]"} py-1 px-3 rounded-full text-sm 
                                              transition-all`}>
                                            { project.personal ? "Projet Personel" : "Projet Professionel"}
                                        </span> 
                                        {project.techList.map((tech,index) => 
                                            <span 
                                                key={index} 
                                                className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm 
                                                hover:bg-orange-500/20 hover:shadow-[0_2px_8px_rgba(239,185,48,0.1)] transition-all">
                                                {tech}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex justify-around items-center">
                                        <a href={project.href} className="text-orange-400 hover:text-orange-300 transition-colors my-4"> Voir le Projet → </a>
                                    </div>
                                    
                                </div>
                            
                        )}
                        
                        
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
}

export default Projects;