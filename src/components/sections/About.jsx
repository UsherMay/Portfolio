import { v4 as uuidv } from 'uuid'
import RevealOnScroll from '../RevealOnScroll';

function About(){

    const frontendSkills = [
        "React",
        "TypeScript",
        "TailWindCSS"
    ];

    const backendSkills = [
        "NodeJS",
        ".Net"
    ];

    const gameDevSkills = [
        "Unity",
        "Cocos",
        "PlayCanvas"
    ];

    const educationSection = [
        {
            title: "Diplome d'Ingénieur Informatique",
            school: "ENSIIE",
            location: "Evry",
            duration: "2020-2024",
            description: "Cours principaux: Developpement JV, RA, RV, Web, Gestion de données"
        },
        {
            title: "Classes Préparatoires aux Grandes Écoles",
            school: "Lycée Jeanne d'Albret",
            location: "Saint-Germain-en-Laye",
            duration: "2018-2020",
            description: "PCSI (Physique, Chimie et Sciences de l'Ingénieur) puis PC"
        },
    ];

    const workSection = [
        {
            title: "Développeur Jeux Mobiles et HTML5",
            company: "Kayfo Games Studio",
            location: "Sénégal",
            duration: "Aoû 2023 - Jan 2024",
            description: "Développement de jeux vidéo mobiles (Unity) et HTML5 (PlayCanvas et Cocos Creator)"
        },
        {
            title: "Développeur Backend .Net",
            company: "SenGames / SoloEsport",
            location: "Sénégal",
            duration: "Aoû 2023 - Jan 2024",
            description: "Développement d’une plateforme web dédiée à l’écosystème des compétitions d’esport (ASP.NET Core 6.0, MVC, Entity Framework)"
        },
    ];


    return(
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"     
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent leading-right">
                        À Propos de Moi
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-center text-xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                            
                                    {frontendSkills.map((tech,index) => 
                                    <span 
                                        key={index} 
                                        className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm 
                                        hover:bg-orange-500/20 hover:shadow-[0_2px_8px_rgba(239,185,48,0.2)] transition">
                                        {tech}
                                    </span>)}
                                
                                </div>

                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-center text-xl font-bold mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech,index) => 
                                    <span 
                                        key={index} 
                                        className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm 
                                        hover:bg-orange-500/20 hover:shadow-[0_2px_8px_rgba(239,185,48,0.2)] transition">
                                        {tech}
                                    </span>)}
                                </div>

                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-center text-xl font-bold mb-4">Game Dev</h3>
                                <div className="flex flex-wrap gap-2">
                                    {/* if you see any diffenrec tell me XD
                                        {gameDevSkills.map((tech, key)=>{
                                        <span key={key}
                                            className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sa 
                                                hover:bg-orange-500/20 hover:shadow-[0_2px_8px_rgba(239, 185, 48, 0.2)]
                                                transition">{tech}</span>
                                    })} */}
                                    {gameDevSkills.map((tech,index) => 
                                    <span 
                                        key={index} 
                                        className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm 
                                        hover:bg-orange-500/20 hover:shadow-[0_2px_8px_rgba(239,185,48,0.2)] transition">
                                        {tech}
                                    </span>)}
                                </div>

                            </div>

                            
                        </div>

                        
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 🏫 Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-z">
                                {/* <li>
                                    <strong>Diplome d'Ingénieur Informatique</strong> - ENSIIE (2020-2024)
                                </li>
                                <li>
                                    Cours principaux: Developpement JV, RA, RV, Web, Gestion de données
                                </li> */}
                                {educationSection.map((education,index) =>
                                <>
                                    <li key={index}>
                                        <strong>{education.title}</strong> - {education.school} ({education.duration})
                                    </li>
                                    <li key={uuidv()}>
                                        {education.description}
                                    </li>
                                    
                                    <br/>
                                </>)}
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 💼 Experience</h3>
                            <div className="scape-y-4 text-gray-300">
                                {/* <div>
                                    <h4 className="font-semibold">
                                        Développeur Jeux Mobiles et HTML5 at Kayfo Game Studio (Aoû 2023 - Jan 2024)
                                        
                                    </h4>
                                    <p>
                                        blablabla.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold">
                                        you know you know
                                        
                                    </h4>
                                    <p>
                                        blablabla.
                                    </p>
                                </div> */}
                                {workSection.map((work,index) =>
                                <>
                                    <div key={uuidv()}>
                                        <h4 key={uuidv()} className="font-semibold">
                                            <strong>{work.title}</strong> chez {work.company} ({work.duration}), {work.location}
                                        </h4>
                                        
                                        <p key={uuidv()}>
                                            {work.description}
                                        </p>
                                    </div>
                                                            
                                    <br/>
                                </>)}
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}

export default About;