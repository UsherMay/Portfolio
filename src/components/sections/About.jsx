import { v4 as uuidv } from 'uuid'
import RevealOnScroll from '../RevealOnScroll';
import EducationSubSection from '../EducationSubSection';
import WorkSubSection from '../WorkSubSection';

function About(){

    const frontendSkills = {
        title: "Frontend",
        listOfSkills:
        [
            "Html",
            "CSS",
            "JavaScript",
            "React",
            "Blazor",
            // "TailWindCSS",
        ]
    };

    const backendSkills = {
        title: "Backend",
        listOfSkills:
        [
            // "PHP",
            "Node.JS",
            ".Net",
            "Three.JS"
        ]
    };

    const gameDevSkills = {
        title: "Développement de jeu",
        listOfSkills:
        [
            "Unity",
            "Cocos",
            "PlayCanvas",
            "Augmented Reality",
            "Virtual Reality"
    ]};

    const databaseSkills = {
        title: "Base de données",
        listOfSkills:
        [
            "SQL",
            "PostgreSQL",
    ]};

    const educationSection = [
        {
            title: "Diplome d'Ingénieur Informatique",
            school: "ENSIIE",
            location: "Evry",
            duration: "2020-2024",
            description: "Ingénieur Informatique généraliste spécialisé en Jeux vidéo et Interaction Numérique"
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
            description: "Développement de jeux vidéo mobiles et HTML5",
            techList:[
                "Unity",
                "Cocos",
                "PlayCanvas",
            ]
        },
        {
            title: "Développeur Backend .Net",
            company: "SenGames / SoloEsport",
            location: "Sénégal",
            duration: "Aoû 2023 - Jan 2024",
            description: "Développement d’une plateforme web dédiée à l’écosystème des compétitions d’esport",
            techList:[
                "ASP .NET Core 6.0",
                "MVC",
                "Entity Framework",
            ]
        },
        {
            title: "Développeur Réalité Augmentée (R&D)",
            company: "Centre d'Innovation d'Évry",
            location: "Évry",
            duration: "Juin - Sept 2022",
            description: "Étude et conception d’un démonstrateur en réalité augmentée pour du contrôle qualité",
            techList:[
                "Augmented Reality",
                "Three.JS", 
                "WebXR", 
                "Node.JS", 
                "Javascript"
            ]
        },
    ];


    return(
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"     
        >
            
                <div className="max-w-3xl mx-auto px-4">
                    <RevealOnScroll>
                    <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent leading-right">
                        À Propos de Moi
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Diplômé en ingénierie informatique
                            de l’ENSIIE, j'ai acquis des
                            compétences en tant que
                            Développeur Unity / C# / C++ / C /
                            RA / RV / .Net / React.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-center text-xl font-bold mb-4">{frontendSkills.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.listOfSkills.map((tech,index) => 
                                    <span 
                                        key={index} 
                                        className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm 
                                        hover:bg-orange-500/20 hover:shadow-[0_2px_8px_rgba(239,185,48,0.2)] transition">
                                        {tech}
                                    </span>)}
                                </div>

                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-center text-xl font-bold mb-4">{backendSkills.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.listOfSkills.map((tech,index) => 
                                    <span 
                                        key={index} 
                                        className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm 
                                        hover:bg-orange-500/20 hover:shadow-[0_2px_8px_rgba(239,185,48,0.2)] transition">
                                        {tech}
                                    </span>)}
                                </div>

                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-center text-xl font-bold mb-4">{databaseSkills.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {databaseSkills.listOfSkills.map((tech,index) => 
                                    <span 
                                        key={index} 
                                        className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm 
                                        hover:bg-orange-500/20 hover:shadow-[0_2px_8px_rgba(239,185,48,0.2)] transition">
                                        {tech}
                                    </span>)}
                                </div>

                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-center text-xl font-bold mb-4">{gameDevSkills.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {gameDevSkills.listOfSkills.map((tech,index) => 
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
                    </RevealOnScroll>
                                    
                    <div className="grid grid-cols-1 md:grid-cols2 gap-6 mt-8">
                        <RevealOnScroll>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl text-center font-bold mb-4"> 🏫 Éducation</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-z">
                                {educationSection.map((education,index) =>
                                <div key={index}>
                                    <li key={education.school}>
                                        <span className='text-orange-400 font-semibold'>{education.title}</span> - {education.school} ({education.duration})
                                    </li>
                                    <p key={education.idFull}>
                                        {education.description}
                                    </p>
                                    
                                    <br/>
                                </div>)}
                                {/* https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key 
                                only the first child needs a key => don't use fragments <></>
                                {educationSection.map((education,index) =>
                                    <EducationSubSection {...education} index={index} key={education.idFull}/>
                                )} */}
                            </ul>
                        </div>
                        </RevealOnScroll>
                        <RevealOnScroll>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl text-center font-bold mb-4"> 💼 Éxperience</h3>
                            <div className="scape-y-4 text-gray-300">
                                {workSection.map((work,index) =>
                                <div key={index}>
                                    <div key={index}>
                                        <li className="font-semibold">
                                            <span className='text-orange-400 font-semibold'>{work.title}</span> chez {work.company} ({work.duration}), {work.location}
                                        </li>
                                        
                                        <p>
                                            {work.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 m-2">
                                            
                                            {work.techList.map((tech,index) => 
                                            <span 
                                                key={index} 
                                                className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm 
                                                hover:bg-orange-500/20 hover:shadow-[0_2px_8px_rgba(239,185,48,0.2)] transition">
                                                {tech}
                                            </span>)}
                                        </div>
                                        

                                    </div>
                                                            
                                    <br/>
                                </div>)}
                            </div>
                        </div>
                        </RevealOnScroll>
                    </div>
                </div>
            
        </section>
    );
}

export default About;