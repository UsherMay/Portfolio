export const navBarInfo = [
    {
        title:"Accueil",
        href:"#home",
    },
    {
        title:"À propos de moi",
        href:"#about",
    },
    {
        title:"Projets",
        href:"#projects",
    },
    {
        title:"CV",
        href:"#resume",
    },
    {
        title:"Contacts",
        href:"#contact",
    }
];

export const resumeJV={
    title:'CV "Développeur Jeux Vidéo"',
    href:"/Portfolio/CV_Yvon_COCKS_JV.pdf",
    download:"CV_Yvon_COCKS_JV",
};

export const resumeWEB =
{
    title:'CV "Développeur Web"',
    href:"/Portfolio/CV_Yvon_COCKS_WEB.pdf",
    download:"CV_Yvon_COCKS_WEB",
};

export const frontendSkills = {
    title: "Frontend",
    listOfSkills:
        [
            "Html",
            "CSS",
            "JavaScript",
            "React",
            "Razor",
            // "Boostrap",
            // "Blazor",
            "TailWindCSS",
        ]
};

export const backendSkills = {
    title: "Backend",
    listOfSkills:
        [
            // "PHP",
            "Node.JS",
            ".Net",
            "Three.JS",
            "Express",
        ]
};

export const gameDevSkills = {
    title: "Développement de jeu",
    listOfSkills:
        [
            "Unity",
            "Cocos",
            "PlayCanvas",
            "Augmented Reality",
            "Virtual Reality"
        ]};

export const databaseSkills = {
    title: "Base de données",
    listOfSkills:
        [
            "SQL",
            "PostgreSQL",
        ]};

export const educationSection = [
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

export const workSection = [
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

export  const projectsList = [
    {
        title: "Video Game API",
        description: "Une API .Net local et un site Web local qui l'utilise",
        personal: true,
        techList: [
            ".Net 9.0",
            "EntityFramework",
            "REST API CRUD",
            "Paging",
            "Authentification",
            "Authorization"
        ],
        href :"https://github.com/UsherMay/VideoGameApi"
    },{
        title: "MERN-ThinkBoard",
        description: "Une Application Fullstack construite avec la stack MERN (MongoDB, Express, React, Node)",
        personal: true,
        techList: [
            "React",
            "TailwindCSS",
            "Node.JS",
            "MongoDB",
            "Express",
            "Redis",
            "REST API CRUD",
            "Render.com"
        ],
        href :"https://mern-thinkboard-d3ci.onrender.com/"
    },
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
];

export const aboutMe = "Diplômé en ingénierie informatique de l’ENSIIE, " +
    "j'ai acquis des en tant que " +
    "Développeur Unity / C# / C++ / C / RA / RV / .Net / React.";

